"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="XLM-RoBERTa: The alternative for non-english NL",l={unversionedId:"Python/Deepset-ai_Haystack/XLM-RoBERTa_The alternative for non-english NLP",id:"Python/Deepset-ai_Haystack/XLM-RoBERTa_The alternative for non-english NLP",title:"XLM-RoBERTa: The alternative for non-english NL",description:"https://medium.com/deepset-ai/xlm-roberta-the-multilingual-alternative-for-non-english-nlp-cf0b889ccbbf",source:"@site/docs/Python/Deepset-ai_Haystack/XLM-RoBERTa_The alternative for non-english NLP.md",sourceDirName:"Python/Deepset-ai_Haystack",slug:"/Python/Deepset-ai_Haystack/XLM-RoBERTa_The alternative for non-english NLP",permalink:"/notebook/docs/Python/Deepset-ai_Haystack/XLM-RoBERTa_The alternative for non-english NLP",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Python/Deepset-ai_Haystack/XLM-RoBERTa_The alternative for non-english NLP.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Semantic Search with Milvus, Knowledge Graph QA, Web Crawlers and more!",permalink:"/notebook/docs/Python/Deepset-ai_Haystack/Semantic Search with Milvus_Knowledge Graph QA_Web Crawlers and more"},next:{title:"index.md",permalink:"/notebook/docs/Python/Deepset-ai_Haystack/"}},s={},p=[{value:"Why multilingual models?",id:"why-multilingual-models",level:2},{value:"What\u2019s New in XLM-Roberta?",id:"whats-new-in-xlm-roberta",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"xlm-roberta-the-alternative-for-non-english-nl"},"XLM-RoBERTa: The alternative for non-english NL"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://medium.com/deepset-ai/xlm-roberta-the-multilingual-alternative-for-non-english-nlp-cf0b889ccbbf"},"https://medium.com/deepset-ai/xlm-roberta-the-multilingual-alternative-for-non-english-nlp-cf0b889ccbbf")),(0,r.kt)("p",null,"Branden Chan, Jan 15, 2020"),(0,r.kt)("p",null,"If you are doing NLP in a non-english language, you\u2019ll often be agonising over the question \u201cwhat language model should I use?\u201d While there\u2019s a growing number of monolingual models trained by the community, there\u2019s also an alternative that seems to get less attention: multilingual models."),(0,r.kt)("p",null,"In this article, we highlight the key ingredients of the ",(0,r.kt)("inlineCode",{parentName:"p"},"XLM-R")," model and explore its performance on German. We find that it\u2019s outperforming our monolingual ",(0,r.kt)("inlineCode",{parentName:"p"},"GermanBERT")," on three popular German datasets; while being on par with SOTA on ",(0,r.kt)("inlineCode",{parentName:"p"},"GermEval18")," (Hate speech detection), it significantly outperforms previous methods on ",(0,r.kt)("inlineCode",{parentName:"p"},"GermEval14")," (NER)."),(0,r.kt)("h2",{id:"why-multilingual-models"},"Why multilingual models?"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"XLM-Roberta")," comes at a time when there is a proliferation of non-English models such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Finnish BERT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"French BERT"),"(a.k.a. ",(0,r.kt)("inlineCode",{parentName:"p"},"CamemBERT"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"German BERT"),". "),(0,r.kt)("h2",{id:"whats-new-in-xlm-roberta"},"What\u2019s New in XLM-Roberta?"),(0,r.kt)("p",null,"The Facebook AI team released ",(0,r.kt)("inlineCode",{parentName:"p"},"XLM-RoBERTa")," in November 2019 as an update to their original ",(0,r.kt)("inlineCode",{parentName:"p"},"XLM-100")," model."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The strength of these results show that multilingual models exhibit great performance even when evaluated on a single language and we suggest that German NLP practitioners at least consider one of the XLM-Roberta variants when choosing a language model for their NLP systems."))}m.isMDXComponent=!0}}]);