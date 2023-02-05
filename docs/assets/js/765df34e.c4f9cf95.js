"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[79746],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),i=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=i(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||s;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var i=2;i<s;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},71202:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=t(87462),o=(t(67294),t(3905));const s={},a="wordpress code reference",l={unversionedId:"Wordpress/wordpress-code-reference",id:"Wordpress/wordpress-code-reference",title:"wordpress code reference",description:"Classes",source:"@site/docs/Wordpress/wordpress-code-reference.md",sourceDirName:"Wordpress",slug:"/Wordpress/wordpress-code-reference",permalink:"/notebook/docs/Wordpress/wordpress-code-reference",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Wordpress/wordpress-code-reference.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WordPress Architecture Explained in Great",permalink:"/notebook/docs/Wordpress/wordpress-architecture"},next:{title:"xApi",permalink:"/notebook/docs/category/xapi"}},p={},i=[{value:"Classes",id:"classes",level:2},{value:"Hooks",id:"hooks",level:2},{value:"Functions",id:"functions",level:2},{value:"Methods",id:"methods",level:2},{value:"API",id:"api",level:2}],c={toc:i};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wordpress-code-reference"},"wordpress code reference"),(0,o.kt)("h2",{id:"classes"},"Classes"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/classes/"},"https://developer.wordpress.org/reference/classes/")),(0,o.kt)("h2",{id:"hooks"},"Hooks"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/hoods/"},"https://developer.wordpress.org/reference/hoods/")),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/"},"https://developer.wordpress.org/reference/functions/")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/methods/"},"https://developer.wordpress.org/reference/methods/")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dashboard widgets"),(0,o.kt)("li",{parentName:"ul"},"Database"),(0,o.kt)("li",{parentName:"ul"},"HTTP API"),(0,o.kt)("li",{parentName:"ul"},"Filesystem"),(0,o.kt)("li",{parentName:"ul"},"Global Variables"),(0,o.kt)("li",{parentName:"ul"},"Metadata"),(0,o.kt)("li",{parentName:"ul"},"Options"),(0,o.kt)("li",{parentName:"ul"},"Plugins"),(0,o.kt)("li",{parentName:"ul"},"Quicktags"),(0,o.kt)("li",{parentName:"ul"},"REST API"),(0,o.kt)("li",{parentName:"ul"},"Rewrite"),(0,o.kt)("li",{parentName:"ul"},"Settings"),(0,o.kt)("li",{parentName:"ul"},"Shortcode"),(0,o.kt)("li",{parentName:"ul"},"Theme Modification"),(0,o.kt)("li",{parentName:"ul"},"Transients"),(0,o.kt)("li",{parentName:"ul"},"XML-RPC")))}d.isMDXComponent=!0}}]);