"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[51990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(n),g=o,m=l["".concat(u,".").concat(g)]||l[g]||f[g]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},28168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={},a="Test Your Nginx Configuration",c={unversionedId:"Nginx/Test Your Nginx Configuration",id:"Nginx/Test Your Nginx Configuration",title:"Test Your Nginx Configuration",description:"https://til.hashrocket.com/posts/4cd064a7ca-test-your-nginx-configuration",source:"@site/docs/Nginx/Test Your Nginx Configuration.md",sourceDirName:"Nginx",slug:"/Nginx/Test Your Nginx Configuration",permalink:"/notebook/docs/Nginx/Test Your Nginx Configuration",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Nginx/Test Your Nginx Configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"default_conf",permalink:"/notebook/docs/Nginx/RTMP/etc_nginx/site-available/default_conf"},next:{title:"Using Nginx + RTMP + HLS to livestream to a webpage with Video.js",permalink:"/notebook/docs/Nginx/etc/nginx/Using Nginx RTMP HLS livestream to a webpage with videoJS"}},u={},s=[{value:"Turn up the verbosity with this command:",id:"turn-up-the-verbosity-with-this-command",level:2}],p={toc:s};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"test-your-nginx-configuration"},"Test Your Nginx Configuration"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://til.hashrocket.com/posts/4cd064a7ca-test-your-nginx-configuration"},"https://til.hashrocket.com/posts/4cd064a7ca-test-your-nginx-configuration")),(0,o.kt)("h2",{id:"turn-up-the-verbosity-with-this-command"},"Turn up the verbosity with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# nginx -c /etc/nginx/nginx.conf -t\n")))}l.isMDXComponent=!0}}]);