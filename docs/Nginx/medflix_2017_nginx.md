Medflixs 2017
====

## history nfs  mount stockage.medflixs.com

    $ dpkg -l nfs-kernel-server
    $ ll /nfs/hom/adminum/
    $ dpkg -l nfs-common
    $ showmount -e 54.38.82.77
    $ vi /etc/fstab
    $ mount 54.38.82.77:/home/adminum/ /nfs/home/adminum

    mysqldump -u root -p  medflixs2019 >  medflixs2019.sql

    scp -r -p adminum@46.105.114.35:/home/adminum/medflixs2020.sql medflixs2020.sql 

    select u.firstname, u.lastname, u.email, s.title from fos_user as u join specialite as s ON s.id = u.user_specialite_id 

## var/log/elasticsearch log 4.2Go espace

## attention /var/archives va planter la machine !!!

    now move to /home/archives

    service apache2 stop
    service php7.1-fpm start
    service nginx start

**Install Nginx**

    sudo apt-get install nginx apache2-utils
    sudo htpasswd -c /etc/nginx/htpasswd.users kibanaadmin
 
**elastic Search**

mysqldump -u root -pMCj9!h6h medflixs2015 > medflixs2015.sql
 
mysql -u root -psecret santesur < santesur.sql
 
## SVN revert

login: yishen

svn update  src/Formation/ -r235
svn update  src/Adminsitration/ -r235
svn update  src/Formation/ -r235

scp Login1@Serveur1:Chemin1/NomFichier1 Login2@Serveur2:Chemin2/NomFichier2

So for example to go from *revision 150* (*current*) back to *revision 140*:

    $ svn update
    $ svn merge -r 150:140 .
    $ svn commit -m "Rolled back to r140"

## nginx

find big volume directory

    du -a /var/www/2019.medflixs.com/ | sort -n -r | head -n 20

find big volume directory

    sudo du -a / 2>/dev/null | sort -n -r | head -n 20

    /opt/letsencrypt/letsencrypt-auto renew

https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/

    ps -ylC php-fpm --sort:rss
    ps --no-headers -o "rss,cmd" -C php-fpm | awk '{ sum+=$1 } END { printf ("
%d%s\n", sum/NR/1024,"M") }'

     tar -zxvf nginx-1.9.9.tar.gz
     cd nginx-1.9.9
     sudo apt-get install -y libpcre3 libpcre3-dev libpcrecpp0 libssl-dev zlib1
    g-dev
     sudo apt-get install -y libxslt-dev libxml2-dev
     sudo apt-get install -y libgd-dev
     apt-get autoremove
     apt-get install -y libgeoip-dev
     ./configure 
     --with-cc-opt='-g -O2 -fstack-protector --param=ssp-buffer-size=4 -Wformat -Werror=format-security -D_FORTIFY_SOURCE=2' 
     --with-ld-opt='-Wl,-Bsymbolic-functions -Wl,-z,relro' 
     --prefix=/usr/share/nginx --conf-path=/etc/nginx/nginx.conf 
     --http-log-path=/var/log/nginx/access.log 
     --error-log-path=/var/log/nginx/error.log 
    --lock-path=/var/lock/nginx.lock 
    --pid-path=/run/nginx.pid 
    --http-client-body-temp-path=/var/lib/nginx/body 
    --http-fastcgi-temp-path=/var/lib/nginx/fastcgi 
    --http-proxy-temp-path=/var/lib/nginx/proxy 
    --http-scgi-temp-path=/var/lib/nginx/scgi 
    --http-uwsgi-temp-path=/var/lib/nginx/uwsgi 
    --with-debug 
    --with-pcre-jit 
    --with-ipv6 
    --with-http_ssl_module 
    --with-http_stub_status_module 
    --with-http_realip_module 
    --with-http_addition_module 
    --with-http_dav_module 
    --with-http_geoip_module 
    --with-http_gzip_static_module 
    --with-http_image_filter_module 
    --with-http_sub_module 
    --with-http_xslt_module 
    --with-mail 
    --with-mail_ssl_module 
    --with-http_mp4_module 
    --with-http_v2_module

    nginx -t
    nginx -V

    /etc/nginx/site-available/default
    
