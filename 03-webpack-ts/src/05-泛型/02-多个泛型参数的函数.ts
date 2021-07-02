// 多个泛型参数的函数：函数中有多个泛型的参数
(() => {
  function getMsg<T, K>(value1: T, value2: K): [T, K] {
    return [value1, value2];
  }

  const arr1 = getMsg<string, number>('jack', 123.45);
  console.log(arr1[0].toUpperCase(), arr1[1].toFixed(0));
})();
