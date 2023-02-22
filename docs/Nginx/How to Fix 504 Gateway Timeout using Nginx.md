How to Fix 504 Gateway Timeout using Nginx
===

https://www.scalescale.com/tips/nginx/504-gateway-time-out-using-nginx/

##How you might see the 504 Gateway Timeout error

“504 Gateway Timeout”
“504 Gateway Time-Out”
“504 Gateway Timeout NGINX”
“Nginx 504 Gateway Timeout”
“HTTP 504 Gateway Timeout”
“HTTP 504 Error”
“HTTP 504”
“Gateway Timeout (504)”

##504 Gateway Timeout error on Nginx + FastCGI (php-fpm)

Try raising **max_execution_time** setting in php.ini file (/etc/php5/fpm/php.ini):

    max_execution_time = 300

You should also change set **request_terminate_timeout** parameter (commented by default) at www.conf (/etc/php5/fpm/pool.d/www.conf) file from PHP-FPM:

    request_terminate_timeout = 300

Now let’s add fastcgi_read_timeout variable inside our Nginx virtual host configuration:

    location ~ .php$ {
        root /var/www/sites/nginxtips.com;
        try_files $uri =404;
        fastcgi_pass unix:/tmp/php5-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
        fastcgi_read_timeout 300;
    }

Then restart nginx:

    service nginx reload

##504 Gateway Timeout error using Nginx as Proxy

Add these variables to nginx.conf (/etc/nginx/nginx.conf) file:

      proxy_connect_timeout       600;
      proxy_send_timeout          600;
      proxy_read_timeout          600;
      send_timeout                600;

Then restart nginx:     

    service nginx reload
