// 可选参数：函数在声明的时候，内部的参数使用了 ? 进行修饰，那么就表示该参数可以传入也可以不传入，叫可选参数
// 默认参数：函数在声明的时候，内部的参数有自己的默认值，此时的这个参数及就可以叫默认参数
(() => {
  // 定义一个函数：传入姓氏和名字，可以得到姓名（姓名+名字=姓氏）
  // 需求：如果不传入任何内容，那么就返回默认的姓氏
  // 需求：如果只传入姓氏，那么就返回姓氏
  // 需求：如果传入姓氏和名字，那么返回来的就是姓名
  const getFullName = function (firstName: string='东方', lastName?: string) {
    if (lastName) {
      return firstName + '_' + lastName;
    } else {
      return firstName;
    }
  };

  // 函数调用
  console.log(getFullName())
  console.log(getFullName('诸葛'))
  console.log(getFullName('诸葛','孔明'))
})();
