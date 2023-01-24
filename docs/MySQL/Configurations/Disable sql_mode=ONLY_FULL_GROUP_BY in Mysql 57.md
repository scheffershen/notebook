---
slug: Disable-sql_mode=ONLY_FULL_GROUP_BY-in-Mysql-57
---

Disable sql_mode=ONLY_FULL_GROUP_BY in Mysql 5.7
================================================

the sql_mode=only_full_group_by is starting for mysql 5.7

1. nano /etc/mysql/mysql.conf.d/mysqld.cnf

2. Add this to the end of the file

    [mysqld]  
    sql_mode = "STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"

3. sudo service mysql restart to restart MySQL    

This will disable `ONLY_FULL_GROUP_BY` for ALL users

## OR

mysql> set global sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';

mysql> set session sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';