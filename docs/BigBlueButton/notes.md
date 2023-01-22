Notes
===

by Yannick, 2021

X:\UMG\Produit Logiciel\Produit - Medflixs\Passation\Final

`bbb-web` – 实现 BigBlueButton API 和用于演示的文档转换
`akka-bbb-apps` – 处理服务器上会议状态的服务器端应用程序
`bbb-html5` – 在浏览器中加载的 HTML5 客户端。 利用 MongoDB 和 React.js 的客户端服务器端流星应用程序
`bbb-fsesl-akka` – 向 FreeSWITCH 发送命令的组件
`bbb-playback-presentation` – 录制和播放脚本以创建演示布局
`bbb-webrtc-sfu` – 将来自客户端的传入请求桥接到 Kurento 的服务器
`kurento-media-server` – WebRTC 媒体服务器，用于发送/接收/录制视频（网络摄像头和屏幕共享）
`bbb-freeswitch-core` – 用于发送/接收/录制音频的 WebRTC 媒体服务器


## Générez un certificat

	$ sudo apt-get update
	$ sudo apt-get install software-properties-common
	$ sudo add-apt-repository universe
	$ sudo add-apt-repository ppa:certbot/certbot
	$ sudo apt-get install certbot

	$ sudo mkdir -p /etc/nginx/ssl
	$ sudo openssl dhparam -out /etc/nginx/ssl/dhp-4096.pem 4096

	$ sudo certbot --webroot -w /var/www/bigbluebutton-default/ -d meeting.medflixs.com certonly #why

## Configurez Freeswitch

Editez le fichier `/etc/bigbluebutton/nginx/sip.nginx` et remplacez `http` par `https`, et le port `5066` par `7443`

```
location /ws {
	proxy_pass https://203.0.113.1:7443;
	...
}
```

## Charger BBB vis https

Editez le fichier `/usr/share/bbb-web/WEB-INF/classes/bigbluebutton.properties`, et remplacez pour la variable bigbluebutton.web.serverURL `http` par `https`


```
defaultWelcomeMessage=Bienvenue sur MedflixS
...
bigbluebutton.web.serverURL=https://visio.medflixs.com
...
# Salt which is used by 3rd-party apps to authenticate api calls
securitySalt=zIuBjjsgcsel4bmQt4tcN2cquVwoS7IuZu5KNotKaE
# Directory where we drop the <meeting-id-recorded>.done file
recordStatusDir=/var/bigbluebutton/recording/status/recorded
...
# The directory where the published/unpublised recordings are located. This is for
# the get recording* api calls
publishedDir=/var/bigbluebutton/published
unpublishedDir=/var/bigbluebutton/unpublished
captionsDir=/var/bigbluebutton/captions
```

## Sécurisation des connexions

Editez le fichier `/usr/share/meteor/bundle/programs/server/assets/app/config/settings.yml` et remplacez `ws` par `wss`, et `http` par `https`

```
...
  kurento:
    wsUrl: wss://visio.medflixs.com/bbb-webrtc-sfu
...
  note:
    enabled: true
    url: https://visio.medflixs.com/pad
```

Editez le fichier `/usr/local/bigbluebutton/core/scripts/bigbluebutton.yml` et remplacez `http` par `https`

```
# For PRODUCTION
log_dir: /var/log/bigbluebutton
events_dir: /var/bigbluebutton/events
recording_dir: /var/bigbluebutton/recording
published_dir: /var/bigbluebutton/published
captions_dir: /var/bigbluebutton/captions
playback_host: visio.medflixs.com
playback_protocol: https
```

Redémarrez la solution BBB

	$ sudo bbb-conf --restart

## Safficher le BBB clé secrète

	$ sudo bbb-conf --secret

## Suppression de BBB-demo

	$ sudo apt-get purge bbb-demo

## Activation de 3 serveurs Kurento

/etc/bigbluebutton/bbb-conf/apply-config.sh

```
#!/bin/bash

# Pull in the helper functions for configuring BigBlueButton
source /etc/bigbluebutton/bbb-conf/apply-lib.sh

enableMultipleKurentos
# disableMultipleKurentos

```

## Configuration du message d’accueil

Dans le fichier `/usr/share/bbb-web/WEB-INF/classes/bigbluebutton.properties`, modifier les variables `defaultWelcomeMessage` et `defaultWelcomeMessageFooter`.

```
defaultWelcomeMessage=Bienvenue sur MedflixS
# Welcome to <b>%%CONFNAME%%</b>!<br><br>For help on using BigBlueButton see these (short) <a href="https://www.bigbluebutton.org/html5"><u>tutorial videos</u></a>.<br><br>To join the audio bridge click the phone button.  Use a headset to avoid causing background noise for others.
defaultWelcomeMessageFooter=Bienvenue sur Medflixs
```

## Présentation par défaut

Dans le fichier des propriétés de BigBlueButton `/usr/share/bbb-web/WEB-INF/classes/bigbluebutton.properties`, rechercher la variable, `beans.presentationService.defaultUploadedPresentation`

```
# Default Uploaded presentation file
beans.presentationService.defaultUploadedPresentation=${bigbluebutton.web.serverURL}/default.pdf
```

## Configuration de SIP (1/2)

Dans le répertoire ci-dessous `/opt/freeswitch/conf/sip_profiles/external/`, le fichier `unyc.xml` contient les paramètres fournis par `la société Unyc`.


## Configuration de SIP (2/2)

Dans le répertoire ci-dessous `/opt/freeswitch/conf/dialplan/public/`, le fichier `unyc.xml` contient le dialplan actuel.

## Configuration du serveur TURN (1/3)

Le `serveur TURN` utilisé est un `serveur COTURN`, https://github.com/coturn/coturn

	$ sudo apt-get install coturn

