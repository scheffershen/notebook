"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2250],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var b=r.createContext({}),s=function(t){var e=r.useContext(b),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(b.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,b=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=s(n),u=a,d=m["".concat(b,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(d,o(o({ref:e},p),{},{components:n})):r.createElement(d,o({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var b in e)hasOwnProperty.call(e,b)&&(l[b]=e[b]);l.originalType=t,l[m]="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92921:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>b,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={titlr:"Install rabbitmq in debian",slug:"install-rabbitmq-in-debian"},o="Install rabbitmq in debian",l={unversionedId:"RabitMQ/install-rabbitmq-in-debian",id:"RabitMQ/install-rabbitmq-in-debian",title:"Install rabbitmq in debian",description:"https://www.rabbitmq.com/install-debian.html",source:"@site/docs/RabitMQ/install-rabbitmq-in-debian.md",sourceDirName:"RabitMQ",slug:"/RabitMQ/install-rabbitmq-in-debian",permalink:"/notebook/docs/RabitMQ/install-rabbitmq-in-debian",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/RabitMQ/install-rabbitmq-in-debian.md",tags:[],version:"current",frontMatter:{titlr:"Install rabbitmq in debian",slug:"install-rabbitmq-in-debian"},sidebar:"tutorialSidebar",previous:{title:"Impl\xe9menter RabbitMQ dans une API Symfony 2",permalink:"/notebook/docs/RabitMQ/implementer-rabbitmq-dans-une-api-symfony-2"},next:{title:"RabbitMQ Example",permalink:"/notebook/docs/RabitMQ/rabbitmq-example"}},b={},s=[{value:"Using rabbitmq.com APT Repository",id:"using-rabbitmqcom-apt-repository",level:3}],p={toc:s};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-rabbitmq-in-debian"},"Install rabbitmq in debian"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.rabbitmq.com/install-debian.html"},"https://www.rabbitmq.com/install-debian.html")),(0,a.kt)("h3",{id:"using-rabbitmqcom-apt-repository"},"Using rabbitmq.com APT Repository"),(0,a.kt)("p",null,"To avoid warnings about unsigned packages, add our public key to your trusted key list using apt-key(8):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -\n")),(0,a.kt)("p",null,"Execute the following command to add the APT repository to your /etc/apt/sources.list.d:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ echo 'deb http://www.rabbitmq.com/debian/ testing main' | sudo tee /etc/apt/sources.list.d/rabbitmq.list\n")),(0,a.kt)("p",null,"Run the following command to update the package list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo apt-get update\n")),(0,a.kt)("p",null,"Install rabbitmq-server package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo apt-get install rabbitmq-server\n")),(0,a.kt)("p",null,"Then run the following command to start Elasticsearch on boot up:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo update-rc.d rabbitmq-server defaults 95 10    \n")),(0,a.kt)("p",null,"install rabbitmq_management plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rabbitmq-plugins enable --offline rabbitmq_management\n")),(0,a.kt)("p",null,"add admin account:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rabbitmqctl add_user admin admin_2017!\n$ rabbitmqctl set_user_tags admin administrator\n$ rabbitmqctl set_permissions -p / admin .\\* .\\* .\\*\n$ rabbitmqctl stop\n$ service rabbitmq-server start\n")),(0,a.kt)("p",null,"Go to the browser:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://192.168.33.23:15672\n")))}m.isMDXComponent=!0}}]);