Utiliser mod_rewrite pour le contrôle d'accès
=============================================

http://eost.u-strasbg.fr/manual/fr/rewrite/access.html

Il explique comment utiliser mod_rewrite pour contrôler l'accès à diverses ressources,

## Blocage du référencement à chaud (Hotlinking) d'images

Cette technique vous permet d'interdire à d'autres sites d'inclure directement vos images dans leurs pages.

#### ex 1: 

Dans le premier exemple, nous rejetons tout simplement la requête si elle ne provenait pas d'une page appartenant à notre site. Pour les besoins de cet exemple, nous supposons que le nom de votre site est www.example.com.

```
RewriteCond "%{HTTP_REFERER}" "!^$"
RewriteCond "%{HTTP_REFERER}" "!www.example.com" [NC]
RewriteRule "\.(gif|jpg|png)$"    "-"   [F,NC]
```

#### ex 2:

Dans le second exemple, plutôt que de rejeter la requête, nous affichons une autre image à la place.

```
RewriteCond "%{HTTP_REFERER}" "!^$"
RewriteCond "%{HTTP_REFERER}" "!www.example.com" [NC]
RewriteRule "\.(gif|jpg|png)$"    "/images/go-away.png"   [R,NC]
```

#### ex 3:

Dans le troisième exemple, nous redirigeons la requête vers une image appartenant à un autre site.

```
RewriteCond "%{HTTP_REFERER}" "!^$"
RewriteCond "%{HTTP_REFERER}" "!www.example.com" [NC]
RewriteRule "\.(gif|jpg|png)$" "http://other.example.com/image.gif"   [R,NC]
```

#### ex 4:

Si vous ne voulez pas rediriger la requête, mais simplement interdire l'accès à la ressource, vous pouvez y parvenir sans utiliser mod_rewrite :

```
SetEnvIf Referer "advanzpharma.medica-source\.com" local_referer

<FilesMatch "\.(xlsx)$">
  Require env local_referer
</FilesMatch>
```

## Conteneurs de système de fichiers

Par exemple, avec la configuration suivante, l'indexation sera activée pour le répertoire /var/web/dir1 et tous ses sous-répertoires.

```
<Directory "/var/web/dir1">
    Options +Indexes
</Directory>
```