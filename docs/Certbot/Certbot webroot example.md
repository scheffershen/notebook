Certbot webroot example
===

https://www.howtoforge.com/how-to-manage-lets-encrypt-ssl-tls-certificates-with-certbot/


	$ certbot certonly --webroot --webroot-path /var/www/html --agree-tos -m your_email@example.com -d www.example.com

https://github.com/certbot/certbot/blob/master/certbot/docs/using.rst#webroot

## Webroot

If you're running a local webserver for which you have the ability to modify the content being served, and you'd prefer not to stop the webserver during the certificate issuance process, you can use the webroot plugin to obtain a certificate by including `certonly` and `--webroot` on the command line. In addition, you'll need to specify `--webroot-path` or `-w` with the top-level directory ("web root") containing the files served by your webserver. For example, `--webroot-path /var/www/html` or `--webroot-path /usr/share/nginx/html` are two common webroot paths.

If you're getting a certificate for many domains at once, the plugin needs to know where each domain's files are served from, which could potentially be a separate directory for each domain. When requesting a certificate for multiple domains, each domain will use the most recently specified `--webroot-path`. So, for instance,

	$ certbot certonly --webroot -w /var/www/example -d www.example.com