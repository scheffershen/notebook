---
sidebar_position: 2
slug: GeoIPLookup-Geolocation-from-the-CLI
title: GeoIPLookup Geolocation from the CLI
---

php geoip api
=============

http://kbeezie.com/geoiplookup-command-line/

In order to do a geolookup from the command line, we have to get the GeoIP binary and database installed.

## Debian/Ubuntu

    apt-get install geoip-bin geoip-database

## Performing a Lookup

To perform a lookup you would simply type geoiplookup followed by an IP address, for example let’s look up one of google’s IPs

    geoiplookup 74.125.225.33 -f 

## GeoIP Legacy City Database Installation Instructions

    $ wget -N http://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.gz
    
    $ gunzip GeoLiteCity.dat.gz

    $ mv GeoLiteCity.dat /usr/local/share/GeoIP/

## geoip-api-php

https://github.com/maxmind/geoip-api-php

    curl -sS https://getcomposer.org/installer | php

    php composer.phar require geoip/geoip:~1.16

    require 'vendor/autoload.php';

```php
<?php

require 'vendor/autoload.php';

$gi = geoip_open("/usr/local/share/GeoIP/GeoIP.dat",GEOIP_STANDARD);

echo geoip_country_code_by_addr($gi, "24.24.24.24") . "\t" .
     geoip_country_name_by_addr($gi, "24.24.24.24") . "\n";
echo geoip_country_code_by_addr($gi, "80.24.24.24") . "\t" .
     geoip_country_name_by_addr($gi, "80.24.24.24") . "\n";

geoip_close($gi);

```
