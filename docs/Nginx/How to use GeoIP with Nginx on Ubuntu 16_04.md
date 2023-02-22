How to use GeoIP with Nginx on Ubuntu 16.04
===

link: https://www.howtoforge.com/tutorial/how-to-use-geoip-with-nginx-on-ubuntu-16.04/
Author:Till Brehm
Published:Jul 29, 2016

This tutorial explains how to use the GeoIP module with nginx on Ubuntu 16.04 to find out where your visitors come from. The GeoIP module sets multiple variables like $geoip_country_name, $geoip_country_code, $geoip_city, etc. that you can use in your PHP scripts or directly in your nginx configuration, for example to serve content in different languages based on the user's country.

##1 Preliminary Note

I will use this tutorial for the basic Ubuntu-Nginx setup. (https://www.howtoforge.com/tutorial/installing-nginx-with-php7-fpm-and-mysql-on-ubuntu-16.04-lts-lemp/)

##2 Find out if Nginx has support for GeoIP

    nginx -V

    root@server1:~# nginx -V
    nginx version: nginx/1.10.0 (Ubuntu)
    built with OpenSSL 1.0.2g-fips 1 Mar 2016
    TLS SNI support enabled
    configure arguments: --with-cc-opt='-g -O2 -fPIE -fstack-protector-strong -Wformat -Werror=format-security -Wdate-time -D_FORTIFY_SOURCE=2' --with-ld-opt='-Wl,-Bsymbolic-functions -fPIE -pie -Wl,-z,relro -Wl,-z,now' --prefix=/usr/share/nginx --conf-path=/etc/nginx/nginx.conf --http-log-path=/var/log/nginx/access.log --error-log-path=/var/log/nginx/error.log --lock-path=/var/lock/nginx.lock --pid-path=/run/nginx.pid --http-client-body-temp-path=/var/lib/nginx/body --http-fastcgi-temp-path=/var/lib/nginx/fastcgi --http-proxy-temp-path=/var/lib/nginx/proxy --http-scgi-temp-path=/var/lib/nginx/scgi --http-uwsgi-temp-path=/var/lib/nginx/uwsgi --with-debug --with-pcre-jit --with-ipv6 --with-http_ssl_module --with-http_stub_status_module --with-http_realip_module --with-http_auth_request_module --with-http_addition_module --with-http_dav_module --with-http_geoip_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_image_filter_module --with-http_v2_module --with-http_sub_module --with-http_xslt_module --with-stream --with-stream_ssl_module --with-mail --with-mail_ssl_module --with-mkdir /etc/nginx/geoip


##3 Download the GeoIP Databases

    cd /etc/nginx/geoip

    wget http://geolite.maxmind.com/download/geoip/database/GeoLiteCountry/GeoIP.dat.gz
    
    gunzip GeoIP.dat.gz
    
    wget http://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.gz
    
    gunzip GeoLiteCity.dat.gzthreads

##4 Configure Nginx

Now we configure nginx. Open /etc/nginx/nginx.conf...

    nano /etc/nginx/nginx.conf

... and add the geoip_country and geoip_city directives to the http {} container:

```/etc/nginx/nginx.conf
    ...

    http {

     ##
     # Basic Settings
     ##

     geoip_country /etc/nginx/geoip/GeoIP.dat; # the country IP database
     geoip_city /etc/nginx/geoip/GeoLiteCity.dat; # the city IP database
    ...

```    

The geoip_country directive makes the following variables available:

* $geoip_country_code - two-letter country code, for example, RU, US.
* $geoip_country_code3 - three-letter country code, for example, RUS, USA.
* $geoip_country_name - the (verbose) name of the country, for example, Russian - Federation, United States, etc.

The geoip_city directive provides the following variables:

* $geoip_city_country_code - two-letter country code, for example, RU, US.
* $geoip_city_country_code3 - three-letter country code, for example, RUS, USA.
* $geoip_city_country_name - the name of the country, for example, Russian Federation, United States - if available.
* $geoip_region - the name of region (province, region, state, province, federal land, and the like), for example, Moscow City, DC - if available.
* $geoip_city - the name of the city, for example, Moscow, Washington, Lisbon, etc. - if available.
* $geoip_postal_code - zip code or postal code - if available.
* $geoip_city_continent_code - if available.
* $geoip_latitude - latitude - if available.
* $geoip_longitude - longitude - if available.

In order to make these variables available to your PHP scripts as well, we must set a few fastcgi_param directives. It is best to do this in the file /etc/nginx/fastcgi_params where the other fastcgi_param directives are:

    nano /etc/nginx/fastcgi_params

```/etc/nginx/fastcgi
    ### SET GEOIP Variables ###
    fastcgi_param GEOIP_COUNTRY_CODE $geoip_country_code;
    fastcgi_param GEOIP_COUNTRY_CODE3 $geoip_country_code3;
    fastcgi_param GEOIP_COUNTRY_NAME $geoip_country_name;

    fastcgi_param GEOIP_CITY_COUNTRY_CODE $geoip_city_country_code;
    fastcgi_param GEOIP_CITY_COUNTRY_CODE3 $geoip_city_country_code3;
    fastcgi_param GEOIP_CITY_COUNTRY_NAME $geoip_city_country_name;
    fastcgi_param GEOIP_REGION $geoip_region;
    fastcgi_param GEOIP_CITY $geoip_city;
    fastcgi_param GEOIP_POSTAL_CODE $geoip_postal_code;
    fastcgi_param GEOIP_CITY_CONTINENT_CODE $geoip_city_continent_code;
    fastcgi_param GEOIP_LATITUDE $geoip_latitude;
    fastcgi_param GEOIP_LONGITUDE $geoip_longitude;
```

Make sure you have the line 

    location ~ \.php$ {
        ...
        include /etc/nginx/fastcgi_params;
        ...
    } 

in your location ~ \.php$ {} container in your vhost configuration, 

If you use nginx as a reverse proxy and want to pass the GeoIP variables to the backend, you should create/edit the file /etc/nginx/proxy.conf...

```/etc/nginx/proxy.conf

```

Now reload nginx...
    
    systemctl reload nginx.service

Restart PHP-FPM as follows:
    
    systemctl restart php7.0-fpm.service

##5 A short Test

We can access the GeoIP variables as follows:

    $geoip_country_code = getenv(GEOIP_COUNTRY_CODE);

Or like this:

    $geoip_country_code = $_SERVER['GEOIP_COUNTRY_CODE'];

```php
<?php

$geoip_country_code = getenv(GEOIP_COUNTRY_CODE);
/*
$geoip_country_code = $_SERVER['GEOIP_COUNTRY_CODE']; // works as well
*/
$geoip_country_code3 = getenv(GEOIP_COUNTRY_CODE3);
$geoip_country_name = getenv(GEOIP_COUNTRY_NAME);

$geoip_city_country_code = getenv(GEOIP_CITY_COUNTRY_CODE);
$geoip_city_country_code3 = getenv(GEOIP_CITY_COUNTRY_CODE3);
$geoip_city_country_name = getenv(GEOIP_CITY_COUNTRY_NAME);
$geoip_region = getenv(GEOIP_REGION);
$geoip_city = getenv(GEOIP_CITY);
$geoip_postal_code = getenv(GEOIP_POSTAL_CODE);
$geoip_city_continent_code = getenv(GEOIP_CITY_CONTINENT_CODE);
$geoip_latitude = getenv(GEOIP_LATITUDE);
$geoip_longitude = getenv(GEOIP_LONGITUDE);

echo 'country_code: '.$geoip_country_code.'<br>';
echo 'country_code3: '.$geoip_country_code3.'<br>';
echo 'country_name: '.$geoip_country_name.'<br>';

echo 'city_country_code: '.$geoip_city_country_code.'<br>';
echo 'city_country_code3: '.$geoip_city_country_code3.'<br>';
echo 'city_country_name: '.$geoip_city_country_name.'<br>';
echo 'region: '.$geoip_region.'<br>';
echo 'city: '.$geoip_city.'<br>';
echo 'postal_code: '.$geoip_postal_code.'<br>';
echo 'city_continent_code: '.$geoip_city_continent_code.'<br>';
echo 'latitude: '.$geoip_latitude.'<br>';
echo 'longitude: '.$geoip_longitude.'<br>';

?>

```