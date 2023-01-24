"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>P});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,P=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(P,o(o({ref:t},u),{},{components:n})):r.createElement(P,o({ref:t},u))}));function P(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Bierer D. PHP 8 Programming Tips, Tricks and Best Practices 2021",l={unversionedId:"PHP/PHP_8/Bierer D. PHP 8 Programming Tips, Tricks and Best",id:"PHP/PHP_8/Bierer D. PHP 8 Programming Tips, Tricks and Best",title:"Bierer D. PHP 8 Programming Tips, Tricks and Best Practices 2021",description:"1. Introducing New PHP 8 OOP Features",source:"@site/docs/PHP/PHP_8/Bierer D. PHP 8 Programming Tips, Tricks and Best.md",sourceDirName:"PHP/PHP_8",slug:"/PHP/PHP_8/Bierer D. PHP 8 Programming Tips, Tricks and Best",permalink:"/notebook/docs/PHP/PHP_8/Bierer D. PHP 8 Programming Tips, Tricks and Best",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/PHP/PHP_8/Bierer D. PHP 8 Programming Tips, Tricks and Best.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Attributes in PHP 8",permalink:"/notebook/docs/PHP/PHP_8/Attributes in PHP 8"},next:{title:"PHP 8: before and after",permalink:"/notebook/docs/PHP/PHP_8/PHP 8_before and after"}},s={},p=[{value:"1. Introducing New PHP 8 OOP Features",id:"1-introducing-new-php-8-oop-features",level:2},{value:"2. Learning about PHP 8&#39;s Functional Additions",id:"2-learning-about-php-8s-functional-additions",level:2},{value:"3 Taking Advantage of Error-Handling Enhancements",id:"3-taking-advantage-of-error-handling-enhancements",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bierer-d-php-8-programming-tips-tricks-and-best-practices-2021"},"Bierer D. PHP 8 Programming Tips, Tricks and Best Practices 2021"),(0,a.kt)("h2",{id:"1-introducing-new-php-8-oop-features"},"1. Introducing New PHP 8 OOP Features"),(0,a.kt)("p",null,"1.1 Using constructor property promotion"),(0,a.kt)("p",null,"this new feature combines property declarations and argument lists in the construct() method signature, as well as assigning defaults."),(0,a.kt)("p",null,"1.2 Working with attributes"),(0,a.kt)("p",null,"Simply put, attributes are replacements for traditional PHP comment blocks that follow a prescribed syntax. "),(0,a.kt)("p",null,"1.3 Incorporating ",(0,a.kt)("inlineCode",{parentName:"p"},"match()")," expressions into your program code "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"match()")," expressions are a more accurate shorthand syntax that can potentially replace the tired old ",(0,a.kt)("inlineCode",{parentName:"p"},"switch")," statement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$result = match($num) {\n    0, 1 => 'Foo',\n    2 => 'Bar'\n}\n")),(0,a.kt)("p",null,"1.4 Understanding named arguments"),(0,a.kt)("p",null,"Named arguments represent a way to avoid confusion when calling functions or methods with a large number of arguments"),(0,a.kt)("p",null,"1.5 Exploring new data types"),(0,a.kt)("p",null,"union types and mixed types"),(0,a.kt)("p",null,"1.6 Improving code using typed properties"),(0,a.kt)("p",null,"a typed property is a class property with a data type preassigned. "),(0,a.kt)("h2",{id:"2-learning-about-php-8s-functional-additions"},"2. Learning about PHP 8's Functional Additions"),(0,a.kt)("p",null,"2.1 Working with new PHP 8 operators"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Variadics operator")),(0,a.kt)("p",null,"The variadics operator consists of three leading dots (...) preceding a normal PHP\nvariable (or object property)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nullsafe operator")),(0,a.kt)("p",null,"The nullsafe operator is used in a chain of object property references. If one of the\nproperties in the chain does not exist (in other words, it is considered NULL), the operator\nreturns a value of NULL safely, without issuing a warning."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$xml?->dept?->$type?->$item\n$config?->display($config->$ext($fn));\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Concatenate operator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ternary operator"))),(0,a.kt)("p",null,"2.2 Using arrow functions"),(0,a.kt)("p",null,"2.3 Understanding uniform variable syntax"),(0,a.kt)("p",null,"2.4 Learning new array- and string-handling techniques"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'str_starts_with($url, "https")'),(0,a.kt)("li",{parentName:"ul"},'str_ends_with($url, "login")'),(0,a.kt)("li",{parentName:"ul"},"str_contains() // preg_match()")),(0,a.kt)("p",null,"2.5 Securing SQLite databases with the authorize"),(0,a.kt)("h2",{id:"3-taking-advantage-of-error-handling-enhancements"},"3 Taking Advantage of Error-Handling Enhancements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Understanding PHP 8 error handling"),(0,a.kt)("li",{parentName:"ul"},"Dealing with warnings that are now errors"),(0,a.kt)("li",{parentName:"ul"},"Understanding notices promoted to warnings"),(0,a.kt)("li",{parentName:"ul"},"Handling the @ error control operator")))}c.isMDXComponent=!0}}]);