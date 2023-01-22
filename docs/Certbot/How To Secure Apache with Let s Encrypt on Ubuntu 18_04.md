How To Secure Apache with Let's Encrypt on Ubuntu 18.04
=======================================================

## Prerequisites

## Step 1 — Installing Certbot

	$ sudo apt install certbot python3-certbot-apache

## Step 2 — Checking Your Apache Virtual Host Configuration

/etc/apache2/sites-available/your_domain.conf

```
ServerName test-veille.universalmedica.com;
SeverAlias test-veille.universalmedica.com
```

validate your changes:

	$ sudo apache2ctl configtest

reload Apache to load the new configuration:

	$ sudo systemctl reload apache2

## Step 3 — Allowing HTTPS Through the Firewall

## Step 4 — Obtaining an SSL Certificate

	$ sudo certbot --apache

## Step 5 — Verifying Certbot Auto-Renewal

Check the status of this service and make sure it’s active and running:

	$ sudo systemctl status certbot.timer

Test the renewal process by doing a dry run with certbot:

	$ sudo certbot renew --dry-run