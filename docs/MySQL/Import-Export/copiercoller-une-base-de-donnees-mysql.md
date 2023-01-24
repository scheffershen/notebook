---
slug: copiercoller-une-base-de-donnees-mysql
---

copiercoller-une-base-de-donnees-mysql
======================================

## Can I copy the entire /var/lib/mysql folder to a different server? (mysql vs mariadb, different versions)

Yes, it is possible

1. Install MariaDB in the new Arch system, verify that it works. Do your changes to the `/etc/mysql/my.cnf`. E.g. `innodb_file_per_table`. (more of this is out of scope for this question)
2. `sudo systemctl stop mysqld`. (You want to stop on both servers, but in my case the other was already off)
3. Rename the `/var/lib/mysql` folder, e.g. to `/var/lib/_mysql`.
4. Copy the old `/var/lib/mysql` folder from the old Debian (LMDE) system.
5. Restore file ownership to `mysql:mysql` for everything in `/var/lib/mysql`: `sudo chown -R mysql:mysql /var/lib/mysql`
6. `sudo systemctl start mysqld`.
	-> Job for mysqld.service failed. See "systemctl status mysqld.service" and "journalctl -xe" for details.
7. `sudo systemctl status mysqld`.
	-> This shows that the service is running, but some things are going wrong. This is what mysql_upgrade is for.
8. `mysql_upgrade -u root -p`
	Notes:
	- It is the mysql root password from the old system!
	- I had to remove one leftover folder from /var/lib/mysql due to invalid database name.
	- The file /var/lib/mysql/mysql_upgrade_info needs to be writable.
	- The process can take a while.
9. `sudo systemctl restart mysqld`.

CAVEAT: Apparently you cannot downgrade to a lower MySQL version. I tried to migrate my databases to `MySQL 5.5` (or rather, the corresponding MariaDB), and the server would not start. I had to install `MySQL 5.6` instead. (the `MariaDB` corresponding to `MySQL 5.6` is not available on my Linux distro).