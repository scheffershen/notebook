"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(n),u=a,k=s["".concat(i,".").concat(u)]||s[u]||d[u]||o;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l="\u7533\u8bf7\u514d\u8d39\u7684 Let's Encrypt \u901a\u914d\u7b26 SSL/TLS \u8bc1\u4e66",p={unversionedId:"Certbot/\u7533\u8bf7\u514d\u8d39\u7684 Lets Encrypt \u901a\u914d\u7b26 SSL-TLS \u8bc1\u4e66",id:"Certbot/\u7533\u8bf7\u514d\u8d39\u7684 Lets Encrypt \u901a\u914d\u7b26 SSL-TLS \u8bc1\u4e66",title:"\u7533\u8bf7\u514d\u8d39\u7684 Let's Encrypt \u901a\u914d\u7b26 SSL/TLS \u8bc1\u4e66",description:"https://www.yangdx.com/2020/08/164.html",source:"@site/docs/Certbot/\u7533\u8bf7\u514d\u8d39\u7684 Lets Encrypt \u901a\u914d\u7b26 SSL-TLS \u8bc1\u4e66.md",sourceDirName:"Certbot",slug:"/Certbot/\u7533\u8bf7\u514d\u8d39\u7684 Lets Encrypt \u901a\u914d\u7b26 SSL-TLS \u8bc1\u4e66",permalink:"/notebook/docs/Certbot/\u7533\u8bf7\u514d\u8d39\u7684 Lets Encrypt \u901a\u914d\u7b26 SSL-TLS \u8bc1\u4e66",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Certbot/\u7533\u8bf7\u514d\u8d39\u7684 Lets Encrypt \u901a\u914d\u7b26 SSL-TLS \u8bc1\u4e66.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"notes",permalink:"/notebook/docs/Certbot/notes"},next:{title:"\u7b14\u8bb0\uff1aLet\u2019s Encrypt \u83b7\u53d6 TLS \u8bc1\u4e66\uff08Webroot + Nginx\uff09",permalink:"/notebook/docs/Certbot/\u7b14\u8bb0_Let-s Encrypt \u83b7\u53d6 TLS \u8bc1\u4e66 Webroot+Nginx"}},i={},c=[{value:"\u4ec0\u4e48\u662f Let&#39;s Encrypt",id:"\u4ec0\u4e48\u662f-lets-encrypt",level:2},{value:"\u4ec0\u4e48\u662f\u901a\u914d\u7b26\u8bc1\u4e66",id:"\u4ec0\u4e48\u662f\u901a\u914d\u7b26\u8bc1\u4e66",level:2},{value:"\u7533\u8bf7\u901a\u914d\u7b26\u8bc1\u4e66",id:"\u7533\u8bf7\u901a\u914d\u7b26\u8bc1\u4e66",level:2},{value:"\u67e5\u770b\u8bc1\u4e66",id:"\u67e5\u770b\u8bc1\u4e66",level:2},{value:"\u8bc1\u4e66\u7eed\u671f",id:"\u8bc1\u4e66\u7eed\u671f",level:2}],m={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7533\u8bf7\u514d\u8d39\u7684-lets-encrypt-\u901a\u914d\u7b26-ssltls-\u8bc1\u4e66"},"\u7533\u8bf7\u514d\u8d39\u7684 Let's Encrypt \u901a\u914d\u7b26 SSL/TLS \u8bc1\u4e66"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.yangdx.com/2020/08/164.html"},"https://www.yangdx.com/2020/08/164.html"),"\n2020\u5e748\u670822\u65e5"),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f-lets-encrypt"},"\u4ec0\u4e48\u662f Let's Encrypt"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Let's Encrypt")," \u662f\u514d\u8d39\u3001\u5f00\u653e\u548c\u81ea\u52a8\u5316\u7684\u8bc1\u4e66\u9881\u53d1\u673a\u6784\u3002\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"\u975e\u76c8\u5229\u7ec4\u7ec7\u4e92\u8054\u7f51\u5b89\u5168\u7814\u7a76\u5c0f\u7ec4\uff08ISRG\uff09"),"\u8fd0\u8425\u3002Let's Encrypt \u63d0\u4f9b\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"\u57df\u540d\u9a8c\u8bc1\u578b\uff08DV\uff09\u8bc1\u4e66"),"\uff0c\u6709\u6548\u671f\u4e3a 90 \u5929\uff0c\u8bc1\u4e66\u5feb\u5230\u671f\u65f6\u53ef\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"\u901a\u8fc7\u811a\u672c\u81ea\u52a8\u7eed\u671f"),"\u3002\u4e2d\u6587\u5b98\u7f51\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://letsencrypt.org/zh-cn/%E3%80%82"},"https://letsencrypt.org/zh-cn/\u3002")),(0,a.kt)("p",null,"\u4ee5\u5f80\u6211\u4eec\u7533\u8bf7 ",(0,a.kt)("inlineCode",{parentName:"p"},"SSL \u8bc1\u4e66"),"\uff0c\u901a\u5e38\u662f\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"IDC \u670d\u52a1\u5546"),"\u7684\u7ba1\u7406\u540e\u53f0\u9875\u9762\u586b\u5199\u8868\u5355\u8fdb\u884c\u7533\u8bf7\uff0c\u800c Let's Encrypt \u5219\u662f\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"\u547d\u4ee4\u884c\u63d0\u4ea4\u7533\u8bf7"),"\uff0c\u64cd\u4f5c\u4e5f\u5f88\u7b80\u5355\u3002Let's Encrypt \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ACME \u534f\u8bae"),"\u6765\u9a8c\u8bc1\u60a8\u5bf9\u7ed9\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"\u57df\u540d\u7684\u63a7\u5236\u6743"),"\u5e76\u5411\u60a8\u9881\u53d1\u8bc1\u4e66\uff0c\u6700\u5e38\u7528\u7684\u662f\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"ACME \u5ba2\u6237\u7aef\u8f6f\u4ef6"),"\u662f  ",(0,a.kt)("inlineCode",{parentName:"p"},"Certbot"),"\u3002"),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f\u901a\u914d\u7b26\u8bc1\u4e66"},"\u4ec0\u4e48\u662f\u901a\u914d\u7b26\u8bc1\u4e66"),(0,a.kt)("p",null,"\u5728\u7533\u8bf7",(0,a.kt)("inlineCode",{parentName:"p"},"\u901a\u914d\u7b26"),"\u8bc1\u4e66\u524d\uff0c\u6211\u4eec\u9996\u5148\u8981\u4e86\u89e3\u4ec0\u4e48\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"\u901a\u914d\u7b26\u57df\u540d")),(0,a.kt)("p",null,"\u4e3e\u4f8b -.yangdx.com \u8fd9\u4e2a\u901a\u914d\u7b26\u57df\u540d\uff0c\u53ef\u4ee5\u5339\u914d ",(0,a.kt)("a",{parentName:"p",href:"http://www.yangdx.com"},"www.yangdx.com")," blog.yangdx.com img.yangdx.com \u7b49\u4e8c\u7ea7\u57df\u540d\uff0c\u6211\u4eec\u4e3a -.yangdx.com \u7533\u8bf7\u901a\u914d\u7b26\u8bc1\u4e66\uff0c\u5c31\u53ef\u4ee5\u4fdd\u62a4\u6240\u6709\u7684\u4e8c\u7ea7\u57df\u540d\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u6839\u57df\u540d yangdx.com")," \u6bd4\u8f83\u7279\u6b8a\uff0c\u5982\u679c\u8981\u628a\u5b83\u5305\u542b\u5230 -.yangdx.com \u7684\u8bc1\u4e66\u91cc\uff0c\u9700\u8981\u624b\u52a8\u6307\u5b9a\u3002"),(0,a.kt)("h2",{id:"\u7533\u8bf7\u901a\u914d\u7b26\u8bc1\u4e66"},"\u7533\u8bf7\u901a\u914d\u7b26\u8bc1\u4e66"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5b89\u88c5 Certbot \u5ba2\u6237\u7aef\uff08\u8981\u7528 root \u8d26\u6237\u64cd\u4f5c\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ wget https://dl.eff.org/certbot-auto\n$ mv certbot-auto /usr/local/bin/certbot-auto\n$ chmod 0755 /usr/local/bin/certbot-auto\n")),(0,a.kt)("p",null,"\u63a5\u7740\uff0c\u6267\u884c certbot-auto \u7533\u8bf7\u8bc1\u4e66\uff0c\u6307\u4ee4\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ certbot-auto certonly \\\n      -d "*.yangdx.com" \\\n      -d "yangdx.com" \\\n      --manual \\\n      --preferred-challenges dns-01 \\\n      --server https://acme-v02.api.letsencrypt.org/directory\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"certonly")," \u8868\u793a",(0,a.kt)("inlineCode",{parentName:"li"},"\u5b89\u88c5\u6a21\u5f0f"),"\uff0cCertbot \u6709",(0,a.kt)("inlineCode",{parentName:"li"},"\u5b89\u88c5\u6a21\u5f0f"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"\u9a8c\u8bc1\u6a21\u5f0f"),"\u4e24\u79cd\u7c7b\u578b\u7684\u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-d")," \u57df\u540d \u8981\u4f7f\u7528\u6b64\u8bc1\u4e66\u7684\u57df\u540d\uff0c\u53ef\u4ee5\u591a\u4e2a\uff0c\u4f46\u901a\u914d\u7b26\u57df\u540d\u6700\u591a\u4e00\u4e2a\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--manual")," \u8868\u793a",(0,a.kt)("inlineCode",{parentName:"li"},"\u624b\u52a8\u5b89\u88c5\u63d2\u4ef6"),"\uff0cCertbot \u6709\u5f88\u591a\u63d2\u4ef6\uff0c\u4e0d\u540c\u7684\u63d2\u4ef6\u90fd\u53ef\u4ee5\u7533\u8bf7\u8bc1\u4e66\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u9700\u8981\u81ea\u884c\u9009\u62e9\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--preferred-challenges")," \u9a8c\u8bc1\u65b9\u5f0f \u9a8c\u8bc1\u57df\u540d\u6240\u6709\u6743\u7684\u65b9\u5f0f\uff0c\u76ee\u524d\u6709\u4ee5\u4e0b\u4e09\u79cd\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dns-01")," - \u7ed9\u57df\u540d\u6dfb\u52a0\u4e00\u4e2a DNS TXT \u8bb0\u5f55\u3002\u5bf9\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"\u901a\u914d\u7b26\u57df\u540d"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"\u53ea\u80fd\u4f7f\u7528 dns-01 \u65b9\u5f0f\u9a8c\u8bc1"),"\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"http-01")," - \u5728\u57df\u540d\u5bf9\u5e94\u7684 Web \u670d\u52a1\u5668\u4e0b\u653e\u7f6e\u4e00\u4e2a HTTP well-known URL \u8d44\u6e90\u6587\u4ef6\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tls-sni-01")," - \u5728\u57df\u540d\u5bf9\u5e94\u7684 Web \u670d\u52a1\u5668\u4e0b\u653e\u7f6e\u4e00\u4e2a HTTPS well-known URL \u8d44\u6e90\u6587\u4ef6\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--server")," \u8ba4\u8bc1\u4e2d\u5fc3URL \u8ba4\u8bc1\u4e2d\u5fc3\u7684 URL\uff0c\u5bf9\u4e8e\u901a\u914d\u7b26\u57df\u540d\uff0c\u76ee\u524d\u53ea\u6709 Let's Encrypt ACME v2 \u7248\u672c\u7684\u8ba4\u8bc1\u4e2d\u5fc3\u652f\u6301\u901a\u914d\u7b26\u8bc1\u4e66\u3002\t\t  ")),(0,a.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u540c\u65f6\u4e3a -.yangdx.com \u548c yangdx.com \u7533\u8bf7\u8bc1\u4e66\uff0c\u6240\u4ee5\u9700\u8981\u505a\u4e24\u6b21 TXT \u8bb0\u5f55\u9a8c\u8bc1"),(0,a.kt)("p",null,"\u8d26\u53f7\u51ed\u636e\u3001\u8bc1\u4e66\u6587\u4ef6\uff0c\u90fd\u4fdd\u5b58\u5728 /etc/letsencrypt \u76ee\u5f55\uff0c\u8bf7\u6ce8\u610f\u5907\u4efd\u3002"),(0,a.kt)("h2",{id:"\u67e5\u770b\u8bc1\u4e66"},"\u67e5\u770b\u8bc1\u4e66"),(0,a.kt)("p",null,"\u4f7f\u7528 certbot-auto certificates \u6307\u4ee4\u53ef\u67e5\u770b\u5f53\u524d\u7533\u8bf7\u7684\u8bc1\u4e66\u548c\u5b83\u7684\u8fc7\u671f\u65f6\u95f4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ certbot-auto certificates\n")),(0,a.kt)("h2",{id:"\u8bc1\u4e66\u7eed\u671f"},"\u8bc1\u4e66\u7eed\u671f"),(0,a.kt)("p",null,"\u8bc1\u4e66\u6709\u6548\u671f\u4e3a 90 \u5929\uff0c\u5373\u5c06\u8fc7\u671f\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"certbot-auto renew")," \u8fdb\u884c\u81ea\u52a8\u7eed\u671f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ cat /etc/hosts\n")))}s.isMDXComponent=!0}}]);