PHPunit
=======

Testing framework for PHP. PHPUnit is a programmer-oriented testing framework for PHP It is an instance of the xUnit architecture for unit testing frameworks..

## Documentation

https://phpunit.readthedocs.io/en/9.5/

- Installation
- Fixtures
	+ setUp(): Before each test method is run, a template method called setUp() is invoked
	+ tearDown(): Each the test method has finished running, whether it succeeded or failed, another template method called tearDown() is invoked
	+ Sharing Fixtures (&lt;use trait&gt;)
		- setUpBeforeClass()
		- tearDownAfterClass()
	+ TemplateMethodsTest
		- TemplateMethodsTest::setUpBeforeClass
		- TemplateMethodsTest::setUp
		- TemplateMethodsTest::assertPreConditions
		- TemplateMethodsTest::testOne
		- TemplateMethodsTest::assertPostConditions
		- TemplateMethodsTest::tearDown
		- TemplateMethodsTest::setUp
		- TemplateMethodsTest::assertPreConditions
		- TemplateMethodsTest::testTwo
		- TemplateMethodsTest::tearDown
		- TemplateMethodsTest::onNotSuccessfulTest
		- TemplateMethodsTest::tearDownAfterClass
- Tests
	+ Test Doubles
- Coverage
	+ Specifying Covered Code Parts
		- @covers + $this->fail();
- Assertions
	+ assertTrue
	+ assertSame
	+ assertEquals
	+ assertThat()
- Annotations
	+ @depends
- Configuration

## Sommaire

- [Commands lines](./cli)
- Fixtures
- [Assertions](./assertions)
- [Annotations](./annotations)
	+ @before: pour spécifier des méthodes devant être appelées avant chaque méthode de test
	+ [@dataProvider](./Data-Provider)
	+ @codeCoverageIgnore: pour exclure des lignes de code de l’analyse de couverture
	+ [@depends](./Test-Dependencies)
	+ @group:  les groupes en utilisant les options --group et --exclude-group du lanceur de test en ligne de commandes
- [Mock et stub](./mock-et-stub)


