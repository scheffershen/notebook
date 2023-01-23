#! /bin/bash
#
######################################################################################
# Crontab * 6 * * * bash /home/adminum/purge.sh >> /var/log/backup-manager.log 
######################################################################################

purge_date=$(date +%Y%m%d --date "1 days ago")

echo $purge_date

purge=`rm /var/archives/otsuka2-"$purge_date"*`

exit 0

