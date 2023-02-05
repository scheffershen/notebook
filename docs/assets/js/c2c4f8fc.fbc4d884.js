"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26302],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>y});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=l.createContext({}),s=function(e){var n=l.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return l.createElement(u.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,y=p["".concat(u,".").concat(d)]||p[d]||c[d]||r;return t?l.createElement(y,o(o({ref:n},m),{},{components:t})):l.createElement(y,o({ref:n},m))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},17085:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var l=t(87462),a=(t(67294),t(3905));const r={},o="NelmioCorsBundle",i={unversionedId:"Symfony/Bundles/NelmioCorsBundle",id:"Symfony/Bundles/NelmioCorsBundle",title:"NelmioCorsBundle",description:"trop facile",source:"@site/docs/Symfony/Bundles/NelmioCorsBundle.md",sourceDirName:"Symfony/Bundles",slug:"/Symfony/Bundles/NelmioCorsBundle",permalink:"/notebook/docs/Symfony/Bundles/NelmioCorsBundle",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Symfony/Bundles/NelmioCorsBundle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LiipFunctionalTestBundle",permalink:"/notebook/docs/Symfony/Bundles/LiipFunctionalTestBundle"},next:{title:"dataTable in symfony project",permalink:"/notebook/docs/Symfony/Bundles/SymfonyOpenSourceProjects-DataTable"}},u={},s=[{value:"Projects which it use",id:"projects-which-it-use",level:2},{value:"config/packages/nelmio_cors.yaml",id:"configpackagesnelmio_corsyaml",level:2}],m={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nelmiocorsbundle"},"NelmioCorsBundle"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"trop facile")),(0,a.kt)("p",null,"Adds CORS headers support in your Symfony2 application"),(0,a.kt)("h2",{id:"projects-which-it-use"},"Projects which it use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"omed",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"friendsofsymfony/user-bundle": "~2.0@dev",'),(0,a.kt)("li",{parentName:"ul"},'"api-platform/api-pack": "^1.0",'),(0,a.kt)("li",{parentName:"ul"},'"lexik/jwt-authentication-bundle": "^2.4",'),(0,a.kt)("li",{parentName:"ul"},'"nelmio/cors-bundle": "^1.5",'))),(0,a.kt)("li",{parentName:"ul"},"documentManager",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"api-platform/api-pack": "^1.0",'),(0,a.kt)("li",{parentName:"ul"},'"javiereguiluz/easyadmin-bundle": "^1.17",'),(0,a.kt)("li",{parentName:"ul"},'"lexik/jwt-authentication-bundle": "^2.4",'),(0,a.kt)("li",{parentName:"ul"},'"nelmio/cors-bundle": "^1.5",'))),(0,a.kt)("li",{parentName:"ul"},"Services",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"api-platform/core": "^2.0",'),(0,a.kt)("li",{parentName:"ul"},'"nelmio/cors-bundle": "^1.4",'),(0,a.kt)("li",{parentName:"ul"},'"lexik/jwt-authentication-bundle",'))),(0,a.kt)("li",{parentName:"ul"},"symfony4-mongodb-jwt-starter",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"lexik/jwt-authentication-bundle": "^2.4",'),(0,a.kt)("li",{parentName:"ul"},'"nelmio/cors-bundle": "^1.5",')))),(0,a.kt)("h2",{id:"configpackagesnelmio_corsyaml"},"config/packages/nelmio_cors.yaml"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"omed")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"nelmio_cors:\n    defaults:\n        origin_regex: true\n        allow_origin: ['%env(CORS_ALLOW_ORIGIN)%']\n        allow_methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'PATCH', 'DELETE']\n        allow_headers: ['Content-Type', 'Authorization']\n        max_age: 3600\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"documentManager")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"nelmio_cors:\n    defaults:\n        origin_regex: true\n        allow_origin: ['%env(CORS_ALLOW_ORIGIN)%']\n        allow_methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'PATCH', 'DELETE']\n        allow_headers: ['Content-Type', 'Authorization']\n        max_age: 3600\n    paths:\n        '^/': ~\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"coopcycle-web")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'nelmio_cors:\n    defaults:\n        allow_origin:   ["%cors_allow_origin%"]\n        allow_methods:  ["POST", "PUT", "GET", "DELETE", "OPTIONS"]\n        allow_headers:  ["content-type", "authorization"]\n        expose_headers: ["link"]\n        max_age:        3600\n    paths:\n        \'^/api/\':\n            allow_origin: [\'*\']\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Services")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"nelmio_cors:\n    defaults:\n        allow_origin: ['%cors_allow_origin%']\n        allow_methods: ['POST', 'PUT', 'GET', 'DELETE', 'OPTIONS']\n        allow_headers: ['content-type', 'authorization']\n        expose_headers: ['link']\n        max_age: 3600\n    paths:\n        '^/': ~\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"symfony4-mongodb-jwt-starter")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"nelmio_cors:\n    defaults:\n        origin_regex: true\n        allow_origin: ['%env(CORS_ALLOW_ORIGIN)%']\n        allow_methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'PATCH', 'DELETE']\n        allow_headers: ['Content-Type', 'Authorization']\n        max_age: 3600\n    paths:\n        '^/': ~\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"symfony_coopcycle")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'nelmio_cors:\n    defaults:\n        allow_origin:   ["%cors_allow_origin%"]\n        allow_methods:  ["POST", "PUT", "GET", "DELETE", "OPTIONS"]\n        allow_headers:  ["content-type", "authorization"]\n        expose_headers: ["link"]\n        max_age:        3600\n    paths:\n        \'^/api/\':\n            allow_origin: [\'*\']\n')))}p.isMDXComponent=!0}}]);