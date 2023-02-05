"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49238],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>v});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,v=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?t.createElement(v,a(a({ref:r},l),{},{components:n})):t.createElement(v,a({ref:r},l))}));function v(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8697:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=n(87462),o=(n(67294),n(3905));const i={slug:"svn-utils-commands"},a="SVN utils commands",s={unversionedId:"SVN/Commandes/SVN utils commands",id:"SVN/Commandes/SVN utils commands",title:"SVN utils commands",description:"http://www.math-linux.com/linux-2/commande-du-jour/article/svn-comment-ignorer-des-fichiers-ou-des-repertoires-avec-subversion",source:"@site/docs/SVN/Commandes/SVN utils commands.md",sourceDirName:"SVN/Commandes",slug:"/SVN/Commandes/svn-utils-commands",permalink:"/notebook/docs/SVN/Commandes/svn-utils-commands",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/SVN/Commandes/SVN utils commands.md",tags:[],version:"current",frontMatter:{slug:"svn-utils-commands"},sidebar:"tutorialSidebar",previous:{title:"SVN Roadmap",permalink:"/notebook/docs/SVN/SVN Roadmap"},next:{title:"git svn - Can I use git and svn at the same time? no need interaction between git and svn",permalink:"/notebook/docs/SVN/FAQ/Can-I-use-git-and-svn-at-the-same-time"}},c={},p=[{value:"Cr\xe9er un d\xe9p\xf4t",id:"cr\xe9er-un-d\xe9p\xf4t",level:2},{value:"Checkout a repository",id:"checkout-a-repository",level:2},{value:"Commit",id:"commit",level:2},{value:"update a file",id:"update-a-file",level:2},{value:"Export le code source",id:"export-le-code-source",level:2},{value:"add all no version files in subversion*",id:"add-all-no-version-files-in-subversion",level:2},{value:"retourner derniere version",id:"retourner-derniere-version",level:2},{value:"retourner une version sp\xe9cifique",id:"retourner-une-version-sp\xe9cifique",level:2},{value:"annuler une update",id:"annuler-une-update",level:2},{value:"Ignorer un fichier",id:"ignorer-un-fichier",level:2},{value:"Pour ignorer le r\xe9pertoire tmp",id:"pour-ignorer-le-r\xe9pertoire-tmp",level:2},{value:"svn cleanup \u2014 Recursively clean up the working copy**",id:"svn-cleanup--recursively-clean-up-the-working-copy",level:2},{value:"Pour ignorer tous les fichiers d\u2019extension .o, utilisez :**",id:"pour-ignorer-tous-les-fichiers-dextension-o-utilisez-",level:2},{value:"our ignorer le r\xe9pertoire tmp**",id:"our-ignorer-le-r\xe9pertoire-tmp",level:2},{value:"Ignorer plusieurs fichiers ou r\xe9pertoires**",id:"ignorer-plusieurs-fichiers-ou-r\xe9pertoires",level:2},{value:"Change SVN repository URL",id:"change-svn-repository-url",level:2},{value:"how to create a SVN branch ?",id:"how-to-create-a-svn-branch-",level:2},{value:"Could i switch from one SVN repos to another ?",id:"could-i-switch-from-one-svn-repos-to-another-",level:2}],l={toc:p};function u(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"svn-utils-commands"},"SVN utils commands"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.math-linux.com/linux-2/commande-du-jour/article/svn-comment-ignorer-des-fichiers-ou-des-repertoires-avec-subversion"},"http://www.math-linux.com/linux-2/commande-du-jour/article/svn-comment-ignorer-des-fichiers-ou-des-repertoires-avec-subversion")),(0,o.kt)("h2",{id:"cr\xe9er-un-d\xe9p\xf4t"},"Cr\xe9er un d\xe9p\xf4t"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ svnadmin create repository\n$ svnadmin create monprojet\n")),(0,o.kt)("h2",{id:"checkout-a-repository"},"Checkout a repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ svn checkout https://mail.universalmedica.com/svn/alcon.medica-source.com  # checkout by a remote SVN\n$ svn co https://mail.universalmedica.com/svn/alcon.medica-source.com  #shortcut\n\n$ svn checkout file:///home/apognu/svn/repository repository # checkout by a local svn SVN\n$ svn checkout file:///home/apognu/svn/repository monprojet\n")),(0,o.kt)("h2",{id:"commit"},"Commit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ svn add localcopy/file.txt\n$ svn commit localcopy -m "commentaire"\n')),(0,o.kt)("h2",{id:"update-a-file"},"update a file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo svn update unit/faq/faq.class.php  \n$ sudo svn up unit/faq/faq.class.php \n")),(0,o.kt)("h2",{id:"export-le-code-source"},"Export le code source"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ svn export bayer bayer-export\n")),(0,o.kt)("h2",{id:"add-all-no-version-files-in-subversion"},"add all no version files in subversion*"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ cd vendor    \n$ svn status | grep -v "^.[ \\t]*\\..*" | grep "^?" | awk \'{print $2}\' | xargs svn add\n$ cd ..\n$ svn commit vendor -m "add redis bundle" \n')),(0,o.kt)("h2",{id:"retourner-derniere-version"},"retourner derniere version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo svn revert unit/faq/faq.class.php\n")),(0,o.kt)("h2",{id:"retourner-une-version-sp\xe9cifique"},"retourner une version sp\xe9cifique"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo svn update -r 1484 unit/faq/faq.class.php\n")),(0,o.kt)("h2",{id:"annuler-une-update"},"annuler une update"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ svn update umds/inc/bib_main.inc.php -r HEAD\n\n$ svn status\n$ svn add localcopy/file.txt\n$ svn commit localcopy -m "commentaire"\n')),(0,o.kt)("h2",{id:"ignorer-un-fichier"},"Ignorer un fichier"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'svn propset svn:ignore "*.o" .\n')),(0,o.kt)("h2",{id:"pour-ignorer-le-r\xe9pertoire-tmp"},"Pour ignorer le r\xe9pertoire tmp"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"svn propset svn:ignore tmp .\n")),(0,o.kt)("h2",{id:"svn-cleanup--recursively-clean-up-the-working-copy"},"svn cleanup \u2014 Recursively clean up the working copy**"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ svn cleanup\n")),(0,o.kt)("h2",{id:"pour-ignorer-tous-les-fichiers-dextension-o-utilisez-"},"Pour ignorer tous les fichiers d\u2019extension .o, utilisez :**"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'svn propset svn:ignore "*.o" \n')),(0,o.kt)("h2",{id:"our-ignorer-le-r\xe9pertoire-tmp"},"our ignorer le r\xe9pertoire tmp**"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"svn propset svn:ignore tmp .\n")),(0,o.kt)("h2",{id:"ignorer-plusieurs-fichiers-ou-r\xe9pertoires"},"Ignorer plusieurs fichiers ou r\xe9pertoires**"),(0,o.kt)("p",null,"svnignore.txt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tmp\nobj\nbin\n*.o\n*.lib\n*.la\n\nsvn propset svn:ignore -F svnignore.txt .    \n")),(0,o.kt)("h2",{id:"change-svn-repository-url"},"Change SVN repository URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ svn switch --relocate https://mail.universalmedica.com/svn/medflixs2019 https://eole-dc01.universalmedica.local/svn/medflixs2019\n")),(0,o.kt)("h2",{id:"how-to-create-a-svn-branch-"},"how to create a SVN branch ?"),(0,o.kt)("p",null,"To create a new branch in a Subversion (SVN) repository, you can use the svn copy command. This command creates a copy of an existing directory in the repository and assigns it a new URL."),(0,o.kt)("p",null,"Here is an example of using the svn copy command to create a branch called my-branch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ svn copy https://svn.example.com/repos/project-trunk https://svn.example.com/repos/project-branches/my-branch -m "Creating branch my-branch"\n')),(0,o.kt)("p",null,"In this example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"svn copy")," command is used to copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"project-trunk")," directory in the repository at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://svn.example.com/repos")," to a new directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"my-branch")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"project-branches")," directory. The ",(0,o.kt)("inlineCode",{parentName:"p"},"-m")," option is used to specify a commit message for the branch creation."),(0,o.kt)("p",null,"Once the branch is created, you can switch to it using the ",(0,o.kt)("inlineCode",{parentName:"p"},"svn switch")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ svn switch https://svn.example.com/repos/project-branches/my-branch\n")),(0,o.kt)("h2",{id:"could-i-switch-from-one-svn-repos-to-another-"},"Could i switch from one SVN repos to another ?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ svn switch https://svn.example.com/repos1/project-trunk https://svn.example.com/repos2/project-trunk\n")))}u.isMDXComponent=!0}}]);