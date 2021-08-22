/**
 * 单例模式 饿汉式 懒汉式
 */
// 饿汉式
// class Singleton1 {
//   private constructor(){}
//   private static instance : Singleton1 = new Singleton1();
//   public static getInstance() : Singleton1 {
//     if(this.instance){
//       return '已创建实例'
//     }
// var __extends = (this && this.__extends) || (function () {
//     var extendStatics = function (d, b) {
//         extendStatics = Object.setPrototypeOf ||
//             ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
//             function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
//         return extendStatics(d, b);
//     };
//     return function (d, b) {
//         if (typeof b !== "function" && b !== null)
//             throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
//         extendStatics(d, b);
//         function __() { this.constructor = d; }
//         d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//     };
// })();
//     return this.instance;
//   }
// }
// console.log(Singleton1.getInstance(),Singleton1.getInstance())
// 懒汉式
// class Singleton2 {
//   private constructor(){}
//   private static instance: Singleton2 = null;
//   public static getInstance() : Singleton2 {
//       if (this.instance === null) {
//           this.instance = new Singleton2();
//       }else {
//         return "已经有一个相同的对象了."
//       }
//       return this.instance;
//   }
// }
// console.log(Singleton2.getInstance(),Singleton2.getInstance())
/**
 * 简单工厂模式
 * 缺点：扩展困难
 * 优点：
 */
// 抽象产品接口
// interface Product{}
// // 具体产品一
// class ConcreteProduct1 implements Product {
//   constructor(){}
// }
// // 具体产品二
// class ConcreteProduct2 implements Product {
//   constructor(){}
// }
// // 简单工厂
// class SimpleFactory {
//   public static createProduct(type : number) : Product {
//     let product = null; 
//     if (type === 1) {
//         product = new ConcreteProduct1();
//     } else if ( type === 2) {
//         product = new ConcreteProduct2();
//     }
//     return product;
//   }
// }
// // 使用
// let product = SimpleFactory.createProduct(1);
// console.log(product);
// /**
//  * 工厂方法模式
//  */
// // 抽象产品接口
// interface Product2{
//   method1() : void;
//   method2() : void;
// }
// // 具体产品一
// class ConcreteProduct_1 implements Product2 {
//   constructor(){}
//   method1() {
//   }
//   method2() {
//   }
// }
// // 具体产品二
// class ConcreteProduct_2 implements Product2 {
//   constructor(){}
//   method1() {
//   }
//   method2() {
//   }
// }
// // 抽象工厂
// abstract class Creator {
//   public abstract createProduct(type : number) : Product;
// }
// // 具体工厂
// class ConcreteCreator extends Creator {
//   constructor(){
//       super();
//   }
//   public createProduct(type : number) : Product {
//       let product = null;
//       if (type === 1) {
//           product = new ConcreteProduct_1();
//       } else if (type === 2) {
//           product = new ConcreteProduct_2();
//       }
//       return product;
//   }
// }
// // 使用
// const creator : Creator = new ConcreteCreator();
// const myProduct : Product = creator.createProduct(1);
// /**
//  * 抽象工厂模式
//  */
// // 抽象工厂接口
// interface AbstractFactory {
//   createProductA() : AbstractProductA;
//   createProductB() : AbstractProductB;
// }
// // 抽象产品A接口
// interface AbstractProductA {}
// // 抽象产品B接口
// interface AbstractProductB {}
// // 具体工厂1
// class ConcreteFactory1 implements AbstractFactory {
//   constructor() {}
//   public createProductA() : AbstractProductA {
//       return new ConcreteProductA1();
//   }
//   public createProductB() : AbstractProductB {
//       return new ConcreteProductB1();
//   }
// }
// // 具体工厂2
// class ConcreteFactory2 implements AbstractFactory {
//   constructor() {}
//   public createProductA() : AbstractProductA {
//     return new ConcreteProductA2();
//   }
//   public createProductB() : AbstractProductB {
//     return new ConcreteProductB2();
//   }
// }
// // 具体产品A1
// class ConcreteProductA1 implements AbstractProductA {}
// // 具体产品A2
// class ConcreteProductA2 implements AbstractProductA {}
// // 具体产品B1
// class ConcreteProductB1 implements AbstractProductB {}
// // 具体产品B2
// class ConcreteProductB2 implements AbstractProductA {}
// // 使用
// const factory1 : AbstractFactory = new ConcreteFactory1();
// const factory2 : AbstractFactory = new ConcreteFactory2();
// const productA1 : AbstractProductA = factory1.createProductA();
// const productA2 : AbstractProductA = factory2.createProductA();
// const productB1 : AbstractProductB = factory1.createProductB();
// const productB2 : AbstractProductB = factory2.createProductB();
/**
 * 原型模式
 */
