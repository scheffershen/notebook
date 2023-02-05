"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[30502],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(n),d=o,h=l["".concat(i,".").concat(d)]||l[d]||m[d]||p;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<p;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const p={sidebar_position:2,slug:"Run-php-script-as-daemon-process",title:"Run php script as daemon process"},a="Run php script as daemon process",s={unversionedId:"Linux/php/Run php script as daemon process",id:"Linux/php/Run php script as daemon process",title:"Run php script as daemon process",description:"nohup php myscript.php &",source:"@site/docs/Linux/php/Run php script as daemon process.md",sourceDirName:"Linux/php",slug:"/Linux/php/Run-php-script-as-daemon-process",permalink:"/notebook/docs/Linux/php/Run-php-script-as-daemon-process",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Linux/php/Run php script as daemon process.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"Run-php-script-as-daemon-process",title:"Run php script as daemon process"},sidebar:"tutorialSidebar",previous:{title:"How To Upgrade to PHP 7 on Ubuntu 14.04",permalink:"/notebook/docs/Linux/php/How-To-Upgrade-to-PHP-7-on-Ubuntu-14.04"},next:{title:"GeoIPLookup Geolocation from the CLI",permalink:"/notebook/docs/Linux/php/GeoIPLookup-Geolocation-from-the-CLI"}},i={},c=[{value:"Run a PHP script as a service/daemon using start-stop-daemon",id:"run-a-php-script-as-a-servicedaemon-using-start-stop-daemon",level:2}],u={toc:c};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-php-script-as-daemon-process"},"Run php script as daemon process"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nohup php myscript.php & \n")),(0,o.kt)("p",null,"the & puts your process in the background"),(0,o.kt)("p",null,"A simple ",(0,o.kt)("strong",{parentName:"p"},"kill processid")," will stop it"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Another option is to use Upstart")),(0,o.kt)("p",null,"This approach is similar to ",(0,o.kt)("strong",{parentName:"p"},"Supervisord")," and ",(0,o.kt)("strong",{parentName:"p"},"daemontools"),","),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.bram.us/2013/11/11/run-a-php-script-as-a-servicedaemon-using-start-stop-daemon/"},"https://www.bram.us/2013/11/11/run-a-php-script-as-a-servicedaemon-using-start-stop-daemon/")),(0,o.kt)("h2",{id:"run-a-php-script-as-a-servicedaemon-using-start-stop-daemon"},"Run a PHP script as a service/daemon using start-stop-daemon"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-/etc/init.d/phpchat"},'#! /bin/sh\n\n# Installation\n# - Move this to /etc/init.d/myservice\n# - chmod +x this\n#\n# Starting and stopping\n# - Start: `service myservice start` or `/etc/init.d/myservice start`\n# - Stop: `service myservice stop` or `/etc/init.d/myservice stop`\n\n#ref http://till.klampaeckel.de/blog/archives/94-start-stop-daemon,-Gearman-and-a-little-PHP.html\n#ref http://unix.stackexchange.com/questions/85033/use-start-stop-daemon-for-a-php-server/85570#85570\n#ref http://serverfault.com/questions/229759/launching-a-php-daemon-from-an-lsb-init-script-w-start-stop-daemon\n\nNAME=phpchat\nDESC="Daemon for my magnificent PHP CLI script"\nPIDFILE="/var/run/${NAME}.pid"\nLOGFILE="/var/log/${NAME}.log"\n\nDAEMON="/usr/bin/php"\nDAEMON_OPTS="/var/www/html/partnering/ratchet/bin/chat-server.php"\n\nSTART_OPTS="--start --background --make-pidfile --pidfile ${PIDFILE} --exec ${DAEMON} ${DAEMON_OPTS}"\nSTOP_OPTS="--stop --pidfile ${PIDFILE}"\n\ntest -x $DAEMON || exit 0\n\nset -e\n\ncase "$1" in\n    start)\n        echo -n "Starting ${DESC}: "\n        start-stop-daemon $START_OPTS >> $LOGFILE\n        echo "$NAME."\n        ;;\n    stop)\n        echo -n "Stopping $DESC: "\n        start-stop-daemon $STOP_OPTS\n        echo "$NAME."\n        rm -f $PIDFILE\n        ;;\n    restart|force-reload)\n        echo -n "Restarting $DESC: "\n        start-stop-daemon $STOP_OPTS\n        sleep 1\n        start-stop-daemon $START_OPTS >> $LOGFILE\n        echo "$NAME."\n        ;;\n    *)\n        N=/etc/init.d/$NAME\n        echo "Usage: $N {start|stop|restart|force-reload}" >&2\n        exit 1\n        ;;\nesac\n\nexit 0\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ chmod +x /etc/init.d/phpchat\n\n$ /etc/init.d/phpchat start\n\n$ /etc/init.d/phpchat stop\n\n$ /etc/init.d/phpchat restart\n")))}l.isMDXComponent=!0}}]);