---
slug: How-to-Install-MySQL-5.7-on-Ubuntu-18.04-LTS
---

How to Install MySQL 5.7 on Ubuntu 18.04 LTS
============================================

https://www.fosstechnix.com/install-mysql-5-7-on-ubuntu-18-04/

May 16, 2021

## 1: Add MySQL APT Repository in Ubuntu

Ubuntu comes with default package repositories. So,if we want to add/install latest repositories then we have to add/install package repositories.

Below are commands to add/download latest MySQL APT repository using command line,

	$ sudo wget https://dev.mysql.com/get/mysql-apt-config_0.8.15-1_all.deb

then, below command is to install above downloaded apt repository,

	$ sudo dpkg -i mysql-apt-config_0.8.15-1_all.deb

- when we run above command like below prompt will open, By default it shows MySQL 8.0

- Click on First Option and Select MySQL 5.7 and Press Tab Button

- Press Tab Button and Enter

## 2: Update MySQL Repository

Update apt repository

	$ sudo apt-get update

## 3: Install MySQL 5.7 on Ubuntu 18.04 LTS

	$ sudo apt-get install mysql-server

## 5: Login to MySQL

	$ mysql -u root -p