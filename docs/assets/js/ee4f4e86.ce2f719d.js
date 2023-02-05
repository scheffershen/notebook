"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),b=r,d=m["".concat(l,".").concat(b)]||m[b]||u[b]||a;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},68673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},i="Web Components",s={unversionedId:"WebComponents/Web Components",id:"WebComponents/Web Components",title:"Web Components",description:'But, I also want to emphasize that there are many Web-Component-powered frameworks and libraries like Lit Element or Stencil, that make them also very practical to deal with data and thus also practical in this use case. Even though they can\'t technically "replace" React',source:"@site/docs/WebComponents/Web Components.md",sourceDirName:"WebComponents",slug:"/WebComponents/Web Components",permalink:"/notebook/docs/WebComponents/Web Components",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/WebComponents/Web Components.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Web Components",permalink:"/notebook/docs/category/web-components"},next:{title:"Web Hosting",permalink:"/notebook/docs/category/web-hosting"}},l={},c=[{value:"Resources",id:"resources",level:2},{value:"which differences between web assembly and web components ?",id:"which-differences-between-web-assembly-and-web-components-",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"web-components"},"Web Components"),(0,r.kt)("p",null,"But, I also want to emphasize that there are many Web-Component-powered frameworks and libraries like ",(0,r.kt)("inlineCode",{parentName:"p"},"Lit Element")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Stencil"),', that make them also very practical to deal with data and thus also practical in this use case. Even though they can\'t technically "replace" React '),(0,r.kt)("p",null,"Youtube is made with Web Components, Github uses them, and many more companies are figuring out that they are much better for maintainability and interoperability."),(0,r.kt)("p",null,"bloated giant React websites are often slow, unmaintainable nightmares."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VanilaJS"),(0,r.kt)("li",{parentName:"ul"},"StencilJs",(0,r.kt)("a",{parentName:"li",href:"https://stenciljs.com/docs/introduction"})),(0,r.kt)("li",{parentName:"ul"},"Mitosis "),(0,r.kt)("li",{parentName:"ul"},"Google\u2019s LitElement, ")),(0,r.kt)("h3",{id:"which-differences-between-web-assembly-and-web-components-"},"which differences between web assembly and web components ?"),(0,r.kt)("p",null,"WebAssembly (Wasm) is a low-level binary format for executing code in web browsers, while Web Components are a set of technologies that allow developers to create reusable, modular components for web applications."),(0,r.kt)("p",null,"Wasm provides a means of executing code with near-native performance, and allows developers to bring existing code written in languages like C++ or Rust to the web. It operates at a lower level than JavaScript and does not have direct access to the web API, but instead communicates with JavaScript through an API."),(0,r.kt)("p",null,"Web Components, on the other hand, provide a way to define custom elements with their own HTML tag and associated JavaScript behavior. They allow for the creation of reusable components that can be shared and composed in different ways to build complex web applications."),(0,r.kt)("p",null,"In short, Wasm is a way to run code efficiently in the browser, while Web Components are a way to define and reuse custom elements in a web application."))}m.isMDXComponent=!0}}]);