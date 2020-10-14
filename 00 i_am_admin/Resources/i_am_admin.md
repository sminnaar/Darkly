# Cookie

## How
The cookie has a md5 value stored. Decrypting it gives "false". Taking the md5 hash for true and replacing it gives you the flag.

md5 true: b326b5062b2f0e69046810717534cb09

## How to protect against

Do not leave sensitive data in cookies or expose it to the front end. Use session variables when you need to.