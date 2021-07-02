// 存取器：让我们可以有效的控制对对象的成员的访问，通过 getters 和 settters 来进行操作
(() => {
  // 外部看恶意传入姓氏和名字数据，同时使用 set 和 get 控制姓名的数据，外部也可以进行修改操作

  class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    // 读取器
    get fullName() {
      console.log('get中...');
      return this.firstName + '_' + this.lastName;
    }
    // 设置器
    set fullName(val) {
      const names = val.split('_');
      this.firstName = names[0];
      this.lastName = names[1];
    }
  }

  // 实例化对象
  const person = new Person('东方', '不败');
  console.log(person);
  console.log(person.fullName);
  person.fullName = '龙_妈妈';
  console.log(person);
  console.log(person.fullName);
})();
