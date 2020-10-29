# Cross Site Scripting (XSS)

## Found on:
```
<ip>/?page=upload
```

## How to exploit:

The nmap tool informed of a possible Cross Site Request Forgeries (CSRF) vulnribility on this page.

What we found was a Cross Site Scripting Vunribility.

There is a hidden input whose value is the max file size that you can upload. This should be stored on the backend. The Form uses POST and accepts multipart/form-data types.

This is insecure as I can upload any file to this site.

### Run this command, replacing the 0.0.0.0 with the webapp IP.
```bash
curl -X POST -H 'Content-Type: multipart/form-data' -F 'Upload=send' -F 'uploaded=@XSS.js;type=image/jpeg' "http://0.0.0.0/?page=upload#" | grep flag
```

## A brief explination of Cross Site Scripting:

Cross Site Scripting (XSS) allows clients to inject scripts into a request and have the server return the script to the client in the response. This occurs because the application is taking untrusted data (in this example, from the client) and reusing it without performing any validation or sanitisation.

If the injected script is returned immediately this is known as reflected XSS. If the injected script is stored by the server and returned to any client visiting the affected page, then this is known as persistent XSS (also stored XSS).

In this instance it is possible to insert a fuction directly into HTML element content.

## How to protect against:

To remedy XSS vulnerabilities, it is important to never use untrusted or unfiltered data within the code of a HTML page.

Untrusted data can originate not only form the client but potentially a third party or previously uploaded file etc.

Always use strict types when uploading files & check file type on the front- and backend.

## Resources:
* <https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html>
* <http://projects.webappsec.org/w/page/13246920/Cross%20Site%20Scripting>