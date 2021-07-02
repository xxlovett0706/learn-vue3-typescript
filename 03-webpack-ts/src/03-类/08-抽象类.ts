// 抽象类：包含抽象方法（抽象方法一般没有任何具体内容的实现），也可以包含实例方法，抽象类是不能被实例化的，为了让子类进行实例化及实现内部的方法
// 抽象类的作用都是为子类（派生类）服务的
(() => {
  // 定义一个抽象类
  abstract class Animal {
    // 抽象属性 一般不用
    abstract name: string;
    // 抽象方法
    abstract eat(): void;
    // 实例方法
    sayHi() {
      console.log('您好');
    }
  }

  // 定义一个子类（派生类）Dog
  class Dog extends Animal {
    name: string = '大黄';
    // 重新地实现抽象类中的方法，此时这个方法就是当前 Dog 类的实例方法了
    eat() {
      console.log('趴着吃');
    }
  }

  // 实例化 Dog 的对象
  const dog = new Dog();
  dog.eat();
  dog.sayHi();
  console.log(dog.name);
})();
