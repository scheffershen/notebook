---
slug: Guide-de-migration-vers-Ubuntu-22.04-PHP-7.4-MySQL-8
title: Guide de migration vers Ubuntu 22.04, PHP 7.4, MySQL 8
authors: [yshen]
tags: [Ubuntu, PHP, MySQL]
---

#### Etape 1. Suavegarder des bases des données MySQL et les données client (/var/www/client.medica-source.com/app/data)
	
	$ mysqldump -u -root -p ms_mutualise > ms_mutualise.sql
	
#### Etape 2. Mettre à niveau Ubuntu 18.04 vers 20.04 LTS
	
	$ do-release-upgrade

Conserver toutes les versions actuellement installées.

PHP 7.4, MySQL 8 sont par défaut sous Ubuntu 20.04

    $ cd /var/www/mutualise.medica-source.com
    $ svn up vendor_php74
    $ mv vendor vendor_php72
    $ mv vendor_php74 vendor
    $ rm var/cache/prod -r

#### Etape 3. Mettre à niveau Ubuntu 20.04 vers 22.04 LTS

    $ sudo apt list --upgradable
    $ sudo apt update && sudo apt upgrade -y
    $ sudo reboot

    $ do-release-upgrade 
    $ lsb_release -a

#### Etape 4. Réinstaller PHP 7.4 sur Ubuntu 22.04 LTS

	$ sudo apt update && sudo apt upgrade
    $ sudo apt install software-properties-common
    $ sudo add-apt-repository ppa:ondrej/php -y
    $ apt install php7.4
    $ apt install php7.4-common php7.4-mysql php7.4-xml php7.4-xmlrpc php7.4-curl php7.4-gd php7.4-imagick php7.4-cli php7.4-dev php7.4-json php7.4-imap php7.4-mbstring php7.4-gettext php7.4-bcmath php7.4-bz2 php7.4-readline php7.4-opcache php7.4-soap php7.4-zip php7.4-intl php7.4-ldap -y

    $ sudo update-alternatives --config php
    $ sudo apt install libapache2-mod-php7.4
    $ sudo a2enmod php7.4
    $ service apache2 restart

#### Attenstions

- PHP 7.4 est plus strict sur array, nul ou vide n’a pas être convertir à array
- Pour convertir SVG à PNG par Imagick, il faut installer inkscape  

    $ dpkg -l | grep inkscape
	$ which inkscape

	$ apt install inkscape
	$ sudo add-apt-repository ppa:inkscape.dev/stable
	$ sudo apt update
