# Robots.txt

Looking back at the nmap output, there are a few directories that can be accessed that an end user should not be able to.

Along with these is a file called robots.txt

## How to exploit:

Navigate to this page:
```bash
10.203.68.35/robots.txt
```

You will see 2 directories hidden from crawlers, "./hidden" and "/whatever".

Then modify the url to to below and click on the "htpasswd" link. This will download the file.
```bash
10.203.68.35/whatever/
```
Contained in this file is:
```bash
root:8621ffdbc5698829397d97767ac13db3
```
This syntax is how linux systems store usernames and passwords. This is what the content of the file would have been in the Path Traversal vulnribility.

[MD5 decryption utility](https://hashtoolkit.com/decrypt-md5-hash)

Hash cracking the password give us the string "dragon".

navigating to the /admin page we see a login form. Using the credentials we just obtained we log in and get the flag.

## A brief explination of Robots.txt:

The robots.txt file is used to tell web crawlers and other well-meaning robots a few things about the structure of a website. It is openly accessible and can also be read and understood quickly and easily by humans.

If a villainous actor – whether human or robot – is trying to find private or confidential information on a website, the robots.txt file’s disallow list can serve as a map. It is the first, most obvious place to look.

In fact, some nefarious robots and penetration test robots specifically look for robots.txt files for the very purpose of visiting the disallowed site sections.

## How to protect against:

Ways to mitagate vulnerabilities exposed through the robots.txt file include setting X-Robots-Tags and robot Meta tags, which are page-level indexing controls supported by all browsers, on HTML pages or in HTTP headers.

The robots Meta tag lets you control how pages are indexed. The X-Robots-Tag can be used in an HTTP header response, Meta tags can also be specified as X-Robots-Tag.

Finding a robots.txt can quickly become a high risk (e.g., gaining administrator access to the CMS). As the robot explores the website, it checks for the existence of the robots.txt file and finds allow and disallow parameters. These parameters can sometimes contain useful information for an attacker.

For example, malware and email harvester bots can ignore the robots.txt file completely while harvesting email addresses or searching for website vulnerabilities. In addition, the file is in a known location and publicly accessible, making it easy for anyone, including attackers, to see what you’re trying to hide.

## Resources:
* <https://www.synopsys.com/blogs/software-security/robots-txt/>
* <https://www.searchenginejournal.com/robots-txt-security-risks/289719/>
* <https://httpd.apache.org/docs/2.4/rewrite/access.html>