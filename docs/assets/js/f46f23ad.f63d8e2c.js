"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[36671],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),f=i,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(h,p(p({ref:n},c),{},{components:t})):r.createElement(h,p({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,p=new Array(a);p[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:i,p[1]=o;for(var s=2;s<a;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},36812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const a={title:"What is the difference between echo print and print_r in PHP",slug:"What-is-the-difference-between-echo-print-and-print_r-in-PHP"},p="What is the difference between echo, print, and print_r, var_dump, printf, sprinf in PHP?",o={unversionedId:"PHP/What is the difference between echo, print, and print_r in PHP",id:"PHP/What is the difference between echo, print, and print_r in PHP",title:"What is the difference between echo print and print_r in PHP",description:"echo, print, and print_r",source:"@site/docs/PHP/What is the difference between echo, print, and print_r in PHP.md",sourceDirName:"PHP",slug:"/PHP/What-is-the-difference-between-echo-print-and-print_r-in-PHP",permalink:"/notebook/docs/PHP/What-is-the-difference-between-echo-print-and-print_r-in-PHP",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/PHP/What is the difference between echo, print, and print_r in PHP.md",tags:[],version:"current",frontMatter:{title:"What is the difference between echo print and print_r in PHP",slug:"What-is-the-difference-between-echo-print-and-print_r-in-PHP"},sidebar:"tutorialSidebar",previous:{title:"Mocking in PHPUnit",permalink:"/notebook/docs/PHP/Tests/PHPunit/mock-stub"},next:{title:"Projects",permalink:"/notebook/docs/category/projects"}},l={},s=[{value:"echo, print, and print_r",id:"echo-print-and-print_r",level:2},{value:"php var_dump() vs print_r()",id:"php-var_dump-vs-print_r",level:2},{value:"printf vs sprintf",id:"printf-vs-sprintf",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-the-difference-between-echo-print-and-print_r-var_dump-printf-sprinf-in-php"},"What is the difference between echo, print, and print_r, var_dump, printf, sprinf in PHP?"),(0,i.kt)("h2",{id:"echo-print-and-print_r"},"echo, print, and print_r"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The echo has a void return type, "),(0,i.kt)("li",{parentName:"ul"},"print has a return value of 1 so it can be used in expressions=(). "),(0,i.kt)("li",{parentName:"ul"},"print_r is used to display human-readable information about a variable.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n   $arr = array( "John", "Jacob", "Tom", "Tim");\n   echo "Array...\\n";\n   foreach( $arr as $value ) {\n      echo "Value = $value \\n";\n   }\n   echo "\\nDisplaying Array Values using print...\\n";\n   foreach( $arr as $value ) {\n      print( "Value = $value \\n");\n   }\n   echo "\\nDisplaying Array Values using print_r...\\n";\n   print_r($arr);\n?>\n')),(0,i.kt)("p",null,"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Array...\nValue = John\nValue = Jacob\nValue = Tom\nValue = Tim\n\nDisplaying Array Values using print...\nValue = John\nValue = Jacob\nValue = Tom\nValue = Tim\n\nDisplaying Array Values using print_r...\nArray (\n   [0] => John\n   [1] => Jacob\n   [2] => Tom\n   [3] => Tim\n)\n")),(0,i.kt)("h2",{id:"php-var_dump-vs-print_r"},"php var_dump() vs print_r()"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"var_dump()")," function displays structured information about variables/expressions including its type and value.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"print_r()")," displays information about a variable in a way that's readable by humans"),(0,i.kt)("p",null,"Example: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$obj = (object) array('qualitypoint', 'technologies', 'India');\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"var_dump($obj)")," will display below output in the screen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'object(stdClass)#1 (3) {\n    [0]=> string(12) "qualitypoint"\n    [1]=> string(12) "technologies"\n    [2]=> string(5) "India"\n}\n')),(0,i.kt)("p",null,"And, ",(0,i.kt)("inlineCode",{parentName:"p"},"print_r($obj)")," will display below output in the screen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"stdClass Object ( \n    [0] => qualitypoint\n    [1] => technologies\n    [2] => India\n)\n")),(0,i.kt)("h2",{id:"printf-vs-sprintf"},"printf vs sprintf"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"printf()")," will output a formatted string using placeholders"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sprintf()")," will return the formatted string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$name = 'Jeff';\n\n// The `%s` tells PHP to expect a string\n//            \u2193  `%s` is replaced by  \u2193\nprintf(\"Hello %s, How's it going?\", $name);\n#> Hello Jeff, How's it going?\n\n// Instead of outputting it directly, place it into a variable ($greeting)\n$greeting = sprintf(\"Hello %s, How's it going?\", $name);\necho $greeting;\n#> Hello Jeff, How's it going?\n")))}u.isMDXComponent=!0}}]);