## SVN 

add file not versionner
        
    svn status | grep -v "^.[ \t]*\..*" | grep "^?" | awk '{print $2}' | xargs svn add


## local 

http://localhost:5601/app/sense

## how-to-set-fielddata-true-in-kibana

```
curl -XPUT http://localhost:9200/index -d '{
  "mappings": {
    "video": {
      "properties": {
        "date": {
          "type": "text",
          "fielddata": true
        }
      }
    }
  }
}'
```

## root@ns223724:/home/adminum# sudo certbot --nginx -d www.medflixs.com

    ssl_certificate /etc/letsencrypt/live/www.medflixs.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/www.medflixs.com/privkey.pem; # managed by Certbot

Saving debug log to `/var/log/letsencrypt/letsencrypt.log`
`/etc/letsencrypt/options-ssl-nginx.conf` has been manually modified; 
updated file saved to `/usr/lib/python3/dist-packages/certbot_nginx/options-ss                        l-nginx.conf`. We recommend updating `/etc/letsencrypt/options-ssl-nginx.conf` for security purposes.
Plugins selected: Authenticator nginx, Installer nginx
Starting new HTTPS connection (1): acme-v02.api.letsencrypt.org
Attempting to parse the version 1.9.0 renewal configuration file found at `/etc/letsencrypt/renewal/www.medflixs.com-0001.conf` with version 0.31.0 of Certbot. This might not work.
Attempting to parse the version 1.9.0 renewal configuration file found at /etc/letsencrypt/renewal/www.medflixs.com.conf with version 0.31.0 of Certbot. This might not work.
Cert is due for renewal, auto-renewing...

Renewing an existing certificate

An unexpected error occurred:

There were too many requests of a given type :: Error creating new order :: too many certificates (5) already issued for this exact set of domains in the last 168 hours: www.medflixs.com: see https://letsencrypt.org/docs/rate-limits/

Please see the logfiles in /var/log/letsencrypt for more details.

## Elasticsearch

    sudo /etc/init.d/elasticsearch start

    curl localhost:9200

    find / -name "elasticsearch"

    sudo service elasticsearch restart

## phpmyadmin

http://phpmyadmin.medflixs.com/    


## nginx 1.10.3

https://zhizhebuyan.com/2017/03/30/nginx%201.8.1%20升级至%201.10.3,并启用http2/

 [root@www objs]# ./nginx -V
    nginx version: nginx/1.10.3
    built by gcc 4.4.7 20120313 (Red Hat 4.4.7-16) (GCC) 
    built with OpenSSL 1.0.1e-fips 11 Feb 2013
    TLS SNI support enabled
    configure arguments: 
    --prefix=/etc/nginx 
    --sbin-path=/usr/sbin/nginx 
    --conf-path=/etc/nginx/nginx.conf 
    --error-log-path=/var/log/nginx/error.log 
    --http-log-path=/var/log/nginx/access.log 
    --pid-path=/var/run/nginx.pid 
    --lock-path=/var/run/nginx.lock 
    --http-client-body-temp-path=/var/cache/nginx/client_temp 
    --http-proxy-temp-path=/var/cache/nginx/proxy_temp 
    --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp 
    --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp 
    --http-scgi-temp-path=/var/cache/nginx/scgi_temp 
    --user=nginx 
    --group=nginx 
    --with-http_ssl_module 
    --with-http_realip_module 
    --with-http_addition_module 
    --with-http_sub_module 
    --with-http_dav_module 
    --with-http_flv_module 
    --with-http_mp4_module 
    --with-http_gunzip_module 
    --with-http_gzip_static_module 
    --with-http_random_index_module 
    --with-http_secure_link_module 
    --with-http_stub_status_module 
    --with-http_auth_request_module 
    --with-mail 
    --with-mail_ssl_module 
    --with-file-aio 
    --with-ipv6 
    --add-module=/git/ngx_http_substitutions_filter_module 
    --with-http_v2_module

    mv /etc/sbin/nginx /etc/sbin/nginx.old

    cp nginx-1.10.3/objs/nginx /etc/sbin/nginx

    service nginx restart


