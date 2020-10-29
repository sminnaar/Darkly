# Darkly
42 school web security project

## Setup

Using the Darky project image you need to start up a VM. I used [VirtualBox](https://www.virtualbox.org/) using setting for a 64bit Ubuntu system.  

Start the VM and select "boot the Live System" when prompted or wait for the timer to expire.

You should see this:
```bash
        ____                _______    _____           
       |  _ \              |__   __|  / ____|          
       | |_) | ___  _ __ _ __ | | ___| (___   ___  ___ 
       |  _ < / _ \| '__| '_ \| |/ _ \\___ \ / _ \/ __|
       | |_) | (_) | |  | | | | | (_) |___) |  __/ (__ 
       |____/ \___/|_|  |_| |_|_|\___/_____/ \___|\___|

                           WEB SECTION
                       Good luck & Have fun
 
 To start the challenges, open your web browser (:80) and go to:
                          192.168.43.156
```

The IP might be diffrent depending on availibility and your system configuration.  

## First steps

Starting a security audit can be a daunting task when you first start out. There are a lot of tools you can use that identify and exploit the vulnrebility's of web aplications.

For this project we are working with a few restrictions nl, We are not allowed to use tools that make exploitation trivial.

I chose nmap as a starting point to learn more about the site and point me in the right direction.

```bash
nmap -A -T4 --script http-enum --script http-csrf <ip>
```

### Explaining the flags:
* -A: Enable OS detection, version detection, script scanning, and traceroute
* --script: Runs a script scan using the comma-separated list of filenames, script categories, and directories.
    * http-enum: Enumerates directories used by popular web applications and servers.
    * http-csrf: This script detects Cross Site Request Forgeries (CSRF) vulnerabilities.
* <ip>: Needs to be replaced with the IP of the server being tested.

### Interperating the results

```bash
Nmap scan report for 10.0.0.147
Host is up (0.014s latency).
Not shown: 998 closed ports
PORT     STATE SERVICE VERSION
80/tcp   open  http    nginx 1.8.0
| http-csrf: 
| Spidering limited to: maxdepth=3; maxpagecount=20; withinhost=10.0.0.147
|   Found the following possible CSRF vulnerabilities: 
|     
|     Path: http://10.0.0.147:80/?page=searchimg
|     Form id: 
|     Form action: #
|
|     Path: http://10.203.68.35:80/?page=member
|     Form id: 
|     Form action: #
|
|     Path: http://10.0.0.147:80/?page=survey
|     Form id: 
|     Form action: #
|     
|     Path: http://10.0.0.147:80/?page=upload
|     Form id: 
|_    Form action: #
| http-enum: 
|   /admin/: Possible admin folder
|   /admin/index.php: Possible admin folder
|   /test.php: Test page
|_  /robots.txt: Robots file
|_http-server-header: nginx/1.8.0
4242/tcp open  ssh     OpenSSH 5.9p1 Debian 5ubuntu1.7 (Ubuntu Linux; protocol 2.0)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```

These results show 3 things:
* Port 80:
    * 4 pages have possible CSRF vulnrability's:
        * /searchimg
        * /survey
        * /member
        * /upload
    * There are 3 pages we can navigate to manually:
        * /admin
        * /test.php
        * /robots.txt
* Port 4242:
    * Usually port 22 is used for ssh, in this case port 4242 is used.

## Next Steps

Using the information I gained to try and exploit the vulnrability's on the site.