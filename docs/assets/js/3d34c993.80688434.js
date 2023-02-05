"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[78694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},43447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={},a="command line",s={unversionedId:"PHP/Tests/PHPunit/command-line",id:"PHP/Tests/PHPunit/command-line",title:"command line",description:"examples",source:"@site/docs/PHP/Tests/PHPunit/command-line.md",sourceDirName:"PHP/Tests/PHPunit",slug:"/PHP/Tests/PHPunit/command-line",permalink:"/notebook/docs/PHP/Tests/PHPunit/command-line",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/PHP/Tests/PHPunit/command-line.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Assertions",permalink:"/notebook/docs/PHP/Tests/PHPunit/assertions"},next:{title:"Mocking in PHPUnit",permalink:"/notebook/docs/PHP/Tests/PHPunit/mock-stub"}},c={},l=[{value:"examples",id:"examples",level:2},{value:"options",id:"options",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"command-line"},"command line"),(0,o.kt)("h2",{id:"examples"},"examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// phpunit <php test file path> --<option> <name of function>\n$ php vendor/bin/phpunit tests/CartTest.php --colors --filter the_cart_tax\n")),(0,o.kt)("h2",{id:"options"},"options"),(0,o.kt)("p",null,"--exclude-group\n--group\n--colors: output with the color\n--filter: filtered by the name of test function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Ex: phpunit tests/testA.php --filter testBla\n")))}u.isMDXComponent=!0}}]);