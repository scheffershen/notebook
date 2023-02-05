"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72028],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},15128:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const a={},l="Utiliser Tailwind CSS avec Symfony",o={unversionedId:"Tailwind CSS/Utiliser Tailwind CSS avec Symfony",id:"Tailwind CSS/Utiliser Tailwind CSS avec Symfony",title:"Utiliser Tailwind CSS avec Symfony",description:"https://blog.rherault.fr/utiliser-tailwindcss-avec-symfony/",source:"@site/docs/Tailwind CSS/Utiliser Tailwind CSS avec Symfony.md",sourceDirName:"Tailwind CSS",slug:"/Tailwind CSS/Utiliser Tailwind CSS avec Symfony",permalink:"/notebook/docs/Tailwind CSS/Utiliser Tailwind CSS avec Symfony",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Tailwind CSS/Utiliser Tailwind CSS avec Symfony.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Utiliser Tailwind CSS 2, PurgeCSS avec Symfony et Webpack Encore",permalink:"/notebook/docs/Tailwind CSS/Utiliser Tailwind CSS 2_PurgeCSS avec Symfony et Webpack Encore"},next:{title:"Templates",permalink:"/notebook/docs/category/templates"}},s={},c=[{value:"Installer Webpack Encore",id:"installer-webpack-encore",level:2},{value:"Installer Sass",id:"installer-sass",level:2},{value:"Installer PostCSS",id:"installer-postcss",level:2},{value:"Tailwind CSS",id:"tailwind-css",level:2},{value:"Bonus : Tailwind CSS pour la production ?",id:"bonus--tailwind-css-pour-la-production-",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"utiliser-tailwind-css-avec-symfony"},"Utiliser Tailwind CSS avec Symfony"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blog.rherault.fr/utiliser-tailwindcss-avec-symfony/"},"https://blog.rherault.fr/utiliser-tailwindcss-avec-symfony/")),(0,i.kt)("p",null,"23 avril 2021"),(0,i.kt)("h2",{id:"installer-webpack-encore"},"Installer Webpack Encore"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ composer require symfony/webpack-encore-bundle\n$ yarn install\n")),(0,i.kt)("h2",{id:"installer-sass"},"Installer Sass"),(0,i.kt)("p",null,"webpack.config.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Encore\n    // ...\n\n    // Enable Sass Support\n    .enableSassLoader()\n    // Enable PostCSS Support\n    .enablePostCssLoader()    \n")),(0,i.kt)("h2",{id:"installer-postcss"},"Installer PostCSS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yarn add postcss-loader autoprefixer --dev\n")),(0,i.kt)("p",null,"postcss.config.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    plugins: {\n        tailwindcss: {},\n        autoprefixer: {}\n    }\n}\n")),(0,i.kt)("h2",{id:"tailwind-css"},"Tailwind CSS"),(0,i.kt)("p",null,"A l\u2019heure actuelle, Webpack Encore ne supporte pas PostCSS 8, il faut donc faire une installation un peu diff\xe9rente qu\u2019habituellement :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yarn add tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat --dev\n")),(0,i.kt)("p",null,"Enfin concernant les fichiers de configuration, il faut g\xe9n\xe9rer le fichier de tailwind avec cette commande :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ npx tailwindcss init\n")),(0,i.kt)("p",null,"Celle-ci va g\xe9n\xe9rer la \xab base \xbb du fichier de configuration du framework (",(0,i.kt)("inlineCode",{parentName:"p"},"tailwind.config.js"),"), c\u2019est dans ce fichier que tu vas pouvoir configurer les couleurs, etc.. de Tailwind afin que celui-ci colle parfaitement \xe0 ton site."),(0,i.kt)("p",null,"Et pour finir, il faut importer tailwindcss dans notre fichier app.scss :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},'@import "tailwindcss/base";\n@import "tailwindcss/components";\n@import "tailwindcss/utilities";\n')),(0,i.kt)("h2",{id:"bonus--tailwind-css-pour-la-production-"},"Bonus : Tailwind CSS pour la production ?"),(0,i.kt)("p",null,"Il est possible de compiler une version \xab all\xe9g\xe9e \xbb de Tailwind CSS en production. Cela permet d\u2019\xe9viter de charger un trop gros fichier et charge uniquement ce dont ton site a besoin."),(0,i.kt)("p",null,"Pour cela, Tailwind utilise PurgeCSS, un module permettant de supprimer le CSS inutilis\xe9 lors de la compilation. Ce module est d\xe9j\xe0 pr\xe9sent de base dans ce framework CSS, il suffit de l\u2019activer dans la directive \xab purge \xbb du fichier de configuration :"),(0,i.kt)("p",null,"tailwind.config.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  purge: {\n    content: ['./templates/**/*.html.twig']\n  },\n  darkMode: false, // or 'media' or 'class'\n  theme: {},\n  variants: {\n    extend: {},\n  },\n  plugins: [],\n}\n")))}u.isMDXComponent=!0}}]);