"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},o="Mocking in PHPUnit",c={unversionedId:"PHP/Tests/PHPunit/mock-stub",id:"PHP/Tests/PHPunit/mock-stub",title:"Mocking in PHPUnit",description:"createStub()",source:"@site/docs/PHP/Tests/PHPunit/mock-stub.md",sourceDirName:"PHP/Tests/PHPunit",slug:"/PHP/Tests/PHPunit/mock-stub",permalink:"/notebook/docs/PHP/Tests/PHPunit/mock-stub",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/PHP/Tests/PHPunit/mock-stub.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"command line",permalink:"/notebook/docs/PHP/Tests/PHPunit/command-line"},next:{title:"What is the difference between echo print and print_r in PHP",permalink:"/notebook/docs/PHP/What-is-the-difference-between-echo-print-and-print_r-in-PHP"}},s={},l=[{value:"createStub()",id:"createstub",level:2},{value:"createMock()",id:"createmock",level:2},{value:"getMockBuilder()",id:"getmockbuilder",level:2},{value:"usages",id:"usages",level:2},{value:"createMock() == getMockBuilder()",id:"createmock--getmockbuilder",level:2},{value:"getMockBuilder()",id:"getmockbuilder-1",level:2},{value:"resources",id:"resources",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mocking-in-phpunit"},"Mocking in PHPUnit"),(0,a.kt)("h2",{id:"createstub"},"createStub()"),(0,a.kt)("p",null,"A stub is a fake"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"createStub($originalClassName): Stub",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"->createMockObject($originalClassName): MockObject",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"->getMockBuilder($originalClassName)\n->disableOriginalConstructor()\n->disableOriginalClone()\n->disableArgumentClonin()\n->disallowMockingUnknownTypes()\n->getMock();")))))),(0,a.kt)("h2",{id:"createmock"},"createMock()"),(0,a.kt)("p",null,"A mock is a piece of dummy code that helps your tests run in a way that isolates specific functionality.\nA mock is a stub with additional abilities"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"createMock(): MockObject",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"->createMockObject($originalClassName): MockObject")))),(0,a.kt)("p",null,"$mock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- expects()\n    + exactly(2)\n    + once()\n- method()\n    + with() // parameters for the function\n    + willReturn()\n    + will()\n    + willThrowException()\n    + willReturnCallback()\n- nonMockedMethod()\n")),(0,a.kt)("h2",{id:"getmockbuilder"},"getMockBuilder()"),(0,a.kt)("p",null,"Custom mocks using the Mock Builder"),(0,a.kt)("p",null,"->getMockBuilder($originalClassName)\n//->disableOriginalConstructor()\n//->disableOriginalClone()\n//->disableArgumentClonin()\n//->disallowMockingUnknownTypes()\n->setConstructorArgs()\n->onlyMethods(","['doSomething']",")\n->addMethods(","['nonExistentMethod']",")\n->getMock();"),(0,a.kt)("h2",{id:"usages"},"usages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DB classes"),(0,a.kt)("li",{parentName:"ul"},"Models"),(0,a.kt)("li",{parentName:"ul"},"Email & SMS"),(0,a.kt)("li",{parentName:"ul"},"API Calls")),(0,a.kt)("h2",{id:"createmock--getmockbuilder"},"createMock() == getMockBuilder()"),(0,a.kt)("p",null,"Les m\xe9thodes ",(0,a.kt)("inlineCode",{parentName:"p"},"createMock($type)")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"getMockBuilder($type)")," fourni par PHPUnit peuvent \xeatre utilis\xe9es dans un test pour g\xe9n\xe9rer automatiquement un objet qui peut agir comme une doublure de test pour une classe originelle indiqu\xe9e (interface ou non de classe). Cette doublure de test peut \xeatre utilis\xe9e dans tous les contextes o\xf9 la classe originelle est attendue ou requise."),(0,a.kt)("p",null,"La m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"createMock($type)")," retourne imm\xe9diatement une doublure \u66ff\u8865 de test pour le type sp\xe9cifi\xe9 (interface ou classe). La cr\xe9ation de cette doublure est effectu\xe9e en suivant par d\xe9faut les bonnes pratiques. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Les m\xe9thodes construct() et clone() de la classe originale ne sont pas ex\xe9cut\xe9es et les arguments pass\xe9s \xe0 une m\xe9thode de la doublure de tests ne sont pas clon\xe9s. ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"createMock()",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"expects(), ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"once(), exactly(), never()"))),(0,a.kt)("li",{parentName:"ul"},"method()"),(0,a.kt)("li",{parentName:"ul"},"willReturn()")))),(0,a.kt)("p",null,"Si ce comportement par d\xe9faut ne correspond pas \xe0 ce dont vous avez besoin vous pouvez alors utiliser la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"getMockBuilder($type)")," pour personnaliser la g\xe9n\xe9ration de doublure de test en utilisant une interface souple (fluent interface)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class EmailService\n{\n    public function send(array $to, string $template): bool\n    {\n        sleep(1);\n        return true;\n    }\n}\n\nclass SalesTaxService\n{\n    public function calculate(float $amount, array $customer): float\n    {\n        sleep(1);\n        return $amount * 6.5 / 100;\n    }\n}\n\nclass PaymentGatewayService\n{\n    public function charge(array $customer, float $amount, float $tax): bool\n    {\n        sleep(1);\n        return (bool) mt_rand(0, 1);\n    }\n}\n\nclass InvoiceService\n{\n    public function __construct(protected SalesTaxService $salesTaxService, protected PaymentGatewayService $gatewayService, protected EmailService $emailService) { }\n\n    public function process(array $customer, float $amount): bool\n    {\n        // 1. calculate sales tax\n        $tax = $this->salesTaxService->calculate($amount, $customer);\n        // 2. process invoice\n        if (! $this->gatewayService->charge($customer, $amount, $tax)) {\n            return false;\n        }\n        // 3. send receipt\n        $this->emailService->send($customer, 'receipt');\n        return true;\n    }\n}\n\nclass InvoiceServiceTest extends PHPUnit\\Framework\\TestCase\n{\n    /** @test */\n    public function it_processes_invoice(): void\n    {\n        $salesTaxServiceMock = $this->createMock(SalesTaxService::class);\n        $gatewayServiceMock  = $this->createMock(PaymentGatewayService::class);\n        $emailServiceMock    = $this->createMock(EmailService::class);\n\n        $gatewayServiceMock->method('charge')->willReturn(true);\n\n        // given invoice service\n        $invoiceService = new InvoiceService($salesTaxServiceMock, $gatewayServiceMock, $emailServiceMock);\n\n        $customer = ['name' => 'Gio'];\n        $amount   = 150;\n\n        // when process is called\n        $result = $invoiceService->process($customer, $amount);\n\n        // then assert invoice is processed successfully\n        $this->assertTrue($result);\n    }\n\n    /** @test */\n    public function it_sends_receipt_email_when_invoice_is_processed(): void\n    {\n        $customer = ['name' => 'Gio'];\n        $salesTaxServiceMock = $this->createMock(SalesTaxService::class);\n        $gatewayServiceMock  = $this->createMock(PaymentGatewayService::class);\n        $emailServiceMock    = $this->createMock(EmailService::class);\n\n        $gatewayServiceMock->method('charge')->willReturn(true);\n\n        $emailServiceMock\n            ->expects($this->once())\n            ->method('send')\n            ->with($customer, 'receipt');\n\n        // given invoice service\n        $invoiceService = new InvoiceService(\n            $salesTaxServiceMock,\n            $gatewayServiceMock,\n            $emailServiceMock\n        );\n\n        $amount   = 150;\n\n        // when process is called\n        $result = $invoiceService->process($customer, $amount);\n\n        // then assert invoice is processed successfully\n        $this->assertTrue($result);\n    }\n}\n")),(0,a.kt)("h2",{id:"getmockbuilder-1"},"getMockBuilder()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class Database\n{\n    public function getPersonByID($id)\n    {\n        // do some stuff in the db to get a person by their ID\n        return sql(\"select * from person where id = $id limit 1;\")[0];\n    }\n}\n\nclass Person\n{\n    public $db = null;\n    public function __construct($db) \n    {\n        $this->db = $db;\n    }\n    \n    public function greeting($id)\n    {\n        $friend = $this->db->getPersonByID($id);\n        $friendName = $friend->name;\n        return \"Hello $friendName\";\n    }\n}\n\nclass MockTest extends TestCase\n{\n    public function test_greeting()\n    {\n        $dbMock = $this->getMockBuilder(Database::class)\n            ->setMethods(['getPersonByID'])\n            ->getMock();\n        \n        $mockPerson = new stdClass();\n        $mockPerson->name = 'Bob';\n        \n        $dbMock->method('getPersonByID')->willReturn($mockPerson);\n        $test = new Person($dbMock);\n        $this->assertEquals('Hello Bob', $test->greeting(2));\n    }\n}\n")),(0,a.kt)("h2",{id:"resources"},"resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://phpunit.readthedocs.io/fr/latest/test-doubles"},"https://phpunit.readthedocs.io/fr/latest/test-doubles"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=EhkeoV8nfCQ&t=81s"},"https://www.youtube.com/watch?v=EhkeoV8nfCQ&t=81s")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=kkU43JdJQBE"},"https://www.youtube.com/watch?v=kkU43JdJQBE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=rRVoLwZ1tnk"},"https://www.youtube.com/watch?v=rRVoLwZ1tnk"))))}p.isMDXComponent=!0}}]);