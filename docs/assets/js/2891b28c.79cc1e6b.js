"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[76675],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(t),f=o,y=s["".concat(c,".").concat(f)]||s[f]||m[f]||a;return t?r.createElement(y,i(i({ref:n},l),{},{components:t})):r.createElement(y,i({ref:n},l))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u[s]="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},23081:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={},i="Comment configurer virtualenv pour un crontab?",u={unversionedId:"Python/Comment configurer virtualenv pour un crontab",id:"Python/Comment configurer virtualenv pour un crontab",title:"Comment configurer virtualenv pour un crontab?",description:"https://www.it-swarm-fr.com/fr/python/comment-configurer-virtualenv-pour-un-crontab/970833695/",source:"@site/docs/Python/Comment configurer virtualenv pour un crontab.md",sourceDirName:"Python",slug:"/Python/Comment configurer virtualenv pour un crontab",permalink:"/notebook/docs/Python/Comment configurer virtualenv pour un crontab",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Python/Comment configurer virtualenv pour un crontab.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CUDA Simply Explained - GPU vs CPU Parallel Computing for Beginners",permalink:"/notebook/docs/Python/CUDA Simply Explained - GPU vs CPU Parallel Computing for Beginners"},next:{title:"Google Trends with Python",permalink:"/notebook/docs/Python/Google Trends with Python"}},c={},p=[],l={toc:p};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"comment-configurer-virtualenv-pour-un-crontab"},"Comment configurer virtualenv pour un crontab?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.it-swarm-fr.com/fr/python/comment-configurer-virtualenv-pour-un-crontab/970833695/"},"https://www.it-swarm-fr.com/fr/python/comment-configurer-virtualenv-pour-un-crontab/970833695/")),(0,o.kt)("p",null,"Vous pouvez configurer votre crontab pour appeler un script bash qui fait ceci:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#! /bin/bash    \ncd my_python_project_path\nsource bin/activate\n\n# virtualenv is now active, which means your PATH has been modified.\n# Don\'t try to run python from /usr/bin/python, just run "python" and\n# let the PATH figure out which version to run (based on what your\n# virtualenv has configured).\n\npython cron_script.py\n')),(0,o.kt)("p",null,"Une autre solution qui fonctionne bien"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"0    9    *    *    *    /path/to/virtenv/bin/python /path/to/cron_script.py\n")))}s.isMDXComponent=!0}}]);