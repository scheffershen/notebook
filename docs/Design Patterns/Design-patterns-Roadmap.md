Design-patterns-Roadmap
=======================

## Sommaire

- Creational
	+ Builder
	+ Factories
		* Abstract Factory
		* [Factory Method](./Design-patterns-PHP/FactoryPattern/Factory-Pattern.md)
			- Ex: SocialNetWork vs AdapterPattern SocialMedia
			- Marque:
	+ [Prototype](./Design-patterns-PHP/SingletonPattern/Prototype-Pattern.md)
	+ [Singleton](./Design-patterns-PHP/SingletonPattern/Singleton-Pattern.md)
		* User Preferences
- Structural
	+ [Adapter](./Design-patterns-PHP/AdapterPattern/Adapter-Pattern.md)
		* Ex: EBooks, SocialMedia
	+ [Bridge](./Design-patterns-PHP/BridgePattern/Bridge-Pattern.md)
		* Ex: Display
	+ Composite
	+ [Decorator](./Design-patterns-PHP/DecoratorPattern/Decorator-Pattern.md)
	+ [Façade](./Design-patterns-PHP/FacadePattern/Facade-Pattern.md)
	+ Flyweight
	+ Proxy

- Behavioral
	+ Chain of Responsibility
	+ Command
	+ Interpreter
	+ Iterator
	+ Mediator
	+ Memento
	+ [Observer](./Design-patterns-PHP/ObserverPattern/Observer-Pattern.md)
		* Ex: Symfony Events dispatch
	+ State
	+ [Strategy](./Design-patterns-PHP/StrategyPattern/Strategy-Pattern.md)
		* Ex: Comparator
		* Marque: une strategie classe qui a une interface injecté dans le constructeur
	+ Template Method
	+ Visitor

## SOLID

- Javascript
    + [Single-Responsibility-Principle](./Javascript/solid_Single-Responsibility-Principle.js)
    + [Open-Close-Principle](./Javascript/solid_Open-Close-Principle.js)
    + [Liskov-Subsitutuion-Principle](./Javascript/solid_Liskov-Subsitutuion-Principle.js)
    + [Interface-Segregation-Principle](./Javascript/solid_Interface-Segregation-Principle.js)
	+ [Dependency-Inversion-Principle](./Javascript/solid_Dependency-Inversion-Principle.js)
- PHP
	- [SOLID_Le guide simple avec de vrais exemples.md](./PHP/SOLID-Le-guide-simple-avec-de-vrais-exemples.md)
    + [Single-Responsibility-Principle](./PHP/solid_Single-Responsibility-Principle.php)
    + [Open-Close-Principle](./PHP/solid_Open-Close-Principle.php)
    + [Liskov-Subsitutuion-Principle](./PHP/solid_Liskov-Subsitutuion-Principle.php)
    + [Interface-Segregation-Principle](./PHP/solid_Interface-Segregation-Principle.php)
	+ [Dependency-Inversion-Principle](./PHP/solid_Dependency-Inversion-Principle.php)	
- Python
    + [Single-Responsibility-Principle](./Python/solid_Single-Responsibility-Principle.py)
    + [Open-Close-Principle](./Python/solid_Open-Close-Principle.py)
    + [Liskov-Subsitutuion-Principle](./Python/solid_Liskov-Subsitutuion-Principle.py)
    + [Interface-Segregation-Principle](./Python/solid_Interface-Segregation-Principle.py)
	+ [Dependency-Inversion-Principle](./Python/solid_Dependency-Inversion-Principle.py)

## Resources

- https://alexsoyes.com/solid/
- https://github.com/DesignPatternsPHP/DesignPatternsPHP
- https://designpatternsphp.readthedocs.io/zh_CN/latest/README.html
- https://refactoringguru.cn/design-patterns/prototype

## 模式

模式可以简单的被分为三大类。你可以点击每个模式页面下的标题来转到维基百科页面，来获取关于该模式更为详细的解释。

1. 创建型设计模式 = Creational
	1.1. 抽象工厂 = Abstract Factory
	1.2. 生成器模式 = Builder
	1.3. 工厂方法 = Factory Method
	1.4. 对象池 = Pool
	1.5. 原型模式 = Prototype
	1.6. 简单工厂 = Simple Factory
	1.7. 单例模式 = Singleton
	1.8. 静态工厂 = Static Factory
2. 结构型设计模式 = Structural
	2.1. 适配器模式 = Adapter / Wrapper
	2.2. 桥接模式 = Bridge
	2.3. 组合模式 = Composite
	2.4. 数据映射器 = Data Mapper
	2.5. 装饰器 = Decorator
	2.6. 依赖注入 = Dependency Injection
	2.7. 外观模式 = Facade
	2.8. 连贯接口 = Fluent Interface
	2.9. Flyweight = Flyweight 
	2.10. 代理模式 = Proxy
	2.11. 注册模式 = Registry
3. 行为型设计模式 = Behavioral
	3.1. 责任链模式 = Chain of Responsibilites
	3.2. 命令行模式 = Command
	3.3. 解释器模式 = Interpreter
	3.4. 迭代器模式 = Iterator
	3.5. 中介者模式 = Mediator
	3.6. 备忘录模式 = Memento
	3.7. 空对象模式 = Null Object
	3.8. 观察者模式 = Observer
	3.9. 规格模式 = Specification
	3.10. 状态模式 = State
	3.11. 策略模式 = Strategy
	3.12. 模板方法模式 = Template Method
	3.13. 访问者模式 = Visitor