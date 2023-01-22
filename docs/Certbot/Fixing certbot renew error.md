Fixing certbot renew error
===

https://charles-stover.medium.com/fixing-certbots-parsefail-error-during-certificate-renewal-1e7718f8a492

Dec 26, 2019

I tried to manually renew these domains with `certbot renew` and met the following error:

```
expected /etc/letsencrypt/live/example.com/cert.pem to be a symlink
```

Finally, I created symbolic links from `live` to `archive`. The commands can be found below:

	*@*:/etc/letsencrypt/live/example.com# rm cert.pem chain.pem fullchain.pem privkey.pem
	*@*:/etc/letsencrypt/live/example.com# ln -s /etc/letsencrypt/archive/example.com/cert1.pem cert.pem
	*@*:/etc/letsencrypt/live/example.com# ln -s /etc/letsencrypt/archive/example.com/chain1.pem chain.pem
	*@*:/etc/letsencrypt/live/example.com# ln -s /etc/letsencrypt/archive/example.com/fullchain1.pem fullchain.pem
	*@*:/etc/letsencrypt/live/example.com# ln -s /etc/letsencrypt/archive/example.com/privkey1.pem privkey.pem


Running `certbot renew` now works again, and my certificates are back to newing automatically.