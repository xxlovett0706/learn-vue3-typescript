// 函数重载：函数名字相同，函数的参数个数不同
(() => {
  // 函数重载
  function add(x: string, y: string): string;
  function add(x: number, y: number): number;

  // 函数声明
  function add(x: string | number, y: string | number): string | number | undefined {
    if (typeof x == 'string' && typeof y == 'string') {
      return x + y;
    } else if (typeof x == 'number' && typeof y == 'number') {
      return x + y;
    }
  }

  // 函数调用
  console.log(add('诸葛', '孔明'));
  console.log(add(11, 22));
  // console.log(add('诸葛', 22));
})();
