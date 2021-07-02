<template>
  <div>
    <h2>App 父级组件</h2>
    <button @click="childIsShow = !childIsShow">切换显示</button>
    <hr />
    <Child v-if="childIsShow" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// 引入子级组件 Child
import Child from './components/Child.vue';

export default defineComponent({
  name: 'App',
  // 注册组件
  components: {
    Child
  },
  setup() {
    const childIsShow = ref(true);

    return {
      childIsShow
    };
  }
});
</script>

<style></style>
