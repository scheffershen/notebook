"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[994],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,y=u["".concat(p,".").concat(d)]||u[d]||h[d]||c;return n?o.createElement(y,a(a({ref:t},l),{},{components:n})):o.createElement(y,a({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const c={slug:"try-catch",title:"Try & catch"},a="try & catch",i={unversionedId:"PHP/Exception/try catch",id:"PHP/Exception/try catch",title:"Try & catch",description:"What are exceptions?",source:"@site/docs/PHP/Exception/try catch.md",sourceDirName:"PHP/Exception",slug:"/PHP/Exception/try-catch",permalink:"/notebook/docs/PHP/Exception/try-catch",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/PHP/Exception/try catch.md",tags:[],version:"current",frontMatter:{slug:"try-catch",title:"Try & catch"},sidebar:"tutorialSidebar",previous:{title:"composer-cli (==npm==yarn==apt==pip)",permalink:"/notebook/docs/PHP/Composer/Composer-cli"},next:{title:"Downgrade from 7.4 to 7.2",permalink:"/notebook/docs/PHP/Installation/Downgrade-from-7.4-to-7.2"}},p={},s=[{value:"What are exceptions?",id:"what-are-exceptions",level:2},{value:"When to use exceptions?",id:"when-to-use-exceptions",level:2},{value:"Throw exceptions",id:"throw-exceptions",level:2},{value:"Try catch example",id:"try-catch-example",level:2},{value:"Try catch custom exceptions",id:"try-catch-custom-exceptions",level:2}],l={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"try--catch"},"try & catch"),(0,r.kt)("h2",{id:"what-are-exceptions"},"What are exceptions?"),(0,r.kt)("p",null,"Like in many other languages, exceptions in PHP are errors that can be caught and gracefully handled instead of crashing your app."),(0,r.kt)("h2",{id:"when-to-use-exceptions"},"When to use exceptions?"),(0,r.kt)("p",null,"Use exceptions when you need to gracefully handle an unexpected event instead of just crashing like a fatal error."),(0,r.kt)("h2",{id:"throw-exceptions"},"Throw exceptions"),(0,r.kt)("p",null,"An exception can be thrown using the throw keyword on an instance of the Exception class. The first parameter is a string describing your error."),(0,r.kt)("h2",{id:"try-catch-example"},"Try catch example"),(0,r.kt)("p",null,"In this example, we catch the exception thrown first and display it above our form."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"try {\n    if (empty($_POST['age'])) {\n        throw new Exception('We need to know how old you are.');\n    }\n \n    if ($_POST['age'] < 18) {\n        throw new Exception('You are too young.');\n    }\n} catch (Exception $exception) {\n    $error = $exception->getMessage();\n}\n")),(0,r.kt)("h2",{id:"try-catch-custom-exceptions"},"Try catch custom exceptions"),(0,r.kt)("p",null,"Imagine we have a custom exception for each type of error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// Defining custom exceptions is as simple as that.\nclass NotFoundException extends Exception {}\n \nclass ValidationException extends Exception {}\n\ntry {\n    if (empty($_SERVER['REQUEST_URI']) || $_SERVER['REQUEST_URI'] !== '/form') {\n        throw new NotFoundException();\n    }\n \n    if (empty($_POST['age'])) {\n        throw new ValidationException('We need to know how old you are.');\n    }\n \n    if ($_POST['age'] < 18) {\n        throw new ValidationException('You are too young.');\n    }\n \n    header('Location: /secret-location');\n \n    exit;\n} catch (NotFoundException $exception) {\n    http_response_code(404);\n \n    exit('Page not found.');\n} catch (ValidationException $exception) {\n    $validationError = $exception->getMessage();\n}\n")))}u.isMDXComponent=!0}}]);