"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[52027],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={},o="Annotations",i={unversionedId:"PHP/Tests/PHPunit/annotations",id:"PHP/Tests/PHPunit/annotations",title:"Annotations",description:"@before:",source:"@site/docs/PHP/Tests/PHPunit/annotations.md",sourceDirName:"PHP/Tests/PHPunit",slug:"/PHP/Tests/PHPunit/annotations",permalink:"/notebook/docs/PHP/Tests/PHPunit/annotations",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/PHP/Tests/PHPunit/annotations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PHPunit",permalink:"/notebook/docs/PHP/Tests/PHPunit/"},next:{title:"Assertions",permalink:"/notebook/docs/PHP/Tests/PHPunit/assertions"}},p={},l=[{value:"@before:",id:"before",level:2},{value:"@dataProvider",id:"dataprovider",level:2},{value:"@codeCoverageIgnore:",id:"codecoverageignore",level:2},{value:"@depends",id:"depends",level:2},{value:"@group:",id:"group",level:2},{value:"@test",id:"test",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"annotations"},"Annotations"),(0,a.kt)("h2",{id:"before"},"@before:"),(0,a.kt)("p",null,"pour sp\xe9cifier des m\xe9thodes devant \xeatre appel\xe9es avant chaque m\xe9thode de test"),(0,a.kt)("h2",{id:"dataprovider"},"@dataProvider"),(0,a.kt)("p",null,"A test method can accept arbitrary arguments. These arguments are to be provided by a data provider method "),(0,a.kt)("p",null,"A data provider method must be public and either return an array of arrays or an object that implements the Iterator interface and yields an array for each iteration step."),(0,a.kt)("p",null,"For each array that is part of the collection the test method will be called with the contents of the array as its arguments."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nclass DataTest extends \\PHPUnit\\Framework\\TestCase\n{\n    /**\n     * @dataProvider provider\n     */\n    public function testAdd($a, $b, $c)\n    {\n        $this->assertEquals($c, $a + $b);\n    }\n\n    public function provider()\n    {\n        return array(\n          array(0, 0, 0),\n          array(0, 1, 1),\n          array(1, 0, 1),\n          array(1, 1, 3)\n        );\n    }\n}\n?>\n")),(0,a.kt)("h2",{id:"codecoverageignore"},"@codeCoverageIgnore:"),(0,a.kt)("p",null,"pour exclure des lignes de code de l\u2019analyse de couverture"),(0,a.kt)("h2",{id:"depends"},"@depends"),(0,a.kt)("p",null,"express dependencies between test methods"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nclass StackTest extends \\PHPUnit\\Framework\\TestCase\n{\n    public function testEmpty()\n    {\n        $stack = array();\n        $this->assertEmpty($stack);\n\n        return $stack;\n    }\n\n    /**\n     * @depends testEmpty\n     */\n    public function testPush(array $stack)\n    {\n        array_push($stack, 'foo');\n        $this->assertEquals('foo', $stack[count($stack)-1]);\n        $this->assertNotEmpty($stack);\n\n        return $stack;\n    }\n\n    /**\n     * @depends testPush\n     */\n    public function testPop(array $stack)\n    {\n        $this->assertEquals('foo', array_pop($stack));\n        $this->assertEmpty($stack);\n    }\n}\n?>\n")),(0,a.kt)("p",null,"In the example above, the first test, ",(0,a.kt)("inlineCode",{parentName:"p"},"testEmpty()"),", creates a new array and asserts that it is empty. The test then returns the fixture as its result. The second test, ",(0,a.kt)("inlineCode",{parentName:"p"},"testPush()"),", depends on ",(0,a.kt)("inlineCode",{parentName:"p"},"testEmpty()")," and is passed the result of that depended-upon test as its argument. Finally, ",(0,a.kt)("inlineCode",{parentName:"p"},"testPop()")," depends upon ",(0,a.kt)("inlineCode",{parentName:"p"},"testPush()"),"."),(0,a.kt)("h2",{id:"group"},"@group:"),(0,a.kt)("p",null,"les groupes en utilisant les options --group et --exclude-group du lanceur de test en ligne de commandes"),(0,a.kt)("h2",{id:"test"},"@test"))}u.isMDXComponent=!0}}]);