// 继承：类与类之间的关系
// 继承后类与类之间的叫法：
// A 类继承了 B 这个类，那么此时 A 类叫子类，B 类叫基类
// 子类-->派生类
// 基类-->超类（父类）
// 一旦发生了继承的关系，就出现了父子类的关系（叫法）
(() => {
  // 定义一个类，作为
  class Person {
    // 定义属性
    name: string;
    age: number;
    gender: string;
    // 定义构造函数
    constructor(name: string = '小明', age: number = 18, gender: string = '男') {
      // 更新属性
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    // 定义实例方法
    sayHi(str: string) {
      console.log(`我是${this.name},${str}`);
    }
  }

  // 定义一个类，继承自 Person
  class Student extends Person {
    constructor(name: string, age: number, gender: string) {
      // 调用的是父类中的构造函数，使用的是 super
      super(name, age, gender);
    }

    // 可以调用父类中的方法
    sayHi() {
      console.log('我是学生中的sayHi方法');
      super.sayHi('哈哈');
    }
  }

  const person = new Person('大明', 38, '男');
  const stu = new Student('小甜甜', 18, '女');
  stu.sayHi();

  // 总结：类和类之间如果要有继承关系，需要使用 extends 关键字
  // 子类中可以调用父类中的构造函数，使用的是 super 关键字（包括调用父类中的实例方法，也可以使用 super）
  // 子类中可以重写父类的方法
})();