// interface Prototype {
//   clone(): Prototype;
// }
// class Dog implements Prototype {
//   public name: string;
//   public birthYear: number;
//   public sex: string;
//   public presentYear: number;
//   constructor() {
//     this.name = "lili";
//     this.birthYear = 2015;
//     this.sex = "男";
//     this.presentYear = 2018;
//   }
//   public getDiscription(): string {
//     return `狗狗叫${this.name},性别${this.sex},${this.presentYear}年${this.presentYear - this.birthYear}岁了`
//   }
//   // 实现复制
//   public clone(): Prototype {
//     return Object.create(this);
//   }
// }
// // 使用
// const dog = new Dog();
// console.log(dog.getDiscription());
// dog.presentYear = 2020;
// const dog1 = Object.create(dog);
// console.log(dog1.getDiscription());
/**
 * 建造者模式
 */
// abstract class Builder {
//   public abstract buildPartA() : void;
//   public abstract buildPartB() : void;
//   public abstract buildPartC() : void;
//   public abstract buildProduct() : Product;
// }
// // 具体建造者(建造食物类)
// class ProductFood extends Builder {
//   private product : Product;
//   constructor(product : Product) {
//     super();
//     this.product = product;
//   }
//   public buildPartA() : void {}
//   public buildPartB() : void {}
//   public buildPartC() : void {}
//   // 最终组建一个产品
//   public buildProduct() : Product {
//     return this.product;
//   }
// }
// // 具体建造者（生产家电类）
// class ProductHomeApplication extends Builder {
//   private product : Product;
//   constructor(product:Product) {
//     super();
//     this.product = product
//   }
//   public buildPartA(): void {
//   }
//   public buildPartB(): void {
//   }
//   public buildPartC(): void {
//   }
//   public buildProduct(): Product {
//     return this.product
//   }
// }
// // 产品角色
// class Product {
//   // 获取数据
//   public doSomething() : void {
//   }
// }
// // 指挥者
// class Director {
//   private _builder : Builder;
//   constructor(builder : Builder) {
//     this._builder = builder;
//   }
//   set builder(builder : Builder) {
//     this._builder = builder;
//   }
//   // 将处理建造的流程交给指挥者
//   public constructorProduct() {
//     this._builder.buildPartA();
//     this._builder.buildPartB();
//     this._builder.buildPartC();
//     return this._builder.buildProduct();
//   }
// }
// // 使用
// const builder : Builder = new ProductFood(new Product());
// const director : Director = new Director(builder);
// const product : Product = director.constructorProduct();
/**
 * 组合模式
 * 特点：不同层级的两个类具有极其相似的结构，可以只构造一个类来表示这两个类。
 */
// abstract class Component {
//   protected name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   public abstract doOperation(): void;
//   public add(component: Component): void {
//   }
//   public remove(component: Component): void {
//   }
//   public getChildren(): Array<Component> {
//     return [];
//   }
// }
// class Composite extends Component {
//   // 构件容器
//   private componentList: any;
//   constructor(name: string) {
//     super(name);
//     this.componentList = [];
//   }
//   public doOperation(): void {
//     console.log(`这是容器${this.name}，处理一些逻辑业务！`);
//   }
//   public add(component: Component): void {
//     this.componentList.push(component);
//   }
//   public remove(component: Component): void {
//     const componentIndex = this.componentList.findIndex((value: Component, index: Number) => {
//       return value == component;
//     });
//     this.componentList.splice(componentIndex, 1);
//   }
//   public getChildren(): Array<Component> {
//     return this.componentList;
//   }
// }
// class Leaf extends Component {
//   constructor(name: string) {
//     super(name);
//   }
//   public doOperation(): void {
//     console.log(`这是叶子节点${this.name}，处理一些逻辑业务！`);
//   }
// }
// function main() {
//   const root: Component = new Composite('root');
//   const node1: Component = new Leaf('1');
//   const node2: Component = new Composite('2');
//   const node3: Component = new Leaf('3');
//   root.add(node1);
//   root.add(node2);
//   root.add(node3);
//   const node2_1: Component = new Leaf("2_1");
//   node2.add(node2_1);
//   const children1 = root.getChildren();
//   console.log(children1);
//   root.remove(node2);
//   const children2 = root.getChildren();
//   console.log(children2);
// }
// main();
/**
 * 外观模式：提供统一接口用来访问子系统中的一群接口。
 */
