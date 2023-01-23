"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=i(n),b=a,k=s["".concat(p,".").concat(b)]||s[b]||m[b]||o;return n?r.createElement(k,c(c({ref:t},l),{},{components:n})):r.createElement(k,c({ref:t},l))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[s]="string"==typeof e?e:a,c[1]=u;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},7737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={},c="backup-manager",u={unversionedId:"Linux/backup/backup-manager/backup-manager",id:"Linux/backup/backup-manager/backup-manager",title:"backup-manager",description:"https://doc.ubuntu-fr.org/backup-manager",source:"@site/docs/Linux/backup/backup-manager/backup-manager.md",sourceDirName:"Linux/backup/backup-manager",slug:"/Linux/backup/backup-manager/",permalink:"/notebook/docs/Linux/backup/backup-manager/",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Linux/backup/backup-manager/backup-manager.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Backup manager",permalink:"/notebook/docs/category/backup-manager"},next:{title:"PHP",permalink:"/notebook/docs/category/php"}},p={},i=[{value:"Install",id:"install",level:2},{value:"Configuration",id:"configuration",level:2},{value:"SUtilisation",id:"sutilisation",level:2}],l={toc:i};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"backup-manager"},"backup-manager"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://doc.ubuntu-fr.org/backup-manager"},"https://doc.ubuntu-fr.org/backup-manager")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pour pouvoir consulter la documentation officielle compl\xe8te en PDF et HTML dans /usr/share/doc/backup-manager-doc/. (en anglais)\n")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"D\xe9pendances :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo apt-get install gettext perl\n")),(0,a.kt)("p",null,"D\xe9sarchivage :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"unzip ~/T\xe9l\xe9chargements/Backup-Manager-master.zip\n")),(0,a.kt)("p",null,"Installation :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ~/Backup-Manager-master\nsudo make install\n")),(0,a.kt)("p",null,"Utilisation du fichier de configuration fourni :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo cp /usr/share/backup-manager/backup-manager.conf.tpl /etc/backup-manager.conf\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h2",{id:"sutilisation"},"SUtilisation"))}s.isMDXComponent=!0}}]);