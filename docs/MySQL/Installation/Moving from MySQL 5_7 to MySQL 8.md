---
slug: Moving-from-MySQL-5_7-to-MySQL-8
---

Moving from MySQL 5.7 to MySQL 8.0 - What You Should Know
=========================================================

https://severalnines.com/database-blog/moving-mysql-57-mysql-80-what-you-should-know
January 21, 2020

## Considerations Before Migrating to MySQL 8.0

### Authentication Method

To change the default  authentication method, edit the `my.cnf` configuration file, and add/edit the following line:

	$ vi /etc/mysql/my.cnf
	
```
[mysqld]
default_authentication_plugin=mysql_native_password
```

To change the user authentication plugin, run the following command with a privileged user:

	$ mysql -p

```
ALTER USER ‘username’@’hostname’ IDENTIFIED WITH 'mysql_native_password' BY 'r9Wvhf69G3EtnCr';
```

ALTER USER 'root'@'localhost' IDENTIFIED WITH  'mysql_native_password' BY 'r9Wvhf69G3EtnCr';

Anyway, these changes aren’t a permanent solution as the old authentication could be deprecated soon, so you should take it into account for a future database upgrade.

### Character Sets

As the new default character set is `utf8mb4`,

To avoid some issues, you should specify the `character_set_server` and the `collation_server` variables in the `my.cnf` configuration file.

	$ vi /etc/mysql/my.cnf

```
[mysqld]
character_set_server=latin1
collation_server=latin1_swedish_ci
```

### MyISAM Engine

The MySQL privilege tables in the MySQL schema are moved to `InnoDB`. You can create a table `engine=MyISAM`, and it will work as before, `but coping a MyISAM table into a running MySQL server will not work because it will not be discovered`.

### Partitioning

