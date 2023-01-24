"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,p(p({ref:t},c),{},{components:n})):r.createElement(h,p({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={slug:"How-to-migrate-to-PHP-8.0-on-Ubuntu",title:"How to migrate to PHP 8.0 on Ubuntu"},p="How to migrate to PHP 8.0 on Ubuntu",i={unversionedId:"PHP/Installation/How to migrate to PHP 8.0 on Ubuntu",id:"PHP/Installation/How to migrate to PHP 8.0 on Ubuntu",title:"How to migrate to PHP 8.0 on Ubuntu",description:"https://websiteforstudents.com/how-to-migrate-to-php-8-0-on-ubuntu/",source:"@site/docs/PHP/Installation/How to migrate to PHP 8.0 on Ubuntu.md",sourceDirName:"PHP/Installation",slug:"/PHP/Installation/How-to-migrate-to-PHP-8.0-on-Ubuntu",permalink:"/notebook/docs/PHP/Installation/How-to-migrate-to-PHP-8.0-on-Ubuntu",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/PHP/Installation/How to migrate to PHP 8.0 on Ubuntu.md",tags:[],version:"current",frontMatter:{slug:"How-to-migrate-to-PHP-8.0-on-Ubuntu",title:"How to migrate to PHP 8.0 on Ubuntu"},sidebar:"tutorialSidebar",previous:{title:"How to Install Multiple PHP Versions on Ubuntu 22.04",permalink:"/notebook/docs/PHP/Installation/How-to-Install-Multiple-PHP-Versions-on-Ubuntu-22.04"},next:{title:"PHP 8 Roadmap",permalink:"/notebook/docs/PHP/PHP 8 Roadmap"}},s={},l=[{value:"How to Install Apache2, PHP 8, MariaDB (MySQL) and phpMyAdmin on Linux",id:"how-to-install-apache2-php-8-mariadb-mysql-and-phpmyadmin-on-linux",level:2},{value:"Erreur phpMyAdmin - Le fichier de configuration a maintenant besoin d&#39;une phrase secr\xe8te secr\xe8te",id:"erreur-phpmyadmin---le-fichier-de-configuration-a-maintenant-besoin-dune-phrase-secr\xe8te-secr\xe8te",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-migrate-to-php-80-on-ubuntu"},"How to migrate to PHP 8.0 on Ubuntu"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://websiteforstudents.com/how-to-migrate-to-php-8-0-on-ubuntu/"},"https://websiteforstudents.com/how-to-migrate-to-php-8-0-on-ubuntu/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ dpkg --get-selections | grep -i php\n$ sudo apt-get install software-properties-common\n$ sudo add-apt-repository ppa:ondrej/php\n$ sudo apt update\n$ sudo apt install php8.0-bcmath php8.0-bz2 php8.0-cli php8.0-fpm php8.0-common php8.0-curl php8.0-dev php8.0-gd php8.0-imagick php8.0-imap php8.0-intl php8.0-mbstring php8.0-mysql php8.0-opcache php8.0-readline php8.0-soap php8.0-xml php8.0-xmlrpc php8.0-zip\n$ sudo a2enmod proxy_fcgi setenvif\n$ sudo a2enconf php8.0-fpm\n$ sudo systemctl restart php8.0-fpm.service\n$ sudo apt update\n$ sudo apt install php8.0 libapache2-mod-php8.0\n$ sudo a2dismod php7.4\n$ sudo a2enmod php8.0\n$ sudo systemctl restart apache2.service\n")),(0,a.kt)("h2",{id:"how-to-install-apache2-php-8-mariadb-mysql-and-phpmyadmin-on-linux"},"How to Install Apache2, PHP 8, MariaDB (MySQL) and phpMyAdmin on Linux"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.bennetrichter.de/en/tutorials/apache2-php8-mariadb-phpmyadmin/"},"https://www.bennetrichter.de/en/tutorials/apache2-php8-mariadb-phpmyadmin/"),"    "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ cd /usr/share\n$ wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip\n$ unzip phpmyadmin.zip\n$ rm phpmyadmin.zip\n$ mv phpMyAdmin-*-all-languages phpmyadmin\n$ chmod -R 0755 phpmyadmin\n$ nano /etc/apache2/conf-available/phpmyadmin.conf\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# phpMyAdmin Apache configuration\n\nAlias /phpmyadmin /usr/share/phpmyadmin\n\n<Directory /usr/share/phpmyadmin>\n    Options SymLinksIfOwnerMatch\n    DirectoryIndex index.php\n</Directory>\n\n# Disallow web access to directories that don't need it\n<Directory /usr/share/phpmyadmin/templates>\n    Require all denied\n</Directory>\n<Directory /usr/share/phpmyadmin/libraries>\n    Require all denied\n</Directory>\n<Directory /usr/share/phpmyadmin/setup/lib>\n    Require all denied\n</Directory>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ a2enconf phpmyadmin\n$ systemctl reload apache2\n$ mkdir /usr/share/phpmyadmin/tmp/\n$ chown -R www-data:www-data /usr/share/phpmyadmin/tmp/\n")),(0,a.kt)("h2",{id:"erreur-phpmyadmin---le-fichier-de-configuration-a-maintenant-besoin-dune-phrase-secr\xe8te-secr\xe8te"},"Erreur phpMyAdmin - Le fichier de configuration a maintenant besoin d'une phrase secr\xe8te secr\xe8te"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://qastack.fr/server/615550/phpmyadmin-error-the-configuration-file-now-needs-a-secret-passphrase"},"https://qastack.fr/server/615550/phpmyadmin-error-the-configuration-file-now-needs-a-secret-passphrase")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ cp config.sample.inc.php config.inc.php\n$ nano /etc/webapps/phpmyadmin/config.inc.php\n\n$cfg['blowfish_secret'] = 'qtdRoGmbc9{8IZr323xYcSN]0s)r$9b_JUnb{~Xz';\n")))}m.isMDXComponent=!0}}]);