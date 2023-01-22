### Activation des modules nécessaires

    sudo a2enmod proxy proxy_http
    sudo /etc/init.d/apache2 restart

### Exemple d’utilisation avec Icecast et Shoutcast

```
<VirtualHost *:80>
        ProxyPreserveHost On
        ProxyRequests Off
        
        ServerAdmin postmaster@domaine.tld
        ServerName streaming.domaine.tld
        
        ProxyPass / http://localhost:8000/
        ProxyPassReverse / http://localhost:8000/
</VirtualHost>
```

    /etc/init.d/apache2 reload

### Example 2. From Apache HTTPS to Tomcat HTTP

```
NameVirtualHost *:443
<VirtualHost *:443>
        ServerName mysite.com
        ProxyPass / http://tomcat-host:8080/
        ProxyPassReverse / http://tomcat-host:8080/
        RedirectMatch ^/$ https://mysite.com/
        SSLEngine on
        SSLCertificateFile /etc/httpd/certs/mysite.com.crt
        SSLCertificateKeyFile /etc/httpd/certs/mysite.com.key
</VirtualHost>
```

https://httpd.apache.org/docs/2.4/howto/reverse_proxy.html