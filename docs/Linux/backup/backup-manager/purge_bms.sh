#! /usr/bin/env bash

##exemple purge for bms 

######################################################################################
# Crontab * 6 * * * bash /home/backup/purge.sh >> /var/log/backup-purge.log 2>$1
######################################################################################

purge_date=$(date +%Y-%m-%d --date "6 days ago")

echo $purge_date

purge=`rm -rf /home/backup/"$purge_date"*`

exit 0
