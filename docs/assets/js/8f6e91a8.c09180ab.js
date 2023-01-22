"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5026],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||c;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3496:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const c={sidebar_position:1},i=void 0,o={unversionedId:"apache/cli/apachectl",id:"apache/cli/apachectl",title:"apachectl",description:"for Apache 1.x",source:"@site/docs/apache/cli/apachectl.md",sourceDirName:"apache/cli",slug:"/apache/cli/apachectl",permalink:"/notebook/docs/apache/cli/apachectl",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/apache/cli/apachectl.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How To Set Up Apache Virtual Hosts on Ubuntu 18.04",permalink:"/notebook/docs/apache/Set Up/How To Set Up Apache Virtual Hosts on Ubuntu 16_04"},next:{title:"Adding an ipv6 address to require ip in phpmyadmin",permalink:"/notebook/docs/apache/configuration/Adding an ipv6 address to require ip in phpmyadmin"}},l={},p=[{value:"for Apache 1.x",id:"for-apache-1x",level:3},{value:"Gracefully restarting Apache",id:"gracefully-restarting-apache",level:3},{value:"Running a configuration test first",id:"running-a-configuration-test-first",level:3},{value:"Available options for the apachectl command",id:"available-options-for-the-apachectl-command",level:3},{value:"for Apache 2.x",id:"for-apache-2x",level:3},{value:"apache2ctl vs systemctl",id:"apache2ctl-vs-systemctl",level:3},{value:"apachectl vs apache2ctl",id:"apachectl-vs-apache2ctl",level:3},{value:"systemctl vs service",id:"systemctl-vs-service",level:3}],s={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"for-apache-1x"},"for Apache 1.x"),(0,r.kt)("p",null,"If you have made changes to the Apache configuration file httpd.conf or one of the other included configuration files such as the vhosts.d files, you need to reload the Apache service for the changes to take effect."),(0,r.kt)("h3",{id:"gracefully-restarting-apache"},"Gracefully restarting Apache"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ /usr/sbin/apachectl graceful\n")),(0,r.kt)("h3",{id:"running-a-configuration-test-first"},"Running a configuration test first"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ /usr/sbin/apachectl configtest\n")),(0,r.kt)("h3",{id:"available-options-for-the-apachectl-command"},"Available options for the apachectl command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ apachectl start\n$ apachectl stop\n$ apachectl restart\n$ apachectl configtest\n$ apachectl help\n")),(0,r.kt)("h3",{id:"for-apache-2x"},"for Apache 2.x"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/etc/init.d/apache2 start|stop|reload|restart|configtest\n")),(0,r.kt)("h3",{id:"apache2ctl-vs-systemctl"},"apache2ctl vs systemctl"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"apache2ctl")," is specific to Apache and provides functionality that is specific to the Apache server, while ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl")," is a general-purpose service management utility that can be used to manage any service running on a Linux-based operating system."),(0,r.kt)("h3",{id:"apachectl-vs-apache2ctl"},"apachectl vs apache2ctl"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"apachectl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"apache2ctl")," are command-line utilities used to control the Apache HTTP Server. The main difference between the two is that ",(0,r.kt)("inlineCode",{parentName:"p"},"apachectl is used to control the "),"Apache version 1.x",(0,r.kt)("inlineCode",{parentName:"p"},", while "),"apache2ctl",(0,r.kt)("inlineCode",{parentName:"p"},"is used to control the"),"Apache version 2.x`"),(0,r.kt)("h3",{id:"systemctl-vs-service"},"systemctl vs service"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"systemctl")," is a more powerful and feature-rich service management utility, that provides a lot of options and commands that allows to have more control over the services, while ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," is a simpler and older utility that provides basic service management functionality."),(0,r.kt)("p",null,"It's worth to mention that ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," command it's just a symlink to ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl")," in many Linux distributions that uses systemd as the init system."))}h.isMDXComponent=!0}}]);