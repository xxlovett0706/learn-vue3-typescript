<template>
  <div>
    <h2>reactive 和 ref 的细节问题</h2>
    <h3>m1:{{ m1 }}</h3>
    <h3>m2:{{ m2 }}</h3>
    <h3>m3:{{ m3 }}</h3>
    <hr />
    <button @click="update">更新数据</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'App',

  // ref 和 reactive 是 Vue3 的 composition API 中2个最重要的响应式 API
  // ref 用来处理基本类型数据，reactive 用来处理对象（递归深度响应式）
  // 如果用 ref 对象/数组，内部会自动将对象/数组转为 reactive 的代理对象
  // ref 内部：通过给 value 属性添加 getter/setter来实现对数据的劫持
  // reactive 内部：通过使用 Proxy 来实现对对象内部所有数据的劫持，并通过 Reflect 操作对象内部数据
  // ref 的数据操作：在 js 中要 .value，在模版中不需要（内部解析模版时会自动添加 .value）

  setup() {
    // 通过 ref 的方式创建响应式数据
    const m1 = ref('abc');
    const m2 = reactive({
      name: '小明',
      wife: {
        name: '小红'
      }
    });
    // ref 也可以传入对象吗？
    const m3 = ref({
      name: '大明',
      wife: {
        name: '大红'
      }
    });

    // 更新数据
    const update = () => {
      // ref 中如果放入的使用一个对象，那么是经过了 reactive 的处理，形成了一个 Proxy 的代理对象
      console.log(m3);
      m1.value += '===';
      m2.wife.name += '===';
      m3.value.wife.name += '===';
    };

    return {
      m1,
      m2,
      m3,
      update
    };
  }
});
</script>

<style></style>
