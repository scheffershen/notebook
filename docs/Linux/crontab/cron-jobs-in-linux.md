cron-jobs-in-linux
==================

https://www.freecodecamp.org/news/cron-jobs-in-linux/


	# Check cron service on Linux system
	$ sudo systemctl status cron.service

## Cron job syntax

Crontabs use the following flags for adding and listing cron jobs.

- `crontab -e`: edits crontab entries to add, delete, or edit cron jobs.
- `crontab -l`: list all the cron jobs for the current user.
- `crontab -u username -l`: list another user's crons.
- `crontab -u username -e`: edit another user's crons.	


Below is the summary of the cron job syntax.

```
*   *   *   *   *  sh /path/to/script/script.sh
|   |   |   |   |              |
|   |   |   |   |      Command or Script to Execute        
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
|   |   |   | Day of the Week(0-6)
|   |   |   |
|   |   | Month of the Year(1-12)
|   |   |
|   | Day of the Month(1-31)  
|   |
| Hour(0-23)  
|
Min(0-59)
```

Here, we have scheduled it to run per minute.

```
*/1   *   *   *   *  sh /path/to/script/script.sh
```

## How to Troubleshoot crons

You can verify this from the cron logs located at `var/log/cron`. In some distros, logs can be found at `/var/log/syslog`

## Redirect cron output to a file.

```
# Redirect cron output to a file
* * * * * sh /path/to/script.sh &> log_file.log
```