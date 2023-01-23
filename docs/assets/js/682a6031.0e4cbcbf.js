"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2917],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(r),d=i,v=p["".concat(s,".").concat(d)]||p[d]||c[d]||a;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<a;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6057:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=r(7462),i=(r(7294),r(3905));const a={},o="Vime: A Customizable Media Player Built with Web Components",l={unversionedId:"HTML/Libraries/Vimejs",id:"HTML/Libraries/Vimejs",title:"Vime: A Customizable Media Player Built with Web Components",description:"https://vimejs.com",source:"@site/docs/HTML/Libraries/Vimejs.md",sourceDirName:"HTML/Libraries",slug:"/HTML/Libraries/Vimejs",permalink:"/notebook/docs/HTML/Libraries/Vimejs",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/HTML/Libraries/Vimejs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plyr \u2013 \u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684 HTML5 \u64ad\u653e\u5668",permalink:"/notebook/docs/HTML/Libraries/Plyr \u2013 \u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684 HTML5 \u64ad\u653e\u5668"},next:{title:"iframes-are-just-terrible-heres-how-they-could-be-better",permalink:"/notebook/docs/HTML/Libraries/iframes-are-just-terrible-heres-how-they-could-be-better"}},s={},m=[{value:"Features",id:"features",level:2},{value:"Examples",id:"examples",level:2},{value:"Frameworks",id:"frameworks",level:2},{value:"Browsers",id:"browsers",level:2},{value:"Providers",id:"providers",level:2}],u={toc:m};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vime-a-customizable-media-player-built-with-web-components"},"Vime: A Customizable Media Player Built with Web Components"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://vimejs.com"},"https://vimejs.com"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vime-js/vime"},"https://github.com/vime-js/vime")),(0,i.kt)("p",null,"Customizable, extensible, accessible and framework agnostic media player. Modern alternative to Video.js and Plyr. Supports HTML5, HLS, Dash, YouTube, Vimeo, Dailymotion"),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"\ud83c\udfa5  Multi-provider support (HTML5, HLS, YouTube, Vimeo etc.).\n\ud83d\udc51  One API to rule them all! Don't re-learn anything the next time you need a player.\n\u267e\ufe0f  Avoid cross-browser differences on media related APIs, such as fullscreen and picture-in-picture.\n\ud83d\udc50  Accessible to all via ARIA roles/states/properties and keyboard support.\n\ud83c\udf0e  I18N support.\n\ud83d\udda5  Designed with both mobile and desktop in mind.\n\ud83d\udc4c  Touch input friendly.\n\ud83c\udfa8  Style anything you want with CSS variables. Default light and dark themes are included.\n\ud83c\udfce\ufe0f  Performant with preconnections + lazy loading of components and media out of the box.\n\ud83e\udde9  Easily build your own components and extend Vime.\n\ud83d\uddd1\ufe0f  Lightweight - ~25kB (gzip) standalone, and ~47kB with the default Vime UI.\n\ufe0f\ud83e\uddf0  Awesome default custom UI's for audio/video/live media.\n\ud83d\udee0  Comprehensive player API with a heap of properties, methods and events.\n\ud83d\udcaa  Built with TypeScript so you can enjoy completely typed components.\n\ud83c\udfe0  Feel right at home with HTML/CSS/JS thanks to web components.\n\ud83c\udfd7\ufe0f  Framework specific bindings for React, Vue, Svelte, Stencil and Angular."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<vime-player autoplay muted>\n  <vime-video poster="/media/poster.png" cross-origin>\n    \x3c!-- Why `data-src`? Lazy loading. You can always use `src` if you don\'t need it. --\x3e\n    <source data-src="/media/video.mp4" type="video/mp4" />\n    <track\n      default\n      kind="subtitles"\n      src="/media/subs/en.vtt"\n      srclang="en"\n      label="English"\n    />\n  </vime-video>\n\n  \x3c!-- Loads the default Vime UI. --\x3e\n  <vime-default-ui />\n</vime-player>\n')),(0,i.kt)("p",null,"Native UI?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Here we are requesting to use the native controls. --\x3e\n<vime-player autoplay muted controls>\n  <vime-audio cross-origin>\n    <source data-src="/media/audio.mp3" type="audio/mp3" />\n  </vime-audio>\n</vime-player>\n')),(0,i.kt)("p",null,"Custom UI?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Lets add a little splash of color throughout the player. --\x3e\n<vime-player autoplay muted style="--vm-player-theme: #1873d3">\n  \x3c!-- Loading a YouTube video. --\x3e\n  <vime-youtube video-id="DyTCOwB0DVw" />\n\n  <vime-ui>\n    <vime-click-to-play />\n    <vime-captions />\n    <vime-poster />\n    <vime-spinner />\n    <vime-default-settings />\n    <vime-controls pin="bottomLeft" active-duration="2750" full-width>\n      \x3c!-- \n        These are all predefined controls that you can easily customize. You could also build \n        your own controls completely from scratch.\n      --\x3e\n      <vime-playback-control tooltip-direction="right" />\n      <vime-volume-control />\n      <vime-time-progress />\n      <vime-control-spacer />\n      <vime-caption-control />\n      <vime-pip-control keys="p" />\n      <vime-settings-control />\n      <vime-fullscreen-control keys="f" tooltip-direction="left" />\n    </vime-controls>\n  </vime-ui>\n</vime-player>\n')),(0,i.kt)("h2",{id:"frameworks"},"Frameworks"),(0,i.kt)("p",null,"There are framework specific bindings for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"React"),(0,i.kt)("li",{parentName:"ul"},"Vue"),(0,i.kt)("li",{parentName:"ul"},"Svelte"),(0,i.kt)("li",{parentName:"ul"},"Stencil"),(0,i.kt)("li",{parentName:"ul"},"Angular")),(0,i.kt)("h2",{id:"browsers"},"Browsers"),(0,i.kt)("p",null,"Vime is forward thinking and built for the modern web. All ",(0,i.kt)("em",{parentName:"p"},"ES6 Compatible")," browsers are supported, some of which are listed below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Edge 79+"),(0,i.kt)("li",{parentName:"ul"},"Firefox 68+"),(0,i.kt)("li",{parentName:"ul"},"Chrome 61+"),(0,i.kt)("li",{parentName:"ul"},"Safari 11+"),(0,i.kt)("li",{parentName:"ul"},"iOS Safari 11+"),(0,i.kt)("li",{parentName:"ul"},"Opera 48+")),(0,i.kt)("h2",{id:"providers"},"Providers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTML5"),(0,i.kt)("li",{parentName:"ul"},"HLS"),(0,i.kt)("li",{parentName:"ul"},"Dash"),(0,i.kt)("li",{parentName:"ul"},"YouTube"),(0,i.kt)("li",{parentName:"ul"},"Vimeo"),(0,i.kt)("li",{parentName:"ul"},"Dailymotion")))}p.isMDXComponent=!0}}]);