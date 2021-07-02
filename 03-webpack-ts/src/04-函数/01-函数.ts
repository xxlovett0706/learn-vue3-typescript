// 函数：封装类一些重复的代码，在需要的时候直接调用即可
(() => {
  // js 中的书写方式
  // 函数声明，命名函数
  // function add(x, y) {
  //   return x + y;
  // }

  // 函数表达式，匿名函数
  // const add2 = function (x, y) {
  //   return x + y;
  // };

  // ts 中的书写方式
  // 函数声明，命名函数
  function add(x: string, y: string): string {
    return x + y;
  }
  const result1 = add('111', '222');
  console.log(result1);

  // 函数表达式，匿名函数
  const add2 = function (x: number, y: number): number {
    return x + y;
  };

  const result2 = add2(111, 222);
  console.log(result2);

  // 函数的完整写法
  const add3: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
  };

  console.log(add3(222, 333));
})();
