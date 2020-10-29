# Cross Site Scripting (XSS)

## Found on:
```
<ip>/?page=feedback
```

## How to exploit:

The nmap tool informed of a possible Cross Site Request Forgeries (CSRF) vulnribility on this page.

What we found was a Cross Site Scripting Vunribility.

When you enter a js fuction like "alert" in the name field of this page it runs that function on the server side.

```bash
alert
```

## A brief explination of Cross Site Scripting:

Cross Site Scripting (XSS) allows clients to inject scripts into a request and have the server return the script to the client in the response. This occurs because the application is taking untrusted data (in this example, from the client) and reusing it without performing any validation or sanitisation.

If the injected script is returned immediately this is known as reflected XSS. If the injected script is stored by the server and returned to any client visiting the affected page, then this is known as persistent XSS (also stored XSS).

In this instance it is possible to insert a fuction directly into HTML element content.

## How to protect against:

To remedy XSS vulnerabilities, it is important to never use untrusted or unfiltered data within the code of a HTML page.

Untrusted data can originate not only form the client but potentially a third party or previously uploaded file etc.

Filtering of untrusted data typically involves converting special characters to their HTML entity encoded counterparts (however, other methods do exist, see references). These special characters include ( &, <, ", ', / )

Although it is possible to filter untrusted input, there are five locations within an HTML page where untrusted input (even if it has been filtered) should never be placed:

* Directly in a script.
* Inside an HTML comment.
* In an attribute name.
* In a tag name.
* Directly in CSS.
* Each of these locations have their own form of escaping and filtering.

## Resources:
* <https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html>
* <http://projects.webappsec.org/w/page/13246920/Cross%20Site%20Scripting>