"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9223],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5951:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o="Semantic Search with Milvus, Knowledge Graph QA, Web Crawlers and more!",s={unversionedId:"Python/Deepset-ai_Haystack/Semantic Search with Milvus_Knowledge Graph QA_Web Crawlers and more",id:"Python/Deepset-ai_Haystack/Semantic Search with Milvus_Knowledge Graph QA_Web Crawlers and more",title:"Semantic Search with Milvus, Knowledge Graph QA, Web Crawlers and more!",description:"https://medium.com/deepset-ai/semantic-search-with-milvus-knowledge-graph-qa-web-crawlers-and-more-837451eae9fa",source:"@site/docs/Python/Deepset-ai_Haystack/Semantic Search with Milvus_Knowledge Graph QA_Web Crawlers and more.md",sourceDirName:"Python/Deepset-ai_Haystack",slug:"/Python/Deepset-ai_Haystack/Semantic Search with Milvus_Knowledge Graph QA_Web Crawlers and more",permalink:"/notebook/docs/Python/Deepset-ai_Haystack/Semantic Search with Milvus_Knowledge Graph QA_Web Crawlers and more",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Python/Deepset-ai_Haystack/Semantic Search with Milvus_Knowledge Graph QA_Web Crawlers and more.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Haystack US 2021",permalink:"/notebook/docs/Python/Deepset-ai_Haystack/Semantic Product Search \u2013 Vector Search for E-Commerce"},next:{title:"XLM-RoBERTa: The alternative for non-english NL",permalink:"/notebook/docs/Python/Deepset-ai_Haystack/XLM-RoBERTa_The alternative for non-english NLP"}},l={},c=[{value:"Milvus",id:"milvus",level:2},{value:"Knowledge Graph QA",id:"knowledge-graph-qa",level:2},{value:"Pipeline Configs",id:"pipeline-configs",level:2},{value:"Confidence Scores",id:"confidence-scores",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"semantic-search-with-milvus-knowledge-graph-qa-web-crawlers-and-more"},"Semantic Search with Milvus, Knowledge Graph QA, Web Crawlers and more!"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medium.com/deepset-ai/semantic-search-with-milvus-knowledge-graph-qa-web-crawlers-and-more-837451eae9fa"},"https://medium.com/deepset-ai/semantic-search-with-milvus-knowledge-graph-qa-web-crawlers-and-more-837451eae9fa")),(0,a.kt)("p",null,"Branden Chan, Apr 13, 2021"),(0,a.kt)("h2",{id:"milvus"},"Milvus"),(0,a.kt)("p",null,"Everything as a vector. That\u2019s the future that we see for neural search. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MilvusDocumentStore")," in Haystack: Milvus encapsulates multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"Approximate Nearest Neighbours")," (ANN) libraries such as ",(0,a.kt)("inlineCode",{parentName:"p"},"FAISS")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ANNOY")," but is also built with the robustness and reliability required in production systems. It allows for dynamic data management"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"MilvusDocumentStore")," is the perfect complement to a ",(0,a.kt)("inlineCode",{parentName:"p"},"DPRRetriever")," or an ",(0,a.kt)("inlineCode",{parentName:"p"},"EmbeddingRetriever")," and in our experimental runs,"),(0,a.kt)("h2",{id:"knowledge-graph-qa"},"Knowledge Graph QA"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deepset-ai/haystack/tree/master/tutorials"},"https://github.com/deepset-ai/haystack/tree/master/tutorials")),(0,a.kt)("h2",{id:"pipeline-configs"},"Pipeline Configs"),(0,a.kt)("p",null,"Rather than writing lines of code to tweak Pipelines, everything that configures a Pipeline can be written in a YAML file allowing for easier and quicker experimentation cycles and also simpler maintenance of production systems."),(0,a.kt)("h2",{id:"confidence-scores"},"Confidence Scores"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deepset-ai/FARM"},"https://github.com/deepset-ai/FARM")))}u.isMDXComponent=!0}}]);