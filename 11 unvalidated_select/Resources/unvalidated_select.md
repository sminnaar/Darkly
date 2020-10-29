# Unvalidated Select

## Where

```bash
<ip>/?page=survey
```

## How to exploit:

Inspect the table to see a form for each row. For the first row, change the value of option 2 to a value greater than 10 (outside the range of the content).

Now in the first row of the page select 2 in the drop down field.

This causes the form to look up a value in the database that does not exist and causes a backend error producing the flag.

### Explaining the flags:

## A brief explination:

This is an example of a failure to properly validate data passed to the backend of the application. Input validation is a programming technique that ensures only properly formatted data may enter a software system component.

## How to protect against:

This flaw can be mitigated by validating the user inputs both syntactically and semantically valid (in that order) before using it in any way (including displaying it back to the user).

Syntax validity means that the data is in the form that is expected.

Semantic validity includes only accepting input that is within an acceptable range for the given application functionality and context. For example, a start date must be before an end date when choosing date ranges.

Improper validation can lead to injection of malicious input such as code, scripting, commands, that can be interpreted/executed by different targets to exploit vulnerabilities, such as:

* Browser: XSS, XFS, HTML-Splitting
* Data repositories: SQL Injection, LDAP injection
* Server side file processing: XML, XPATH
* Application/Server/O.S: File uploads, Buffer Overflow

## Resources:
* <https://owasp.org/www-pdf-archive/Encoded_Attacks_Threats_Countermeasures_9_30_08.pdf>
* <https://stackoverflow.com/questions/18008017/are-drop-down-select-fields-vulnerable-to-any-sort-of-injection>
* <https://owasp.org/www-project-proactive-controls/v3/en/c5-validate-inputs>
