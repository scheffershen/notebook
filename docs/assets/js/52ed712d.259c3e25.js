"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},y=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),y=r,d=p["".concat(s,".").concat(y)]||p[y]||m[y]||o;return n?l.createElement(d,a(a({ref:t},c),{},{components:n})):l.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var l=n(7462),r=(n(7294),n(3905));const o={slug:"earn-sql-join-multiple-tables"},a="learn-sql-join-multiple-tables",i={unversionedId:"MySQL/Queries/learn-sql-join-multiple-tables",id:"MySQL/Queries/learn-sql-join-multiple-tables",title:"learn-sql-join-multiple-tables",description:"https://www.sqlshack.com/learn-sql-join-multiple-tables/",source:"@site/docs/MySQL/Queries/learn-sql-join-multiple-tables.md",sourceDirName:"MySQL/Queries",slug:"/MySQL/Queries/earn-sql-join-multiple-tables",permalink:"/notebook/docs/MySQL/Queries/earn-sql-join-multiple-tables",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/MySQL/Queries/learn-sql-join-multiple-tables.md",tags:[],version:"current",frontMatter:{slug:"earn-sql-join-multiple-tables"},sidebar:"tutorialSidebar",previous:{title:"Moving from MySQL 5.7 to MySQL 8.0 - What You Should Know",permalink:"/notebook/docs/MySQL/Installation/Moving-from-MySQL-5_7-to-MySQL-8"},next:{title:"the-power-of-mysql-group_concat",permalink:"/notebook/docs/MySQL/Queries/the-power-of-mysql-group_concat"}},s={},u=[{value:"Join multiple tables using INNER JOIN",id:"join-multiple-tables-using-inner-join",level:2},{value:"Join multiple tables using LEFT JOIN",id:"join-multiple-tables-using-left-join",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"learn-sql-join-multiple-tables"},"learn-sql-join-multiple-tables"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.sqlshack.com/learn-sql-join-multiple-tables/"},"https://www.sqlshack.com/learn-sql-join-multiple-tables/")),(0,r.kt)("h2",{id:"join-multiple-tables-using-inner-join"},"Join multiple tables using INNER JOIN"),(0,r.kt)("p",null,"Employee (OneToMany Call)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- id\n- firtname\n- lastname\n")),(0,r.kt)("p",null,"Call (ManyToOne Employee and Call_outcome)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- id\n- employee_id\n- customer_id\n- start_time\n- end_time\n- call_outcome_id\n")),(0,r.kt)("p",null,"Call_outcome (OneToMany Call)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- id\n- outcome_text\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We need to list all calls with their start time and end time. For each call, we want to display what was the outcome as well the first and the last name of the employee who made that call. We\u2019ll sort our calls by start time ascending.    ")),(0,r.kt)("p",null,"The query that does the job is given below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT employee.first_name, employee.last_name, call.start_time, call.end_time, call_outcome.outcome_text\nFROM employee\nINNER JOIN call ON call.employee_id = employee.id\nINNER JOIN call_outcome ON call.call_outcome_id = call_outcome.id\nORDER BY call.start_time ASC;  \n")),(0,r.kt)("h2",{id:"join-multiple-tables-using-left-join"},"Join multiple tables using LEFT JOIN"),(0,r.kt)("p",null,"Country (OneToMany City)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- id\n- country_name\n- country_name_eng\n- country_code\n")),(0,r.kt)("p",null,"City (OneToMany Customer)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- id\n- city_name\n- lat\n- long\n- country_id\n")),(0,r.kt)("p",null,"Customer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- id\n- customer_name\n- city_id\n- customer_address\n- next-call_date (date)\n- ts_inserted (datetime)\n\nSELECT country.country_name_eng, city.city_name, customer.customer_name\nFROM country\nLEFT JOIN city ON city.country_id = country.id\nLEFT JOIN customer ON customer.city_id = city.id;\n")))}p.isMDXComponent=!0}}]);