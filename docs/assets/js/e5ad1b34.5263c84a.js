"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3712],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,c(c({ref:t},l),{},{components:r})):n.createElement(h,c({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},c=void 0,i={unversionedId:"apache/configuration/mod_proxy_rediriger en tout transparence Apache vers un port sp\xe9cifique",id:"apache/configuration/mod_proxy_rediriger en tout transparence Apache vers un port sp\xe9cifique",title:"mod_proxy_rediriger en tout transparence Apache vers un port sp\xe9cifique",description:"Activation des modules n\xe9cessaires",source:"@site/docs/apache/configuration/mod_proxy_rediriger en tout transparence Apache vers un port sp\xe9cifique.md",sourceDirName:"apache/configuration",slug:"/apache/configuration/mod_proxy_rediriger en tout transparence Apache vers un port sp\xe9cifique",permalink:"/notebook/docs/apache/configuration/mod_proxy_rediriger en tout transparence Apache vers un port sp\xe9cifique",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/apache/configuration/mod_proxy_rediriger en tout transparence Apache vers un port sp\xe9cifique.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Utiliser mod_rewrite pour le contr\xf4le d'acc\xe8s",permalink:"/notebook/docs/apache/configuration/Utiliser mod_rewrite pour le contr\xf4le d acc\xe8s"},next:{title:"switcher apache vers l'autre port",permalink:"/notebook/docs/apache/configuration/switcher apache vers l autre port"}},s={},p=[{value:"Activation des modules n\xe9cessaires",id:"activation-des-modules-n\xe9cessaires",level:3},{value:"Exemple d\u2019utilisation avec Icecast et Shoutcast",id:"exemple-dutilisation-avec-icecast-et-shoutcast",level:3},{value:"Example 2. From Apache HTTPS to Tomcat HTTP",id:"example-2-from-apache-https-to-tomcat-http",level:3}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"activation-des-modules-n\xe9cessaires"},"Activation des modules n\xe9cessaires"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo a2enmod proxy proxy_http\nsudo /etc/init.d/apache2 restart\n")),(0,o.kt)("h3",{id:"exemple-dutilisation-avec-icecast-et-shoutcast"},"Exemple d\u2019utilisation avec Icecast et Shoutcast"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<VirtualHost *:80>\n        ProxyPreserveHost On\n        ProxyRequests Off\n        \n        ServerAdmin postmaster@domaine.tld\n        ServerName streaming.domaine.tld\n        \n        ProxyPass / http://localhost:8000/\n        ProxyPassReverse / http://localhost:8000/\n</VirtualHost>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/etc/init.d/apache2 reload\n")),(0,o.kt)("h3",{id:"example-2-from-apache-https-to-tomcat-http"},"Example 2. From Apache HTTPS to Tomcat HTTP"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NameVirtualHost *:443\n<VirtualHost *:443>\n        ServerName mysite.com\n        ProxyPass / http://tomcat-host:8080/\n        ProxyPassReverse / http://tomcat-host:8080/\n        RedirectMatch ^/$ https://mysite.com/\n        SSLEngine on\n        SSLCertificateFile /etc/httpd/certs/mysite.com.crt\n        SSLCertificateKeyFile /etc/httpd/certs/mysite.com.key\n</VirtualHost>\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/howto/reverse_proxy.html"},"https://httpd.apache.org/docs/2.4/howto/reverse_proxy.html")))}u.isMDXComponent=!0}}]);