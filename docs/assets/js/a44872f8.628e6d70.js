"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4117],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(t),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||u;return t?n.createElement(f,o(o({ref:r},c),{},{components:t})):n.createElement(f,o({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var u=t.length,o=new Array(u);o[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<u;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28792:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>u,metadata:()=>s,toc:()=>i});var n=t(87462),a=(t(67294),t(3905));const u={},o="10 astuces pour mieux communiquer avec l'IA",s={unversionedId:"OpenAI/examples/10 astuces pour mieux communiquer avec l-IA",id:"OpenAI/examples/10 astuces pour mieux communiquer avec l-IA",title:"10 astuces pour mieux communiquer avec l'IA",description:'Nous allons maintenant apprendre \xe0 optimiser nos recherches afin de tomber sur des r\xe9sultats plus adapt\xe9s \xe0 notre demande. Il est en effet tout \xe0 fait possible de lui parler comme l\'on parle \xe0 un humain avec un : "peux-tu reformuler ta r\xe9ponse ?", mais il faut parfois adopter certaines tournures de phrase.',source:"@site/docs/OpenAI/examples/10 astuces pour mieux communiquer avec l-IA.md",sourceDirName:"OpenAI/examples",slug:"/OpenAI/examples/10 astuces pour mieux communiquer avec l-IA",permalink:"/notebook/docs/OpenAI/examples/10 astuces pour mieux communiquer avec l-IA",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/OpenAI/examples/10 astuces pour mieux communiquer avec l-IA.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"awesome-chatgpt-prompts",permalink:"/notebook/docs/OpenAI/awesome-chatgpt-prompts"},next:{title:"6 \u500b\u4f60\u53ef\u80fd\u4e0d\u77e5\u9053\u539f\u4f86 ChatGPT \u4e5f\u80fd\u505a\u5230\u7684\u4e8b\u60c5",permalink:"/notebook/docs/OpenAI/examples/6 things you may not know that ChatGPT can do"}},l={},i=[{value:"1. Donner un contexte",id:"1-donner-un-contexte",level:2},{value:"2. Demandez-lui quelque chose de vague pour avoir plus d&#39;informations",id:"2-demandez-lui-quelque-chose-de-vague-pour-avoir-plus-dinformations",level:2},{value:"3. Faire un r\xe9sum\xe9",id:"3-faire-un-r\xe9sum\xe9",level:2},{value:"4. Affiner la recherche",id:"4-affiner-la-recherche",level:2},{value:"5. Traduire du texte",id:"5-traduire-du-texte",level:2},{value:"6. Cr\xe9er des tableaux",id:"6-cr\xe9er-des-tableaux",level:2},{value:"7. Toujours plus de pr\xe9cisions",id:"7-toujours-plus-de-pr\xe9cisions",level:2},{value:"8. Reformuler sa r\xe9ponse avec des options",id:"8-reformuler-sa-r\xe9ponse-avec-des-options",level:2},{value:"9. Inclure des termes particuliers pour affiner le degr\xe9 des d\xe9tails",id:"9-inclure-des-termes-particuliers-pour-affiner-le-degr\xe9-des-d\xe9tails",level:2},{value:"10. Cr\xe9er du code en n&#39;importe quel langage informatique",id:"10-cr\xe9er-du-code-en-nimporte-quel-langage-informatique",level:2}],c={toc:i};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"10-astuces-pour-mieux-communiquer-avec-lia"},"10 astuces pour mieux communiquer avec l'IA"),(0,a.kt)("p",null,"Nous allons maintenant apprendre \xe0 ",(0,a.kt)("em",{parentName:"p"},"optimiser nos recherches"),' afin de tomber sur des r\xe9sultats plus adapt\xe9s \xe0 notre demande. Il est en effet tout \xe0 fait possible de lui parler comme l\'on parle \xe0 un humain avec un : "peux-tu reformuler ta r\xe9ponse ?", mais il faut parfois adopter certaines tournures de phrase. '),(0,a.kt)("h2",{id:"1-donner-un-contexte"},"1. Donner un contexte"),(0,a.kt)("p",null,"Dans le texte de base, donnez-lui un contexte comme par exemple "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"imagine que tu es journaliste et que tu dois \xe9crire un article pour un site web\n")),(0,a.kt)("h2",{id:"2-demandez-lui-quelque-chose-de-vague-pour-avoir-plus-dinformations"},"2. Demandez-lui quelque chose de vague pour avoir plus d'informations"),(0,a.kt)("p",null,'Maintenant que ChatGPT est "un journaliste", nous pouvons lui demander sans probl\xe8mes du contenu journalistique. Nous allons lui demander '),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\xe0 quoi ressemble la tour Eiffel ?\n")),(0,a.kt)("h2",{id:"3-faire-un-r\xe9sum\xe9"},"3. Faire un r\xe9sum\xe9"),(0,a.kt)("p",null,"Comme la r\xe9ponse est longue, on va lui demander un r\xe9sum\xe9 pour que le texte soit plus court avec un tr\xe8s sobre : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"r\xe9sume-moi ce texte\n")),(0,a.kt)("h2",{id:"4-affiner-la-recherche"},"4. Affiner la recherche"),(0,a.kt)("p",null,"Maintenant que notre texte est plus court, on peut lui demander, en temps que journaliste, d'y ",(0,a.kt)("em",{parentName:"p"},"inclure des termes particuliers"),", "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"r\xe9\xe9cris ce r\xe9sum\xe9 en incluant des termes SEO fort\n")),(0,a.kt)("h2",{id:"5-traduire-du-texte"},"5. Traduire du texte"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"traduis-moi ce texte en anglais\n")),(0,a.kt)("h2",{id:"6-cr\xe9er-des-tableaux"},"6. Cr\xe9er des tableaux"),(0,a.kt)("p",null,"Changeons de sujet pour bifurquer sur d'autres fonctionnalit\xe9s. Nous allons cr\xe9er un tableau avantages / inconv\xe9nients sur le sujet des feux d'artifice :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"fais-moi un tableau avec 5 avantages et 5 inconv\xe9nients sur les feux d'artifice\n")),(0,a.kt)("h2",{id:"7-toujours-plus-de-pr\xe9cisions"},"7. Toujours plus de pr\xe9cisions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"fais moi un vrai brief sur l'avantage num\xe9ro 5\n")),(0,a.kt)("h2",{id:"8-reformuler-sa-r\xe9ponse-avec-des-options"},"8. Reformuler sa r\xe9ponse avec des options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"r\xe9\xe9cris-moi ce texte en 120 mots\n")),(0,a.kt)("h2",{id:"9-inclure-des-termes-particuliers-pour-affiner-le-degr\xe9-des-d\xe9tails"},"9. Inclure des termes particuliers pour affiner le degr\xe9 des d\xe9tails"),(0,a.kt)("p",null,"ChatGPT conna\xeet beaucoup de choses, dont certaines tr\xe8s pr\xe9cis\xe9ment... Nous allons lui demander quelque chose de tr\xe8s technique pour ",(0,a.kt)("em",{parentName:"p"},"avoir une r\xe9ponse toujours plus pr\xe9cise")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"d\xe9cris-moi avec grande pr\xe9cision la conception d'une bombe de 100 mm de feu d'artifice\n")),(0,a.kt)("h2",{id:"10-cr\xe9er-du-code-en-nimporte-quel-langage-informatique"},"10. Cr\xe9er du code en n'importe quel langage informatique"),(0,a.kt)("p",null,"Ce robot conversationnel peut en effet vous ",(0,a.kt)("em",{parentName:"p"},"\xe9crire du code de programmation dans le langage que vous souhaitez")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'\xe9cris-moi un logiciel en python que tu nommeras "Jeu du 421" avec trois d\xe9s \xe0 6 faces chacun, les d\xe9s sont lanc\xe9s al\xe9atoirement. Le but est de faire tomber un d\xe9 sur le 4, un d\xe9 sur le 2 et un d\xe9 sur le 1. Chaque joueur a 3 essais pour r\xe9ussir \xe0 obtenir ce r\xe9sultat. Si, au bout de 3 essais, les d\xe9s n\'ont pas fait 4 2 et 1, le joueur est expuls\xe9 de la partie.\n')))}p.isMDXComponent=!0}}]);