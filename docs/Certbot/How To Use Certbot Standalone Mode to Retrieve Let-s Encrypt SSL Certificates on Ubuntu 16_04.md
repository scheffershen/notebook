How To Use Certbot Standalone Mode to Retrieve Let's Encrypt SSL Certificates on Ubuntu 16.04
===

https://www.digitalocean.com/community/tutorials/how-to-use-certbot-standalone-mode-to-retrieve-let-s-encrypt-ssl-certificates-on-ubuntu-16-04

July 28, 2017

## Prerequisites

- Ubuntu 16.04

## Step 1 — Installing Certbot

	$ sudo add-apt-repository ppa:certbot/certbot
	$ sudo apt-get update
	$ sudo apt-get install certbot

## Step 2 — Running Certbot

We can now run Certbot to get our certificate. We’ll use the `--standalone` option to tell Certbot to handle the challenge using its own built-in web server.

The `--preferred-challenges` option instructs Certbot to use port 80 or port 443.

If you’re using port 80, you want `--preferred-challenges http`

For port 443 it would be `--preferred-challenges tls-sni`

Finally, the `-d` flag is used to specify the domain you’re requesting a certificate for

	$ sudo certbot certonly --standalone --preferred-challenges http -d www.medflixs.com

## Step 3 — Configuring Your Application

	$ sudo ls /etc/letsencrypt/live/www.medflixs.com

## Step 4 — Handling Certbot Automatic Renewals

The `certbot` package we installed takes care of this for us by adding a renew script to `/etc/cron.d`. This script runs twice a day and will renew any certificate that’s within thirty days of expiration.

We need to at least restart or reload our server to pick up the new certificates,

To add a `renew_hook`, we update Certbot’s renewal config file. 

	$ sudo nano /etc/letsencrypt/renewal/www.medflixs.com.conf
		renew_hook = systemctl reload nginx

run a Certbot dry run to make sure the syntax is ok:

	$ sudo certbot renew --dry-run
