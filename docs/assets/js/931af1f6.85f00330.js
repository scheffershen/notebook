"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[41818],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),A=a,d=u["".concat(o,".").concat(A)]||u[A]||m[A]||p;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=A;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<p;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}A.displayName="MDXCreateElement"},64977:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const p={},i="adlnet/xAPIWrapper",l={unversionedId:"xApi/adlnet_xAPIWrapper",id:"xApi/adlnet_xAPIWrapper",title:"adlnet/xAPIWrapper",description:"https://github.com/adlnet/xAPIWrapper",source:"@site/docs/xApi/adlnet_xAPIWrapper.md",sourceDirName:"xApi",slug:"/xApi/adlnet_xAPIWrapper",permalink:"/notebook/docs/xApi/adlnet_xAPIWrapper",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/xApi/adlnet_xAPIWrapper.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"xAPIWrapper",permalink:"/notebook/docs/xApi/adlnet/xAPIWrapper/"},next:{title:"getting-started-with-xapi-four-lines-of-code",permalink:"/notebook/docs/xApi/getting-started-with-xapi-four-lines-of-code"}},o={},s=[{value:"Including in your Software.",id:"including-in-your-software",level:2},{value:"example.html",id:"examplehtml",level:2},{value:"useWrapper.html",id:"usewrapperhtml",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adlnetxapiwrapper"},"adlnet/xAPIWrapper"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/adlnet/xAPIWrapper"},"https://github.com/adlnet/xAPIWrapper")),(0,a.kt)("h2",{id:"including-in-your-software"},"Including in your Software."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript" src="./lib/cryptojs_v3.1.2.js"><\/script>\n<script type="text/javascript" src="./lib/utf8-text-encoding.js"><\/script>\n<script type="text/javascript" src="./src/verbs.js"><\/script>\n<script type="text/javascript" src="./src/xapistatement.js"><\/script>\n<script type="text/javascript" src="./src/xapiwrapper.js"><\/script>\n')),(0,a.kt)("p",null,"verbs.js"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ADL.verbs.abandoned\nxapistatement.js"),(0,a.kt)("li",{parentName:"ul"},"ADL.XAPIStatement.Agent = Agent;\nADL.XAPIStatement.Group = Group;\nADL.XAPIStatement.Verb = Verb;\nADL.XAPIStatement.Activity = Activity;\nADL.XAPIStatement.StatementRef = StatementRef;\nADL.XAPIStatement.SubStatement = SubStatement;"),(0,a.kt)("li",{parentName:"ul"},"xapiVersion = 1.0.1 (6 years ago)\nxapiwrapper.js"),(0,a.kt)("li",{parentName:"ul"},"ADL.XAPIWrapper.prepareStatement()"),(0,a.kt)("li",{parentName:"ul"},"ADL.XAPIWrapper.sendStatement()"),(0,a.kt)("li",{parentName:"ul"},"ADL.XAPIWrapper.sendStatements()"),(0,a.kt)("li",{parentName:"ul"},"ADL.XAPIWrapper.getStatements()"),(0,a.kt)("li",{parentName:"ul"},"ADL.XAPIWrapper.getActivities()"),(0,a.kt)("li",{parentName:"ul"},"ADL.XAPIWrapper.sendState()"),(0,a.kt)("li",{parentName:"ul"},"ADL.XAPIWrapper.getState()"),(0,a.kt)("li",{parentName:"ul"},"ADL.XAPIWrapper.deleteState() "),(0,a.kt)("li",{parentName:"ul"},"ADL.XAPIWrapper.sendActivityProfile()"),(0,a.kt)("li",{parentName:"ul"},"ADL.XAPIWrapper.getActivityProfile()"),(0,a.kt)("li",{parentName:"ul"},"ADL.XAPIWrapper.ADL.XAPIWrapper.deleteActivityProfile()"),(0,a.kt)("li",{parentName:"ul"},"ADL.XAPIWrapper.getAgents()"),(0,a.kt)("li",{parentName:"ul"},"ADL.XAPIWrapper.sendAgentProfile()"),(0,a.kt)("li",{parentName:"ul"},"ADL.XAPIWrapper.getAgentProfile()"),(0,a.kt)("li",{parentName:"ul"},"ADL.XAPIWrapper.deleteAgentProfile()")),(0,a.kt)("h2",{id:"examplehtml"},"example.html"),(0,a.kt)("p",null,"init"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- var stmt = new ADL.XAPIStatement(Agent, Activity)\n- ADL.XAPIWrapper.sendStatement(stmt);\n")),(0,a.kt)("h2",{id:"usewrapperhtml"},"useWrapper.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wrapper = ADL.XAPIWrapper;\n            wrapper.changeConfig({\n                endpoint: \"https://lrs.adlnet.gov/xapi/\",\n                user: 'tom',\n                password: '1234'\n            });\n")))}u.isMDXComponent=!0}}]);