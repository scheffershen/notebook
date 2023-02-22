Configure Apache 2 to Control Browser Caching
===

##Install

	a2enmod expires
	a2enmod headers
    a2enmod deflate

    service apache2 restart

##Check installation 

	apachectl -M | grep expires
	apachectl -M | grep headers

##.htaccess

```
<IfModule mod_mime.c>
 AddType application/x-javascript .js
 AddType text/css .css
</IfModule>

<IfModule mod_deflate.c>
 AddOutputFilterByType DEFLATE text/css application/x-javascript text/x-component text/html text/richtext image/svg+xml text/plain text/xsd text/xsl $
 <IfModule mod_setenvif.c>
  BrowserMatch ^Mozilla/4 gzip-only-text/html
  BrowserMatch ^Mozilla/4\.0[678] no-gzip
  BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
 </IfModule>
 <IfModule mod_headers.c>
  Header append Vary User-Agent env=!dont-vary
 </IfModule>
</IfModule>

<IfModule mod_expires.c>
# Turn on the module.
ExpiresActive on
# Set the default expiry times.
ExpiresDefault A0
ExpiresByType image/jpg A2592000
ExpiresByType image/gif A2592000
ExpiresByType image/jpeg A2592000
ExpiresByType image/png A2592000
ExpiresByType text/css A2592000
ExpiresByType text/javascript A2592000
ExpiresByType application/javascript A2592000
ExpiresByType application/x-shockwave-flash A2592000
ExpiresByType text/css A2592000
ExpiresByType image/ico A2592000
ExpiresByType image/x-icon A2592000
ExpiresByType text/html M604800
</IfModule>

FileETag none

```


A2592000 means 1 month in the future (60*60*24*30=2592000)

