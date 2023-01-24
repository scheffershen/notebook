Mocking in PHPUnit
==================

## createStub()

A stub is a fake

- createStub($originalClassName): Stub
    + ->createMockObject($originalClassName): MockObject
        -   ->getMockBuilder($originalClassName)
            ->disableOriginalConstructor()
            ->disableOriginalClone()
            ->disableArgumentClonin()
            ->disallowMockingUnknownTypes()
            ->getMock();

## createMock()

A mock is a piece of dummy code that helps your tests run in a way that isolates specific functionality.
A mock is a stub with additional abilities

- createMock(): MockObject
    + ->createMockObject($originalClassName): MockObject

$mock
    - expects()
        + exactly(2)
        + once()
    - method()
        + with() // parameters for the function
        + willReturn()
        + will()
        + willThrowException()
        + willReturnCallback()
    - nonMockedMethod()

## getMockBuilder()

Custom mocks using the Mock Builder

->getMockBuilder($originalClassName)
    //->disableOriginalConstructor()
    //->disableOriginalClone()
    //->disableArgumentClonin()
    //->disallowMockingUnknownTypes()
    ->setConstructorArgs()
    ->onlyMethods(['doSomething'])
    ->addMethods(['nonExistentMethod'])
    ->getMock();

## usages

- DB classes
- Models
- Email & SMS
- API Calls

## createMock() == getMockBuilder()

Les méthodes `createMock($type)` et `getMockBuilder($type)` fourni par PHPUnit peuvent être utilisées dans un test pour générer automatiquement un objet qui peut agir comme une doublure de test pour une classe originelle indiquée (interface ou non de classe). Cette doublure de test peut être utilisée dans tous les contextes où la classe originelle est attendue ou requise.

La méthode `createMock($type)` retourne immédiatement une doublure 替补 de test pour le type spécifié (interface ou classe). La création de cette doublure est effectuée en suivant par défaut les bonnes pratiques. 

> Les méthodes construct() et clone() de la classe originale ne sont pas exécutées et les arguments passés à une méthode de la doublure de tests ne sont pas clonés. 

- createMock()
    + expects(), 
        + once(), exactly(), never()
    + method()
    + willReturn()

Si ce comportement par défaut ne correspond pas à ce dont vous avez besoin vous pouvez alors utiliser la méthode `getMockBuilder($type)` pour personnaliser la génération de doublure de test en utilisant une interface souple (fluent interface).


```php
class EmailService
{
    public function send(array $to, string $template): bool
    {
        sleep(1);
        return true;
    }
}

class SalesTaxService
{
    public function calculate(float $amount, array $customer): float
    {
        sleep(1);
        return $amount * 6.5 / 100;
    }
}

class PaymentGatewayService
{
    public function charge(array $customer, float $amount, float $tax): bool
    {
        sleep(1);
        return (bool) mt_rand(0, 1);
    }
}

class InvoiceService
{
    public function __construct(protected SalesTaxService $salesTaxService, protected PaymentGatewayService $gatewayService, protected EmailService $emailService) { }

    public function process(array $customer, float $amount): bool
    {
        // 1. calculate sales tax
        $tax = $this->salesTaxService->calculate($amount, $customer);
        // 2. process invoice
        if (! $this->gatewayService->charge($customer, $amount, $tax)) {
            return false;
        }
        // 3. send receipt
        $this->emailService->send($customer, 'receipt');
        return true;
    }
}

class InvoiceServiceTest extends PHPUnit\Framework\TestCase
{
    /** @test */
    public function it_processes_invoice(): void
    {
        $salesTaxServiceMock = $this->createMock(SalesTaxService::class);
        $gatewayServiceMock  = $this->createMock(PaymentGatewayService::class);
        $emailServiceMock    = $this->createMock(EmailService::class);

        $gatewayServiceMock->method('charge')->willReturn(true);

        // given invoice service
        $invoiceService = new InvoiceService($salesTaxServiceMock, $gatewayServiceMock, $emailServiceMock);

        $customer = ['name' => 'Gio'];
        $amount   = 150;

        // when process is called
        $result = $invoiceService->process($customer, $amount);

        // then assert invoice is processed successfully
        $this->assertTrue($result);
    }

    /** @test */
    public function it_sends_receipt_email_when_invoice_is_processed(): void
    {
        $customer = ['name' => 'Gio'];
        $salesTaxServiceMock = $this->createMock(SalesTaxService::class);
        $gatewayServiceMock  = $this->createMock(PaymentGatewayService::class);
        $emailServiceMock    = $this->createMock(EmailService::class);

        $gatewayServiceMock->method('charge')->willReturn(true);

        $emailServiceMock
            ->expects($this->once())
            ->method('send')
            ->with($customer, 'receipt');

        // given invoice service
        $invoiceService = new InvoiceService(
            $salesTaxServiceMock,
            $gatewayServiceMock,
            $emailServiceMock
        );

        $amount   = 150;

        // when process is called
        $result = $invoiceService->process($customer, $amount);

        // then assert invoice is processed successfully
        $this->assertTrue($result);
    }
}
```

## getMockBuilder()

```php
class Database
{
    public function getPersonByID($id)
    {
        // do some stuff in the db to get a person by their ID
        return sql("select * from person where id = $id limit 1;")[0];
    }
}

class Person
{
    public $db = null;
	public function __construct($db) 
    {
        $this->db = $db;
    }
	
	public function greeting($id)
    {
        $friend = $this->db->getPersonByID($id);
        $friendName = $friend->name;
        return "Hello $friendName";
    }
}

class MockTest extends TestCase
{
    public function test_greeting()
    {
        $dbMock = $this->getMockBuilder(Database::class)
            ->setMethods(['getPersonByID'])
            ->getMock();
		
		$mockPerson = new stdClass();
		$mockPerson->name = 'Bob';
        
        $dbMock->method('getPersonByID')->willReturn($mockPerson);
		$test = new Person($dbMock);
        $this->assertEquals('Hello Bob', $test->greeting(2));
    }
}
```


## resources

- https://phpunit.readthedocs.io/fr/latest/test-doubles.
- https://www.youtube.com/watch?v=EhkeoV8nfCQ&t=81s
- https://www.youtube.com/watch?v=kkU43JdJQBE
- https://www.youtube.com/watch?v=rRVoLwZ1tnk
