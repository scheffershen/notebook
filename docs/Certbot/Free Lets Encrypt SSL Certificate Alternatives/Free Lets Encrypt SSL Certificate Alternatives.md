Free Let’s Encrypt SSL Certificate Alternatives
===============================================

https://www.rosehosting.com/blog/free-lets-encrypt-ssl-certificate-alternatives/

December 22, 2021

We are going to show you how to install a Free Let’s Encrypt SSL certificate and its alternatives such as BuyPass and ZeroSSL certificates. 

## Prerequisites

In this tutorial, we are going to use `Ubuntu 20.04` as OS.

## Update the System

	$ sudo apt-get update -y && sudo apt-get upgrade -y

## Install Free Let’s Encrypt SSL certificate

	$ sudo apt install certbot python3-certbot-apache -y

	$ sudo certbot --apache

## Install Socat and Acme

Before we start installing the Free Let’s Encrypt SSL alternatives, we need to install some prerequisites on our server for fake web server and client support features:

	$ sudo apt install socat -y && sudo curl https://get.acme.sh | sh && source ~/.bashrc

## Install Free BuyPass SSL certificate

Create BuyPass.com account:

	$ acme.sh --server https://api.buypass.com/acme/directory --register-account --accountemail admin@your_domain.com

Next step is to generate the BuyPass free SSL using acme.sh

	$ acme.sh --issue --standalone -d your_domain.com --server https://api.buypass.com/acme/directory

Where your_domain.com will be your real domain and real paths to the certificate

## Install Free ZeroSSL certificate

Now, when we have the prerequisites installed we can proceed with the ZeroSSL commands for installing the certificate

The first is to create a ZeroSSL account:

	$ acme.sh --register-account -m admin@your_domain.com --server zerossl

Next is to generate ZeroSSL with acme.sh

	$ acme.sh --issue --standalone -d your_domain.com --server zerossl


## Enable SSL on Web Server

Add these 2 lines into your webserver configuration file:

If you are using Apache as a Web Server

```
SSLCertificateFile /root/.acme.sh/your_domain.com/fullchain.cer
SSLCertificateKeyFile /root/.acme.sh/your_domain.com/your_domain.com.ke
```

If you are using Nginx as a Web Server

```
ssl_certificate /root/.acme.sh/your_domain.com/fullchain.cer;
ssl_certificate_key /root/.acme.sh/your_domain.com/your_domain.com.key;
```