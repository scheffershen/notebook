How To Set Up Apache Virtual Hosts on Ubuntu 18.04
==================================================

https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-18-04


## Prerequisites

	$ sudo apt update
	$ sudo apt install apache2

## Step Four — Create New Virtual Host Files

Create the First Virtual Host File

	$ sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/test-veille.universalmedica.com.conf

	$ sudo nano /etc/apache2/sites-available/test-veille.universalmedica.com.conf

```
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/interface/public
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

## Step Five — Enable the New Virtual Host Files

	$ sudo a2ensite test-veille.universalmedica.com.conf

	$ sudo systemctl restart apache2