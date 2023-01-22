certbot_webroot vs certbot_standalone
===

## visio_medflixs

/etc/letsencrypt/renewal/visio.medflixs.com-002.conf
```
# renew_before_expiry = 30 days
version = 0.31.0
archive_dir = /etc/letsencrypt/archive/visio.medflixs.com-0002
cert = /etc/letsencrypt/live/visio.medflixs.com-0002/cert.pem
privkey = /etc/letsencrypt/live/visio.medflixs.com-0002/privkey.pem
chain = /etc/letsencrypt/live/visio.medflixs.com-0002/chain.pem
fullchain = /etc/letsencrypt/live/visio.medflixs.com-0002/fullchain.pem

# Options used in the renewal process
[renewalparams]
account = 090485f20e585b1c09e4e9ffcea1edfb
authenticator = webroot
webroot_path = /var/www/bigbluebutton-default,
server = https://acme-v02.api.letsencrypt.org/directory
[[webroot_map]]
```

## medflixs

/etc/letsencrypt/renewal/www.medflixs.com-001.conf

```
# renew_before_expiry = 30 days
version = 1.9.0
archive_dir = /etc/letsencrypt/archive/www.medflixs.com-0001
cert = /etc/letsencrypt/live/www.medflixs.com-0001/cert.pem
privkey = /etc/letsencrypt/live/www.medflixs.com-0001/privkey.pem
chain = /etc/letsencrypt/live/www.medflixs.com-0001/chain.pem
fullchain = /etc/letsencrypt/live/www.medflixs.com-0001/fullchain.pem

# Options used in the renewal process
[renewalparams]
authenticator = standalone
account = d5ab4ed291d9ab68c1ec01a4e2cdb53f
server = https://acme-v02.api.letsencrypt.org/directory
```