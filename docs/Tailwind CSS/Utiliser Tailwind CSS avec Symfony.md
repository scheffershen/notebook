Utiliser Tailwind CSS avec Symfony
==================================

https://blog.rherault.fr/utiliser-tailwindcss-avec-symfony/

23 avril 2021

## Installer Webpack Encore

	$ composer require symfony/webpack-encore-bundle
	$ yarn install

## Installer Sass

webpack.config.js

```js
Encore
    // ...

    // Enable Sass Support
    .enableSassLoader()
    // Enable PostCSS Support
    .enablePostCssLoader()    
```

## Installer PostCSS

	$ yarn add postcss-loader autoprefixer --dev

postcss.config.js

```js
module.exports = {
    plugins: {
    	tailwindcss: {},
        autoprefixer: {}
    }
}
```

## Tailwind CSS

A l’heure actuelle, Webpack Encore ne supporte pas PostCSS 8, il faut donc faire une installation un peu différente qu’habituellement :

	$ yarn add tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat --dev

Enfin concernant les fichiers de configuration, il faut générer le fichier de tailwind avec cette commande :

	$ npx tailwindcss init

Celle-ci va générer la « base » du fichier de configuration du framework (`tailwind.config.js`), c’est dans ce fichier que tu vas pouvoir configurer les couleurs, etc.. de Tailwind afin que celui-ci colle parfaitement à ton site.

Et pour finir, il faut importer tailwindcss dans notre fichier app.scss :

```scss
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

## Bonus : Tailwind CSS pour la production ?

Il est possible de compiler une version « allégée » de Tailwind CSS en production. Cela permet d’éviter de charger un trop gros fichier et charge uniquement ce dont ton site a besoin.

Pour cela, Tailwind utilise PurgeCSS, un module permettant de supprimer le CSS inutilisé lors de la compilation. Ce module est déjà présent de base dans ce framework CSS, il suffit de l’activer dans la directive « purge » du fichier de configuration :

tailwind.config.js

```js
module.exports = {
  purge: {
    content: ['./templates/**/*.html.twig']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [],
}
```