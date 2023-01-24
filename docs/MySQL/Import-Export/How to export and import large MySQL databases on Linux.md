---
slug: How-to-export-and-import-large-MySQL-databases-on-Linux
---

How to export and import large MySQL databases on Linux
=======================================================

https://www.arubacloud.com/tutorial/how-to-export-imort-large-mysql-databases-on-linux.aspx

Published on: 21 July 2020

## Exporting the database

	$ mysqldump -u username -p my_big_database | gzip > backup.sql.gz

## Database import

	$ gzip -d backup.sql.gz
	$ mysql -u user -p
		CREATE DATABASE restored_db;
		SHOW DATABASES;
		USE restored_db;
		SOURCE /path/file.sql;
		SHOW TABLES

How can I import a large (14 GB) MySQL dump file into a new MySQL database?
===========================================================================
2012

https://stackoverflow.com/questions/13717277/how-can-i-import-a-large-14-gb-mysql-dump-file-into-a-new-mysql-database

````bash
mysql -u root -p

set global net_buffer_length=1000000; --Set network buffer length to a large byte number

set global max_allowed_packet=1000000000; --Set maximum allowed packet size to a large byte number

SET foreign_key_checks = 0; --Disable foreign key checking to avoid delays,errors and unwanted behaviour

source /C//var/www/_SQL/advanz.sql --Import your sql dump file

SET foreign_key_checks = 1; --Remember to enable foreign key checks when procedure is complete!
```
