"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a="CUDA Simply Explained - GPU vs CPU Parallel Computing for Beginners",l={unversionedId:"Python/CUDA Simply Explained - GPU vs CPU Parallel Computing for Beginners",id:"Python/CUDA Simply Explained - GPU vs CPU Parallel Computing for Beginners",title:"CUDA Simply Explained - GPU vs CPU Parallel Computing for Beginners",description:"https://www.youtube.com/watch?v=r9IqwpMR9TE",source:"@site/docs/Python/CUDA Simply Explained - GPU vs CPU Parallel Computing for Beginners.md",sourceDirName:"Python",slug:"/Python/CUDA Simply Explained - GPU vs CPU Parallel Computing for Beginners",permalink:"/notebook/docs/Python/CUDA Simply Explained - GPU vs CPU Parallel Computing for Beginners",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Python/CUDA Simply Explained - GPU vs CPU Parallel Computing for Beginners.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to master Streamlit for data science",permalink:"/notebook/docs/Python/Streamlit/The essential Streamlit for all your data science needs"},next:{title:"Comment configurer virtualenv pour un crontab?",permalink:"/notebook/docs/Python/Comment configurer virtualenv pour un crontab"}},c={},p=[{value:"examples",id:"examples",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cuda-simply-explained---gpu-vs-cpu-parallel-computing-for-beginners"},"CUDA Simply Explained - GPU vs CPU Parallel Computing for Beginners"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=r9IqwpMR9TE"},"https://www.youtube.com/watch?v=r9IqwpMR9TE")),(0,o.kt)("h2",{id:"examples"},"examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ nvidia-smi --list-gpus\n    Nvida GeForce RTX 3090 (intel i9-12900k + DDR5)\n\n$ conda create -n ml python=3.9\n$ conda.exe init powershell\n$ conda activate ml\n\n$ conda install -c anaconda cudatoolkit\nor \n$ conda install -c pytorch pytorch (this is better)\n$ conda install -c anaconda jupyter\n$ jupyter notebook\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import torch\n\nif torch.cuda.is_available():\n    device = torch.device("cuda")\nelse:\n    device = torch.device("cpu")\n\nprint("using", device, "device")\n\nimport time\n\nmatrix_size = 32*512\n\nx = torch.randn(matrix_size, matrix_size)\ny = torch.randn(matrix_size, matrix_size)\n\nprint("************** CPU SPEED ********************")\nstart = time.time()\nresult = torch.matmul(x,y)\nprint(time.time() - start)\nprint("verify device:", result.device)\n\nx_gpu = x.to(device)\ny_gpu = y.to(device)\ntorch.cuda.synchronize()\n\nfor i in rang(3):\n    print("************** GPU SPEED ********************")\n    start = time.time()\n    result_gpu = torch.matmul(x_gpu,y_gpu)\n    torch.cuda.synchronize()\n    print(time.time() - start)\n    print("verify device:", result_gpu.device)\n')))}u.isMDXComponent=!0}}]);