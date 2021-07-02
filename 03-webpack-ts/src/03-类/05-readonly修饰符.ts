// readonly 修饰符：首先是一个关键字，对类中的属性成员进行修饰，修饰之后，该属性成员就不能在外部被随意修改了
// 构造函数中，可以对只读的属性成员的数据进行修改
// 如果构造函数中没有任何的参数，类中的属性成员此时已经使用 readonly 进行修饰，那么外部也是不能对这个属性值进行更改的
// 构造函数中的参数可以使用 readonly 进行修饰，一旦修饰了，那么该类中就有了这个只读的成员属性了，外部可以访问，但是不能修改
// 同理，构造函数中的参数可以使用 public private 和 protected 进行修饰，无论是哪个进行修饰，该类中都会自动地添加这个一个属性成员
(() => {
  // readonly 修饰类中的成员属性
  class Person {
    readonly name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHi() {
      console.log('考尼奇瓦', this.name);

      // 类中的普通方法中，也是不能修改 readonly 修饰的成员属性值
      // this.name = '大甜甜';
    }
  }

  // 实例化对象
  const person = new Person('小甜甜');
  // person.name = '大甜甜';
  console.log(person);
  console.log(person.name);

  // readonly 修饰类中的构造函数中的参数（参数属性）
  class Person1 {
    // 构造函数
    // 构造函数中的 name 参数，一旦使用 readonly 进行修饰后，那么该 name 参数可以叫参数属性
    // 构造函数中的 name 参数，一旦使用 readonly 进行修饰后，那么 Person1 中就有了一个 name 的属性成员
    // 构造函数中的 name 参数，一旦使用 readonly 进行修饰后，外部也是无法修改类中的 name 属性成员值的
    // constructor(readonly name: string = '大松松') {
    //   this.name = name;
    // }

    // 构造函数中的 name 参数，一旦使用 public 进行修饰后，那么 Person1 类中就有了一个公共的 name 属性成员了
    // constructor(public name: string = '大松松') {}

    // 构造函数中的 name 参数，一旦使用 private 进行修饰后，那么 Person1 类中就有了一个私有的 name 属性成员了
    // constructor(private name: string = '大松松') {}

    // 构造函数中的 name 参数，一旦使用 protected 进行修饰后，那么 Person1 类中就有了一个受保护的 name 属性成员了
    constructor(protected name: string = '大松松') {}
  }

  // 实例化对象
  // const person1 = new Person1();
  // console.log(person1);
  // person1.name = '超级大松松';
  // console.log(person1.name);
})();
