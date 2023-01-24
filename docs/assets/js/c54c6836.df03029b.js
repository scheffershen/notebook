"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1319],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2035:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={},i="Create a question-answer service using GPT-3 and OpenAI",s={unversionedId:"OpenAI/Create a question-answer service using GPT-3 and OpenAI",id:"OpenAI/Create a question-answer service using GPT-3 and OpenAI",title:"Create a question-answer service using GPT-3 and OpenAI",description:"https://medium.com/geekculture/create-a-question-answer-service-using-gpt-3-and-openai-41498c73879b",source:"@site/docs/OpenAI/Create a question-answer service using GPT-3 and OpenAI.md",sourceDirName:"OpenAI",slug:"/OpenAI/Create a question-answer service using GPT-3 and OpenAI",permalink:"/notebook/docs/OpenAI/Create a question-answer service using GPT-3 and OpenAI",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/OpenAI/Create a question-answer service using GPT-3 and OpenAI.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenAI",permalink:"/notebook/docs/category/openai"},next:{title:"GPT3 Powered CLI",permalink:"/notebook/docs/OpenAI/GPT3 Powered CLI"}},l={},p=[{value:"OpenAI",id:"openai",level:2},{value:"GPT-3",id:"gpt-3",level:2},{value:"Signup at OpenAI and get an API Key",id:"signup-at-openai-and-get-an-api-key",level:2},{value:"Preparing Feed from the Knowledgebase",id:"preparing-feed-from-the-knowledgebase",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Understanding OpenAI Answers API",id:"understanding-openai-answers-api",level:2},{value:"documents",id:"documents",level:2},{value:"question",id:"question",level:2},{value:"search_model",id:"search_model",level:2},{value:"model",id:"model",level:2},{value:"example_context and example",id:"example_context-and-example",level:2},{value:"max_tokens",id:"max_tokens",level:2}],u={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-question-answer-service-using-gpt-3-and-openai"},"Create a question-answer service using GPT-3 and OpenAI"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://medium.com/geekculture/create-a-question-answer-service-using-gpt-3-and-openai-41498c73879b"},"https://medium.com/geekculture/create-a-question-answer-service-using-gpt-3-and-openai-41498c73879b")),(0,r.kt)("p",null,"For any existing knowledgebase for your product or service, it is easier than ever to create an AI powered add-on that can search the knowledgebase and answer questions in natural language."),(0,r.kt)("p",null,"Using GPT-3 (developed by OpenAI), one can easily build an API driven service with great results, without actually learning or implementing any Machine Learning code or putting heavy compute power to support it."),(0,r.kt)("h2",{id:"openai"},"OpenAI"),(0,r.kt)("p",null,"OpenAI is an artificial intelligence (AI) research laboratory consisting of the for-profit corporation OpenAI LP and its parent company, the non-profit OpenAI Inc. \u2014 Wikipedia"),(0,r.kt)("h2",{id:"gpt-3"},"GPT-3"),(0,r.kt)("p",null,"Generative Pre-trained Transformer 3 (GPT-3) is an autoregressive language model that uses deep learning to produce human-like text. \u2014 Wikipedia."),(0,r.kt)("p",null,"GPT-3 is the third-generation language prediction model developed by OpenAI. "),(0,r.kt)("p",null,"It is said that the quality of text generated by GPT-3 is so high, that it can be very difficult to determine if it was generated by a human or AI. "),(0,r.kt)("p",null,"Now, let\u2019s see how we can use GPT-3 to create an answering service on top of our existing knowledgebase."),(0,r.kt)("h2",{id:"signup-at-openai-and-get-an-api-key"},"Signup at OpenAI and get an API Key"),(0,r.kt)("h2",{id:"preparing-feed-from-the-knowledgebase"},"Preparing Feed from the Knowledgebase"),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("h2",{id:"understanding-openai-answers-api"},"Understanding OpenAI Answers API"),(0,r.kt)("p",null,"OpenAI offers a bunch of APIs to do different things. Since we are looking at a question-answer service here, we will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Answers API"),"."),(0,r.kt)("p",null,"The Answers API Endpoint is: ",(0,r.kt)("a",{parentName:"p",href:"https://api.openai.com/v1/answers"},"https://api.openai.com/v1/answers"),"\nThe request method is ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),"\nThe API Key must go into ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," header (prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"Bearer"),")"),(0,r.kt)("p",null,"Request Payload Format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n   documents: [list of strings from knoweledgebase],\n   question: "This is your question?",\n   search_model: "ada",\n   model: "curie",\n   examples_context: "There are nine planets and one star in the solar system.",\n   examples: [["How many planets are there in the solar system?", "There are 9 planets in the solar system"]],\n   max_tokens: 20\n}\n')),(0,r.kt)("h2",{id:"documents"},"documents"),(0,r.kt)("p",null,"This is simply the list of strings that represent your knowledgebase articles. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[\n   "How to enroll for a course? To enroll for a course, simply create an account with us by clicking on \u2018Signup\u2019 link from our home page. After signing up, you can search from our catalog of over 500 courses. To enroll in a course, click on \u2018Enroll\u2019 button on the course page.",\n   "What is the refund policy? Content: We offer 14-day refund policy. If you are not satisfied with any of our course, just send us an e-mail and we will refund 100% of your course fee. No questions asked.",\n   "What payment methods are supported? We support all types of debit cards, credit cards and bank transfers. You can also pay in installments for courses having fee more than $49."\n]\n')),(0,r.kt)("h2",{id:"question"},"question"),(0,r.kt)("p",null,"we\u2019ll ask \u201cHow many courses are available in your catalog?\u201d,  Make sure the question ends with a question mark."),(0,r.kt)("h2",{id:"search_model"},"search_model"),(0,r.kt)("p",null,"OpenAI has different models (also called engines) that offer different capabilities and also differ in pricing. "),(0,r.kt)("p",null,"The common GPT-3 models are: \u201cada\u201d, \u201cbabbage\u201d, \u201ccurie\u201d, and \u201cda-vinci\u201d. \u201cDa-Vinci\u201d is the most capable and expensive model, while \u201cada\u201d is the fastest and cheapest one. "),(0,r.kt)("p",null,"The Answers API work in two steps. In the first step, an appropriate document is selected from the list of documents (Feed) supplied by you. In second step, an answer is composed from the most relevant document. search_model value specifies which model to use for searching the list of documents. Usually \u201cada\u201d works just fine for this."),(0,r.kt)("h2",{id:"model"},"model"),(0,r.kt)("p",null,"This value specifies which model to use for generating the answer. You can experiment with different models for your use case. Depending on the type of content you have, you can decide on any one of the four models."),(0,r.kt)("h2",{id:"example_context-and-example"},"example_context and example"),(0,r.kt)("p",null,"These values have nothing to do with your documentation. These are simply instructing the API on what type of answer we are expecting from it. You can provide any logical context and a sample answer. OpenAI will use these values to determine the ",(0,r.kt)("inlineCode",{parentName:"p"},"tone")," and answer ",(0,r.kt)("inlineCode",{parentName:"p"},"format"),"."),(0,r.kt)("h2",{id:"max_tokens"},"max_tokens"),(0,r.kt)("p",null,"This value can be used to specify the maximum length of the answer. It\u2019s not an exact representation of number of words or letters. You can try with different values to find the most suitable one for your use case."))}d.isMDXComponent=!0}}]);