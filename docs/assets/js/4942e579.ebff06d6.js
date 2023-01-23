"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?i.createElement(m,a(a({ref:t},f),{},{components:n})):i.createElement(m,a({ref:t},f))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const o={},a="Offline Web",l={unversionedId:"HTML/Utilities/Offline Web",id:"HTML/Utilities/Offline Web",title:"Offline Web",description:"Offline Detection",source:"@site/docs/HTML/Utilities/Offline Web.md",sourceDirName:"HTML/Utilities",slug:"/HTML/Utilities/Offline Web",permalink:"/notebook/docs/HTML/Utilities/Offline Web",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/HTML/Utilities/Offline Web.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction to Web Performance Optimization (WPO)",permalink:"/notebook/docs/HTML/Utilities/Introduction to Web Performance Optimization WPO"},next:{title:"\u8ba9 HTML5 \u6765\u4e3a\u4f60\u5b9a\u4f4d",permalink:"/notebook/docs/HTML/Utilities/\u8ba9 HTML5 \u6765\u4e3a\u4f60\u5b9a\u4f4d"}},c={},s=[{value:"Offline Detection",id:"offline-detection",level:2},{value:"HTML5 APIs for Offline Detection**",id:"html5-apis-for-offline-detection",level:2},{value:"Online Detection with Ping**",id:"online-detection-with-ping",level:2},{value:"The Offline.js Framework**",id:"the-offlinejs-framework",level:2},{value:"Data Storage",id:"data-storage",level:2},{value:"Data Storage APIs",id:"data-storage-apis",level:2},{value:"Using LocalStorage",id:"using-localstorage",level:2}],f={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"offline-web"},"Offline Web"),(0,r.kt)("h2",{id:"offline-detection"},"Offline Detection"),(0,r.kt)("h2",{id:"html5-apis-for-offline-detection"},"HTML5 APIs for Offline Detection**"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"navigator.onLine = true / false; \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    <script type="text/javascript">\n        console.log(window.navigator.onLine);\n\n        var timerPing;\n\n        function startPing() {\n            setInterval(function() {\n                // AJAX call\n                var ping = new XMLHttpRequest()\n                ping.open("HEAD", "/favicon.ico");\n                ping.addEventListener("load", function() {\n                    if (ping.statusCode == 200) {\n                        // We are still online\n                    }\n                });\n                ping.addEventListener("error", function() {\n                    // We are offline\n                });    \n                ping.send();   \n            }, 3600000);\n        }\n\n        function stopPing() {\n            if (timerPing) {\n                clearInterval(timerPing);\n            }\n        }\n\n        // windows online and offline event\n        window.addEventListener("online", function(e) {\n            document.querySelector("output").innerHTML = "You might be online";\n            startPing();\n        });\n\n\n        window.addEventListener("offline", function(e) {\n            document.querySelector("output").innerHTML = "You might be offline";\n            stopPing();\n        });    \n\n    <\/script>\n')),(0,r.kt)("h2",{id:"online-detection-with-ping"},"Online Detection with Ping**"),(0,r.kt)("h2",{id:"the-offlinejs-framework"},"The Offline.js Framework**"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"github.hubspot.com/offline/docs/welcome\n")),(0,r.kt)("h2",{id:"data-storage"},"Data Storage"),(0,r.kt)("h2",{id:"data-storage-apis"},"Data Storage APIs"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Web Storage\nSession / Local ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"WebSQL")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"IndexedDB"))),(0,r.kt)("h2",{id:"using-localstorage"},"Using LocalStorage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// save the result in cache\nsessionStorage.setItem(query, request.response); \n\nif ( sessionStorage.getItem(query) != undefined && \n     sessionStorage.getItem(query) != null ) {\n    // We have the article in the cache\n}\n")),(0,r.kt)("p",null,"localforage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<script src=\"localforage.js\"><\/script>\n<script>localforage.getItem('something', myCallback);<\/script>\n")))}p.isMDXComponent=!0}}]);