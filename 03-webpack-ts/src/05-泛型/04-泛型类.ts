// 泛型类：
(() => {
  // 定义一个类，类中的属性值的类型是不确定的，方法中的参数及返回值也是不确定的
  class GenericNumber<T> {
    // 默认的属性的值的类型是泛型类型
    defaultValue: T;
    add: (x: T, y: T) => T;

    constructor(defalutValue: T, add: (x: T, y: T) => T) {
      this.defaultValue = defalutValue;
      this.add = add;
    }
  }

  // 在实例化类的对象的时候，再确定泛型的类型
  const g1 = new GenericNumber<number>(100, function (x, y) {
    return x + y;
  });
  console.log(g1.add(1, 2));

  const g2 = new GenericNumber<string>('100', function (x, y) {
    return x + y;
  });
  console.log(g2.add('200', '300'));
})();
