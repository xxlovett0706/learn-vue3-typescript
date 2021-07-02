<template>
  <div>
    <h3 :style="{ color }">GrandSon 孙子组件</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

export default defineComponent({
  name: 'GrandSon',
  setup() {
    const color = inject('color');

    return {
      color
    };
  }
});
</script>

<style></style>
