# Brute force

A brute force attack is a trail and error method to guess the login info of a web app. 

## How to exploit

Run the python script in this folder, replacing the IP in the file with the IP of the webapp to be tested.

```bash
python3 brute.py
```

It tests all the passwords in the passwords.txt file and "admin" as the username to try ang get access to the web app. It is a simple method that has a high success rate.

The flag is returned in the response from the server, it will be printed in the terminal along with the password that produced the flag.

```bash
<center><h2 style="margin-top:50px;">The flag is : b3a6e43ddf8b4bbb4125e5e7d23040433827759d4de1c04ea63907479a80a6b2 </h2><br/><img src="images/win.png" alt="" width=200px height=200px></center>                         </div>
Tested:shadow
```

We have the flag and we know the username and password for the admin.

## How to protect against

* Use good encryption. More comlpex encryption and longer passwords take more time to guess.
* Use [Salt](https://en.wikipedia.org/wiki/Salt_(cryptography)) to make your hashed passwords harder to guess.
* Use [Multi-factor](https://en.wikipedia.org/wiki/Multi-factor_authentication) authentication
* Use timed delays between attempts or limit the number of requests for a specific IP or user. This increases the time it takes for a brute force attack to succeed.
* Using longer or more secure usernames for admins so attackers need to brute force both fields.

## Resources:
* <https://phoenixnap.com/kb/prevent-brute-force-attacks>
* <https://www.imperva.com/learn/application-security/brute-force-attack/>
* <https://www.kaspersky.com/resource-center/definitions/brute-force-attack>