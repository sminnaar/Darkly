# Path Traversal

Looking back at the nmap output, there are a few directories that can be accessed that an end user should not be able to.

This gives an indication that the routing is not secure. Could I get access to the system files of the server?

Trying to do path traversal by appending "../" to the home page does not work.

What about appending it to "(host IP)/?page=" ?

## How to exploit:

Start by appending "../" to the url above. An alert with the messasge "Wtf ?" is triggered.

Going a few layers deeper we can get acces to files that should be secure.

Continuing the path traversal leads us here:
```bash
http://10.203.68.35/?page=../../../../../../../etc/passwd
```

When navigated to it produces the flag:
```bash
Congratulaton!! The flag is : b12c4b2cb8094750ae121a676269aa9e2872d07c06e429d25a63196ec1c8c1d0 
```

## A brief explination of Path Traversal:

Path traversal, also called directory traversal, is a vulnerability that allows attackers to break out of a web server’s root directory and access other locations in the server's file system.

A bug in the web server software may allow the web server process to access files outside the web document root. If a web application also uses file names taken from user inputs without proper input validation, this could open up a path traversal vulnerability.

## How to protect against:

Path traversal attacks rely on two vulnerable elements: the web application code and the web server configuration. By taking care to avoid vulnerabilities in both areas, you can mitigate the majority of such attacks.

To mitigate the vulnerability on the web server side, ensure you are using up-to-date web server software. The web server process should also run with the minimum necessary privileges and only have access to directories that the website or application actually needs. For Linux/UNIX systems, you may want to consider running the web server in a chroot jail to contain any path traversal attacks that do succeed.

Modern applications generally avoid this by using URL mapping to separate the URLs from the underlying files. In fact, if you use a CMS or web development framework, this is often the default approach. A related solution is to store files in a central database, not directly in the web server file system, and define your own resource names used to access them.

## Resources:
* <https://owasp.org/www-community/attacks/Path_Traversal>
* <https://portswigger.net/web-security/file-path-traversal>
* <https://www.netsparker.com/blog/web-security/directory-path-traversal-attacks/0i>