// class SubSystemA {
//   public doOperationA(): void {
//     console.log('子系统A的举动');
//   }
// }
// class SubSystemB {
//   public doOperationB(): void {
//     console.log('子系统B的举动');
//   }
// }
// class Facade {
//   private subSystemA: SubSystemA;
//   private subSystemB: SubSystemB;
//   constructor() {
//     this.subSystemA = new SubSystemA();
//     this.subSystemB = new SubSystemB();
//   }
//   public doOperation(): void {
//     this.subSystemA.doOperationA();
//     this.subSystemB.doOperationB();
//   }
// }
// function main() {
//   const facade: Facade = new Facade();
//   facade.doOperation();
// }
// main();
/**
 * 享元模式
 */
// abstract class Flyweight {
//   public abstract doOperation(extrinsicState: string): void;
// }
// class ConcreteFlyweight extends Flyweight {
//   private intrinsicState: string;
//   constructor(intrinsicState: string) {
//     super();
//     this.intrinsicState = intrinsicState;
//   }
//   public doOperation(extrinsicState: string): void {
//     console.log(`这是具体享元角色，内部状态为${this.intrinsicState},外部状态为${extrinsicState}`);
//   }
// }
// interface flyweightObject {
//   [key: string]: Flyweight
// }
// class FlyweightFactory {
//   private flyweights: flyweightObject;
//   constructor() {
//     this.flyweights = {};
//   }
//   public getFlyweight(intrinsicState: string): Flyweight {
//     if (!this.flyweights[intrinsicState]) {
//       const flyweight: Flyweight = new ConcreteFlyweight(intrinsicState);
//       this.flyweights[intrinsicState] = flyweight;
//     }
//     return this.flyweights[intrinsicState];
//   }
// }
// function main() {
//   const factory: FlyweightFactory = new FlyweightFactory();
//   const flyweight1: Flyweight = factory.getFlyweight("aa");
//   const flyweight2: Flyweight = factory.getFlyweight("aa");
//   flyweight1.doOperation('x');
//   flyweight2.doOperation('y');
// }
// main();
/**
 * 代理模式 （静态代理 动态代理）
 * 特点：为其他对象提供一种代理以控制其他对象对他的访问。
 */
// 静态代理
// interface Subject {
//   doOperation() : void;
// }
// class RealSubject implements Subject {
//   public doOperation() {
//       console.log('我是RealSubject类，正在执行');
//   }
// }
// class MyProxy implements Subject {
//   private target : Subject;
//   constructor(realSubject : Subject) {
//       this.target = realSubject;
//   }
//   public doOperation() {
//       console.log('我是代理类');
//       this.target.doOperation();
//   }
// }
// function main() {
//   const realSubject : Subject = new RealSubject();
//   const myProxy : Subject = new MyProxy(realSubject);
//   myProxy.doOperation();
// }
// main();
// 分为访问者 中间代理层 访问对象
// 核心：对中间代理层做控制，控制所有对对象的访问控制
// interface Subject {
//   Controller():void
// }
// // 
// class RealSub implements Subject {
//   Controller() {
//   }
// }
// // 代理层
// class Proxys implements Subject{
//   private domain;
//   private subject;
//   constructor(subject:Subject,domain:string){
//     this.subject = subject
//     this.domain = domain
//   }
//   /**
//    * Controller层
//    */
//   public Controller() {
//     // 对域名进行解析，如果以www.google.com开头的域名进行替换并转发并获取转发后的内容，如果不是则直接交付
//     let rep = new RegExp('^www.google.com','g')
//     let flag = rep.test(this.domain)
//     console.log(flag)
//     if(flag) {
//       this.domain = this.domain.replace(/^www.google.com/,'www.baidu.com')   
//     }
//     this.send(this.domain)
//   }
//   // 转发请求数据
//   private send(request:string){
//     console.log(`已收到转发的请求地址${request}`)
//   }
//   // 获取请求的回来的数据
//   private getResponse(){
//   }
//   // 将请求回来的数据渲染到页面
//   private renderPage() {
//   }
// }
// function main() {
//   // 初始化访问对象
//   const objSub: Subject = new RealSub()
//   const obj: Subject = new Proxys(objSub,'www.google.com/search?word=fedora&date=1')
//   obj.Controller()
//   // 代理对象
//   // 访问者
// }
// main()
// 动态代理
// interface Subject {
//   doOperation() : void;
// }
// class RealSubject implements Subject {
//   constructor() {}
//   public doOperation() : void {
//       console.log('我是RealSubject类，正在执行');
//   }
// }
// class ProxyFactory {
//   private target : any;
//   constructor(target : any) {
//       this.target = target;
//   }
//   public getProxyInstance() : any {
//       return new Proxy(this.target, {
//           get: (target, propKey) => {
//               // 做的一些拦截处理
//               return target[propKey];
//           }
//       });
//   }
// }
// function main() {
//   const target : Subject = new RealSubject();
//   const proxyInstance : Subject = <Subject>new ProxyFactory(target).getProxyInstance();
//   proxyInstance.doOperation();
// }
// main();
/**
 * 模版方法模式
 */
