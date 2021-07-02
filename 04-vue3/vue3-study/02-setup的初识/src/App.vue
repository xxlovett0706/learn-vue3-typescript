<template>
  <div>
    <div>hello world</div>
    <!-- <div>{{ number }}</div> -->
  </div>
</template>

<script lang="ts">
// defineComponent 函数，目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent } from 'vue';

// 暴露出去一个定义好的组件
export default defineComponent({
  // 当前组件的名字是 App
  name: 'App'
  // // 测试代码 setup 是组合 API 中第一个要使用的函数
  // setup() {
  //   const number = 10;
  //   return {
  //     number
  //   };
  // }
});
</script>

<style></style>
