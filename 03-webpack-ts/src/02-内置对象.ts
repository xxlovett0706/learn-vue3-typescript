(() => {
  // 1. ECMAScript 的内置对象
  let b: Boolean = new Boolean(1);
  let n: Number = new Number(true);
  let s: String = new String('abc');
  let d: Date = new Date();
  let r: RegExp = /^1/;
  let e: Error = new Error('error message');

  const div = document.getElementById('test');
  const divs = document.querySelectorAll('div');
  document.addEventListener('click', function (event: MouseEvent) {
    console.log(event.target);
  });
  const fragment = document.createDocumentFragment();
})();
