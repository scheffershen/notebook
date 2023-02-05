EasyAdminBundle_SonataAdminBundle
===============

## EasyAdmin

https://github.com/EasyCorp/EasyAdminBundle
[demo](https://github.com/EasyCorp/easyadmin-demo.git)

Admin generator for Symfony applications

02-2022

EasyAdmin 4 requires PHP &gt; 8.0.2 or higher and Symfony &gt; 5.4 or higher. 
EasyAdmin 3 requires PHP &gt; 7.2 or higher and Symfony &gt; 4.4 or higher. 
EasyAdmin 2 requires PHP &gt; 7.1 or higher and Symfony &gt; 4.4 or higher. 

## who use it

- [documentManager, "easycorp/easyadmin-bundle": "^1.17](https://github.com/matthieuleorat/documentManager) (a example)
	+  "symfony/console": "^4.0", php 7.1, "easycorp/easyadmin-bundle": "^1.17",
- [phpquiz, "easycorp/easyadmin-bundle": "^3.1](https://github.com/strangebuzz/phpquiz)
	+ php 8, "easycorp/easyadmin-bundle": "^3.1", "symfony/browser-kit": "^5.2",
- [phpdish, "easycorp/easyadmin-bundle": "^1.17, sonata-project/doctrine-orm-admin-bundle": "^3.4](https://github.com/phpdish/phpdish)
- [CmsBundle](https://github.com/Orbitale/CmsBundle)

## misc

- `javiereguiluz/easyadmin-bundle`: "This package is abandoned and no longer maintained. The author suggests using the `easycorp/easyadmin-bundle` package instead".
- alterphp/easyadmin-extension-bundle: "This bundle provides some extensions to easycorp/easyadmin-bundle"

## easyadminbundle vs sonataadminbundle

[Avec Sonata Admin et plus largement la suite Sonata, c’est un véritable CMS avec plusieurs bundles interdépendants qui peut être mis en place, possédant de nombreuses fonctionnalités : CRUD de nos entités bien sûr, mais aussi entre autres création de blocks réutilisables, gestion des administrateurs, et bien d'autres dont une fonctionnalité qui est une (pour moi) des plus intéressantes de la suite : la possibilité d’intégrer avec Sonata Page un « page builder », permettant à un administrateur de gérer une page en intégrant des blocs de contenu de manière très flexible (à la manière des champs flexibles d’ACF pour Wordpress).
Cette richesse a bien sûr des contreparties : une configuration un peu plus complexe et une lourdeur plus importante à gérer. La documentation de Sonata est aussi parfois assez obscure (même si cela a évolué au fil des années) certaines fonctionnalités n’étant peu, voire pas du tout documentées.](https://david-robert.fr/articles/view/symfony-sonata-vs-easy-admin)


Easy Admin de son côté fait le choix de n’intégrer que des fonctionnalités clés (sans suite de bundles), c’est à dire la gestion CRUD des entités depuis une administration, et laisse libre les développeurs de mettre en place en suivant les fonctionnalités de son choix pour agrémenter celles d’Easy Admin.
Le bundle porte donc bien son nom, et c’est là ou se trouvent ses atouts : une prise en main simplifiée par rapport à Sonata, et une configuration très aisée pour mettre en place un back office. Easy Admin peut donc être décrit comme un Sonata simplifié, avec les avantages et inconvénients que cela implique.

La réponse à la question « Easy Admin ou Sonata ? » dépend donc fortement du contexte : pour une mise en place rapide d’une interface d’administration avec des fonctionnalités relativement simples ou au contraire très spécifiques et donc à développer à la main, Easy Admin sera à mon sens à privilégier. Pour un back office plus complexe, et pour pouvoir laisser la main à l’administrateur à plus de contenu (pages etc), Sonata pourra être utilisé.

## who use SonataAdminBundle

- [en-marche.fr, "sonata-project/admin-bundle": "^3.49"](./)
	+ "symfony/asset": "^4.4", php 7.4 (Very Good example!!!)
- [uh.cx, "sonata-project/admin-bundle": "^3.20"](./)
- [phpdish, "sonata-project/admin-bundle": "^3.31",](./)

## documentation

- https://symfony.com/bundles/EasyAdminBundle/current/index.html
- https://docs.sonata-project.org/projects/SonataAdminBundle/en/4.x/index.html

## demo

https://github.com/sonata-project/sandbox (v3)