"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3646],{3905:(e,o,t)=>{t.d(o,{Zo:()=>s,kt:()=>m});var n=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),c=function(e){var o=n.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},s=function(e){var o=c(e.components);return n.createElement(p.Provider,{value:o},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},g=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||i;return t?n.createElement(m,a(a({ref:o},s),{},{components:t})):n.createElement(m,a({ref:o},s))}));function m(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var p in o)hasOwnProperty.call(o,p)&&(l[p]=o[p]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const i={},a="cloud-vision php",l={unversionedId:"Google API/Google Vision/cloud-vision php",id:"Google API/Google Vision/cloud-vision php",title:"cloud-vision php",description:"https://packagist.org/packages/google/cloud-vision (2021-03-02)",source:"@site/docs/Google API/Google Vision/cloud-vision php.md",sourceDirName:"Google API/Google Vision",slug:"/Google API/Google Vision/cloud-vision php",permalink:"/notebook/docs/Google API/Google Vision/cloud-vision php",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Google API/Google Vision/cloud-vision php.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cloud-vision lib",permalink:"/notebook/docs/Google API/Google Vision/cloud-vision lib"},next:{title:"packagist",permalink:"/notebook/docs/Google API/Google Vision/packagist"}},p={},c=[],s={toc:c};function u(e){let{components:o,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cloud-vision-php"},"cloud-vision php"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://packagist.org/packages/google/cloud-vision"},"https://packagist.org/packages/google/cloud-vision")," (2021-03-02)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ composer require google/cloud-vision\n")),(0,r.kt)("p",null,"sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"require 'vendor/autoload.php';\n\nuse Google\\Cloud\\Vision\\V1\\Feature\\Type;\nuse Google\\Cloud\\Vision\\V1\\ImageAnnotatorClient;\nuse Google\\Cloud\\Vision\\V1\\Likelihood;\n\n$client = new ImageAnnotatorClient();\n\n// Annotate an image, detecting faces.\n$annotation = $client->annotateImage(\n    fopen('/data/photos/family_photo.jpg', 'r'),\n    [Type::FACE_DETECTION]\n);\n\n// Determine if the detected faces have headwear.\nforeach ($annotation->getFaceAnnotations() as $faceAnnotation) {\n    $likelihood = Likelihood::name($faceAnnotation->getHeadwearLikelihood());\n    echo \"Likelihood of headwear: $likelihood\" . PHP_EOL;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/vision/docs/quickstart"},"https://cloud.google.com/vision/docs/quickstart")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/php-docs-samples/tree/master/vision/"},"https://github.com/GoogleCloudPlatform/php-docs-samples/tree/master/vision/")))}u.isMDXComponent=!0}}]);