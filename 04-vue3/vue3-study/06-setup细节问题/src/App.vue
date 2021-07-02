<template>
  <div>
    <h2>App 父级组件</h2>
    <h3>msg: {{ msg }}</h3>
    <button @click="msg += '==='">更新数据</button>
    <hr />
    <Child :msg="msg" msg2="真香" @xxx="xxx" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// 引入子级组件
import Child from './components/Child.vue';

export default defineComponent({
  name: 'App',
  // 注册组件
  components: {
    Child
  },

  setup() {
    const msg = ref('what are you doing?');

    const xxx = (val: string) => {
      msg.value += val;
    };

    return {
      msg,
      xxx
    };
  }
});
</script>

<style></style>
