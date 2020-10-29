# Cookie Theft / Session Hijacking
One of the first thing I noticed inspecting the site was the presence of a cookie with strange values.  

## How to exploit
The cookie has a md5 value stored. Hash cracking it gives you the value "false". Taking the md5 hash for true and replacing it in the cookie gives you the flag.

md5 for "true": b326b5062b2f0e69046810717534cb09  

[MD5 decryption utility](https://hashtoolkit.com/decrypt-md5-hash)

This would have escalated my privaledges to that of administrator.

## Vulnerability

HTTP by itself is a stateless protocol. Therefore the server is unable to determine which requests are performed by which client, and which clients are authenticated or unauthenticated.

When one visits a website, the remote server may leave an HTTP cookie on one's computer, where they are often used to authenticate identity upon returning to the website.

The cookie is often used like a ticket to identify a particular event or transaction; in this case to identify whether a user is an admin.

By using HTTP Cookies to store the 'I_am_admin' cookie in the browser on the client side, the born_to_sec website is vulnerability to the cookie theft. An attacker can impersonate an admin user by modifying the cookie value.

## How to protect against

Do not leave sensitive data in cookies or expose it to the front end. Use session variables when you need to.  


### Alternatives to Cookies

* JSON Web Tokens A JSON Web Token (JWT) is a self-contained packet of information that can be used to store user identity and authenticity information. This allows them to be used in place of session cookies. Unlike cookies, which are automatically attached to each HTTP request by the browser, JWTs must be explicitly attached to each HTTP request by the web application.

* HTTP authentication The HTTP protocol includes the basic access authentication and the digest access authentication protocols, which allow access to a web page only when the user has provided the correct username and password. If the server requires such credentials for granting access to a web page, the browser requests them from the user and, once obtained, the browser stores and sends them in every subsequent page request. This information can be used to track the user.

## Resources and Futher reading
* Resources:
    * <https://en.wikipedia.org/wiki/Session_hijacking>
    * <https://resources.infosecinstitute.com/risk-associated-cookies/>
    * <https://owasp.org/www-community/HttpOnly>
    * <https://embracethered.com/blog/posts/passthecookie/>

This is Cookie theft that causes a form of Access control vulnerabilities and privilege escalation.  
* Further reading:
    * <https://portswigger.net/web-security/access-control>