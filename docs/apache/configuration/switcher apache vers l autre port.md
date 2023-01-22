switcher apache vers l'autre port
=================================

[Installez Gogs sur votre propre serveur git sur Debian 10 | VPS Débutant | P10](https://www.youtube.com/watch?v=5ysGZoBJGVU)

	$ sudo a2enmod proxy

```apache2.config
    ProxyPreserveHost On
    ProxyRequests off
      ServerName dummy-host.example.com
      ServerAlias www.dummy-host.example.com
      ProxyPass /api/ http://localhost:5000/
      ProxyPassReverse /api/ http://localhost:5000/
```

## OpenProject Examples

[OpenProject](https://www.openproject.org/docs/installation-and-operations/installation/docker/)

### Apache Reverse Proxy Setup

For both configurations the following Apache mods are required:

- proxy
- proxy_http
- rewrite
- ssl (optional)

In each case you will create a file `/usr/local/apache2/conf/sites/openproject.conf` with the contents as described in the respective sections.

Both configuration examples are based on the following assumptions:

- the site is accessed via https
- certificate and key are located under /etc/ssl/crt/server.{crt, key}
- the OpenProject docker container’s port 80 is mapped to the docker host’s port 8080

1) Virtual host root

The default scenario is to have OpenProject serve the whole virtual host. This requires no further configuration for the docker container beyond what is described above.

Assuming the desired server name is `openproject.example.com` the configuration will look like this:

```
<VirtualHost *:80>
    ServerName openproject.example.com

    RewriteEngine on
    RewriteCond %{HTTPS} !=on
    RewriteRule ^/?(.*)$ https://%{SERVER_NAME}/$1 [R,L]
</VirtualHost>

<VirtualHost *:443>
    ServerName openproject.example.com

    SSLEngine on
    SSLCertificateFile /etc/ssl/crt/server.crt
    SSLCertificateKeyFile /etc/ssl/crt//server.key

    RewriteEngine on
    RewriteRule "^$" "/" [R,L]

    ProxyRequests off

    <Location "/">
      RequestHeader set X-Forwarded-Proto 'https'

      ProxyPreserveHost On
      ProxyPass http://127.0.0.1:8080/
      ProxyPassReverse http://127.0.0.1:8080/
    </Location>
</VirtualHost>
```

2) Location (subdirectory)

Let’s assume you want OpenProject to run on your host with the server name `example.com` under the subdirectory `/openproject`.

```
<VirtualHost *:80>
    ServerName example.com

    RewriteEngine on
    RewriteCond %{HTTPS} !=on
    RewriteRule ^/?(openproject.*)$ https://%{SERVER_NAME}/$1 [R,L]
</VirtualHost>

<VirtualHost *:443>
    ServerName example.com

    SSLEngine on
    SSLCertificateFile /etc/ssl/crt/server.crt
    SSLCertificateKeyFile /etc/ssl/crt/server.key

    RewriteEngine on
    RewriteRule "^/openproject$" "/openproject/" [R,L]

    ProxyRequests off

    <Location "/openproject/">
      RequestHeader set X-Forwarded-Proto 'https'

      ProxyPreserveHost On
      ProxyPass http://127.0.0.1:8080/openproject/
      ProxyPassReverse http://127.0.0.1:8080/openproject/
    </Location>
</VirtualHost>
```

First, find and uncomment the following lines on `/etc/httpd/conf/httpd.conf`

```
# LoadModule proxy_module modules/mod_proxy.so
# LoadModule proxy_http_module modules/mod_proxy_http.so
# Include conf/extra/httpd-vhosts.conf
```

Then, add the following virtual host to `/etc/httpd/conf/extra/httpd-vhosts.conf`.

```
<VirtualHost *:80>
  ProxyPreserveHost On
  ProxyRequests Off
  ServerName dummy-host.example.com
  ServerAlias www.dummy-host.example.com
  ProxyPass /api/ http://localhost:5000/
  ProxyPassReverse /api/ http://localhost:5000/
</VirtualHost>
```