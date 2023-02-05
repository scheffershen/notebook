"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,g=u["".concat(s,".").concat(b)]||u[b]||d[b]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},83260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},a="WebRTC",l={unversionedId:"WebAPI/web-rtc/WebRTC",id:"WebAPI/web-rtc/WebRTC",title:"WebRTC",description:"P2P video",source:"@site/docs/WebAPI/web-rtc/WebRTC.md",sourceDirName:"WebAPI/web-rtc",slug:"/WebAPI/web-rtc/WebRTC",permalink:"/notebook/docs/WebAPI/web-rtc/WebRTC",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/WebAPI/web-rtc/WebRTC.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ReadMe",permalink:"/notebook/docs/WebAPI/web-rtc/WebRTC-Experiment/"},next:{title:"ReadMe",permalink:"/notebook/docs/WebAPI/web-rtc/jitsi/"}},s={},p=[{value:"P2P video",id:"p2p-video",level:2},{value:"Preface",id:"preface",level:2},{value:"Supported platforms and devices",id:"supported-platforms-and-devices",level:3},{value:"Applications you can easily build using WebRTC",id:"applications-you-can-easily-build-using-webrtc",level:3},{value:"Developing a WebRTC Application",id:"developing-a-webrtc-application",level:2},{value:"Installation using repository",id:"installation-using-repository",level:3},{value:"Compiling and running the signaling server",id:"compiling-and-running-the-signaling-server",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webrtc"},"WebRTC"),(0,o.kt)("h2",{id:"p2p-video"},"P2P video"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://sourcey.com/symple-webrtc-video-chat-demo/"},"http://sourcey.com/symple-webrtc-video-chat-demo/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/sourcey/symple-client-webrtc-demo"},"https://github.com/sourcey/symple-client-webrtc-demo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.codeproject.com/Articles/480155/Video-Chat-Using-HTML-Web-RTC-ROAP-RTC-Web-Offer"},"http://www.codeproject.com/Articles/480155/Video-Chat-Using-HTML-Web-RTC-ROAP-RTC-Web-Offer"))),(0,o.kt)("h2",{id:"preface"},"Preface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"The following are the major components of the WebRTC API:\n    \u2022 getUserMedia: This component allows a web browser to access the camera\n        and microphone\n    \u2022 PeerConnection: This component sets up audio/video calls\n    \u2022 DataChannels: This component allows browsers to share data through\n        peer-to-peer connections\n")),(0,o.kt)("h3",{id:"supported-platforms-and-devices"},"Supported platforms and devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WebRTC is supported in the following desktop browsers:\n\u2022 Google Chrome Version 23 and higher\n\u2022 Mozilla Firefox Version 22 and higher\n\u2022 Opera Version 18 and higher\n\u2022 Internet Explorer doesn't support WebRTC yet, but this can be solved using\n    the Chrome Component for IE\n    \nAt the time of writing this book, the web browser WebRTC API is natively supported\nonly in the Android platform.\n    \u2022 Google Chrome Version 29 and higher\n    \u2022 Mozilla Firefox Version 24 and higher\n    \u2022 Opera Mobile Version 12 and higher\n    \u2022 Google Chrome OS      \n")),(0,o.kt)("h3",{id:"applications-you-can-easily-build-using-webrtc"},"Applications you can easily build using WebRTC"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"The following are the applications you can easily build using WebRTC:\n    \u2022 Peer-to-peer audio/video conferences\n    \u2022 Pre-recorded video streaming\n    \u2022 Desktop screen casting\n    \u2022 Peer-to-peer file sharing and transferring\nMore ideas\n    \u2022 An interactive language school\n    \u2022 Webinars\n    \u2022 A job interview service\n    \u2022 A distributed radio broadcasting service\n    \u2022 A distance learning school\n    \u2022 An interactive dating service \n    \n")),(0,o.kt)("h2",{id:"developing-a-webrtc-application"},"Developing a WebRTC Application"),(0,o.kt)("h3",{id:"installation-using-repository"},"Installation using repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget http://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb\nsudo dpkg -i erlang-solutions_1.0_all.deb\n\ndeb http://packages.erlang-solutions.com/ubuntu trusty contrib\ndeb http://packages.erlang-solutions.com/ubuntu saucy contrib\ndeb http://packages.erlang-solutions.com/ubuntu precise contrib\n\nwget http://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc\nsudo apt-key add erlang_solutions.asc\n\nsudo apt-get update\nsudo apt-get install erlang\n")),(0,o.kt)("h2",{id:"compiling-and-running-the-signaling-server"},"Compiling and running the signaling server"),(0,o.kt)("p",null,"rebar get-deps\nrebar compile\nerl -pa deps/",(0,o.kt)("em",{parentName:"p"},"/ebin apps/"),"/ebin -saslerrlog_type error -s rtcserver_app"))}u.isMDXComponent=!0}}]);