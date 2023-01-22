"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7541],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=m(r),s=n,d=k["".concat(p,".").concat(s)]||k[s]||u[s]||o;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[k]="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const o={},i="Docker Roadmap",l={unversionedId:"Docker/Docker Roadmap",id:"Docker/Docker Roadmap",title:"Docker Roadmap",description:"- Dockerfile references",source:"@site/docs/Docker/Docker Roadmap.md",sourceDirName:"Docker",slug:"/Docker/Docker Roadmap",permalink:"/notebook/docs/Docker/Docker Roadmap",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Docker/Docker Roadmap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/notebook/docs/category/docker"},next:{title:"ElasticSearch",permalink:"/notebook/docs/category/elasticsearch"}},p={},m=[],c={toc:m};function k(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"docker-roadmap"},"Docker Roadmap"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dockerfile references"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./"},"Docker references"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Buld",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker build -t myimage:1.0 .")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker image ls")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker image rm alpine:3.4")))),(0,n.kt)("li",{parentName:"ul"},"Share",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker pull myimage:1.0 ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker tag myimage:1.0 myrepo/myimage:2.0 ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker push myrepo/myimage:2.0 ")))),(0,n.kt)("li",{parentName:"ul"},"Run",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker push myrepo/myimage:2.0 ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker container run --name web -p 5000:80 alpine:3.9")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker container stop web")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker container kill web")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker network ls ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker container ls ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker container rm -f $(docker ps -aq) ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker container logs --tail 100 web")))),(0,n.kt)("li",{parentName:"ul"},"Create a new image from a container\u2019s changes\n$ docker commit <container_id> scheffer_shen/php71"),(0,n.kt)("li",{parentName:"ul"},"Reame a image\n$ docker tag <image_id> scheffer_shen/php72"),(0,n.kt)("li",{parentName:"ul"},"Import/Export",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker save --output php72.tar scheffer_shen/php72")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker import php72.tar")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker tag <....> scheffer_shen/php72")),(0,n.kt)("li",{parentName:"ul"},"pieg\xe9s: (",(0,n.kt)("a",{parentName:"li",href:"https://serverfault.com/questions/757210/no-command-specified-from-re-imported-docker-image-container"},"https://serverfault.com/questions/757210/no-command-specified-from-re-imported-docker-image-container"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker import --change 'CMD [\"php-fpm\"]' ./php71.tar scheffer_shen/php71")," (l'autre probl\xe8me)"))))))),(0,n.kt)("li",{parentName:"ul"},"Docker compose references",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"docker compose up -d"),(0,n.kt)("li",{parentName:"ul"},"docker compose exec ",(0,n.kt)("inlineCode",{parentName:"li"},"container")," bash|sh"))),(0,n.kt)("li",{parentName:"ul"},"Crontab ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"run docker-compose command in crontab",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose exec -T")))))),(0,n.kt)("li",{parentName:"ul"},"Docker-sync",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./"},"Docker sync")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./"},"Docker sync installation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./"},"Docker sync examples")))),(0,n.kt)("li",{parentName:"ul"},"Examples",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mes-docker-PHP56-72-74-examples.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"open-source-docker-examples.md")))),(0,n.kt)("li",{parentName:"ul"},"FAQs",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./"},"From inside of a Docker container, how do I connect to the localhost of the machine")))),(0,n.kt)("li",{parentName:"ul"},"References")))}k.isMDXComponent=!0}}]);