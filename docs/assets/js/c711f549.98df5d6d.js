"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[894],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||l;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5967:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={},o="GitHub-Release",i={unversionedId:"GitHub/github-release",id:"GitHub/github-release",title:"GitHub-Release",description:"Releases are deployable software.",source:"@site/docs/GitHub/github-release.md",sourceDirName:"GitHub",slug:"/GitHub/github-release",permalink:"/notebook/docs/GitHub/github-release",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/GitHub/github-release.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"github personal-website",permalink:"/notebook/docs/GitHub/github-personal-website"},next:{title:"Google API",permalink:"/notebook/docs/category/google-api"}},s={},c=[{value:"Creating a release",id:"creating-a-release",level:2},{value:"Deleting a release",id:"deleting-a-release",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"github-release"},"GitHub-Release"),(0,n.kt)("p",null,"Releases are deployable software."),(0,n.kt)("p",null,"Releases are based on Git tags,"),(0,n.kt)("p",null,"You can manually create release notes while managing a release. Alternatively, you can automatically generate release notes from a default template, or customize your own release notes template."),(0,n.kt)("h2",{id:"creating-a-release"},"Creating a release"),(0,n.kt)("p",null,"To create a release, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"gh release create")," subcommand. Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"tag")," with the desired tag for the release."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ gh release create TAG\n")),(0,n.kt)("p",null,"For example, this command creates a prerelease with the specified title and notes."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease\n')),(0,n.kt)("p",null,"Releases cannot currently be edited with GitHub CLI."),(0,n.kt)("h2",{id:"deleting-a-release"},"Deleting a release"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ gh release delete TAG -y\n")))}p.isMDXComponent=!0}}]);