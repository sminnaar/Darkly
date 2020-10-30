# Dev mistakes

# Where

```
<ip>/?page=recover
```

## How to exploit

Inspecting the recover password page reveals a hidden input field. Making it visible shows the devolopers email. Typing in anything and submitting the form gives you the flag.

## How to protect against

Devoloper mistakes are common, writing tests and quality control can catch mistakes like this. The field should not have been hidden as that breaks the recovery functionality. The dev had the email set to the default value of his email for testing purposes and never removed it.

Sensitive Data Exposure or Information disclosure, is when an application fails to properly protect sensitive and confidential information from parties that are not supposed to have access to the subject matter in normal circumstances.

This vulnerability can be mitigated by adding additional protection, such as encryption at rest or in transit, and requiring special precautions when exchanged with the browser.

These type of issues are not exploitable in most cases, but are considered as web application security issues because they allow malicious hackers to gather relevant information which can be used later in the attack lifecycle, in order to achieve more than they could if they didn’t get access to such information.

Attackers may steal or modify such weakly protected data to conduct credit card fraud, identity theft, or other crimes.

## Resources:
* <https://www.netsparker.com/blog/web-security/information-disclosure-issues-attacks/>
* <https://www.toptal.com/security/10-most-common-web-security-vulnerabilities>
* <https://cwe.mitre.org/data/definitions/200.html>
* <https://www.w3.org/Protocols/rfc2616/rfc2616-sec15.html>