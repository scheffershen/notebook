---
slug: How-to-Install-Multiple-PHP-Versions-on-Ubuntu-22.04
title: How to Install Multiple PHP Versions on Ubuntu 22.04
---

How to Install Multiple PHP Versions on Ubuntu 22.04
====================================================

We will use the `Ondrej PPA` for installing PHP on `Ubuntu 22.04` LTS system. Which contains `PHP 8.1, 8.0, 7.4, 7.3, 7.2. 7.1, 7.0 & PHP 5.6` packages.

## Step 1: System Update

	$ sudo apt-get update
	$ sudo apt-get upgrade 

## Step 2: Installing Multiple PHP Versions on Ubuntu 22.04

	$ sudo apt install software-properties-common
	$ sudo add-apt-repository ppa:ondrej/php
	$ sudo apt update

	$ apt-get install -y php7.1 libapache2-mod-php7.1 php7.1-mysql php7.1-curl php7.1-json php7.1-gd php7.1-mcrypt php7.1-msgpack php7.1-memcache php7.1-memcached php7.1-intl php7.1-sqlite3 php7.1-gmp php7.1-geoip php7.1-mbstring php7.1-redis php7.1-xml php7.1-zip php7.1-cli php7.1-cgi php7.1-fpm php7.1-phpdbg php7.1-readline  php7.1-pdo php7.1-xmlrpc php7.1-imap php7.1-odbc php7.1-opcache php7.1-tidy php7.1-bcmath php-apcu

## Step 3: Check Active PHP Version

	$ php -v

## Step 4: Switch Default PHP Version for CLI

	$ sudo update-alternatives --config php

## Step 5: Uninstalling PHP Versions

To uninstall any PHP version,

	$ sudo apt-get remove php5.6

uninstall all the modules for that version, 

	$ sudo apt-get remove php5.6-*


Comment installer PHP 7.2 sur Ubuntu 20.04 / Ubuntu 18.04 / Ubuntu 16.04
====================================

https://sys-admin.fr/installation-php-7-2-sur-ubuntu/
8 février 2021

PHP 7.2 n’est plus maintenu depuis le 30 novembre 2020.

## Prérequis :

	$ sudo apt update
	$ sudo apt upgrade

	$ sudo apt install ca-certificates apt-transport-https lsb-release 
	$ wget -q https://packages.sury.org/php/apt.gpg -O- | sudo apt-key add -
	$ echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php.list

## Installation de PHP 7.2

	$ sudo apt update
	$ sudo apt install php7.2

	$ sudo apt install php7.2-cli php7.2-common php7.2-curl php7.2-mbstring php7.2-mysql php7.2-xml


