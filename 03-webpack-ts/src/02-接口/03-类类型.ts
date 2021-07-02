// 类类型：类的类型，可以通过接口来实现
(() => {
  // 定义一个接口
  interface IFly {
    // 该方法没有任何的实现（方法中什么都没有）
    fly(): void;
  }
  // 定义一个类，这个类的类型就是上面定义的接口(实际上也可以理解为 IFly 接口约束了当前的这个 Person类)
  class Person implements IFly {
    fly() {
      console.log('我会飞了，我是超人');
    }
  }

  // 实例化对象
  const person = new Person();
  person.fly();

  // 定义一个接口
  interface ISwim {
    swim(): void;
  }

  // 定运一个类，这个类的类型是 IFly 和 ISwim（当前这个类可以实现多个接口，一个类同时也可以被多个接口进行约束）
  class Person2 implements IFly, ISwim {
    fly() {
      console.log('我飞了');
    }
    swim() {
      console.log('我会游泳');
    }
  }

  const person2 = new Person2();
  person2.fly();
  person2.swim();

  // 总结：类可以通过接口的方式，来定义当前这个类的类型
  // 类可以实现一个接口，类可以实现多个接口，要注意，接口中的内容都要真正的实现

  // 接口可以继承其他的多个接口
  interface IFlyAndSwim extends IFly, ISwim {}
  // 定义一个类，直接实现 IFlyAndSwim 这个接口
  class Person3 implements IFlyAndSwim {
    fly() {
      console.log('我又飞了');
    }
    swim() {
      console.log('我又会游泳了');
    }
  }
  const person3 = new Person3();

  // 总结：接口和接口之间叫继承（使用的是 extends 关键字），类和接口之间叫实现（使用的是 implements 关键字）
})();
