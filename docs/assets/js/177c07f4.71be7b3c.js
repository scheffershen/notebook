"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,y=d["".concat(m,".").concat(p)]||d[p]||f[p]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i="New in Symfony 5.3: Tailwind CSS Form Theme",l={unversionedId:"Tailwind CSS/New in Symfony 5-3_Tailwind CSS Form Theme",id:"Tailwind CSS/New in Symfony 5-3_Tailwind CSS Form Theme",title:"New in Symfony 5.3: Tailwind CSS Form Theme",description:"https://symfony.com/blog/new-in-symfony-5-3-tailwind-css-form-theme",source:"@site/docs/Tailwind CSS/New in Symfony 5-3_Tailwind CSS Form Theme.md",sourceDirName:"Tailwind CSS",slug:"/Tailwind CSS/New in Symfony 5-3_Tailwind CSS Form Theme",permalink:"/notebook/docs/Tailwind CSS/New in Symfony 5-3_Tailwind CSS Form Theme",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Tailwind CSS/New in Symfony 5-3_Tailwind CSS Form Theme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rapidly build modern websites without ever leaving your HTML",permalink:"/notebook/docs/Tailwind CSS/Getting Started"},next:{title:"Utiliser Tailwind CSS 2, PurgeCSS avec Symfony et Webpack Encore",permalink:"/notebook/docs/Tailwind CSS/Utiliser Tailwind CSS 2_PurgeCSS avec Symfony et Webpack Encore"}},m={},s=[],c={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"new-in-symfony-53-tailwind-css-form-theme"},"New in Symfony 5.3: Tailwind CSS Form Theme"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://symfony.com/blog/new-in-symfony-5-3-tailwind-css-form-theme"},"https://symfony.com/blog/new-in-symfony-5-3-tailwind-css-form-theme"),"\n28, 2021 "),(0,o.kt)("p",null,"Symfony 5.3 we\u2019ve added a new Tailwind CSS theme for Symfony forms."),(0,o.kt)("p",null,"The new theme is based on ",(0,o.kt)("a",{parentName:"p",href:"https://tailwindcss.com/blog/tailwindcss-v2"},"Tailwind CSS 2.x")),(0,o.kt)("p",null,"Start by applying the theme to some form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-twig"},"{% form_theme form 'tailwind_2_layout.html.twig' %}\n\n{% block body %}\n    <h1>User Sign Up:</h1>\n    {{ form(form) }}\n{% endblock %}\n")),(0,o.kt)("p",null,"Then, you can customize each part of the form field using the ",(0,o.kt)("inlineCode",{parentName:"p"},"*_class")," options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-twig"},"{{ form_row(form.username, {\n    row_class: 'mt-2 px-3 ...',\n    label_class: 'font-semibold text-gray-600 ...',\n    error_item_class: 'text-red-700 ...',\n    widget_class: 'border border-gray-200 bg-gray-50 ...',\n    widget_disabled_class: 'border-dashed text-gray-200 ...',\n    widget_errors_class: 'border-double border-red-500 bg-red-50 ...',\n}) }}\n")),(0,o.kt)("p",null,"If you want to apply the same styles to different fields and/or forms, you don\u2019t have to repeat the same custom styles over and over again."),(0,o.kt)("p",null,"Instead, create your own form theme based on the Tailwind CSS theme as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-twig"},"{# templates/form/theme.html.twig #}\n{% use 'tailwind_2_layout.html.twig' %}\n\n{% block form_row %}\n    {% set row_class = row_class|default('mt-2 px-3 ...') %}\n    {{ parent() }}\n{% endblock form_row %}\n\n{% block form_label %}\n    {% set label_class = label_class|default('font-semibold text-gray-600 ...') %}\n    {{ parent() }}\n{% endblock form_label %}\n\n{# ... #}\n")),(0,o.kt)("p",null,"Then, register and use this theme in your application the same as any other ","[custom Symfony form theme]","(",(0,o.kt)("a",{parentName:"p",href:"https://symfony.com/doc/current/form/form_themes.html"},"https://symfony.com/doc/current/form/form_themes.html"),"."))}d.isMDXComponent=!0}}]);