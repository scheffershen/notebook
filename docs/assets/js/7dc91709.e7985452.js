"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,y=p["".concat(o,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(y,s(s({ref:t},d),{},{components:n})):r.createElement(y,s({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},s="Redis with symfony2",l={unversionedId:"Redis/Redis with symfony2",id:"Redis/Redis with symfony2",title:"Redis with symfony2",description:"install",source:"@site/docs/Redis/Redis with symfony2.md",sourceDirName:"Redis",slug:"/Redis/Redis with symfony2",permalink:"/notebook/docs/Redis/Redis with symfony2",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Redis/Redis with symfony2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Redis",permalink:"/notebook/docs/category/redis"},next:{title:"Regex",permalink:"/notebook/docs/category/regex"}},o={},c=[{value:"install",id:"install",level:3},{value:"Redis-cli",id:"redis-cli",level:3},{value:"What is redis ?",id:"what-is-redis-",level:3},{value:"PHP clients",id:"php-clients",level:3},{value:"symfony2",id:"symfony2",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"redis-with-symfony2"},"Redis with symfony2"),(0,i.kt)("h3",{id:"install"},"install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo apt-get -y install redis-server\n")),(0,i.kt)("h3",{id:"redis-cli"},"Redis-cli"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"    $redis = $this->container->get('snc_redis.default');    \n    $specialites = $redis->get('keywords:specialite');\n    $redis->set('keywords:specialite',serialize($array_specialites));\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> redis-cli\n    > monitor\n    > \n    > get keywords:specialite\n")),(0,i.kt)("p",null,"If you run into problems with caching, the Redis cache can be purged by using the flushall command from the Redis command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> redis-cli\n    > flushall\n")),(0,i.kt)("h3",{id:"what-is-redis-"},"What is redis ?"),(0,i.kt)("p",null,"Remote DIctionary Server"),(0,i.kt)("p",null,"Created in 2009"),(0,i.kt)("p",null,"Advanced in-memory key-value data-structure server"),(0,i.kt)("h3",{id:"php-clients"},"PHP clients"),(0,i.kt)("p",null,"Predis vs phpredis"),(0,i.kt)("h3",{id:"symfony2"},"symfony2"),(0,i.kt)("p",null,"installing "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ composer require snc/redis-bundle 1.1.*\n\n$ composer require predis/predis 1.0.*\n")),(0,i.kt)("p",null,"OU "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"//app/autoload.php\n    // allow autoload for predis \n    require __DIR__.'/../vendor/predis/predis/src/Autoloader.php';\n\n    Predis\\Autoloader::register();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"//app/AppKernel.php\n    new Snc\\RedisBundle\\SncRedisBundle(), \n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'//app/config/config.yml\n\n    # Redis\n    snc_redis:\n        clients:\n            default:\n                type: predis\n                alias: default\n                dsn: redis://localhost\n        session:\n            client: default\n            prefix: session\n            ttl: 3600\n        doctrine:\n            metadata_cache:\n                client: default\n                entity_manager: default\n                document_manager: default\n            result_cache:\n                client: default\n                entity_manager: [default, read]\n                document_manager: [default]\n                namespace: "dcrc:"\n            query_cache:\n                client: default\n                entity_manager: default  \n')),(0,i.kt)("p",null,"You can now use Redis as a Symfony2 service!"),(0,i.kt)("p",null,"Controller"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"    $redis = $this->get('snc_redis.default');\n    $redis->set('foo', 'bar');\n    $top20 = $redis->zrevrange('leaderboard', 0, 20, 'WITHSCORES');\n    $canSet = $redis->set('exclusive:onehour', 1 'NX', 'EX', 3600);     \n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://labs.octivi.com/handling-1-billion-requests-a-week-with-symfony2/"},"http://labs.octivi.com/handling-1-billion-requests-a-week-with-symfony2/")),(0,i.kt)("p",null,"Redis metrics:"),(0,i.kt)("p",null,"More than 160.000.000 keys (98% of them are persistent storage!)\n89% Hit ratio \u2013 that means, that only 11% of transactions goes to the MySQL servers"))}p.isMDXComponent=!0}}]);