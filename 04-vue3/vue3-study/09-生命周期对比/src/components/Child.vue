<template>
  <div>
    <h2>Child 子级组件</h2>
    <h4>msg:{{ msg }}</h4>
    <button @click="update">更新数据</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref
} from 'vue';

export default defineComponent({
  name: 'Child',
  // Vue2.x 中的生命周期钩子
  beforeCreate() {
    console.log('Vue2.x中的beforeCreate...');
  },
  created() {
    console.log('Vue2.x中的created...');
  },
  beforeMount() {
    console.log('Vue2.x中的beforeMount...');
  },
  mounted() {
    console.log('Vue2.x中的mounted...');
  },
  beforeUpdate() {
    console.log('Vue2.x中的beforeUpdate...');
  },
  updated() {
    console.log('Vue2.x中的updated...');
  },
  // Vue2.x 中的 beforeDestroy 和 destroyed 这个两个生命周期与已经在 Vue3 中改名了，所以不能再使用了
  // beforeDestroy() {
  //   console.log('Vue2.x中的beforeDestroy...');
  // },
  // destroyed() {
  //   console.log('Vue2.x中的destroyed...');
  // }
  beforeUnmount() {
    console.log('Vue2.x中的beforeUnmount');
  },
  unmounted() {
    console.log('Vue2.x中的unmounted');
  },

  setup() {
    const msg = ref('abc');
    const update = () => {
      msg.value += '===';
    };

    console.log('Vue3中的setup...');

    onBeforeMount(() => {
      console.log('Vue3中的onBeforeMount...');
    });
    onMounted(()=>{
      console.log('Vue3中的onMounted...')
    });
    onBeforeUpdate(()=>{
      console.log('Vue3中的onBeforeUpdate...')
    });
    onUpdated(()=>{
      console.log('Vue3中的onUpdated...')
    });
    onBeforeUnmount(()=>{
      console.log('Vue3中的onBeforeUnmount...')
    });
    onUnmounted(()=>{
      console.log('Vue3中的onUnmounted...')
    });

    return {
      msg,
      update
    };
  }
});
</script>

<style></style>
