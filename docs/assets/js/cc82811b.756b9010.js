"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2095],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var r=a(7294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(t,e){if(null==t)return{};var a,r,s=function(t,e){if(null==t)return{};var a,r,s={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var l=r.createContext({}),d=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return r.createElement(l.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,s=t.mdxType,o=t.originalType,l=t.parentName,u=n(t,["components","mdxType","originalType","parentName"]),c=d(a),h=s,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||o;return a?r.createElement(m,i(i({ref:e},u),{},{components:a})):r.createElement(m,i({ref:e},u))}));function m(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var o=a.length,i=new Array(o);i[0]=h;var n={};for(var l in e)hasOwnProperty.call(e,l)&&(n[l]=e[l]);n.originalType=t,n[c]="string"==typeof t?t:s,i[1]=n;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},735:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>n,toc:()=>d});var r=a(7462),s=(a(7294),a(3905));const o={slug:"tiered-datastore-solution-for-high-data-growth-mysql-using-distributed-sql-databases-dsql"},i="tiered-datastore-solution-for-high-data-growth-mysql-using-distributed-sql-databases-dsql",n={unversionedId:"MySQL/Cluster/distributed-sql-databases-dsql",id:"MySQL/Cluster/distributed-sql-databases-dsql",title:"tiered-datastore-solution-for-high-data-growth-mysql-using-distributed-sql-databases-dsql",description:"https://tech.flipkart.com/tiered-datastore-solution-for-high-data-growth-mysql-using-distributed-sql-databases-dsql-472e391deb7",source:"@site/docs/MySQL/Cluster/distributed-sql-databases-dsql.md",sourceDirName:"MySQL/Cluster",slug:"/MySQL/Cluster/tiered-datastore-solution-for-high-data-growth-mysql-using-distributed-sql-databases-dsql",permalink:"/notebook/docs/MySQL/Cluster/tiered-datastore-solution-for-high-data-growth-mysql-using-distributed-sql-databases-dsql",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/MySQL/Cluster/distributed-sql-databases-dsql.md",tags:[],version:"current",frontMatter:{slug:"tiered-datastore-solution-for-high-data-growth-mysql-using-distributed-sql-databases-dsql"},sidebar:"tutorialSidebar",previous:{title:"bitnami-mysql_docker",permalink:"/notebook/docs/MySQL/Cluster/bitnami-mysql-replication-slave_docker"},next:{title:"mysql-cluster-ndb-vs-mysql-replication-innodb",permalink:"/notebook/docs/MySQL/Cluster/mysql-cluster-ndb-vs-mysql-replication-innodb"}},l={},d=[{value:"Cold Store - S3 Object Store:",id:"cold-store---s3-object-store",level:2},{value:"Continuous Archival",id:"continuous-archival",level:2}],u={toc:d};function c(t){let{components:e,...o}=t;return(0,s.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"tiered-datastore-solution-for-high-data-growth-mysql-using-distributed-sql-databases-dsql"},"tiered-datastore-solution-for-high-data-growth-mysql-using-distributed-sql-databases-dsql"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://tech.flipkart.com/tiered-datastore-solution-for-high-data-growth-mysql-using-distributed-sql-databases-dsql-472e391deb7"},"https://tech.flipkart.com/tiered-datastore-solution-for-high-data-growth-mysql-using-distributed-sql-databases-dsql-472e391deb7"),"\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/"},"https://docs.pingcap.com/")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Hot-Warm-Cold Store Overview",src:a(6258).Z,width:"700",height:"542"})),(0,s.kt)("p",null,"Quick summary about ",(0,s.kt)("inlineCode",{parentName:"p"},"DSQL"),": To quote Wikipedia \u2014 \u201cA distributed SQL database is a single relational database which replicates data across multiple servers. ...\u201d"),(0,s.kt)("p",null,"Now, there are multiple DSQL databases available, we chose Pingcap\u2019s ",(0,s.kt)("inlineCode",{parentName:"p"},"TiDB"),". Along with the excellent core DSQL features and being ",(0,s.kt)("inlineCode",{parentName:"p"},"MySQL")," compatible, TiDB also provides a plethora of tooling."),(0,s.kt)("p",null,"Following are the tools provided by ",(0,s.kt)("inlineCode",{parentName:"p"},"TiDB"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"MyDumper"),": Data Dumping tool to export data from MySQL"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"TiDB Lightning"),": A lightning-fast tool to import the dump taken by the MyDumper to the TiDB cluster"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"TiDB Sync Diff Checker"),": On-demand diff checker to make sure we do not miss out on any data.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Data Migration from MySQL to TiDB",src:a(290).Z,width:"700",height:"365"})),(0,s.kt)("h2",{id:"cold-store---s3-object-store"},"Cold Store - S3 Object Store:"),(0,s.kt)("p",null,"For the cold store, since we don't need any sort of query ability, we can store all of our as dump files rather than maintaining any sort of relations. This will help us compress the data and save space as well."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"MySQL to S3 Data Migration",src:a(8491).Z,width:"700",height:"378"})),(0,s.kt)("h2",{id:"continuous-archival"},"Continuous Archival"),(0,s.kt)("p",null,"We made the entire process automated and continuous so that we have fewer manual touchpoints in our pipeline. We enhanced our archival tool (Scavenger) to have a data push step to both S3 and TiDB."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Overview of Continuous Data Archival Pipeline",src:a(9513).Z,width:"700",height:"515"})))}c.isMDXComponent=!0},9513:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/1_804m7fk6DnFEl78ZN5dX1g-aa07da1495ce3f01b80d6e45a41d13c6.png"},6258:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/1_jvngNLTpuHUJOQXk3Sm_CQ-b0ffd5d894d41b790c6c722510163786.png"},290:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/1_lNJ_gfbEmlnHUqYTy81ucA-8e957578ae810dd870836a5ff7339a6d.png"},8491:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/1_xdJ6uzOEG-qOEfe_Bfb44w-6e0233a4609cb385258651975ab0ceb6.png"}}]);