Le serveur est installé sur une VM OVH derrière un `NAT` et un `firewall`.

L’adresse du serveur est `188.165.121.163`, et le nom de domaine `turn.medflixs.com`

Les ports configuré sont les suivants,

Ports          | Protocol | Description
------------------------------------
3478           | TCP/UDP  | coturn listening port
443            | TCP/UDP  | TLS listening port
32768-65535    | UDP      | relay ports range

Un certificat a été généré (via Let’s Encrypts) pour chiffrer les communications

	$ sudo add-apt-repository ppa:certbot/certbot
	$ sudo apt-get update
	$ sudo apt-get install certbot
	$ sudo certbot certonly --standalone --preferred-challenges http -d turn.medflixs.com

## Configuration du serveur TURN (2/3)

La configuration du serveur Coturn est disponible dans le répertoire `/etc/`, et dans le fichier `turnserver.conf`

## Configuration du serveur TURN (3/3)

Côté BigBlueButton, le paramétrage du serveur à utiliser est disponible dans le fichier `/usr/share/bbb-web/WEB-INF/classes/spring/turn-stun-servers.xml`

Dans ce fichier on définit 2 serveurs : `un serveur STUN` et `un serveur TURN`.

## Architecture du code source

Ici, on va se concentrer sur les modifications graphiques de l’interface. Que ce soit pour pour modifier des éléments existants ou pour en créer de nouveaux.

Les items disponibles sur l’interface BBB sont définis dans le répertoire ci-dessous, `bigbluebutton-html5\imports\ui\components`

- actions-bar/component.jsx
- fullscreen-button/component.jsx
- imports\ui\stylesheets\variables\palette.scss

## Génération de l’image

A partir du répertoire `bigbluebutton-html5`, exécutez la commande suivante : 

	$ meteor build --server-only meteorbundle

Un fichier `bigbluebutton-html5-DDMMYYY.tar.gz` sera généré dans le repertoire `./meteorbundle`

## Extraction de l’image

1. Copiez le fichier sur le serveur contenant la solution BBB

2. Arrêt du serveur html5: 

	$ sudo systemctl stop bbb-html5

3. Décompression du fichier

	$ sudo tar -xzvf bigbluebutton-html5-DDMMYYY.tar.gz -C /usr/share/meteor

4. Redémarrage du serveur html5

	$ sudo systemctl start bbb-html5

Le répertoire `/usr/share/meteor/bundle/` contiendra l’image décompressée.


## Les technologies

- `NodeJS` : Serveur Web Javascript
- `MeteorJS` : Framework Javascript basé sur NodeJS
- `ReactJS` : Bibliothèque Javascript
- `Kurento` : Framework de serveur multimédia
- `Freeswitch` : Serveur de VoIP (commutateur audio)
	+ `SIP` : Protocole de gestion de sessions. Il est utilisé pour lier un appel téléphonique à une salle.
- `WebRTC` : Protocole de gestion des communication web temps réel
- `Turn` / `Stun`
	+ `STUN` est un protocole qui permet de découvrir votre adresse publique et de déterminer toute restriction dans votre routeur qui empêcherait une connexion directe avec un pair.
	+ `TURN` doit contourner la restriction de `NAT` Symétrique en ouvrant une connexion avec un serveur `TURN` et retransmettre toutes les informations par le biais de ce serveur.
- `MongoDB & Redis` : Base de données No-Sql
- `Etherpad` : Editeur de texte en ligne

## Version personnalisée

1. Compilez l'image

A partir du répertoire "bigbluebutton-html5", exécutez la commande suivante

	$ meteor build --server-only [répertoire de destination de l'image]

Exemple :

	$ meteor build --server-only /home/ubuntu/dev/bigbluebutton/bigbluebutton-html5/meteorbundle

2. Arrêtez le serveur html5

	$ sudo systemctl stop bbb-html5

3. Décompression de l'image

Copiez l'image sur le serveur, et exécutez la commande suivante,

	$ sudo tar -xzvf [Chemin vers l'image] -C /usr/share/meteor

Exemple :

	$ sudo tar -xzvf /home/ubuntu/dev/bigbluebutton/bigbluebutton-html5/meteorbundle/*.tar.gz -C /usr/share/meteor

4. Relancez le serveur html5

	$ sudo systemctl start bbb-html5

## Les principales commandes :

	$ bbb-conf --status
	$ bbb-conf --check
	$ bbb-conf --restart / bbb-conf --stop / bbb-conf --start
	$ bbb-conf --secret
	$ bbb-conf --debug #Afficher les logs
	$ bbb-conf --help

## Greenlight :

`Greenlight` est une interface développée en `Ruby` (basé sur le framework `RubyOnRails` et `les APIs BBB`) pour gérer un serveur BBB.

## Les API (https://docs.bigbluebutton.org/dev/api.html)

https://meeting.medflixs.com/bigbluebutton/api/join?fullName=Yannick+Mah%C3%A9&join_via_html5=true&meetingID=8e8dbb558a249854ff63eb2e332f1d959bd59594&password=XybHCEbeHHaa&userID=gl-azbpgpmvykoh&checksum=034ba75ee77c530dfc1f00d07dc775863ffd5f05

## Recommandations :

- Activation les connexions sécurisés
- Activation de 3 serveurs de media `Kurento` pour une optimisation de la qualité de l’écoute seule, des webcams et du partage d’écran.
- Installer un serveur TURN (Coturn), et le configurer sur BBB
	https://docs.bigbluebutton.org/2.2/setup-turn-server.html
	+ Fichier à modifier ensuite sur BBB : `/usr/share/bbb-web/WEB-INF/classes/spring/turn-stun-servers.xml`
