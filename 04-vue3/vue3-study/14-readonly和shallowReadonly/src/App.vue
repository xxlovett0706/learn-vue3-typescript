<template>
  <div>
    <h2>readonly 和 shallowReadonly</h2>
    <h3>state: {{ state }}</h3>
    <h3>state2: {{ state2 }}</h3>
    <hr />
    <button @click="update">更新数据</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      name: '佐助',
      age: 20,
      car: {
        name: '奔驰',
        color: 'yellow'
      }
    });

    // 深度只读数据
    // const state2 = readonly(state);
    // 浅度只读数据
    const state2 = shallowReadonly(state);

    const update = () => {
      state2.car.name += '===';
    };

    return {
      state,
      state2,
      update
    };
  }
});
</script>

<style></style>
