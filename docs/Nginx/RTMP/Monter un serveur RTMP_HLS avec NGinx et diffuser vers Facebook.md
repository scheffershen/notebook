Monter un serveur RTMP/HLS avec NGinx et diffuser vers Facebook  (testé avec des erreurs)
===

https://aerogus.net/posts/monter-serveur-nginx-rtmp-hls-diffuser-vers-facebook/
https://github.com/aerogus/nginx-rtmp

2020-05-02

## Installation des dépendances

	apt-get install nginx libnginx-mod-rtmp ffmpeg mediainfo certbot python-certbot-nginx stunnel4 (testé avec des erreurs)

## Paramétrage de NGinx pour le RTMP

Créons déjà ces 2 *répertoires de stockage* avec les droits en écriture pour Nginx :

	mkdir -p /data/hls /data/records
	chown -R www-data:www-data /data

/etc/nginx/modules-available


```
rtmp_auto_push on;

rtmp {
    server {
        listen 1935; # port standard RTMP
        chunk_size 4096;

        # tous les flux sources arrivent là, dans l'app "push"
        application push {
            live on;

            # on enregistre tous les flux entrants
            record all; # audio + video
            # veiller à ce que ce répertoire existe
            # et soit inscriptible par nginx (user www-data)
            record_path /data/records;
            record_suffix -%Y%m%d-%H%M%S.flv;
            record_max_size 64M;

            # ajoute un suffixe timestamp au nom du fichier .flv
            # mais c'est doublon avec record_suffix qui a un timestamp
            #record_unique on;

            # on autorise que ces ips à publier
            #allow publish 127.0.0.1;
            #deny publish all;

            # on n'autorise ou pas la lecture directe via rtmp
            # deny play all;

            # on envoi le flux reçu vers l'app "facebook"
            # cf. plus bas
            push rtmp://localhost/facebook;

            # transcodage(s) vers l'app "show"
            # ffmpeg est utile. Prend bcp de CPU, à surveiller
            # exemple mini: upload en 720, passthru 720, transcode en 480 + 360
            exec ffmpeg -i rtmp://localhost/$app/$name -async 1 -vsync -1
                 -c:v libx264 -c:a aac -b:v  768k -b:a  96k -vf "scale=640:trunc(ow/a/2)*2" -tune zerolatency -preset veryfast -g 10 -crf 23 -f flv rtmp://localhost/show/$name_360
                 -c:v libx264 -c:a aac -b:v 1024k -b:a 128k -vf "scale=854:trunc(ow/a/2)*2" -tune zerolatency -preset veryfast -g 10 -crf 23 -f flv rtmp://localhost/show/$name_480
                 -c copy -f flv rtmp://localhost/show/$name_src;

            # exemple complet: upload en 1080, transcode en 1080 + 720 + 480 + 360 + 240 + 144
            #exec ffmpeg -i rtmp://localhost/$app/$name -async 1 -vsync -1
            #     -c:v libx264 -c:a aac -b:v  128k -b:a  32k -vf "scale=256:trunc(ow/a/2)*2"  -tune zerolatency -preset veryfast -g 10 -crf 23 -f flv rtmp://localhost/show/$name_144
            #     -c:v libx264 -c:a aac -b:v  256k -b:a  64k -vf "scale=426:trunc(ow/a/2)*2"  -tune zerolatency -preset veryfast -g 10 -crf 23 -f flv rtmp://localhost/show/$name_240
            #     -c:v libx264 -c:a aac -b:v  768k -b:a  96k -vf "scale=640:trunc(ow/a/2)*2"  -tune zerolatency -preset veryfast -g 10 -crf 23 -f flv rtmp://localhost/show/$name_360
            #     -c:v libx264 -c:a aac -b:v 1024k -b:a 128k -vf "scale=854:trunc(ow/a/2)*2"  -tune zerolatency -preset veryfast -g 10 -crf 23 -f flv rtmp://localhost/show/$name_480
            #     -c:v libx264 -c:a aac -b:v 2048k -b:a 128k -vf "scale=1280:trunc(ow/a/2)*2" -tune zerolatency -preset veryfast -g 10 -crf 23 -f flv rtmp://localhost/show/$name_720
            #     -c:v libx264 -c:a aac -b:v 3096k -b:a 128k -vf "scale=1920:trunc(ow/a/2)*2" -tune zerolatency -preset veryfast -g 10 -crf 23 -f flv rtmp://localhost/show/$name_1080
            #     -c copy -f flv rtmp://localhost/show/$name_src;
        }

        application show {
            live on; # Allows live input from above
            hls on; # Enable HTTP Live Streaming

            # Les .m3u8 et les .ts seront écrits ici
            # le répertoire doit exister et être inscriptible par nginx (user www-data)
            hls_path /data/hls/;
            hls_fragment 3;
            hls_playlist_length 60;

            # On propose les versions transcodées suivant la bande passante du client
            # cas mini
            hls_variant _360 BANDWIDTH=864000;
            hls_variant _480 BANDWIDTH=1152000;
            hls_variant _src BANDWIDTH=1500000;

            # cas complet
            #hls_variant _144  BANDWIDTH=160000;
            #hls_variant _240  BANDWIDTH=320000;
            #hls_variant _360  BANDWIDTH=864000;
            #hls_variant _480  BANDWIDTH=1152000;
            #hls_variant _720  BANDWIDTH=2176000;
            #hls_variant _1080 BANDWIDTH=3200000;
            #hls_variant _src  BANDWIDTH=4000000;
        }

        application facebook {
            live on;
            record off;

            # seulement alimenté par l'app "push" plus haut, donc local
            allow publish 127.0.0.1;
            deny publish all;

            # Depuis 2019, Facebook impose que le flux soit transmis en rtmps (chiffré)
            # or le module nginx-rtmp ne fait pas de chiffrement, 
            # l'url réelle d'envoi pour Facebook est
            #push rtmps://live-api-s.facebook.com:443/rtmp/<streamKey>;
            # on va passer par `stunnel` (cf. doc plus bas)
            push rtmp://127.0.0.1:19350/rtmp/<streamKey>;
        }
    }
}
```

