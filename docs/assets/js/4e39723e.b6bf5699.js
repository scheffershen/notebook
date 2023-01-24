"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3719],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>y});var o=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=o.createContext({}),l=function(t){var e=o.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=l(t.components);return o.createElement(s.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,s=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=l(r),d=n,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?o.createElement(y,i(i({ref:e},c),{},{components:r})):o.createElement(y,i({ref:e},c))}));function y(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p[m]="string"==typeof t?t:n,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6290:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={},i="How to skip certain database tables with mysqldump?",p={unversionedId:"MySQL/Import-Export/How to skip certain database tables with mysqldump",id:"MySQL/Import-Export/How to skip certain database tables with mysqldump",title:"How to skip certain database tables with mysqldump?",description:"$ mysqldump -u USERNAME -pPASSWORD DATABASE --ignore-table=DATABASE.tracking > database.sql",source:"@site/docs/MySQL/Import-Export/How to skip certain database tables with mysqldump.md",sourceDirName:"MySQL/Import-Export",slug:"/MySQL/Import-Export/How to skip certain database tables with mysqldump",permalink:"/notebook/docs/MySQL/Import-Export/How to skip certain database tables with mysqldump",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/MySQL/Import-Export/How to skip certain database tables with mysqldump.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to export and import large MySQL databases on Linux",permalink:"/notebook/docs/MySQL/Import-Export/How-to-export-and-import-large-MySQL-databases-on-Linux"},next:{title:"Migrate MySQL 5.7 to 8.0 via mysqldump",permalink:"/notebook/docs/MySQL/Import-Export/Migrate_MySQL_5_7_to_8_0_via_mysqldump"}},s={},l=[],c={toc:l};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-skip-certain-database-tables-with-mysqldump"},"How to skip certain database tables with mysqldump?"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ mysqldump -u USERNAME -pPASSWORD DATABASE --ignore-table=DATABASE.tracking > database.sql\n")))}m.isMDXComponent=!0}}]);