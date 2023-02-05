"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89787],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||a;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,s[1]=p;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={},s="Close ALL open HTML tags in PHP string",p={unversionedId:"PHP/Snippets/Close ALL open HTML tags in PHP string",id:"PHP/Snippets/Close ALL open HTML tags in PHP string",title:"Close ALL open HTML tags in PHP string",description:"example 1",source:"@site/docs/PHP/Snippets/Close ALL open HTML tags in PHP string.md",sourceDirName:"PHP/Snippets",slug:"/PHP/Snippets/Close ALL open HTML tags in PHP string",permalink:"/notebook/docs/PHP/Snippets/Close ALL open HTML tags in PHP string",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/PHP/Snippets/Close ALL open HTML tags in PHP string.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"adobe acrobat sign php",permalink:"/notebook/docs/PHP/Resources/adobe acrobat sign php"},next:{title:"PHP yield les g\xe9n\xe9rateurs",permalink:"/notebook/docs/PHP/Snippets/PHP yield les generateurs"}},l={},i=[{value:"example 1",id:"example-1",level:2},{value:"example 2",id:"example-2",level:2}],c={toc:i};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"close-all-open-html-tags-in-php-string"},"Close ALL open HTML tags in PHP string"),(0,o.kt)("h2",{id:"example-1"},"example 1"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/JayWood/348752b568ecd63ae5ce"},"Close ALL open HTML tags in PHP string")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"function closetags($html) {\n    preg_match_all('#<([a-z]+)(?: .*)?(?<![/|/ ])>#iU', $html, $result);\n    $openedtags = $result[1];\n    preg_match_all('#</([a-z]+)>#iU', $html, $result);\n\n    $closedtags = $result[1];\n    $len_opened = count($openedtags);\n\n    if (count($closedtags) == $len_opened) {\n        return $html;\n    }\n    $openedtags = array_reverse($openedtags);\n    for ($i=0; $i < $len_opened; $i++) {\n        if (!in_array($openedtags[$i], $closedtags)) {\n            $html .= '</'.$openedtags[$i].'>';\n        } else {\n            unset($closedtags[array_search($openedtags[$i], $closedtags)]);\n        }\n    }\n    return $html;\n}\n")),(0,o.kt)("h2",{id:"example-2"},"example 2"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pretagteam.com/question/searching-for-all-open-html-tags-and-closing-them-php"},"Searching for all open HTML tags and closing them [PHP]")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$yourText = "<div><span>Text<em>!";\n\n$doc = new DOMDocument();\n$doc->loadHTML($yourText, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);\n$yourText = $doc->saveHTML();\n\necho $yourText;\n\n')))}u.isMDXComponent=!0}}]);