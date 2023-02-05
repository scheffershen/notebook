"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[29640],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),y=o,h=u["".concat(p,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},90926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i="Google Trends with Python",l={unversionedId:"Python/Google Trends with Python",id:"Python/Google Trends with Python",title:"Google Trends with Python",description:"https://dev.to/stankukucka/google-trends-with-python-5fh7",source:"@site/docs/Python/Google Trends with Python.md",sourceDirName:"Python",slug:"/Python/Google Trends with Python",permalink:"/notebook/docs/Python/Google Trends with Python",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Python/Google Trends with Python.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Comment configurer virtualenv pour un crontab?",permalink:"/notebook/docs/Python/Comment configurer virtualenv pour un crontab"},next:{title:"How to Easily Summarize Audio and Video Files in Python",permalink:"/notebook/docs/Python/How to Easily Summarize Audio and Video Files in Python"}},p={},s=[{value:"Scripts to Download",id:"scripts-to-download",level:2},{value:"Activate Virtualenv",id:"activate-virtualenv",level:2},{value:"Pytrends and Plotly Libraries to Install",id:"pytrends-and-plotly-libraries-to-install",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-trends-with-python"},"Google Trends with Python"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dev.to/stankukucka/google-trends-with-python-5fh7"},"https://dev.to/stankukucka/google-trends-with-python-5fh7")),(0,o.kt)("p",null," 20 nov. 2021"),(0,o.kt)("h2",{id:"scripts-to-download"},"Scripts to Download"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"google-trends-analysis.py"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stanislav-kukucka/google-trends-analysis/tree/main/google-trends-analysis"},"Simply download these two files")),(0,o.kt)("h2",{id:"activate-virtualenv"},"Activate Virtualenv"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ python --version\n$ pip --vesrion\n$ pip list\n$ sudo pip install virtualenv\n$ cd google-trends-analysis\n")),(0,o.kt)("p",null,"To make all stuff properly done activate ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv")," with the creation of working virtual environment directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"venv"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ virtualenv venv \n")),(0,o.kt)("p",null,"Now activate this working environment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ source venv/bin/activate\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ venv\\Scripts\\activate (windows)\n")),(0,o.kt)("h2",{id:"pytrends-and-plotly-libraries-to-install"},"Pytrends and Plotly Libraries to Install"),(0,o.kt)("p",null,"Now execute installation in a virtual environment we already activated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ pip3 install -r requirements.txt\n")),(0,o.kt)("p",null,"After installation to run ",(0,o.kt)("inlineCode",{parentName:"p"},"google-trends-analysis.py")," script hereunder just type this command and enjoy response in your browser IP ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," on a random port."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ python3 google-trends-analysis.py\n")))}u.isMDXComponent=!0}}]);