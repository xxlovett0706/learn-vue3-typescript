// 基础类型
(() => {
  // 布尔类型 ------> boolean
  let flag: boolean = true;
  flag = false;
  // flag = 10; // 报错
  console.log(flag);

  // 数字类型 ------> number
  let a1: number = 10;
  let a2: number = 0b1010;
  let a3: number = 0o12;
  let a4: number = 0xa;

  console.log(a1);
  console.log(a2);
  console.log(a3);
  console.log(a4);

  // let a1 = 'test' // 报错

  // 字符串类型 ------> string
  let str1: string = '床前明月光';
  let str2: string = '疑是地上霜';
  let str3: string = '遇到一耳光';
  let str4: string = '牙齿掉光光';

  console.log(`${str1},${str2},${str3},${str4}`);

  // 字符串和数字之间能够一起拼接
  let str5: string = '我有这么多钱';
  let num: number = 2000;
  console.log(str5 + num);

  // 总结：ts中变量一开始是什么类型，那么后期赋值的时候，只能用这个类型的数据，是不允许用其它类型的数据赋值给当前的这个变量
  // 如 let str: string = '真香';
  // str = 100; 不允许

  console.log('===================');

  let und: undefined = undefined;
  let nll: null = null;
  console.log(und);
  console.log(nll);

  // undefined 和 null 都可以作为其他类型的子类型，把undefined 和 null 赋值给其它类型的变量，如：number类型的变量，在非严格模式才可以。

  console.log('===================');

  // 数组类型
  // 数组定义方式1
  let arr1: number[] = [10, 20, 30, 40];
  console.log(arr1);
  // 数组定义方式2
  let arr2: Array<number> = [100, 200, 300];
  console.log(arr2);

  // 注意问题：数组定义后，里面的数据类型的必须和定义类型的时候的类型一致。

  console.log('===================');

  // 元组类型：在定义数组的时候，类型和数据的个数一开始就已经限定了
  let arr3: [string, number, boolean] = ['小甜甜', 100, true];
  console.log(arr3);
  // 注意问题：元祖类型在使用的额时候，数据的类型的位置和数据的个数，应该和在定义元组的时候的数据类型及位置应该是一致的
  console.log(arr3[0].split(''));
  console.log(arr3[1].toFixed(2));
  console.log(arr3[2].valueOf());

  console.log('===================');

  // 枚举类型，枚举里面的每个数据值都可以叫元素，每个元素都有自己的编号，编号是从0开始的，依次地递增加1
  enum Color {
    red = 1,
    green,
    blue
  }
  // 定义一个Color的枚举类型的变量来接收枚举的值
  let color: Color = Color.red;
  console.log(color);
  console.log(Color.red, Color.green, Color.blue);
  console.log(Color[3]);
  // 小例子，枚举中的元素可以是中文的数据值，但不推荐
  enum Gender {
    女,
    男
  }
  console.log(Gender.男);

  console.log('===================');

  // any 类型
  let str: any = 100;
  str = '年少气盛';
  console.log(str);
  // 当一个数组中要存储多个数据，个数不确定，此时也可以用 any 类型来定义数组
  let arr: any[] = [100, '年少轻狂', true];
  console.log(arr);
  // 这种情况下也没有错误的提示信息，any 类型有优点，也有缺点
  // console.log(arr[0].split(''));

  console.log('===================');

  // void 类型，在函数声明的时候，小括号后面使用 :void 代表的是该函数没有任何返回值
  function showMsg(): void {
    console.log('富强明主');
    // return;
    // return undefined;
  }
  console.log(showMsg());
  // 定义 void 类型的变量，可以接受一个 undefined 的值，但是意义不大。
  let vd: void = undefined;
  console.log(vd);

  console.log('===================');

  // object 类型
  // 定义一个函数，参数是 object 类型，返回值也是 object 类型
  function getObj(obj: object): object {
    console.log(obj);
    return {
      name: '卡卡西',
      age: 27
    };
  }
  console.log(getObj({ name: '佐助', sex: '男' }));
  // console.log(getObj('123')) // 错误的
  // console.log(getObj(new String('123')))

  console.log('===================');

  // 联合类型，表示取值可以为多种类型中的一种，
  // 需求1：定义一个函数得到一个数字或字符串值的字符串形式值
  function getString1(str: number | string): string {
    return str.toString();
  }
  console.log(getString1('123'));

  console.log('===================');

  //类型断言，告诉编译器，我知道自己是什么类型，也知道自己在干什么
  // 需求2：定义一个函数得到一个数字或字符串的长度
  function getString2(str: number | string): number {
    if ((<string>str).length) {
      return (str as string).length;
    } else {
      return str.toString().length;
    }
  }
  console.log(getString2(123456));
  console.log(getString2('012345'));

  console.log('===================');

  // 类型推断，没有明确指定类型的时候推测出一个类型
  let txt1 = 100; // number 类型
  // txt = '飞哥';
  console.log(txt1);
  let txt2; // any 类型
  txt2 = 100;
  txt2 = 'test';
})();
