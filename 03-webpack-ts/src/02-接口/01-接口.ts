// 接口是对象的状态（属性）和行为（方法）的抽象（描述）
// 接口：是一种类型，是一种规范，是一种规则，是一种能力，是一种约束
(() => {
  // 需求：创建人的对象，需要对人的属性进行一定的约束
  // id 是 number 类型，必须有，只读的
  // name 是 string 类型， 必须有
  // age 是 number 类型，必须有
  // sex 是 string 类型，可以没有

  // 定义一个接口，该接口作为 person 对象的类型使用，限定或者约束对象中的属性数据
  interface IPerson {
    // id 是只读的 number 类型
    readonly id: number;
    name: string;
    age: number;
    sex?: string;
  }

  // 定义一个对象，该对象的类型就是我定义的接口
  const person: IPerson = {
    id: 1,
    name: '小甜甜',
    age: 18,
    // sex: '女'
  };

  console.log(person);
  person.age = 100;
  console.log(person);
})();
