"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8606],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(t),b=a,d=f["".concat(s,".").concat(b)]||f[b]||u[b]||o;return t?r.createElement(d,c(c({ref:n},p),{},{components:t})):r.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[f]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},52439:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={},c="kibana conf",i={unversionedId:"ElasticSearch/docker/nginx/config/kibana_conf",id:"ElasticSearch/docker/nginx/config/kibana_conf",title:"kibana conf",description:"kibana.conf",source:"@site/docs/ElasticSearch/docker/nginx/config/kibana_conf.md",sourceDirName:"ElasticSearch/docker/nginx/config",slug:"/ElasticSearch/docker/nginx/config/kibana_conf",permalink:"/notebook/docs/ElasticSearch/docker/nginx/config/kibana_conf",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/ElasticSearch/docker/nginx/config/kibana_conf.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"elasticsearch yml",permalink:"/notebook/docs/ElasticSearch/docker/elasticsearch/elasticsearch_yml"},next:{title:"nshou_elasticsearch-kibana_kibana3_Dockfile",permalink:"/notebook/docs/ElasticSearch/docker/nshou_elasticsearch-kibana_kibana3_Dockfile"}},s={},l=[{value:"kibana.conf",id:"kibanaconf",level:2}],p={toc:l};function f(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kibana-conf"},"kibana conf"),(0,a.kt)("h2",{id:"kibanaconf"},"kibana.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"server {\n    listen 5601;\n    server_name localhost;\n\n    auth_basic \"Restricted Access\";\n    auth_basic_user_file /etc/nginx/htpasswd.users;\n\n    location / {\n        proxy_pass http://elasticsearch:5601;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection 'upgrade';\n        proxy_set_header Host $host;\n        proxy_cache_bypass $http_upgrade;\n    }\n}\n")))}f.isMDXComponent=!0}}]);