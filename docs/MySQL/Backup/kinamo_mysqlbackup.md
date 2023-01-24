---
slug: kinamo_mysqlbackup
---

```bash
#!/bin/bash

# Configuration de base: datestamp e.g. YYYYMMDD

DATE=$(date +"%Y%m%d%H")

# Dossier où sauvegarder les backups (créez le d'abord!)

BACKUP_DIR="/home/vm01/backup"

# Identifiants MySQL

MYSQL_USER="umds_otsuka_v2"
MYSQL_PASSWORD="G8cTKEPCn7MFRRPD"

# Commandes MySQL (aucune raison de modifier ceci)

MYSQL=/usr/bin/mysql
MYSQLDUMP=/usr/bin/mysqldump

# Bases de données MySQL à ignorer

SKIPDATABASES="Database|information_schema|performance_schema|mysql"

# Nombre de jours à garder les dossiers (seront effacés après X jours)

RETENTION=14

# ---- NE RIEN MODIFIER SOUS CETTE LIGNE ------------------------------------------
#
# Create a new directory into backup directory location for this date

mkdir -p $BACKUP_DIR/$DATE

# Retrieve a list of all databases

#databases=`$MYSQL -u$MYSQL_USER -p$MYSQL_PASSWORD -e "SHOW DATABASES;" | grep -Ev "($SKIPDATABASES)"`

# Dumb the databases in seperate names and gzip the .sql file

for db in $databases; do
echo $db
$MYSQLDUMP --max_allowed_packet=512M -u $MYSQL_USER -p$MYSQL_PASSWORD $db | gzip > "$BACKUP_DIR/$DATE/$db.sql.gz"
done

# Remove files older than X days

find $BACKUP_DIR/* -mtime +$RETENTION -delete
```