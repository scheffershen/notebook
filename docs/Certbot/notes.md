notes
===

## PSMF

- /etc/letsencrypt/keys ?
- /etc/letsencrypt/csr
- /etc/letsencrypt/live
- 

## PSMF_commandes

	$ apt-get install software-properties-common
	$ add-apt-repository universe
	$ add-apt-repository ppa:certbot/certbot
	$ apt-get update
	$ apt-get install certbot python-certbot-apache apache2
	$ apt-get install certbot python3-certbot-apache
	$ certbot --apache -d psmf.universalmedica.com
	$ systemctl reload apache2
	$ nano /etc/cron.daily/certbot-renew
	$ clear
	$ chmod +x /etc/cron.daily/certbot-renew
		01 02,14 * * * /etc/cron.daily/certbot-renew

    $ certbot --version
    	0.40.0

	$ systemctl list-timers
	$ systemctl status certbot.timer
	$ ll /etc/systemd/system/timers.target.wants/certbot.timer
	$ journalctl -u certbot.service