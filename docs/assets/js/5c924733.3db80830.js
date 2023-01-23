"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5896],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:1,slug:"Comment-durcir-la-configuration-de-son-serveur-SSH"},s="Comment durcir la configuration de son serveur SSH ?",a={unversionedId:"Linux/ssh/Comment durcir la configuration de son serveur SSH",id:"Linux/ssh/Comment durcir la configuration de son serveur SSH",title:"Comment durcir la configuration de son serveur SSH ?",description:"Comment durcir la configuration de son serveur SSH ?",source:"@site/docs/Linux/ssh/Comment durcir la configuration de son serveur SSH.md",sourceDirName:"Linux/ssh",slug:"/Linux/ssh/Comment-durcir-la-configuration-de-son-serveur-SSH",permalink:"/notebook/docs/Linux/ssh/Comment-durcir-la-configuration-de-son-serveur-SSH",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Linux/ssh/Comment durcir la configuration de son serveur SSH.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"Comment-durcir-la-configuration-de-son-serveur-SSH"},sidebar:"tutorialSidebar",previous:{title:"ssh",permalink:"/notebook/docs/category/ssh"},next:{title:"how-to-add-swap-on-ubuntu-14-04",permalink:"/notebook/docs/Linux/ssh/how-to-add-swap-on-ubuntu-14-04"}},u={},l=[{value:"Pr\xe9sentation",id:"pr\xe9sentation",level:2},{value:"S\xe9curisation g\xe9n\xe9rale de SSH",id:"s\xe9curisation-g\xe9n\xe9rale-de-ssh",level:2},{value:"Modifier le port et l&#39;interface r\xe9seau d&#39;\xe9coute par d\xe9faut",id:"modifier-le-port-et-linterface-r\xe9seau-d\xe9coute-par-d\xe9faut",level:2},{value:"Configurer le timeout des sessions SSH",id:"configurer-le-timeout-des-sessions-ssh",level:2},{value:"Emp\xeacher la connexion de l&#39;utilisateur root en SSH",id:"emp\xeacher-la-connexion-de-lutilisateur-root-en-ssh",level:2},{value:"III. S\xe9curiser l&#39;authentification par mot de passe classique",id:"iii-s\xe9curiser-lauthentification-par-mot-de-passe-classique",level:2},{value:"IV. Authentification par cl\xe9s publique/priv\xe9e",id:"iv-authentification-par-cl\xe9s-publiquepriv\xe9e",level:2},{value:"D\xe9sactivez l&#39;authentification par mot de passe classique",id:"d\xe9sactivez-lauthentification-par-mot-de-passe-classique",level:2}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"comment-durcir-la-configuration-de-son-serveur-ssh-"},"Comment durcir la configuration de son serveur SSH ?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.it-connect.fr/durcissement-de-config-comment-securiser-son-serveur-ssh/"},"Comment durcir la configuration de son serveur SSH ?")),(0,i.kt)("p",null,"09/12/2021"),(0,i.kt)("h2",{id:"pr\xe9sentation"},"Pr\xe9sentation"),(0,i.kt)("p",null,"Avant de commencer, installez SSH sur votre serveur :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo apt install openssh-server\n# apt utilise aussi l'alias ssh, pour identifier le paquet openssh-server\n")),(0,i.kt)("h2",{id:"s\xe9curisation-g\xe9n\xe9rale-de-ssh"},"S\xe9curisation g\xe9n\xe9rale de SSH"),(0,i.kt)("p",null,'Pour cela, nous allons modifier le fichier "/etc/ssh/sshd_config" de notre serveur SSH. '),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo nano /etc/ssh/sshd_config\n")),(0,i.kt)("h2",{id:"modifier-le-port-et-linterface-r\xe9seau-d\xe9coute-par-d\xe9faut"},"Modifier le port et l'interface r\xe9seau d'\xe9coute par d\xe9faut"),(0,i.kt)("p",null,'Pour que SSH \xe9coute seulement sur l\'adresse IP "192.168.175.129", voici la configuration :'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ListenAddress 116.88.219.15\nListenAddress 2406:3003:2005:19d9::/64\n")),(0,i.kt)("p",null,"Puis, red\xe9marrez le service :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ systemctl restart ssh\n")),(0,i.kt)("h2",{id:"configurer-le-timeout-des-sessions-ssh"},"Configurer le timeout des sessions SSH"),(0,i.kt)("p",null,"d\xe9finir un temps maximal d'inactivit\xe9 pour une session SSH, afin d'\xe9viter que certaines connexions SSH restent actives ind\xe9finiment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ClientAliveInterval 600\nClientAliveCountMax 0\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ systemctl restart ssh\n")),(0,i.kt)("h2",{id:"emp\xeacher-la-connexion-de-lutilisateur-root-en-ssh"},"Emp\xeacher la connexion de l'utilisateur root en SSH"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PermitRootLogin No\n")),(0,i.kt)("h2",{id:"iii-s\xe9curiser-lauthentification-par-mot-de-passe-classique"},"III. S\xe9curiser l'authentification par mot de passe classique"),(0,i.kt)("p",null,"A. Autoriser seulement la connexion pour un ou plusieurs utilisateurs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo nano /etc/ssh/sshd_config\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"AllowUsers tintin\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ systemctl restart ssh\n")),(0,i.kt)("p",null,"Vous pr\xe9f\xe9rez sp\xe9cifier un groupe pour l'autorisation de connexion en SSH ?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"AllowGroups MonGroupeSSH\n")),(0,i.kt)("h2",{id:"iv-authentification-par-cl\xe9s-publiquepriv\xe9e"},"IV. Authentification par cl\xe9s publique/priv\xe9e"),(0,i.kt)("p",null,"il est recommand\xe9 d'utiliser une authentification bas\xe9e sur un couple de cl\xe9s. Pour ce faire, cr\xe9ez la paire de cl\xe9s en utilisant la commande suivante (\xe0 partir de ",(0,i.kt)("inlineCode",{parentName:"p"},"votre machine cliente"),") :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ssh-keygen -b 8192\n")),(0,i.kt)("p",null,"Puis, entrez la commande suivante, afin de copier votre cl\xe9 publique vers ",(0,i.kt)("inlineCode",{parentName:"p"},"le serveur SSH")," (192.168.175.129) (en \xe9coute sur le port 2021) depuis votre machine cliente :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ssh -p 2021 tintin@192.168.175.129\n")),(0,i.kt)("h2",{id:"d\xe9sactivez-lauthentification-par-mot-de-passe-classique"},"D\xe9sactivez l'authentification par mot de passe classique"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo nano /etc/ssh/sshd_config\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PasswordAuthentication no\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo systemctl restart ssh\n")))}p.isMDXComponent=!0}}]);