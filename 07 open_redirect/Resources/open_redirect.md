# Open Redirect

## How to exploit:

On the home page, scroll all the way down and inspect the social media links.

```bash
<a href="index.php?page=redirect&amp;site=facebook" class="icon fa-facebook"></a>
```

This gives us an indication that "site=facebook" is a server side variable. It should be a static url and not be resolved on the server.

Changing the value of the site to anything else and clicking on the link causes an error on the sever and produces the flag.


## A brief explination of Open Redirect:

Open redirection vulnerabilities arise when an application incorporates user-controllable data into the target of a redirection in an unsafe way. An attacker can construct a URL within the application that causes a redirection to an arbitrary external domain. This behavior can be leveraged to facilitate phishing attacks against users of the application.

## How to protect against:

If possible, applications should avoid incorporating user-controllable data into redirection targets.

In many cases, this behavior can be avoided in two ways:

Remove the redirection function from the application, and replace links to it with direct links to the relevant target URLs.
Maintain a server-side list of all URLs that are permitted for redirection. Instead of passing the target URL as a parameter to the redirector, pass an index into this list.

The ability to use an authentic application URL, targeting the correct domain and with a valid SSL certificate (if SSL is used), lends credibility to the phishing attack because many users, even if they verify these features, will not notice the subsequent redirection to a different domain.

## Resources:
* <https://portswigger.net/kb/issues/00500100_open-redirection-reflected>
* <https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/understanding-and-discovering-open-redirect-vulnerabilities/>