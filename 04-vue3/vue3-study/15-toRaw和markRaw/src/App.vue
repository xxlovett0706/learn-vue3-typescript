<template>
  <div>
    <h2>toRaw 和 markRaw</h2>
    <h3>state: {{ state }}</h3>
    <hr />
    <button @click="testToRaw">测试toRaw</button>
    <button @click="testMarkRaw">测试markRaw</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, markRaw, reactive, toRaw } from 'vue';

interface IUserInfo {
  name: string;
  age: number;
  likes?: string[];
}

export default defineComponent({
  name: 'App',

  setup() {
    const state = reactive<IUserInfo>({
      name: '小明',
      age: 20
    });

    const testToRaw = () => {
      // 把代理对象变成普通对象
      const user = toRaw(state);
      user.name += '==';
      console.log('testToRaw');
    };

    const testMarkRaw = () => {
      // state.likes = ['吃', '喝'];
      // state.likes[0] += '==';
      // console.log(state);

      const likes = ['吃', '喝'];

      // markRaw 标记的对象数据，从此以后再也不能成为代理对象
      state.likes = markRaw(likes);

      setInterval(() => {
        if (state.likes) {
          state.likes[0] += '==';
          console.log('定时器走起来了')
        }
      }, 1000);
    };

    return {
      state,
      testToRaw,
      testMarkRaw
    };
  }
});
</script>

<style></style>
