"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8887],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),y=o,m=u["".concat(i,".").concat(y)]||u[y]||d[y]||s;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={slug:"mysql-cluster-ndb-vs-mysql-replication-innodb"},a="mysql-cluster-ndb-vs-mysql-replication-innodb",l={unversionedId:"MySQL/Cluster/mysql-cluster-ndb-vs-mysql-replication-innodb",id:"MySQL/Cluster/mysql-cluster-ndb-vs-mysql-replication-innodb",title:"mysql-cluster-ndb-vs-mysql-replication-innodb",description:"https://stackoverflow.com/questions/5300490/mysql-cluster-ndb-vs-mysql-replication-innodb-for-rails-3-apps-pros-cons",source:"@site/docs/MySQL/Cluster/mysql-cluster-ndb-vs-mysql-replication-innodb.md",sourceDirName:"MySQL/Cluster",slug:"/MySQL/Cluster/mysql-cluster-ndb-vs-mysql-replication-innodb",permalink:"/notebook/docs/MySQL/Cluster/mysql-cluster-ndb-vs-mysql-replication-innodb",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/MySQL/Cluster/mysql-cluster-ndb-vs-mysql-replication-innodb.md",tags:[],version:"current",frontMatter:{slug:"mysql-cluster-ndb-vs-mysql-replication-innodb"},sidebar:"tutorialSidebar",previous:{title:"tiered-datastore-solution-for-high-data-growth-mysql-using-distributed-sql-databases-dsql",permalink:"/notebook/docs/MySQL/Cluster/tiered-datastore-solution-for-high-data-growth-mysql-using-distributed-sql-databases-dsql"},next:{title:"mysql-cluster_docker-compose",permalink:"/notebook/docs/MySQL/Cluster/mysql-cluster_docker-compose"}},i={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql-cluster-ndb-vs-mysql-replication-innodb"},"mysql-cluster-ndb-vs-mysql-replication-innodb"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/5300490/mysql-cluster-ndb-vs-mysql-replication-innodb-for-rails-3-apps-pros-cons"},"https://stackoverflow.com/questions/5300490/mysql-cluster-ndb-vs-mysql-replication-innodb-for-rails-3-apps-pros-cons")),(0,o.kt)("p",null,"There is a good comparison of InnoDB and MySQL Cluster (ndb) recently posted to the docs...worth taking a look: ",(0,o.kt)("a",{parentName:"p",href:"http://dev.mysql.com/doc/refman/5.1/en/mysql-cluster-compared.html"},"http://dev.mysql.com/doc/refman/5.1/en/mysql-cluster-compared.html")),(0,o.kt)("p",null,"The Cluster architecture consists of a pool of MySQL Servers that are accessed by the application(s); these MySQL Servers don't actually store the Cluster data, the data is partitioned over the pool of data nodes below. Every MySQL Server has access to the data in all of the data nodes. If one MySQL server changes a piece of data then it is instantly visible to all of the other MySQL Servers."),(0,o.kt)("p",null,"Obviously, this architecture makes it extremely easy to scale out the database. Unlike sharding, the application doesn't need to know where the data is held - it can just load balance across all available MySQL Servers. Unlike scaling out with MySQL replication Cluster allows you to scale writes just as well as reads. New data nodes or MySQL servers can be added to an existing Cluster with no loss of service to the application"),(0,o.kt)("p",null,"MySQL Cluster's shared-nothing architecture means that it can deliver extremely high availability (99.999%+). Every time you change data, it is synchronously replicated to a second data node; if one data node fails then the applications read & write requests are automatically handled by the backup data node."),(0,o.kt)("p",null,"Due to the distributed nature of MySQL Cluster, some operations can be slower (for example JOINs that have thousands of interim results - though there is a prototype solution available which addresses this) but others can be very fast and can scale extremely well (e.g. primary key reads and writes). You have the option of storing tables (or even columns) in memory or on disk and by choosing the memory option (with changes checkpointed to disk in the backgoround) transactions can be very quick."),(0,o.kt)("p",null,"MySQL Cluster can be more complex to set up than a single MySQL server but it can prevent you having to implement sharding or read/write splitting in your application. Swings and roundabouts."),(0,o.kt)("p",null,"To get the best performance and scalability out of MySQL Cluster you need may need to tweak your application (see Cluster performance tuning white paper: ",(0,o.kt)("a",{parentName:"p",href:"http://www.mysql.com/why-mysql/white-papers/mysql_wp_cluster_perfomance.php"},"http://www.mysql.com/why-mysql/white-papers/mysql_wp_cluster_perfomance.php"),"). If you own the application this isn't normally a big deal but if you're using someone else's application that you can't modify then it could be a problem."),(0,o.kt)("p",null,"A final note is that it doesn't need to be all or nothing - you can choose to store some of your tables in Cluster and some using other storage engines, this is a per-table option. Also you can replicate between Cluster and other storage engines (for example, use Cluster for your run-time database and then replicate to InnoDB to generate complex reports)."))}u.isMDXComponent=!0}}]);