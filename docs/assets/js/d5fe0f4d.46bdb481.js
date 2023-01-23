"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5416],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),u=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return r?i.createElement(m,a(a({ref:t},c),{},{components:r})):i.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5798:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=r(7462),n=(r(7294),r(3905));const o={},a="How-to-Create-Your-Own-Git-Server",s={unversionedId:"Git/How-to-Create-Your-Own-Git-Server",id:"Git/How-to-Create-Your-Own-Git-Server",title:"How-to-Create-Your-Own-Git-Server",description:"Managing SSH Keys",source:"@site/docs/Git/How-to-Create-Your-Own-Git-Server.md",sourceDirName:"Git",slug:"/Git/How-to-Create-Your-Own-Git-Server",permalink:"/notebook/docs/Git/How-to-Create-Your-Own-Git-Server",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Git/How-to-Create-Your-Own-Git-Server.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Git workflow ( Feature-branch-workflow)",permalink:"/notebook/docs/Git/Git-workflow"},next:{title:"Simplest auto-deployment using git hooks",permalink:"/notebook/docs/Git/Simplest auto-deployment using git hooks"}},l={},u=[{value:"Managing SSH Keys",id:"managing-ssh-keys",level:2},{value:"How the Process Works",id:"how-the-process-works",level:2},{value:"Creating the <code>Git</code> User",id:"creating-the-git-user",level:2},{value:"editing-your-SSH-configuration",id:"editing-your-ssh-configuration",level:2},{value:"Uploading Keys to the Git User",id:"uploading-keys-to-the-git-user",level:2},{value:"SSH: one authorized_keys for multiple service accounts",id:"ssh-one-authorized_keys-for-multiple-service-accounts",level:2},{value:"Add an SSH-Enabled User",id:"add-an-ssh-enabled-user",level:2},{value:"Creating the \u201cBare\u201d Git Repositories",id:"creating-the-bare-git-repositories",level:2},{value:"Add Your Remote Repository",id:"add-your-remote-repository",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-create-your-own-git-server"},"How-to-Create-Your-Own-Git-Server"),(0,n.kt)("h2",{id:"managing-ssh-keys"},"Managing SSH Keys"),(0,n.kt)("p",null,"you can simply upload their public key to the Git server. "),(0,n.kt)("h2",{id:"how-the-process-works"},"How the Process Works"),(0,n.kt)("h2",{id:"creating-the-git-user"},"Creating the ",(0,n.kt)("inlineCode",{parentName:"h2"},"Git")," User"),(0,n.kt)("p",null,"Create the Git user with the ",(0,n.kt)("inlineCode",{parentName:"p"},"adduser")," command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ adduser git\n")),(0,n.kt)("p",null,"Now that you have created the git user, you can assume the role by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"su")," command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ su git\n")),(0,n.kt)("p",null,"Now, create the ",(0,n.kt)("inlineCode",{parentName:"p"},".ssh")," directory at git user home directory,"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ mkdir .ssh\n")),(0,n.kt)("p",null,"Next, make the directory only accessible by the git user:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ chmod 700 .ssh\n")),(0,n.kt)("p",null,"Now you have an ",(0,n.kt)("inlineCode",{parentName:"p"},".ssh")," directory to hold your ",(0,n.kt)("inlineCode",{parentName:"p"},"authorized_keys")," file, which is used to authenticate login requests. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ touch .ssh/authorized_keys\n")),(0,n.kt)("p",null,"adjust the privileges to make the file accessible only to the git user:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ chmod 600 .ssh/authorized_keys\n")),(0,n.kt)("p",null,"Now, you have the directory and file necessary to set up the SSH logins."),(0,n.kt)("p",null,"But before we move on, make sure that the ",(0,n.kt)("inlineCode",{parentName:"p"},"git")," group is allowed to authenticate this way."),(0,n.kt)("p",null,"You can do that by ",(0,n.kt)("a",{parentName:"p",href:"##editing-your-SSH-configuration"},"editing your SSH configuration")," and adding ",(0,n.kt)("inlineCode",{parentName:"p"},"git")," to the acceptable groups listed in the configuration file."),(0,n.kt)("h2",{id:"editing-your-ssh-configuration"},"editing-your-SSH-configuration"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This command will start the process of generating your keys:"),(0,n.kt)("p",{parentName:"li"},"$ ssh-keygen -t rsa // == $ ssh-keygen"))),(0,n.kt)("p",null,"The keys are saved, by default, in the ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.ssh")," directory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$cd ~/.ssh\n")),(0,n.kt)("p",null,"Your keys will be saved as ",(0,n.kt)("inlineCode",{parentName:"p"},"id_rsa")," (private key) and ",(0,n.kt)("inlineCode",{parentName:"p"},"id_rsa.pub")," (public key)."),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Managing the SSH Service")),(0,n.kt)("p",null,"The easiest way to do so is to restart the SSH service itself:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ service sshd restart\n")),(0,n.kt)("h2",{id:"uploading-keys-to-the-git-user"},"Uploading Keys to the Git User"),(0,n.kt)("p",null,"Copy the SSH public key that you noted earlier to the /home/git/.ssh/authorized_keys file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDf5cRRsoT0W3VkdSXuMW4eOxH/8mhdL1Jqu0mjaWT5JGdR0Zn/IreGQfBpx/nmnLZpIxmlc8ujGyc4Afoxghb6bICyMlVetLYPewHYDZd5cOmcRyvZIldmgBV9CB9EajWscH0RsMNCEt7YKqqMj01bR6KaalwH/EZB//d6Zf/oXD/urqYBh+m5oqzH8J7owsDH85NuIuhafPtROvbxXOIgwYdkfmT/KVV0+HnszrareUTudlMTiV0lJ7CVgfwT1ZvC7yiDjIk739v3QRv/+/GiDFxYBmhyc/85rl0Jt9IIvCbFd1/PDXj+4tk9iTqRRTWnm4464GYJ87Qa4xiqTPC212SEzB0WVF3MWc8fvQCIJb9b6HDkN+BKIQvx64lsm7Aapzzp1y4e02hpHfowh599GcDNfuXTEp3VJCFK0296YfIDH9OYjVioBXxJDWi4abzdOd8OLNqf7de9JdiPanR1h+mBXHver1fqoHRLxucwg7uv4HlAjtUYdiG0CThUg7c= universalmedica\\yishen@MOBILUM111" >> /home/git/.ssh/authorized_keys\n\n$ echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDf2sUwZVnYqNHJRrxBf0NniKo3EvtGK0QNJ5vKX+SwxvOvUh32Umfq/QZ6bS5n/hnpQr/O95zPzwvc4PWVwKcTOeQxfZAc4ZWdPDOT06RCouRKiY0+eFAcYbl5gszJiDj/gmbiuk5siiWKswpcOcSfjI7vmfV7v2URj7Hoj9/7GghQZApGdOSFKjNq+vKnJMDj/YgNRT8h3/AxBrUgOfHSTN+lB4DmDAXjgGxXex+UV3tXUc979f6cDdMY6XgaE5JXkqoKw3yLvEDRfdVxouDYAlXL+k1EP1TXv48cWrp5llr5dr5Y7SyNUSvRd8WUOsA/6zYXSZFsvWgDzllapO6b/L6gVYOLlf3esvNUXJnf5LVoXOu4ZyZ6z7Y/+lvTjg7WU+IFrSj0+9F0lVjh3I2vd6vIN7EsZkwPwEZ+3V16H0zJQO3cSFa3wZmNhWO1P4dU86GG/AwAe+GMDhixwqv8EgAGwIj9xbvsy/638DgLt4So0RLtpDTler82VXXRr38= universalmedica\\femman@MOBILUM96" > /home/git/.ssh/authorized_keys\n\n$ echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDsiQs6OwR7B6qWgHxcZix7mPTulnCFRHRtBhVqXMenwaGiJ9ndaw05YXR6jsGlMlelH/injig+cwCpqM3V/Gp/Sv+h286DDPB5+RmkclmMr7zXHzA9bmLgCe4l30VA+Hd661maLMLOZrb7YSGb6hUozzr8KhhybOKISrh3lYelCpAU2LyWj0S48N69L958gsz556i40JDDIAb5vnNEiBJZ8DEx+eYBAVIj1GbzEwYcl/Gp03JbWzrrJEWXQugeFntp+ttt4Qa0azn7liDCS+VXBmRVV3dYHFGs+n1VxwB9Dd4RJdX/g6GB7hVfYBYZyFDa19xCLfLP/0vptvUXmGUjM4vvmWl3qk4Dq3gdU2tEt5PfuRsfUmRdBN8ASEITidJ3/MIAX5D0ABT3w6zS44j6eHFM8ktfcHTJatT3ljwOnmijXNx3jOjmyYpKyxr9cWOc5lomzDlARd3Rv1Z341Ri1kLGxiq3obzjPki45f5uP/O1MHGYsOd34XXybDYuKus= universalmedica\\lstass@MOBILUM152" > /home/git/.ssh/authorized_keys\n\necho "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcAHjKMYuGFv0qNI6il1u1BM4l97GEXbLoTEQKMlKmavVK4lqkMACsmBr8KEs6xTOvAFdPSyND2FjQz3sZAatcJNnwRzDf5wXOtEZ4tHbIm9Xba9t2YZpfq3xlYK1oGq+tpInf+veUZlFuA7nMRSucebToIlU5MoWWm8h6Q5lCIjlI5fLCHa4nahHQryACuupVB807WUJZkmHTxC2y1LzWesg/LoHRSJbHNdE+3BUj0GZxng9rSEDwmCjpbZ5/3HpbGXvfLW6lqlqZslwOlOPiqAnJMlOo0txFCBwReYijXBJfzJ8wLLWI8lcJYCVYej9opB+JPZRiVwAcsHuQIAVYeUjiNmxLbawY3m9WfUnepeg/GJGbdH25Hc0RnArB61w0Ys4eQE6wfCVcTwIhdINBXy//jES0LP3li6hNp78+X/Wjk/nQwYeKoZFTYUbOuNjf9RDzRxEn/suq00Znan+WRQmjKS9sBNOFl3ERI+P5Jk21n3Ow9Ibbg80/U5baFlc= universalmedica\\sqiu@MOBILUM78" > /home/git/.ssh/authorized_keys\n\n$ echo "ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEAhiM/opnl9vvft/vIAiE8bhKgbdys5NF6SYxx2GpkZZiQ1RSdb8lJ359nZYCK8YgWm+DNcKn03v5QrY1RlecKb+DT+LnQWNupuazOIJC0rmBxr/Do6j8cFLvTPtWw1rx/XQijbt/jMVvp/CUHIy/mslaIv5+NseNYXFQ6hnpTPau0y8zlJvxNvsluwC7SC533RgjBFVnLoCSqWwpeLT1le01vzFGBHoL05P8cXRmeWdyf12p1JsiwbIE8dKIIzrlIzgXF7xV+5cEqip7rgqOUBUCmjEMginXgYxuxEEWgu6e28GyFurea0XjbqJBRgzCgrm8rBD596NDkXC6zJSIEeQ== david" >> /home/git/.ssh/authorized_keys\n\n$ echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDAiB5MSQfw+Dr7UKN1cbHxHtiETdL0uM+s/ctDcdLzsGOod8KQvTx+l18M8ej4tU3l0z+uJw/bZ1LonvFTjFvuZJ3BhJVoJoP3wz1dj+s3eFlpgu+y6aRhKpfvAgPKdKP8c4Uw6RWxcU4MgZDHRCqCwZ0N0Mhm/PcA20un0kT1zcPMG0ViYGL1rroUL49AzOfl3tQSE+eab0Va0JNGj9zO1M/W4Es6Py+YdZwHm624t78jdFcaYLbKtT+TJOFDuabVnY9K2MPTKLWO2pwAPEGHcEYgCN9pUpdwKGsM72KhuW/eGLOvhb6Sm4saZfgi8aP2SAx47yPOsQiBCU7lAi5gOWmnC0hVmEFv+NTzLtKI8zpl92IQ1dC3YM8B6BmoD5kg8o4DY9j1r3HkB5pDz6bILXMEFQJtpiHRhUlIyFjxzcEhnMZ5yzVt6xth7qSdmBUUcLuyGe4EdWVVFlSd/mDX6/RHFyHOxWdN0zsIUIq70O2fyPFqzg/Y3x+qXEvmJa0= universalmedica\\qlefor@MOBILUM109" >> /home/git/.ssh/authorized_keys\n')),(0,n.kt)("p",null,"============"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ echo "sssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCP4AiHVZzBXIaYrkBCAUWfEAnYruRfCEIwzXuBeSHnuXC2yz+Q92xqur7YXNTcvIzb75qCrFDg0yNZzzABa8eJDBqkCbMK2gufsYkpiTcNmYI6LEJGBHfz2QoVFIOXndiEDF42mIDXKJi7lcqDBKRJIZCaYAwP3UR2ZV9/oJ4Vg5F21PjnjJAsXC71mxsH9RfSQL7F5vedH7HFwP1AvqmLRpjwvMWY2I8ZhyC0MAZqsMCcB94AS0sz7KkP9nbUPCcZI+8iqLRvcLlpTqg1VWfJoOrU5yO513KPvwc/k58PbnLK+3AugGxV3kbwcr+YrEH6buNcf3a3A584Sekmoqq8yXsbU++n+d7L71AHZk5YAnPWAhGARNiGqWo8DqZvzt6us3vcZmUi9SdjiYT3oiqu6VQPBsHyY2wRcveB+zVtDAmNRhRJRQQazv1egBjqzknGN+oatGIs0U/DIcym6KJDiOG9JExeRVZew5muMLDydYUrQNiqg6ETmeMJMbfa+L6LK3rp1ZmPQfIH7fdiDGYEUdy0d+9XYzBsodsrx2cuPXihSD6zm3hvCHtMwBk9jhGcr4Qllgb1DveLY8WuxZZ35G+ibLBGqiVNhqipwRNnkVk4rG6U6dOHtu/cckuzwZn5cxmvJTg8XTRzIYIhv7688esDbCzyP+JE0GP59hWEfw== baptiste.vignaud.tic@gmail.com" >> /home/git/.ssh/authorized_keys \n')),(0,n.kt)("h2",{id:"ssh-one-authorized_keys-for-multiple-service-accounts"},"SSH: one authorized_keys for multiple service accounts"),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"AuthorizedKeysFile")," directive in ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/ssh/sshd_config")," to do this. The defaut location is ",(0,n.kt)("inlineCode",{parentName:"p"},".ssh/authorized_keys")," but you could use something which contained an absolute path e.g."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"AuthorizedKeysFile /home/git/.ssh/authorized_keys /home/git/.ssh/authorized_keys2\n")),(0,n.kt)("h2",{id:"add-an-ssh-enabled-user"},"Add an SSH-Enabled User"),(0,n.kt)("p",null,"Add the new user to the list of allowed users in the ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/ssh/sshd_config")," file on your instance, by editing the AllowUsers parameter, as shown in the following example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"AllowUsers git adminum\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ chown -R git:git /home/git/.ssh\n")),(0,n.kt)("h2",{id:"creating-the-bare-git-repositories"},"Creating the \u201cBare\u201d Git Repositories"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ mkdir mutualise-medica-source.git\n$ cd mutualise-medica-source.git\n\n$ mkdir mutualise-medica-source_v2.git\n$ cd mutualise-medica-source_v2.git\n")),(0,n.kt)("p",null,"Once inside the directory, create a ",(0,n.kt)("inlineCode",{parentName:"p"},"bare")," Git repository:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ git init --bare\n")),(0,n.kt)("h2",{id:"add-your-remote-repository"},"Add Your Remote Repository"),(0,n.kt)("p",null,"So far, you have created a git user account, a bare repository in the directory of your choice, and you have SSH key authentication set up for the git user."),(0,n.kt)("p",null,"Now, you just need to make your local Git installation aware of the new repository:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ mkdir 000_mutualise-medica-source.com_git\n$ cd 000_mutualise-medica-source.com_git\n$ git init\n$ git remote add origin git@178.32.75.104:/home/git/mutualise-medica-source.git\n\n\n$ mkdir 000_mutualise-medica-source.com_v2_git\n$ cd 000_mutualise-medica-source.com_v2_git\n$ git init\n$ git remote add origin git@178.32.75.104:/home/git/mutualise-medica-source_v2.git \n")),(0,n.kt)("p",null,"in remote git server\t"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ git remote add origin /home/git/mutualise-medica-source.git\n")))}d.isMDXComponent=!0}}]);