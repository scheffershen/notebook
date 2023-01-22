Changing PHP settings with .htaccess
===

https://www.unoeuro.com/en/support/faq/php/596/

## Hide error messages

    php_flag display_errors off

## Raise session lifetime (timeout)

    php_value session.gc_maxlifetime 3600

## Raise max upload size

    php_value upload_max_filesize 512M
    php_value post_max_size 512M

## Raise max execution time

    php_value max_execution_time 600

## Raise max input each

    php_value max_input_vars 20000

## Always disable populate raw post data

    php_value always_populate_raw_post_data -1

## Turn off OPcache

    php_flag opcache.enable off

## OPcache time

    php_value opcache.revalidate_freq 60