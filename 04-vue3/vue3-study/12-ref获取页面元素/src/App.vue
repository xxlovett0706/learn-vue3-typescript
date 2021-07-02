<template>
  <div>
    <h3>ref 的另一个作用：可以获取页面中的元素</h3>
    <input type="text" ref="inputRef" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'App',

  // 需求：当页面加载完毕后，页面中的文本框可以直接获取焦点（自动获取焦点）
  setup() {
    // 默认是空的，页面加载完毕，说明组件已经存在，获取文本元素
    const inputRef = ref<HTMLElement | null>(null);

    onMounted(()=>{
      inputRef.value && inputRef.value.focus()
    })

    return {
      inputRef
    };
  }
});
</script>

<style></style>
