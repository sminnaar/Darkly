# Web Scraping

Looking back at the nmap output, there are a few directories that can be accessed that an end user should not be able to.

Along with these is a file called robots.txt/


## How to exploit:

Navigate to the page:
```bash
<ip>/robots.txt
```

You will see 2 directories hidden from crawlers, "./hidden" and "/whatever".

We will be looking at the "/.hidden" page.

Modify the url to what is displayed below:
```bash
<ip>/.hidden
```

This reveals a lot of folders within folders. Manually going through everything will take too much time so a web scraper was used.

Run this command:
```bash
sh hidden.sh
```

This will download all the files and grep through them for the flag.

In a real world scenario we would be looking for any data that we can use to exploit the webapp further or for personal data of users and admins.

## A brief explination of Scraping:

Scraping is an automated threat that uses bots or web crawlers to extract data or output from a web application, assess navigable paths, read parameter values, perform reverse engineering, learn about application operations, and more.

With web scraping, business competitors can replicate your entire website—including HTML code and database storage—and save it locally for data analysis.

## How to protect against:

To avoid scraping attakcs, monitor logs and traffic patterns and limit access if you see unusual activity.

Only allow users (and scrapers) to perform a limited number of actions in a certain time - for example, only allow a few searches per second from any specific IP address or user. This will slow down scrapers, and make them ineffective. You could also show a captcha if actions are completed too fast or faster than a real user would.

If you see unusual activity, such as many similar requests from a specific IP address, someone looking at an excessive number of pages or performing an unusual number of searches, you can prevent access, or show a captcha for subsequent requests.

## Resources:
* <https://github.com/JonasCz/How-To-Prevent-Scraping/blob/master/README.md>
* <https://datadome.co/bot-management-protection/scraper-crawler-bots-how-to-protect-your-website-against-intensive-scraping/>