## 在 Nginx 1.15.8中，安裝 more_set_headers

https://hant.kaifa99.com/hulianwang/article_176824

https://www.cxyzjd.com/article/qq_45645003/104712260

    tar zxf nginx-1.14.0.tar
    
    cd nginx-1.14.0

    ./configure 
    --prefix=/opt/nginx 
    --user=nginx 
    --group=nginx 
    --with-threads 
    --with-file-aio 
    --with-http_ssl_module 
    --with-http_realip_module 
    --with-http_addition_module 
    --with-http_xslt_module 
    --with-http_image_filter_module 
    --with-http_sub_module 
    --with-http_flv_module 
    --with-http_mp4_module 
    --with-http_gunzip_module 
    --with-http_gzip_static_module 
    --with-http_auth_request_module 
    --with-http_secure_link_module 
    --with-pcre


## nginx1.19.2

https://blog.csdn.net/weixin_36522099/article/details/108214741

    $ tar xzf nginx-1.19.2.tar.gz
    $ cd nginx-1.19.2
    $ ./configure 
    --prefix=/usr/local/nginx 
    --with-http_dav_module 
    --with-http_stub_status_module 
    --with-http_addition_module 
    --with-http_sub_module 
    --with-http_flv_module 
    --with-http_mp4_module 
    --with-pcre=/usr/local/src/pcre-8.41 
    --user=nginx 
    --group=nginx

## nginx1.18.0

https://me.jinchuang.org/archives/941.html

    tar xf nginx-1.18.0.tar.gz

    cd nginx-1.18.0/
        ./configure \
        --prefix=/usr/local/nginx \
        --pid-path=/var/run/nginx.pid \
        --lock-path=/var/run/nginx.lock \
        --http-client-body-temp-path=/usr/local/nginx/client_temp \
        --http-proxy-temp-path=/usr/local/nginx/proxy_temp \
        --http-fastcgi-temp-path=/usr/local/nginx/fastcgi_temp \
        --http-uwsgi-temp-path=/usr/local/nginx/uwsgi_temp \
        --http-scgi-temp-path=/usr/local/nginx/scgi_temp \
        --user=nginx \
        --group=nginx \
        --with-mail \
        --with-stream \
        --with-threads \
        --with-file-aio \
        --with-poll_module \
        --with-select_module \
        --with-http_v2_module \
        --with-http_mp4_module \
        --with-http_sub_module \
        --with-http_dav_module \
        --with-http_flv_module \
        --with-http_ssl_module \
        --with-http_geoip_module \
        --with-http_slice_module \
        --with-http_gunzip_module \
        --with-http_realip_module \
        --with-http_addition_module \
        --with-http_image_filter_module \
        --with-http_gzip_static_module \
        --with-http_random_index_module \
        --with-http_secure_link_module \
        --with-http_degradation_module \
        --with-http_stub_status_module \
        --with-mail_ssl_module \
        --with-stream_ssl_module \
        --with-stream_realip_module \
        --with-stream_ssl_preread_module \
        --with-pcre=/data/source/pcre-8.44 \
        --with-openssl=/data/source/openssl-1.1.1f \
        --with-zlib=/data/source/zlib-1.2.11

    make && make install
    echo 'export PATH=$PATH:/usr/local/nginx/sbin' >> /etc/profile && source /etc/profile
    nginx -V
    nginx
    netstat -lntp

##  nginx 1.7.3

https://blog.csdn.net/xiguashixiaoyu/article/details/111950377