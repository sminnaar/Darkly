# Dev mistakes

# Where

```
<ip>/?page=recover
```

## How

Inspecting the recover password page reveals a hidden input field. Making it visible shows the devolopers email. Typing in anything and submitting gives you the flag.

## How to protect against

Devoloper mistakes are common, writing tests and quality control can catch mistakes like this. The field should not have been hidden as that breaks the recovery functionality. The dev had the email set to the default value of his email for testing purposes and never removed it.