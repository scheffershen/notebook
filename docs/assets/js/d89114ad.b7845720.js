"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,h=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},l="replacing-jquery-with-vanilla-javascript",o={unversionedId:"Javascript/replacing-jquery-with-vanilla-javascript",id:"Javascript/replacing-jquery-with-vanilla-javascript",title:"replacing-jquery-with-vanilla-javascript",description:"- https://dev.to/rfornal/-replacing-jquery-with-vanilla-javascript-1k2g",source:"@site/docs/Javascript/replacing-jquery-with-vanilla-javascript.md",sourceDirName:"Javascript",slug:"/Javascript/replacing-jquery-with-vanilla-javascript",permalink:"/notebook/docs/Javascript/replacing-jquery-with-vanilla-javascript",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Javascript/replacing-jquery-with-vanilla-javascript.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Javascript Clean Code Best Practices",permalink:"/notebook/docs/Javascript/javascript-clean-code-best-practices"},next:{title:"you might not need jquery",permalink:"/notebook/docs/Javascript/you might not need jquery"}},c={},s=[{value:"Sommaire",id:"sommaire",level:2},{value:"Document Ready",id:"document-ready",level:2},{value:"Selecting Elements",id:"selecting-elements",level:2},{value:"Acting on All Elements in a Selection",id:"acting-on-all-elements-in-a-selection",level:2},{value:"Finding an Element within Another",id:"finding-an-element-within-another",level:2},{value:"Traversing the DOM Tree",id:"traversing-the-dom-tree",level:2},{value:"Styling Elements",id:"styling-elements",level:2},{value:"Creating Elements",id:"creating-elements",level:2},{value:"Working with Classes",id:"working-with-classes",level:2},{value:"Checking if an Element has a Class",id:"checking-if-an-element-has-a-class",level:2},{value:"Working with Events",id:"working-with-events",level:2},{value:"Listening for Dynamically Added Elements",id:"listening-for-dynamically-added-elements",level:2},{value:"Triggering and Creating Events",id:"triggering-and-creating-events",level:2},{value:"Network Requests",id:"network-requests",level:2},{value:"Updating the DOM",id:"updating-the-dom",level:2},{value:"Resources",id:"resources",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"replacing-jquery-with-vanilla-javascript"},"replacing-jquery-with-vanilla-javascript"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/rfornal/-replacing-jquery-with-vanilla-javascript-1k2g"},"https://dev.to/rfornal/-replacing-jquery-with-vanilla-javascript-1k2g")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/HubSpot/YouMightNotNeedjQuery"},"https://github.com/HubSpot/YouMightNotNeedjQuery"))),(0,r.kt)("p",null,"jQuery is still a useful library. With broad browser support of ES6, now is probably a good time to move away from jQuery."),(0,r.kt)("h2",{id:"sommaire"},"Sommaire"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Document Ready"),(0,r.kt)("li",{parentName:"ul"},"Selecting Elements"),(0,r.kt)("li",{parentName:"ul"},"Working with Classes"),(0,r.kt)("li",{parentName:"ul"},"Working with Events"),(0,r.kt)("li",{parentName:"ul"},"Network Requests"),(0,r.kt)("li",{parentName:"ul"},"Updating the DOM")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// vanilla-javascript utiles functions\ndocument.createElement()\ndocument.dispatchEvent()\ndocument.attachEvent()\ndocument.addEventListener()\n\ndocument.querySelectorAll()\ndocument.querySelector()\ndocument.querySelector().appendChild()\ndocument.querySelector().dispatchEvent()\ndocument.querySelector().classList\ndocument.querySelector().style\n")),(0,r.kt)("h2",{id:"document-ready"},"Document Ready"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// With jQuery\n$(document).ready(function() { \n  /* Do things after DOM has fully loaded */\n});\n\n// Without jQuery\nconst onReady = (callback) =>{\n  if (document.readyState!='loading') callback();\n  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);\n  else document.attachEvent('onreadystatechange', function() {\n    if (document.readyState=='complete') callback();\n  });\n};\n\nready(() => { \n  /* Do things after DOM has fully loaded */ \n});\n")),(0,r.kt)("h2",{id:"selecting-elements"},"Selecting Elements"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// jQuery, select all instances of .item\n$('.item');\n\n// Instead, select the first instance of .item\ndocument.querySelector('.item');\n\n// ... or, select all instances of .item  \ndocument.querySelectorAll('.item');\n")),(0,r.kt)("h2",{id:"acting-on-all-elements-in-a-selection"},"Acting on All Elements in a Selection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// With jQuery\n$('.item').hide();\n\n// Without jQuery\ndocument.querySelectorAll('.item').forEach(item => {\n  item.style.display = 'none';\n});\n")),(0,r.kt)("h2",{id:"finding-an-element-within-another"},"Finding an Element within Another"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// With jQuery\nconst container = $('.wrapper');\ncontainer.find('.item');\n\n// Without jQuery\nconst container = document.querySelector('.wrapper');\ncontainer.querySelector('.item');\n")),(0,r.kt)("h2",{id:"traversing-the-dom-tree"},"Traversing the DOM Tree"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// With jQuery\n$('.item').next();\n$('.item').prev();\n$('.item').parent();\n\n// Without jQuery\nconst item = document.querySelector('.item');\nitem.nextElementSibling;\nitem.previousElementSibling;\nitem.parentElement;\n")),(0,r.kt)("h2",{id:"styling-elements"},"Styling Elements"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// With jQuery\n$('.item').css('color', '#000');\n\n// Without jQuery\ndocument.querySelector('item').style.color = '#000';\n\n// === secondary example ===\n\n// With jQuery\n$('.item').css({\n  'color': '#000',\n  'background-color': 'red'\n});\n\n// Without jQuery\nconst item = document.querySelector('.item');\nitem.style.color = '#000';\nitem.style.backgroundColor = 'red';\n\n// Set all styles at once (and override any existing styles)\nitem.style.cssText = 'color: #000; background-color: red';\n")),(0,r.kt)("h2",{id:"creating-elements"},"Creating Elements"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Create a div and span\n$('<div/>');\n$('<span/>');\n\n// Create a div and a span\ndocument.createElement('div');\ndocument.createElement('span');\n\n// === secondary example ===\nconst element = document.createElement('div');\nelement.textContent = 'Text';\n\nconst text = document.createTextNode('Text');\nelement.appendChild(text);\n\n")),(0,r.kt)("h2",{id:"working-with-classes"},"Working with Classes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// With jQuery\n$('.item').addClass('focus');\n$('.item').removeClass('focus');\n$('.item').toggleClass('focus');\n\n// Without jQuery\nconst item = document.querySelector('.item');\nitem.classList.add('focus');\nitem.classList.remove('focus');\nitem.classList.toggle('focus');\n\n// Add focus and highlighted classes, then remove\nconst item = document.querySelector('.item');\nitem.classList.add('focus', 'highlighted');\nitem.classList.remove('focus', 'highlighted');\n\n// Remove the focus class and add blurred\ndocument.querySelector('.item').classList.replace('focus', 'blurred');\n")),(0,r.kt)("h2",{id:"checking-if-an-element-has-a-class"},"Checking if an Element has a Class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// With jQuery\nif ($('.item').hasClass('focus')) {\n  // Do something...\n}\n\n// Without jQuery\nif (document.querySelector('.item').classList.contains('focus')) {\n  // Do something...\n}\n")),(0,r.kt)("h2",{id:"working-with-events"},"Working with Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// With jQuery\n$('.button').click(function(e) {\n  /* handle click event */\n});\n$('.button').mouseenter(function(e) {\n  /* handle click event */\n});\n$(document).keyup(function(e) {\n  /* handle key up event */\n});\n\n// Without jQuery\ndocument.querySelector('.button').addEventListener('click', (e) => {\n  /* ... */\n});\ndocument.querySelector('.button').addEventListener('mouseenter', (e) => {\n  /* ... */\n});\ndocument.addEventListener('keyup', (e) => {\n  /* ... */\n});\n\n// Attach event to dynamic elements in javascript\ndocument.addEventListener('click',function(e){\n    if(e.target && e.target.id== 'brnPrepend'){\n          //do something\n     }\n});\n")),(0,r.kt)("h2",{id:"listening-for-dynamically-added-elements"},"Listening for Dynamically Added Elements"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// With jQuery\n$('.search-container').on('click', '.search-result', handleClick);\n\n// Without jQuery\nconst searchElement = document.createElement('div');\ndocument.querySelector('.search-container').appendChild(searchElement);\nsearchElement.addEventListener('click', handleClick);\n")),(0,r.kt)("h2",{id:"triggering-and-creating-events"},"Triggering and Creating Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// With jQuery\n$(document).trigger('myEvent');\n$('.item').trigger('myEvent');\n\n// Without jQuery\ndocument.dispatchEvent(new Event('myEvent'));\ndocument.querySelector('.item').dispatchEvent(new Event('myEvent'));\n\n// === secondary example ===\n\n// With jQuery\n$('.item').hide();\n$('.item').show();\n\n// Without jQuery\ndocument.querySelector('.item').style.display = 'none';\ndocument.querySelector('.item').style.display = 'block';\n")),(0,r.kt)("h2",{id:"network-requests"},"Network Requests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// With jQuery\n$.ajax({\n    url: 'data.json'\n  }).done(function(data) {\n    // ...\n  }).fail(function() {\n    // Handle error\n  });\n\n// Without jQuery\nfetch('data.json')\n  .then(data => {\n    // Handle data\n  }).catch(error => {\n    // Handle error\n  });\n")),(0,r.kt)("h2",{id:"updating-the-dom"},"Updating the DOM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// With jQuery\n$('.button').text('New text');\n$('.button').text(); // Returns 'New text'\n\n// Without jQuery\ndocument.querySelector('.button').textContent = 'New text';\ndocument.querySelector('.button').textContent; // Returns 'New text'\n\n// === secondary example ===\n\n// Create div element and append it to .container\n$('.container').append($('<div/>'));\n\n// Create a div and append it to .container\nconst element = document.createElement('div');\ndocument.querySelector('.container').appendChild(element);\n\n// === third example ===\n\nconst element = document.createElement('div');\nelement.classList.add('item');\nelement.textContent = 'Text inside item.';\ndocument.querySelector('.container').appendChild(element);\n")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youmightnotneedjquery.com/"},"https://youmightnotneedjquery.com/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/HubSpot/YouMightNotNeedjQuery"},"https://github.com/HubSpot/YouMightNotNeedjQuery"))))}d.isMDXComponent=!0}}]);