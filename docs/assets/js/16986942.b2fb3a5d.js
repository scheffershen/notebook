"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,d=u["".concat(c,".").concat(g)]||u[g]||m[g]||i;return n?o.createElement(d,a(a({ref:t},p),{},{components:n})):o.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={},a="\u8ba9 HTML5 \u6765\u4e3a\u4f60\u5b9a\u4f4d",l={unversionedId:"HTML/Utilities/\u8ba9 HTML5 \u6765\u4e3a\u4f60\u5b9a\u4f4d",id:"HTML/Utilities/\u8ba9 HTML5 \u6765\u4e3a\u4f60\u5b9a\u4f4d",title:"\u8ba9 HTML5 \u6765\u4e3a\u4f60\u5b9a\u4f4d",description:"http://www.cnblogs.com/zichi/p/4975788.html",source:"@site/docs/HTML/Utilities/\u8ba9 HTML5 \u6765\u4e3a\u4f60\u5b9a\u4f4d.md",sourceDirName:"HTML/Utilities",slug:"/HTML/Utilities/\u8ba9 HTML5 \u6765\u4e3a\u4f60\u5b9a\u4f4d",permalink:"/notebook/docs/HTML/Utilities/\u8ba9 HTML5 \u6765\u4e3a\u4f60\u5b9a\u4f4d",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/HTML/Utilities/\u8ba9 HTML5 \u6765\u4e3a\u4f60\u5b9a\u4f4d.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Offline Web",permalink:"/notebook/docs/HTML/Utilities/Offline Web"},next:{title:"useful HTML tags",permalink:"/notebook/docs/HTML/useful-HTML-tags"}},c={},s=[{value:"Geolocation",id:"geolocation",level:2},{value:"watchPosition() \u65b9\u6cd5",id:"watchposition-\u65b9\u6cd5",level:2},{value:"Geolocation \u5b9a\u4f4d\u539f\u7406",id:"geolocation-\u5b9a\u4f4d\u539f\u7406",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8ba9-html5-\u6765\u4e3a\u4f60\u5b9a\u4f4d"},"\u8ba9 HTML5 \u6765\u4e3a\u4f60\u5b9a\u4f4d"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://www.cnblogs.com/zichi/p/4975788.html"},"http://www.cnblogs.com/zichi/p/4975788.html")),(0,r.kt)("h2",{id:"geolocation"},"Geolocation"),(0,r.kt)("p",null,"HTML5 \u7684 geolocation \u662f\u4e00\u4e2a\u4ee4\u4eba\u5174\u594b\u7684 API\uff0c\u901a\u8fc7\u8fd9\u5957 API\uff0cJavascript \u4ee3\u7801\u5c31\u80fd\u591f\u8bbf\u95ee\u5230\u7528\u6237\u7684\u5f53\u524d\u4f4d\u7f6e"),(0,r.kt)("p",null,"\u5982\u679c\u9875\u9762\u5c1d\u8bd5\u8bbf\u95ee\u5730\u7406\u4f4d\u7f6e\u4fe1\u606f\uff0c\u6d4f\u89c8\u5668\u5c31\u4f1a\u663e\u793a\u4e00\u4e2a\u5bf9\u8bdd\u6846\uff0c\u8bf7\u6c42\u7528\u6237\u8bb8\u53ef\u5171\u4eab\u5176\u5730\u7406\u4f4d\u7f6e\u4fe1\u606f\uff0c\u6bd4\u5982\u8fd9\u6837\uff1a"),(0,r.kt)("p",null,"##getCurrentPosition() \u65b9\u6cd5"),(0,r.kt)("p",null,"Geolocation API \u5728\u6d4f\u89c8\u5668\u4e2d\u7684\u5b9e\u73b0\u662f navigator.geolocation \u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u5305\u542b 3 \u4e2a\u65b9\u6cd5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"getCurrentPosition()")),(0,r.kt)("p",null,"\u7b2c\u4e00\u4e2a\u65b9\u6cd5\u662f getCurrentPosition(), \u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\u5c31\u4f1a\u89e6\u53d1\u8bf7\u6c42\u7528\u6237\u5171\u4eab\u5730\u7406\u5b9a\u4f4d\u4fe1\u606f\u7684\u5bf9\u8bdd\u6846, \u8fd9\u4e2a\u65b9\u6cd5\u63a5\u6536 3 \u4e2a\u53c2\u6570\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u6210\u529f\u56de\u8c03\u51fd\u6570"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u53ef\u9009\u7684\u5931\u8d25\u56de\u8c03\u51fd\u6570"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u53ef\u9009\u7684\u9009\u9879\u5bf9\u8c61"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6210\u529f\u56de\u8c03\u51fd\u6570"),"\u4f1a\u63a5\u6536\u5230\u4e00\u4e2a Position \u5bf9\u8c61\u53c2\u6570, \u8be5\u5bf9\u8c61\u6709\u4e24\u4e2a\u5c5e\u6027\uff1acoords \u548c timestamp\u3002\u800c coords \u5bf9\u8c61\u4e2d\u5c06\u5305\u542b\u4e0b\u5217\u4e0e\u4f4d\u7f6e\u76f8\u5173\u7684\u4fe1\u606f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"latitude\uff1a\u4ee5\u5341\u8fdb\u5236\u5ea6\u6570\u8868\u793a\u7684\u7ef4\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"longtitude\uff1a\u4ee5\u5341\u8fdb\u5236\u5ea6\u6570\u8868\u793a\u7684\u7ecf\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"accuracy\uff1a\u7ecf\u7eac\u5ea6\u5750\u6807\u7684\u7cbe\u5ea6\uff0c\u4ee5\u7c73\u4e3a\u5355\u4f4d")),(0,r.kt)("p",null,"\u6709\u4e9b\u6d4f\u89c8\u5668\u53ef\u80fd\u4f1a\u5728 coords \u5bf9\u8c61\u4e2d\u63d0\u4f9b\u5982\u4e0b\u5c5e\u6027\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"altitude\uff1a\u4ee5\u7c73\u4e3a\u5355\u4f4d\u7684\u6d77\u62d4\u9ad8\u5ea6\uff0c\u5982\u679c\u6ca1\u6709\u76f8\u5173\u6570\u636e\u5219\u503c\u4e3a null"),(0,r.kt)("li",{parentName:"ul"},"altitudeAccuracy\uff1a\u6d77\u62d4\u9ad8\u5ea6\u7684\u7cbe\u5ea6\uff0c\u4ee5\u7c73\u4e3a\u5355\u4f4d\uff0c\u6570\u503c\u8d8a\u5927\u8d8a\u4e0d\u7cbe\u786e"),(0,r.kt)("li",{parentName:"ul"},"heading\uff1a\u6307\u5357\u9488\u7684\u65b9\u5411\uff0c0\xb0\u8868\u793a\u6b63\u5317\uff0c\u503c\u4e3a NaN \u8868\u793a\u6ca1\u6709\u68c0\u6d4b\u5230\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"speed\uff1a\u901f\u5ea6\uff0c\u5373\u6bcf\u79d2\u79fb\u52a8\u591a\u5c11\u7c73\uff0c\u5982\u679c\u6ca1\u6709\u76f8\u5173\u6570\u636e\u5219\u503c\u4e3a null")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"navigator.geolocation.getCurrentPosition(geo_success, geo_error);\n\nfunction geo_success(position) {\n  console.log(position.coords.latitude, position.coords.longitude);\n}\n\nfunction geo_error(msg) {\n  console.log(msg.code, msg.message);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5931\u8d25\u56de\u8c03\u51fd\u6570")),(0,r.kt)("p",null,"getCurrentPosition() \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u5373\u5931\u8d25\u56de\u8c03\u51fd\u6570\uff0c\u5728\u88ab\u8c03\u7528\u7684\u65f6\u5019\u4e5f\u4f1a\u63a5\u6536\u5230\u4e00\u4e2a\u53c2\u6570\u3002\n\u8fd9\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5305\u542b\u4e24\u4e2a\u5c5e\u6027\uff1amessage \u548c code\u3002\u5176\u4e2d\uff0cmessage \u5c5e\u6027\u4e2d\u4fdd\u5b58\u7740\u7ed9\u4eba\u770b\u7684\u6587\u672c\u6d88\u606f\uff0c\u89e3\u91ca\u4e3a\u4ec0\u4e48\u4f1a\u51fa\u9519\uff0c\u800c code \u5c5e\u6027\u4e2d\u4fdd\u5b58\u7740\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u9519\u8bef\u7684\u7c7b\u578b\uff1a\u7528\u6237\u62d2\u7edd\u5171\u4eab\uff081\uff09\uff0c\u4f4d\u7f6e\u65e0\u6548\uff082\uff09\u6216\u8005\u8d85\u65f6\uff083\uff09\u3002\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u5927\u591a\u6570 Web \u5e94\u7528\u53ea\u4f1a\u8bb2\u9519\u8bef\u6d88\u606f\u4fdd\u5b58\u5230\u65e5\u5fd7\u6587\u4ef6\u4e2d\uff0c\u800c\u4e0d\u4e00\u5b9a\u4f1a\u4fee\u6539\u7528\u6237\u754c\u9762\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u80fd\u628a\u4f4d\u7f6e\u663e\u793a\u5728\u5730\u56fe\u4e0a\u90a3\u5c31\u76f4\u89c2\u591a\u4e86\uff01"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="http://webapi.amap.com/maps?v=1.3&key=\u60a8\u7533\u8bf7\u7684key\u503c">\n  <script>\n    navigator.geolocation.getCurrentPosition(geo_success, geo_error);\n\n    function geo_success(position) {\n      var map = new AMap.Map(\'mapContainer\', {\n        // \u8bbe\u7f6e\u4e2d\u5fc3\u70b9\n        center: [position.coords.longitude, position.coords.latitude],\n\n        // \u8bbe\u7f6e\u7f29\u653e\u7ea7\u522b\n        zoom: 13\n      });\n      var marker = new AMap.Marker({\n        //\u590d\u6742\u56fe\u6807\n        icon: new AMap.Icon({\n            //\u56fe\u6807\u5927\u5c0f\n            size: new AMap.Size(28, 37),\n            //\u5927\u56fe\u5730\u5740\n            image: "http://webapi.amap.com/images/custom_a_j.png",\n            imageOffset: new AMap.Pixel(-28, 0)\n        }),\n        //\u5728\u5730\u56fe\u4e0a\u6dfb\u52a0\u70b9\n        position: [position.coords.longitude, position.coords.latitude]\n      });\n\n      marker.setMap(map);\n    }\n\n    function geo_error(msg) {\n      console.log(msg.code, msg.message);\n    }\n  <\/script>\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53ef\u9009\u7684\u9009\u9879\u5bf9\u8c61")),(0,r.kt)("p",null,"getCurrentPosition() \u8fd8\u6709\u7b2c\u4e09\u4e2a\u53c2\u6570\uff0c\u8be5\u53c2\u6570\u662f\u4e00\u4e2a\u9009\u9879\u5bf9\u8c61\uff0c\u7528\u4e8e\u8bbe\u5b9a\u4fe1\u606f\u7684\u7c7b\u578b\u3002\u53ef\u4ee5\u8bbe\u7f6e\u7684\u9009\u9879\u6709\u4e09\u4e2a\uff1aenableHighAccuracy \u662f\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5fc5\u987b\u5c3d\u53ef\u80fd\u4f7f\u7528\u6700\u7cbe\u786e\u7684\u4f4d\u7f6e\u4fe1\u606f\uff1btimeout \u662f\u4ee5\u6beb\u79d2\u6570\u8868\u793a\u7684\u7b49\u5f85\u4f4d\u7f6e\u4fe1\u606f\u7684\u6700\u957f\u65f6\u95f4\uff1bmaximumAge \u8868\u793a\u4e0a\u4e00\u6b21\u53d6\u5f97\u7684\u5750\u6807\u4fe1\u606f\u7684\u6709\u6548\u65f6\u95f4\uff0c\u4ee5\u6beb\u79d2\u8868\u793a\uff0c\u5982\u679c\u65f6\u95f4\u5230\u5219\u91cd\u65b0\u53d6\u5f97\u65b0\u5750\u6807\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u9664\u975e\u786e\u5b9e\u9700\u8981\u975e\u5e38\u7cbe\u786e\u7684\u4fe1\u606f\uff0c\u5426\u5219\u5efa\u8bae\u4fdd\u6301 enableHighAccuracy \u7684 false \u503c\uff08\u9ed8\u8ba4\u503c\uff09\u3002\u5c06\u8fd9\u4e2a\u9009\u9879\u8bbe\u7f6e\u4e3a true \u9700\u8981\u66f4\u957f\u7684\u65f6\u5019\uff0c\u800c\u4e14\u5728\u79fb\u52a8\u8bbe\u5907\u4e0a\u66f4\u8017\u7535\u3002\u7c7b\u4f3c\u7684\uff0c\u5982\u679c\u4e0d\u9700\u8981\u9891\u7e41\u66f4\u65b0\u7528\u6237\u7684\u4f4d\u7f6e\u4fe1\u606f\uff0c\u90a3\u4e48\u53ef\u4ee5\u5c06 maximumAge \u8bbe\u7f6e\u4e3a Infinity\uff0c\u4ece\u800c\u59cb\u7ec8\u90fd\u4f7f\u7528\u4e0a\u4e00\u6b21\u7684\u5750\u6807\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"navigator.geolocation.getCurrentPosition(locationSuccess, locationError, {\n  // \u6307\u793a\u6d4f\u89c8\u5668\u83b7\u53d6\u9ad8\u7cbe\u5ea6\u7684\u4f4d\u7f6e\uff0c\u9ed8\u8ba4\u4e3afalse\n  enableHighAcuracy: true,\n  // \u6307\u5b9a\u83b7\u53d6\u5730\u7406\u4f4d\u7f6e\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e0d\u9650\u65f6\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\n  timeout: 5000,\n  // \u6700\u957f\u6709\u6548\u671f\uff0c\u5728\u91cd\u590d\u83b7\u53d6\u5730\u7406\u4f4d\u7f6e\u65f6\uff0c\u6b64\u53c2\u6570\u6307\u5b9a\u591a\u4e45\u518d\u6b21\u83b7\u53d6\u4f4d\u7f6e\u3002\n  maximumAge: 3000\n});\n")),(0,r.kt)("h2",{id:"watchposition-\u65b9\u6cd5"},"watchPosition() \u65b9\u6cd5"),(0,r.kt)("p",null,"\u5982\u679c\u8981\u8ddf\u8e2a\u7528\u6237\u7684\u4f4d\u7f6e\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528 watchPosition() \u65b9\u6cd5\u3002\u8fd9\u4e2a\u65b9\u6cd5\u7684\u4f7f\u7528\u548c getCurrentPosition() \u5b8c\u5168\u76f8\u540c\u3002\u5b9e\u9645\u4e0a watchPosition() \u4e0e\u5b9a\u65f6\u8c03\u7528 getCurrentPosition() \u80fd\u5f97\u5230\u76f8\u540c\u6548\u679c\u3002"),(0,r.kt)("p",null,"\u5728\u7b2c\u4e00\u6b21\u8c03\u7528 watchPosition() \u65b9\u6cd5\u540e\uff0c\u4f1a\u53d6\u5f97\u5f53\u524d\u4f4d\u7f6e\uff0c\u6267\u884c\u6210\u529f\u56de\u8c03\u6216\u8005\u9519\u8bef\u56de\u8c03\u3002\u7136\u540e\uff0cwatchPosition() \u5c31\u5730\u7b49\u5f85\u7cfb\u7edf\u53d1\u51fa\u4f4d\u7f6e\u5df2\u6539\u53d8\u7684\u4fe1\u53f7\u3002"),(0,r.kt)("p",null,"\u8c03\u7528 watchPosition() \u4f1a\u8fd4\u56de\u4e00\u4e2a\u6570\u503c\u6807\u8bc6\u7b26\uff0c\u7528\u4e8e\u8ddf\u8e2a\u76d1\u63a7\u7684\u64cd\u4f5c\u3002\u57fa\u4e8e\u8fd9\u4e2a\u8fd4\u56de\u503c\u53ef\u4ee5\u53d6\u6d88\u76d1\u63a7\u64cd\u4f5c\uff0c\u53ea\u8981\u5c06\u5176\u4f20\u9012\u7ed9 clearWatch() \u65b9\u6cd5\u5373\u53ef\uff08\u4e0e\u4f7f\u7528 setTimeout() \u548c clearTimeout() \u7c7b\u4f3c\uff09\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    var watchId = navigator.geolocation.watchPosition(geo_success, geo_error);\n    clearWatch(watchId);\n")),(0,r.kt)("h2",{id:"geolocation-\u5b9a\u4f4d\u539f\u7406"},"Geolocation \u5b9a\u4f4d\u539f\u7406"),(0,r.kt)("p",null,"Geolocation API \u7684\u6570\u636e\u6765\u6e90\u53ef\u80fd\u662f GPS\u3001IP \u5730\u5740\u3001RFID\u3001WiFi\u3001\u84dd\u7259 MAC \u5730\u5740\u3001GSM/CDMA \u5361 ID \u7b49\u3002\u56e0\u4e3a Geolocation API \u662f\u8fd0\u884c\u5728\u4f60\u672c\u5730\u8bbe\u5907\u4e0a\u7684\u3002"),(0,r.kt)("p",null,"\u5728HTML5\u7684\u5b9e\u73b0\u4e2d\uff0c\u624b\u673a\u7b49\u79fb\u52a8\u8bbe\u5907\u5f53\u7136\u4f18\u5148\u4f7f\u7528GPS\u5b9a\u4f4d\uff0c\u800c\u7b14\u8bb0\u672c\u548c\u90e8\u5206\u5e73\u677f\uff0c\u6700\u51c6\u7684\u5b9a\u4f4d\u662fWIFI\uff0c\u81f3\u4e8e\u7f51\u7ebf\u4e0a\u7f51\u7684\u53f0\u5f0f\u673a\uff0c\u4e00\u822c\u5c31\u53ea\u80fd\u4f7f\u7528IP\u6765\u5b9a\u4f4d\u4e86\uff0c\u8fd9\u4e2a\u51c6\u786e\u5ea6\u6700\u4f4e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u81f3\u4e8e\u7f51\u7ebf\u4e0a\u7f51\u7684\u53f0\u5f0f\u673a\uff0c\u4e00\u822c\u5c31\u53ea\u80fd\u4f7f\u7528IP\u6765\u5b9a\u4f4d\u4e86\uff0c\u8fd9\u4e2a\u51c6\u786e\u5ea6\u6700\u4f4e\u3002")))}u.isMDXComponent=!0}}]);