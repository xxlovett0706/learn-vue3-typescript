// 泛型：在定义函数、接口或者类的时候不能预先确定要使用的数据类型，而是在使用函数、接口或者类的时候才能确定数据类型
(() => {
  // 需求：定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量，函数的作用：根据数量产生个数的数据，存放在一个数组中
  // 定义一个函数
  function getArr(val: number, count: number): number[] {
    // 根据数据和数量产生一个数组
    const arr: number[] = [];
    for (let i = 0; i < count; ++i) {
      arr.push(val);
    }

    return arr;
  }

  const arr1 = getArr(100.123, 3);
  console.log(arr1);

  // 定义一个函数同上，只不过传入的是字符串类型
  function getArr2(val: string, count: number): string[] {
    // 根据数据和数量产生一个数组
    const arr: string[] = [];
    for (let i = 0; i < count; ++i) {
      arr.push(val);
    }

    return arr;
  }
  const arr2 = getArr2('abc', 3);
  console.log(arr2);

  // 可以传入任意类型的数组，返回来的是存储这个任意类型数据的数组
  function getArr3<T>(val: T, count: number) {
    const arr: T[] = [];
    for (let i = 0; i < count; ++i) {
      arr.push(val);
    }
    return arr;
  }

  const arr3 = getArr3<number>(123.45, 3);
  console.log(arr3[1].toFixed(0));
  const arr4 = getArr3<string>('mask', 3);
  console.log(arr4[1].toUpperCase())
})();
