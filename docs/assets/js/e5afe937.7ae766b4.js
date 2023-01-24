"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[828],{3905:(e,r,o)=>{o.d(r,{Zo:()=>u,kt:()=>m});var t=o(7294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function s(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?s(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function c(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=t.createContext({}),l=function(e){var r=t.useContext(i),o=r;return e&&(o="function"==typeof e?e(r):a(a({},r),e)),o},u=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},P=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(o),P=n,m=p["".concat(i,".").concat(P)]||p[P]||d[P]||s;return o?t.createElement(m,a(a({ref:r},u),{},{components:o})):t.createElement(m,a({ref:r},u))}));function m(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=o.length,a=new Array(s);a[0]=P;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[p]="string"==typeof e?e:n,a[1]=c;for(var l=2;l<s;l++)a[l]=o[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}P.displayName="MDXCreateElement"},5957:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=o(7462),n=(o(7294),o(3905));const s={title:"PHP Performance - Additional CPU cores vs Faster CPU cores",slug:"PHP-Performance-Additional-CPU-cores-vs-Faster-CPU-cores"},a="PHP Performance: Additional CPU cores vs Faster CPU cores",c={unversionedId:"PHP/Performances/PHP Performance_Additional CPU cores vs Faster CPU cores",id:"PHP/Performances/PHP Performance_Additional CPU cores vs Faster CPU cores",title:"PHP Performance - Additional CPU cores vs Faster CPU cores",description:"https://haydenjames.io/php-performance-additional-cpu-cores-vs-faster-cpu-cores/",source:"@site/docs/PHP/Performances/PHP Performance_Additional CPU cores vs Faster CPU cores.md",sourceDirName:"PHP/Performances",slug:"/PHP/Performances/PHP-Performance-Additional-CPU-cores-vs-Faster-CPU-cores",permalink:"/notebook/docs/PHP/Performances/PHP-Performance-Additional-CPU-cores-vs-Faster-CPU-cores",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/PHP/Performances/PHP Performance_Additional CPU cores vs Faster CPU cores.md",tags:[],version:"current",frontMatter:{title:"PHP Performance - Additional CPU cores vs Faster CPU cores",slug:"PHP-Performance-Additional-CPU-cores-vs-Faster-CPU-cores"},sidebar:"tutorialSidebar",previous:{title:"What\u2019s New in PHP 8",permalink:"/notebook/docs/PHP/PHP_8/What\u2019s New in PHP 8"},next:{title:"adobe acrobat sign php",permalink:"/notebook/docs/PHP/Resources/adobe acrobat sign php"}},i={},l=[{value:"Faster CPU cores vs. Additional CPU cores",id:"faster-cpu-cores-vs-additional-cpu-cores",level:2},{value:"Checking CPU core speed and number of cores \u2013 Linux command line",id:"checking-cpu-core-speed-and-number-of-cores--linux-command-line",level:2},{value:"How do you make good use of multicore CPUs in your PHP/MySQL applications?",id:"how-do-you-make-good-use-of-multicore-cpus-in-your-phpmysql-applications",level:2}],u={toc:l};function p(e){let{components:r,...o}=e;return(0,n.kt)("wrapper",(0,t.Z)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"php-performance-additional-cpu-cores-vs-faster-cpu-cores"},"PHP Performance: Additional CPU cores vs Faster CPU cores"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://haydenjames.io/php-performance-additional-cpu-cores-vs-faster-cpu-cores/"},"https://haydenjames.io/php-performance-additional-cpu-cores-vs-faster-cpu-cores/")),(0,n.kt)("p",null,"February 26, 2021 by Hayden James"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Each PHP-FPM process uses a single CPU core. PHP benefits greatly from CPU single-thread performance.")),(0,n.kt)("p",null,"PHP is not designed for multithreading.  Therefore, each page/request is served by one PHP process, and each process locks on to one CPU core.  However, unlike PHP, MySQL is multithreaded, "),(0,n.kt)("p",null,"If your web server has concurrent page requests, you\u2019ll also have several PHP processes \u2013 each using a CPU core \u2013 running concurrently. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You have a lot of CPU cores (18) but the core speed is only 2.0GHz. Since PHP processes are executed per-core, a VPS with 3+GHz cores would fit your workload better.")),(0,n.kt)("h2",{id:"faster-cpu-cores-vs-additional-cpu-cores"},"Faster CPU cores vs. Additional CPU cores"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"If it takes a 2GHz processor core 3 seconds to process a request, then a 3GHz processor core would return the same request in around 2 seconds"),". Which, in turn, frees up cores for additional requests at a faster rate. This means we can safely reduce the # of cores from 18 to 8."),(0,n.kt)("h2",{id:"checking-cpu-core-speed-and-number-of-cores--linux-command-line"},"Checking CPU core speed and number of cores \u2013 Linux command line"),(0,n.kt)("p",null,"Suppose you are unsure of your server\u2019s CPU specs. You can quickly check with the following command"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ lscpu\n    On-line CPU(s) list: 0-7\n    Thread(s) per core: 1\n    Model name: Intel(R) Xeon(R) CPU E5-1650 v2 @ 3.50GHz\n    CPU MHz: 3499.998\n    BogoMIPS: 6999.99\n")),(0,n.kt)("h2",{id:"how-do-you-make-good-use-of-multicore-cpus-in-your-phpmysql-applications"},"How do you make good use of multicore CPUs in your PHP/MySQL applications?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/2267345/how-do-you-make-good-use-of-multicore-cpus-in-your-php-mysql-applications"},"https://stackoverflow.com/questions/2267345/how-do-you-make-good-use-of-multicore-cpus-in-your-php-mysql-applications")),(0,n.kt)("p",null,'PHP is not quite oriented towards multi-threading : as you already noticed, each page is served by one PHP process -- that does one thing at a time, including just "waiting" while an SQL query is executed on the database server.'),(0,n.kt)("p",null,"Each PHP process will run on one core, in response to the request of one user, but there are several sub-processes of Apache running in parallel (one for each request, up to a couple of dozens or hundreds, depending on your configuration)"),(0,n.kt)("p",null,"The MySQL server is multi-threaded, which means it can use several distinct cores to answer several concurrent requests -- even if each request cannot be served by more that one core."),(0,n.kt)("p",null,"Same for e-mail sending : anyway, several minutes will pass before your users receive/read their mail, so there is no need to send them immediately."),(0,n.kt)("p",null,"A solution that I often use is some queuing mechanism :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'The web application store things in a "todo-list"'),(0,n.kt)("li",{parentName:"ul"},'And that "todo-list" is de-queued by some batches that are run frequently via a cronjob')),(0,n.kt)("p",null,"And for some other manipulations, you just want them run every X minutes -- and, here too, a cronjob is the perfect tool."))}p.isMDXComponent=!0}}]);