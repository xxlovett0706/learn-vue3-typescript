// 静态成员：在类中通过 static 修饰的属性或者方法，那么就是静态的属性及静态的方法，也称之为：静态成员
// 静态成员在使用的时候是通过 类名. 这种语法来调用的
(() => {
  // 定义一个类
  class Person {
    // 静态属性
    static name1: string = 'mask';
    // 构造函数识别是不能 通过 static 修饰的
    constructor() {
      // 此时 this 是实例对象，name1 是静态属性，不能通过实例对象直接调用静态属性来使用
      // this.name1 = name;
    }
    // 静态方法
    static sayHi() {
      console.log('hello');
    }
  }

  // 实例化对象
  const person = new Person();

  // 通过实例对象调用的属性（实例属性）
  // console.log(person.name1);

  // 通过实例对象调用的方法（实例方法）
  // person.sayHi();

  // 通过 类名.静态属性 的方式来访问该成员数据
  console.log(Person.name1);
  // 通过 类名.静态属性 的方式来设置该成员数据
  Person.name1 = 'zzll';
  console.log(Person.name1);
  // 通过类名.静态方法的方式来调用内部的静态方法
  Person.sayHi();
})();
