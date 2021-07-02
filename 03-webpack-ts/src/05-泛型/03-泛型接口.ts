// 泛型接口：在定义接口时，为接口中的属性或方法定义泛型类型，在使用接口时，再指定具体的泛型类型
(() => {
  // 需求：定义一个类，用来存储用户的相关信息（id，名字，年龄），通过一个类的实例对象调用相关的方法可以添加多个用户信息对象，调用 getUserId 方法可以根据 id 获取指定的用户信息对象

  // 定义一个泛型接口
  interface IBaseCRUD<T> {
    data: T[];
    add: (t: T) => T;
    getUserById: (id: number) => T | undefined;
  }

  // 定义一个用户信息的类
  class User {
    id: number;
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
      this.id = Date.now() + Math.random();
    }
  }

  // 定义一个类，可以针对用户的信息对象进行增加及查询的操作
  class UserCRUD implements IBaseCRUD<User> {
    data: User[];

    constructor() {
      this.data = [];
    }
    // 方法用来存储用户信息对象
    add(user: User): User {
      this.data.push(user);
      return user;
    }
    // 方法根据 id 查询指定的用户信息对象
    getUserById(id: number): User | undefined {
      const result = this.data.find((user) => {
        return user.id === id;
      });
      if (result) {
        return result;
      } else {
        return undefined;
      }
    }
  }

  // 实例化添加用户信息对象的类 UserCRUD

  const userCRUD = new UserCRUD();
  userCRUD.add(new User('jack', 18));
  userCRUD.add(new User('tom', 28));
  const { id } = userCRUD.add(new User('lucy', 38));
  userCRUD.add(new User('ross', 48));

  console.log(userCRUD.getUserById(id));
})();
