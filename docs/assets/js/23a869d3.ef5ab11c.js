"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),b=o,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},3137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={},a="cron-jobs-in-linux",c={unversionedId:"Linux/crontab/cron-jobs-in-linux",id:"Linux/crontab/cron-jobs-in-linux",title:"cron-jobs-in-linux",description:"https://www.freecodecamp.org/news/cron-jobs-in-linux/",source:"@site/docs/Linux/crontab/cron-jobs-in-linux.md",sourceDirName:"Linux/crontab",slug:"/Linux/crontab/cron-jobs-in-linux",permalink:"/notebook/docs/Linux/crontab/cron-jobs-in-linux",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Linux/crontab/cron-jobs-in-linux.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crontab",permalink:"/notebook/docs/category/crontab"},next:{title:"commands",permalink:"/notebook/docs/category/commands"}},l={},s=[{value:"Cron job syntax",id:"cron-job-syntax",level:2},{value:"How to Troubleshoot crons",id:"how-to-troubleshoot-crons",level:2},{value:"Redirect cron output to a file.",id:"redirect-cron-output-to-a-file",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cron-jobs-in-linux"},"cron-jobs-in-linux"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/cron-jobs-in-linux/"},"https://www.freecodecamp.org/news/cron-jobs-in-linux/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Check cron service on Linux system\n$ sudo systemctl status cron.service\n")),(0,o.kt)("h2",{id:"cron-job-syntax"},"Cron job syntax"),(0,o.kt)("p",null,"Crontabs use the following flags for adding and listing cron jobs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"crontab -e"),": edits crontab entries to add, delete, or edit cron jobs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"crontab -l"),": list all the cron jobs for the current user."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"crontab -u username -l"),": list another user's crons."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"crontab -u username -e"),": edit another user's crons.\t")),(0,o.kt)("p",null,"Below is the summary of the cron job syntax."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"*   *   *   *   *  sh /path/to/script/script.sh\n|   |   |   |   |              |\n|   |   |   |   |      Command or Script to Execute        \n|   |   |   |   |\n|   |   |   |   |\n|   |   |   |   |\n|   |   |   | Day of the Week(0-6)\n|   |   |   |\n|   |   | Month of the Year(1-12)\n|   |   |\n|   | Day of the Month(1-31)  \n|   |\n| Hour(0-23)  \n|\nMin(0-59)\n")),(0,o.kt)("p",null,"Here, we have scheduled it to run per minute."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"*/1   *   *   *   *  sh /path/to/script/script.sh\n")),(0,o.kt)("h2",{id:"how-to-troubleshoot-crons"},"How to Troubleshoot crons"),(0,o.kt)("p",null,"You can verify this from the cron logs located at ",(0,o.kt)("inlineCode",{parentName:"p"},"var/log/cron"),". In some distros, logs can be found at ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/syslog")),(0,o.kt)("h2",{id:"redirect-cron-output-to-a-file"},"Redirect cron output to a file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Redirect cron output to a file\n* * * * * sh /path/to/script.sh &> log_file.log\n")))}p.isMDXComponent=!0}}]);