On active cette conf :

	ln -s /etc/nginx/modules-available/rtmp.conf /etc/nginx/modules-enabled/rtmp.conf

On vérifie que la syntaxe est correcte :

	nginx -t

On recharge le serveur

	systemctl reload nginx

On peut à ce stade alimenter notre serveur rtmp (*appName* push, *streamKey* test) avec une commande ffmpeg, par exemple en lui envoyant une mire :

	fmpeg -re -f lavfi -i smptebars -crf 18 -s 1280x720 -r 25 -f flv rtmp://stream.example.com/push/test

En paramètre de sortie:

	Service: personnalisé
	Serveur: rtmp://stream.example.com/push/
	Clé de stream: test

## Paramétrage du HLS et HTTPS

*HLS* est un protocole de streaming video instauré par Apple mais généralisé. C’est avec ce format qu’on aura la meilleure compatibilité client donc on va se concentrer dessus.

Créons le fichier de *vhost* dans *NGinx* (nommez le fichier avec le vrai domaine)

fichier *stream.example.com.conf* dans le répertoire */etc/nginx/sites-available* :

```
server {
    listen 80;
    server_name stream.example.com;
    location / {
       return 301 https://$host$request_uri;
    }
}
server {
    listen 443 ssl http2;
    server_name stream.example.com;

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    ssl_ciphers "EECDH+ECDSA+AESGCM:EECDH+aRSA+AESGCM:EECDH+ECDSA+SHA256:EECDH+aRSA+SHA256:EECDH+ECDSA+SHA384:EECDH+ECDSA+SHA256:EECDH+aRSA+SHA384:EDH+aRSA+AESGCM:EDH+aRSA+SHA256:EDH+aRSA:EECDH:!aNULL:!eNULL:!MEDIUM:!LOW:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS:!RC4:!SEED";

    # ces lignes seront ajoutées par Let's Encrypt
    #ssl_certificate /etc/letsencrypt/live/stream.example.com/fullchain.pem;
    #ssl_certificate_key /etc/letsencrypt/live/stream.example.com/privkey.pem;

    location /hls {
        # Disable cache
        add_header Cache-Control no-cache;

        # CORS setup
        add_header 'Access-Control-Allow-Origin' '*' always;
        add_header 'Access-Control-Expose-Headers' 'Content-Length';

        # allow CORS preflight requests
        if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Max-Age' 1728000;
            add_header 'Content-Type' 'text/plain charset=UTF-8';
            add_header 'Content-Length' 0;
            return 204;
        }

        types {
            application/vnd.apple.mpegurl m3u8;
            video/mp2t ts;
        }

        # le répertoire de base des données
        # vous l'avez déjà créé plus haut
        root /data/;
    }

    location /stat {
        rtmp_stat all;
        rtmp_stat_stylesheet stat.xsl;
        add_header Refresh "3; $request_uri";
    }

    location /stat.xsl {
        root /data;
    }
}
```

Ajoutons une page web de stats utiles qui sera accessible via

https://stream.example.com/stat.xsl

	curl https://raw.githubusercontent.com/arut/nginx-rtmp-module/master/stat.xsl -o /data/stat.xsl

On active cette conf :

	ln -s /etc/nginx/sites-available/stream.example.com.conf /etc/nginx/sites-enabled/stream.example.com.conf

On vérifie que la syntaxe est correcte :

	nginx -t

On recharge le serveur

	systemctl reload nginx

On doit générer un certificat *TLS/SSL* pour profiter du chiffrement HTTPS. On a précédemment installé certbot. Utilison le

	certbot --nginx

