"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7412],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||n;return r?a.createElement(b,l(l({ref:t},u),{},{components:r})):a.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9834:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const n={slug:"How-to-export-and-import-large-MySQL-databases-on-Linux"},l="How to export and import large MySQL databases on Linux",i={unversionedId:"MySQL/Import-Export/How to export and import large MySQL databases on Linux",id:"MySQL/Import-Export/How to export and import large MySQL databases on Linux",title:"How to export and import large MySQL databases on Linux",description:"https://www.arubacloud.com/tutorial/how-to-export-imort-large-mysql-databases-on-linux.aspx",source:"@site/docs/MySQL/Import-Export/How to export and import large MySQL databases on Linux.md",sourceDirName:"MySQL/Import-Export",slug:"/MySQL/Import-Export/How-to-export-and-import-large-MySQL-databases-on-Linux",permalink:"/notebook/docs/MySQL/Import-Export/How-to-export-and-import-large-MySQL-databases-on-Linux",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/MySQL/Import-Export/How to export and import large MySQL databases on Linux.md",tags:[],version:"current",frontMatter:{slug:"How-to-export-and-import-large-MySQL-databases-on-Linux"},sidebar:"tutorialSidebar",previous:{title:"Disable sql_mode=ONLY_FULL_GROUP_BY in Mysql 5.7",permalink:"/notebook/docs/MySQL/Configurations/Disable-sql_mode=ONLY_FULL_GROUP_BY-in-Mysql-57"},next:{title:"How to skip certain database tables with mysqldump?",permalink:"/notebook/docs/MySQL/Import-Export/How to skip certain database tables with mysqldump"}},s={},p=[{value:"Exporting the database",id:"exporting-the-database",level:2},{value:"Database import",id:"database-import",level:2}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-export-and-import-large-mysql-databases-on-linux"},"How to export and import large MySQL databases on Linux"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.arubacloud.com/tutorial/how-to-export-imort-large-mysql-databases-on-linux.aspx"},"https://www.arubacloud.com/tutorial/how-to-export-imort-large-mysql-databases-on-linux.aspx")),(0,o.kt)("p",null,"Published on: 21 July 2020"),(0,o.kt)("h2",{id:"exporting-the-database"},"Exporting the database"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ mysqldump -u username -p my_big_database | gzip > backup.sql.gz\n")),(0,o.kt)("h2",{id:"database-import"},"Database import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ gzip -d backup.sql.gz\n$ mysql -u user -p\n    CREATE DATABASE restored_db;\n    SHOW DATABASES;\n    USE restored_db;\n    SOURCE /path/file.sql;\n    SHOW TABLES\n")),(0,o.kt)("h1",{id:"how-can-i-import-a-large-14-gb-mysql-dump-file-into-a-new-mysql-database"},"How can I import a large (14 GB) MySQL dump file into a new MySQL database?"),(0,o.kt)("p",null,"2012"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/13717277/how-can-i-import-a-large-14-gb-mysql-dump-file-into-a-new-mysql-database"},"https://stackoverflow.com/questions/13717277/how-can-i-import-a-large-14-gb-mysql-dump-file-into-a-new-mysql-database")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -u root -p\n\nset global net_buffer_length=1000000; --Set network buffer length to a large byte number\n\nset global max_allowed_packet=1000000000; --Set maximum allowed packet size to a large byte number\n\nSET foreign_key_checks = 0; --Disable foreign key checking to avoid delays,errors and unwanted behaviour\n\nsource /C//var/www/_SQL/advanz.sql --Import your sql dump file\n\nSET foreign_key_checks = 1; --Remember to enable foreign key checks when procedure is complete!\n```\n")))}m.isMDXComponent=!0}}]);