// var AbstractClass = /** @class */ (function () {
//     function AbstractClass() {
//     }
//     // 模板方法
//     AbstractClass.prototype.template = function () {
//         this.lookForSchool();
//         this.providedLanguageGrade() && this.applyForEntry();
//         this.applyForPassport();
//         this.readyTo();
//         this.arrived();
//     };
//     // 索取资料
//     AbstractClass.prototype.lookForSchool = function () {
//         console.log('获取学校资料！');
//     };
//     // 提供语言证明
//     AbstractClass.prototype.providedLanguageGrade = function () {
//         return false;
//     };
//     // 入学申请
//     AbstractClass.prototype.applyForEntry = function () {
//         console.log('递交入学申请');
//         return false;
//     };
//     // 办理护照
//     AbstractClass.prototype.applyForPassport = function () {
//         console.log('办理护照');
//     };
//     // 前往准备工作
//     AbstractClass.prototype.readyTo = function () {
//         console.log('前往准备工作');
//     };
//     // 抵达
//     AbstractClass.prototype.arrived = function () {
//         console.log('抵达');
//     };
//     // 钩子方法
//     AbstractClass.prototype.hookMethod = function () {
//         return true;
//     };
//     return AbstractClass;
// }());
// // 前往USA
// var GOTOUSA = /** @class */ (function (_super) {
//     __extends(GOTOUSA, _super);
//     function GOTOUSA() {
//         return _super !== null && _super.apply(this, arguments) || this;
//     }
//     // 获取学校资料
//     GOTOUSA.prototype.lookForSchool = function () {
//         console.log('获取MIT资料');
//     };
//     // 提供托福证明
//     GOTOUSA.prototype.providedLanguageGrade = function () {
//         console.log('提供TOEFL证明');
//         return true;
//     };
//     return GOTOUSA;
// }(AbstractClass));
// // 前往UK
// var GOTOUK = /** @class */ (function (_super) {
//     __extends(GOTOUK, _super);
//     function GOTOUK() {
//         return _super !== null && _super.apply(this, arguments) || this;
//     }
//     // 获取学校资料
//     GOTOUK.prototype.lookForSchool = function () {
//         console.log('获取CAM资料');
//     };
//     // 提供雅思证明
//     GOTOUK.prototype.providedLanguageGrade = function () {
//         console.log('提供IELTS证明');
//         return false;
//     };
//     // 覆盖钩子方法
//     GOTOUK.prototype.hookMethod = function () {
//         return false;
//     };
//     return GOTOUK;
// }(AbstractClass));
// function main() {
//     var class1 = new GOTOUSA();
//     var class2 = new GOTOUK();
//     class1.template();
//     class2.template();
// }
// main();
/**
 * 命令模式
 */
// interface Command {
//   execute() : void;
//   undo() : void;
// }
// // 开启命令
// class ConcreteCommandOn implements Command {
//   private receiver : Receiver;
//   constructor(receiver : Receiver) {
//     this.receiver = receiver;
//   }
//   // 执行命令的方法
//   public execute() : void {
//       this.receiver.actionOn();
//   }
//   // 撤销命令的方法
//   public undo() : void {
//     this.receiver.actionOff();
//   }
// }
// 关闭命令
// class ConcreteCommandOff implements Command {
//   private receiver : Receiver;
//   constructor(receiver : Receiver) {
//       this.receiver = receiver;
//   }
//   // 执行命令的方法
//   public execute() : void {
//       this.receiver.actionOff();
//   }
//   // 撤销命令的方法
//   public undo() : void {
//       this.receiver.actionOn();
//   }
// }
// // 空命令（省去判空操作）
// class NoCommand implements Command {
//   public execute() : void {}
//   public undo() : void {}
// }
// class Receiver {
//   public actionOn() : void {
//       console.log('我是命令接收者，开启了某动作');
//   }
//   public actionOff() : void {
//       console.log('我是命令接收者，关闭了某动作');
//   }
// }
//   class Invoker {
//   private onCommands : Array<Command>;
//   private offCommands : Array<Command>;
//   private undoCommand : Command;
//   private slotNum : number = 7;
//   constructor() {
//       this.undoCommand = new NoCommand();
//       this.onCommands = [];
//       this.offCommands = [];
//       for (let i = 0; i < this.slotNum; i++) {
//           this.onCommands[i] = new NoCommand();
//           this.offCommands[i] =  new NoCommand();
//       }
//   }
//   public setCommand(index : number, onCommand : Command, offCommand : Command) : void {
//       this.onCommands[index] = onCommand;
//       this.offCommands[index] = offCommand;
//   }
//   // 开启
//   public on (index : number) : void {
//       this.onCommands[index].execute();// 调用相应方法
//       //记录这次操作，用于撤销
//       this.undoCommand = this.onCommands[index];
//   }
//   // 关闭
//   public off (index : number) : void {
//       this.offCommands[index].execute();
//       this.undoCommand = this.offCommands[index];
//   }
//   // 撤销
//   public undo () : void {
//       this.undoCommand.undo();
//   }
// }
// function main() {
//   // 创建接收者
//   const receiver : Receiver = new Receiver();
//   // 创建命令
//   const commandOn : Command = new ConcreteCommandOn(receiver);
//   const commandOff : Command = new ConcreteCommandOff(receiver);
//   // 创建调用者
//   const invoker : Invoker = new Invoker();
//   invoker.setCommand(0, commandOn, commandOff);
//   invoker.on(0);
//   invoker.off(0);
//   invoker.undo();
// }
// main();
/**
 * 策略模式
 */
