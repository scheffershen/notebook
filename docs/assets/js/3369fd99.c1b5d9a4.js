"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2701],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>f});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var a=n.createContext({}),p=function(e){var t=n.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(i),d=r,f=m["".concat(a,".").concat(d)]||m[d]||c[d]||o;return i?n.createElement(f,s(s({ref:t},u),{},{components:i})):n.createElement(f,s({ref:t},u))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,s=new Array(o);s[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=i[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},9543:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=i(7462),r=(i(7294),i(3905));const o={sidebar_position:1,slug:"How-to-Repair-File-System-Errors-in-Linux-Mint"},s="How to Repair File System Errors in Linux Mint",l={unversionedId:"Linux/utilities/How to Repair File System Errors in Linux Mint",id:"Linux/utilities/How to Repair File System Errors in Linux Mint",title:"How to Repair File System Errors in Linux Mint",description:"https://www.linuxshelltips.com/repair-linuxmint-file-system-errors/",source:"@site/docs/Linux/utilities/How to Repair File System Errors in Linux Mint.md",sourceDirName:"Linux/utilities",slug:"/Linux/utilities/How-to-Repair-File-System-Errors-in-Linux-Mint",permalink:"/notebook/docs/Linux/utilities/How-to-Repair-File-System-Errors-in-Linux-Mint",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Linux/utilities/How to Repair File System Errors in Linux Mint.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"How-to-Repair-File-System-Errors-in-Linux-Mint"},sidebar:"tutorialSidebar",previous:{title:"Utilities",permalink:"/notebook/docs/category/utilities"},next:{title:"System Information With inxi",permalink:"/notebook/docs/Linux/utilities/System-Information-With-inxi"}},a={},p=[{value:"Linux Mint File System Errors",id:"linux-mint-file-system-errors",level:2},{value:"Repairing File System Errors in Linux Mint",id:"repairing-file-system-errors-in-linux-mint",level:2},{value:"Repairing Non-Root File Systems in Linux Mint",id:"repairing-non-root-file-systems-in-linux-mint",level:2},{value:"Repairing Root File Systems in Linux Mint",id:"repairing-root-file-systems-in-linux-mint",level:2}],u={toc:p};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-repair-file-system-errors-in-linux-mint"},"How to Repair File System Errors in Linux Mint"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.linuxshelltips.com/repair-linuxmint-file-system-errors/"},"https://www.linuxshelltips.com/repair-linuxmint-file-system-errors/")),(0,r.kt)("p",null,"December 24, 2021"),(0,r.kt)("h2",{id:"linux-mint-file-system-errors"},"Linux Mint File System Errors"),(0,r.kt)("p",null,"File system errors occur when we can\u2019t control OS-related behaviors like hardware failures, improper startup procedures, and NFS write errors. The outcome of such OS-related behaviors is lagging or reduced performance and efficiency of the Linux operating system."),(0,r.kt)("h2",{id:"repairing-file-system-errors-in-linux-mint"},"Repairing File System Errors in Linux Mint"),(0,r.kt)("p",null,"To repair file system errors in Linux Mint, you need to use an ",(0,r.kt)("inlineCode",{parentName:"p"},"FSCK")," terminal-based utility, which is used to identify and resolve file system errors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ fsck [COMMAND_OPTIONS] [TARGETED_FILESYSTEM]\n")),(0,r.kt)("p",null,"To use ",(0,r.kt)("inlineCode",{parentName:"p"},"FSCK"),", ensure you are a root user or have Sudoer privileges on the system. There are some important ",(0,r.kt)("inlineCode",{parentName:"p"},"FSCK")," rules to follow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Identify the partitions you are interested in repairing via the command ",(0,r.kt)("inlineCode",{parentName:"li"},"fdisk -l"),"."),(0,r.kt)("li",{parentName:"ul"},"Use the command syntax ",(0,r.kt)("inlineCode",{parentName:"li"},"umount /dev/sdx")," to unmount the targeted filesystem partition for repair."),(0,r.kt)("li",{parentName:"ul"},"Perform a filesystem partition repair with the command ",(0,r.kt)("inlineCode",{parentName:"li"},"fsck -p")," on the unmounted partition ",(0,r.kt)("inlineCode",{parentName:"li"},"/dev/sdx"),"."),(0,r.kt)("li",{parentName:"ul"},"Remount the repaired filesystem partition.")),(0,r.kt)("h2",{id:"repairing-non-root-file-systems-in-linux-mint"},"Repairing Non-Root File Systems in Linux Mint"),(0,r.kt)("p",null,"Consider the following file system repair steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"List all non-root filesystem partitions to identify the one to repair."),(0,r.kt)("p",{parentName:"li"},"$ sudo fdisk -l")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Unmount the partition and attempt filesystem repair"),(0,r.kt)("p",{parentName:"li"},"$ sudo umount /dev/sdb\n$ sudo fsck -p /dev/sdb"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," an option is for automatic repair of any broken file."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, remount the filesystem partition by unplugging it and plugging it back on your computer, and confirm that it is online."),(0,r.kt)("p",{parentName:"li"},"$ sudo fdisk -l"))),(0,r.kt)("h2",{id:"repairing-root-file-systems-in-linux-mint"},"Repairing Root File Systems in Linux Mint"),(0,r.kt)("p",null,"Since repairing the filesystem of a running OS is risky, we need the operating system to be on boot mode."),(0,r.kt)("p",null,"To force Linux Mint to repair and fix root filesystem errors, create the following file and restart your machine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo touch /forcefsck\n")),(0,r.kt)("p",null,"You will however need to create this file every time a file system check needs to take place as the OS deletes it once it is done with it."),(0,r.kt)("p",null,"A more permanent solution is to set files system check and repair to execute after a specific number of system boots. If we want it to take place after two system boots, the command to execute is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo fdisk -l\n$ sudo tune2fs -c 2 /dev/sda5\n")))}m.isMDXComponent=!0}}]);