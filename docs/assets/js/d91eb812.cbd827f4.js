"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73448],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(r),b=o,f=d["".concat(l,".").concat(b)]||d[b]||m[b]||c;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},40914:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const c={},i="certbot_webroot vs certbot_standalone",a={unversionedId:"Certbot/certbot_webroot vs certbot_standalone",id:"Certbot/certbot_webroot vs certbot_standalone",title:"certbot_webroot vs certbot_standalone",description:"visio_medflixs",source:"@site/docs/Certbot/certbot_webroot vs certbot_standalone.md",sourceDirName:"Certbot",slug:"/Certbot/certbot_webroot vs certbot_standalone",permalink:"/notebook/docs/Certbot/certbot_webroot vs certbot_standalone",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Certbot/certbot_webroot vs certbot_standalone.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"When to use Let's Encrypt's webroot and standalone authorization",permalink:"/notebook/docs/Certbot/When to use Let-s Encrypt-s webroot and standalone authorization"},next:{title:"install",permalink:"/notebook/docs/Certbot/install"}},l={},s=[{value:"visio_medflixs",id:"visio_medflixs",level:2},{value:"medflixs",id:"medflixs",level:2}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"certbot_webroot-vs-certbot_standalone"},"certbot_webroot vs certbot_standalone"),(0,o.kt)("h2",{id:"visio_medflixs"},"visio_medflixs"),(0,o.kt)("p",null,"/etc/letsencrypt/renewal/visio.medflixs.com-002.conf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# renew_before_expiry = 30 days\nversion = 0.31.0\narchive_dir = /etc/letsencrypt/archive/visio.medflixs.com-0002\ncert = /etc/letsencrypt/live/visio.medflixs.com-0002/cert.pem\nprivkey = /etc/letsencrypt/live/visio.medflixs.com-0002/privkey.pem\nchain = /etc/letsencrypt/live/visio.medflixs.com-0002/chain.pem\nfullchain = /etc/letsencrypt/live/visio.medflixs.com-0002/fullchain.pem\n\n# Options used in the renewal process\n[renewalparams]\naccount = 090485f20e585b1c09e4e9ffcea1edfb\nauthenticator = webroot\nwebroot_path = /var/www/bigbluebutton-default,\nserver = https://acme-v02.api.letsencrypt.org/directory\n[[webroot_map]]\n")),(0,o.kt)("h2",{id:"medflixs"},"medflixs"),(0,o.kt)("p",null,"/etc/letsencrypt/renewal/",(0,o.kt)("a",{parentName:"p",href:"http://www.medflixs.com-001.conf"},"www.medflixs.com-001.conf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# renew_before_expiry = 30 days\nversion = 1.9.0\narchive_dir = /etc/letsencrypt/archive/www.medflixs.com-0001\ncert = /etc/letsencrypt/live/www.medflixs.com-0001/cert.pem\nprivkey = /etc/letsencrypt/live/www.medflixs.com-0001/privkey.pem\nchain = /etc/letsencrypt/live/www.medflixs.com-0001/chain.pem\nfullchain = /etc/letsencrypt/live/www.medflixs.com-0001/fullchain.pem\n\n# Options used in the renewal process\n[renewalparams]\nauthenticator = standalone\naccount = d5ab4ed291d9ab68c1ec01a4e2cdb53f\nserver = https://acme-v02.api.letsencrypt.org/directory\n")))}d.isMDXComponent=!0}}]);