// interface Strategy {
//   /**
//    * process
//    */
//   process():void
// }
// interface Context {
// }　
// // 策略选择器
// class SelectTrategy {
//   private price;
//   private type;
//   constructor(price:number,type:string){
//     this.price = price
//     this.type = type
//   }
//   // 选择策略
//   public selectTragy(){
//     if(this.type == '1'){
//       // 满减
//       const pullreduction = new FullReduction(this.price)
//       return pullreduction
//     }else if(this.type == '2') {
//       // 折扣
//       const discount = new Discount(this.price)
//       return discount
//     }else if(this.type == '3'){
//       // 直降
//       const reduce = new Reduce(this.price)
//       return reduce
//     }
//   }
// } 
// // 满300减60
// class FullReduction implements Strategy{
//   private price;
//   constructor(price:number) {
//     this.price = price
//   }
//   public process(){
//     return ((this.price >= 300) && (this.price -60)) || this.price
//   }
// }
// // 80%折扣
// class Discount implements Strategy{
//   private price;
//   constructor(price:number) {
//     this.price = price
//   }
//   public process(){
//     return this.price * 0.8
//   }
// }
// // 直降10
// class Reduce implements Strategy{
//   private price;
//   constructor(price:number) {
//     this.price = price
//   }
//   public process(){
//     return this.price-10
//   }
// }
/**
 * 职责链模式
 *
 */
// 抽象处理者角色
// abstract class ProcessPerson{
//   public nextNode ?:ProcessPerson;   // 下一节点
//   public day:number; // 天数
//   public role:string;
//   constructor(day:number,role:string){
//     this.day = day
//     this.role = role
//   }
//   public setNext(nextNode:ProcessPerson){
//     this.nextNode =nextNode
//   }
//   public getNext():ProcessPerson{
//     return this.nextNode
//   }
//   // 处理过程
//   public processFeedBack(day:number):any{
//     if(day<=this.day) {
//       // 处理请假事宜
//       console.log(`${this.role}同意请假${day}天`)
//     }else{
//       // 设置下一流转节点
//       if(this.getNext() != null ){
//         this.nextNode.processFeedBack(day)
//       }else {
//         console.log("请假超出规定天数！")
//       }
//     }
//   }
// }
// // 具体班主任处理角色
// class HeadTeacher extends ProcessPerson {
//   constructor(day:number,role:string){
//     super(day,role)
//   }
// }
// // 具体系主任处理角色
// class HeadOfDepartment extends ProcessPerson {
//   constructor(day:number,role:string){
//     super(day,role)
//   }
// }
// // 具体教务长处理角色
// class Provost extends ProcessPerson {
//   constructor(day:number,role:string){
//     super(day,role)
//   }
// }
// // 具体院长处理角色
// class Deam extends ProcessPerson {
//   constructor(day:number,role:string){
//     super(day,role)
//   }
// }
// function main() {
//   // 组合责任链
//   const head = new HeadTeacher(3,'班主任')
//   const headof = new HeadOfDepartment(8,'系主任')
//   const provost = new Provost(10,'教务长')
//   const deam = new Deam(15,'院长')
//   head.setNext(headof)
//   headof.setNext(provost)
//   provost.setNext(deam)
//   head.processFeedBack(9)
// }
// main()

