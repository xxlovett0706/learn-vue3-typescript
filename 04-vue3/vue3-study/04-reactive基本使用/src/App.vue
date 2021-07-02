<template>
  <div>
    <h2>reactive 的使用</h2>
    <h3>名字：{{ user.name }}</h3>
    <h3>年龄：{{ user.age }}</h3>
    <h2>性别：{{ user.gender }}</h2>
    <h3>妻子：{{ user.wife }}</h3>
    <button @click="updateUser">更新</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'App',
  // 显示用户的相关信息，点击按钮，可以更新用户的相关信息数据

  // reactive
  // 作用：定义多个数据的响应式
  // const proxy = reactive(obj); 接收一个普通对象然后返回该普通对象的额响应时代理器对象
  // 响应式转换是“深层的”：会影响对象内部的所有嵌套的属性
  // 内部基于 ES6的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的

  setup() {
    // const obj: any = { // 加 any 是为了 obj.gender = '男'; 不出现报错
    const obj = {
      name: 'mask',
      age: 18,
      wife: {
        name: 'lucy',
        age: 16,
        cars: ['b', 'm', 'w']
      }
    };

    // 把复杂数据变成响应式的数据
    // 返回的是一个 Proxy 的代理对象，被代理的对象就是 obj 对象
    // user 现在是代理对象，obj 是目标对象
    const user = reactive<any>(obj);

    console.log(user);

    const updateUser = () => {
      // 直接使用目标对象的方式来更新目标对象中的成员的值， 是不可能的，只能使用代理对象的方式来更新数据（响应式数据）
      // obj.name += '++'
      // 下面的可以
      // user.name += '==';
      // user.age += 2;
      // user.wife.name += '++';
      // user.wife.cars[0] = '玛莎拉蒂';
      // user --> 代理对象，obj --> 目标对象
      // user 对象或者 obj 对象添加一个新的属性，哪一种方式会影响页面的渲染
      // obj.gender = '男'; // 这种方式，页面没有渲染
      // user.gender = '男'; // 这种方式，页面可以更新渲染，而且这个数据最终也添加到了 obj 对象上
      // user 对象或者 obj 对象移除一个已经存在的属性，哪一种方式会影响页面的渲染
      // delete obj.age; // 报错
      // delete user.age // 页面更新渲染了，obj中确实没有了 age 这个属性
      // 总结：如果操作代理对象，目标对象中的数据也会随之变化，同时如果想要在操作数据的时候，页面也要跟着重新渲染，那么也是操作代理对象

      // 通过当前的代理对象，找到该对象中的某个属性，更改该属性中的某个数组的数据
      // user.wife.cars[1] = '玛莎拉蒂';

      // 通过当前的代理对象把目标对象的某个数组属性添加一个新的属性
      user.wife.cars[3] = '库里南';
    };

    return {
      user,
      updateUser
    };
  }
});
</script>

<style></style>
