moodle-et-xapi
===

http://fraysse.eu/fr/moodle-et-xapi/

## Comment faire du xAPI avec Moodle ?

Premier point important, Moodle n’est pas nativement conforme à xAPI, et même si le sujet est régulièrement évoqué, il ne semble pas que cela soit à l’ordre du jour. Il faut donc chercher la solution de côté des extensions. En la matière, 2 plugins ont acquis une certaine notoriété.

## TinCan Launch

Le 1er est *TinCan Launch* (ou *xAPI Launch Link*), qui permet d’importer un contenu xAPI dans Moodle puis de le lancer afin qu’il puisse communiquer directement avec un LRS. Ce plugin a le mérite de fonctionner avec les contenus issus de plusieurs outils auteurs connus (Captivate, Storyline, etc.). En revanche, la méthode utilisée (TinCan) est ancienne et devrait être remplacée par CMI5, qui est le protocole officiel pour ce sujet, plus sécurisé et plus clair quant au format des traces. Mais à ce jour, il n’existe à ma connaissance aucun plugin CMI5 disponible.

## CMI5

## Logstore xAPI

Le 2nd plugin, nommé *Logstore xAPI*, permet d’écouter les événements internes de Moodle, de les transformer en traces xAPI, puis de les envoyer à un LRS. L’approche est très astucieuse quand on sait qu’il existe des événements pour à peu près tout dans Moodle. Bien sûr, tous les événements ne sont pas traités à ce jour. Mais la principale réserve que je ferais est que les traces générées gagneraient à respecter un certain nombre de bonnes pratiques. Un plugin intéressant donc, mais à utiliser en connaissance de cause.

## H5P

Autre solution notable à signaler : il s’agit de la solution *H5P* qui est un outil auteur Open Source intégrable à Moodle.  Un travail formidable a été fait pour assurer la génération de traces xAPI à partir des différents types de contenus produits. Toutefois, les traces ainsi générées ne sont pas acheminées jusqu’au LRS. Il est nécessaire de produire du code pour assurer l’intégration au LRS.

On le voit, les principales solutions que je viens d’évoquer montrent un certain intérêt pour xAPI dans la communauté Moodle, ce qui est une bonne chose. On reste toutefois un peu frustré car aucune solution ne parait réellement prête à l’emploi.