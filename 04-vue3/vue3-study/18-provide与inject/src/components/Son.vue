<template>
  <div>
    <h3>Son 子级组件</h3>
    <hr />
    <GrandSon />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GrandSon from './GrandSon.vue';

export default defineComponent({
  name: 'Son',
  components: {
    GrandSon
  }
});
</script>

<style></style>
