---
slug: Migrate_MySQL_5_7_to_8_0_via_mysqldump
---

Migrate MySQL 5.7 to 8.0 via mysqldump
=====================================

https://dba.stackexchange.com/questions/282215/migrate-mysql-5-7-to-8-0-via-mysqldump

## Recreate the dump from MySQL 5.7

```
SQL="SET group_concat_max_len = 1024 * 1024;"
SQL="${SQL} SELECT GROUP_CONCAT(schema_name separator ' ')"
SQL="${SQL} FROM information_schema.schemata WHERE schema_name NOT IN"
SQL="${SQL} ('information_schema','performance_schema','mysql','sys')"
DBLIST=`mysql -u... -p... -AN -e"${SQL}"`
mysqldump -u... -p... -B ${DBLIST} > mydbs.sql
```

## What about the dump you already have ?

```
root@LAPTOP-57FSQ99U:~# grep -in "^USE" mydbs.sql
24:USE `DMP492`;
122:USE `DMP551`;
190:USE `DMP579`;
228:USE `abeersul`;
262:USE `dbname`;
292:USE `karma`;
300:USE `mysql`;
1212:USE `pch_prod`;
1220:USE `pchcom_prod`;
1286:USE `tryout`;
root@LAPTOP-57FSQ99U:~# wc -l < mydbs.sql
1341
root@LAPTOP-57FSQ99U:~#
```

```
root@LAPTOP-57FSQ99U:~# head -299 mydbs.sql > newdump.sql
root@LAPTOP-57FSQ99U:~# (( LINES = 1341 - 1212 + 1 ))
root@LAPTOP-57FSQ99U:~# tail -${LINES} mydbs.sql >> newdump.sql
root@LAPTOP-57FSQ99U:~# grep -in "^USE" newdump.sql
24:USE `DMP492`;
122:USE `DMP551`;
190:USE `DMP579`;
228:USE `abeersul`;
262:USE `dbname`;
292:USE `karma`;
300:USE `pch_prod`;
308:USE `pchcom_prod`;
374:USE `tryout`;
root@LAPTOP-57FSQ99U:~#
```

## Error trying to import dump form mysql 5.7 into 8.0.23

So my mysql dump now looks like below for the export:

```
mysqldump -h ${source_host} -u ${source_username} -p${source_password} \
  --lock-tables=false \
  --set-gtid-purged=OFF \
  --triggers \
  --routines \
  --events \
  --databases db1 db2 > "$filename";
```

Also what @Progman posted would work for existing dumps: https://help.poralix.com/articles/mysql-access-denied-you-need-the-super-privilege-for-this-operation