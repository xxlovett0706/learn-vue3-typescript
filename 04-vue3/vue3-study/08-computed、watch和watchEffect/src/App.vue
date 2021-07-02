<template>
  <div>
    <h2>计算属性和监视</h2>
    <fieldset>
      <legend>姓名操作</legend>
      姓氏：<input type="text" placeholder="请输入姓氏" v-model="user.firstName" /><br />
      名字：<input type="text" placeholder="请输入名字" v-model="user.lastName" /><br />
    </fieldset>
    <fieldset>
      <legend>计算属性和监视的演示</legend>
      姓名：<input type="text" placeholder="显示姓名" v-model="fullName1" /><br />
      姓名：<input type="text" placeholder="显示姓名" v-model="fullName2" /><br />
      姓名：<input type="text" placeholder="显示姓名" v-model="fullName3" /><br />
    </fieldset>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watch, watchEffect } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    // 定义一个响应式的对象
    const user = reactive({
      firstName: '东方',
      lastName: '不败'
    });

    // 通过计算属性的方式，实现第一个姓名的显示
    // Vue3 中的计算属性

    // 第一个姓名
    // 计算属性的函数中如果只传入一个回调函数，表示的是 get
    // 返回的是一个 Ref 类型的对象
    const fullName1 = computed(() => {
      return user.firstName + '_' + user.lastName;
    });

    // 第二个姓名
    const fullName2 = computed({
      get() {
        return user.firstName + '_' + user.lastName;
      },
      set(val: string) {
        // console.log('======', val);
        const names = val.split('_');
        user.firstName = names[0];
        user.lastName = names[1];
      }
    });

    // 第三个姓名
    // 监视---监视指定的数据
    // immediate：默认会执行一次watch
    // deep 深度监视
    const fullName3 = ref('');
    watch(
      user,
      ({ firstName, lastName }) => {
        fullName3.value = firstName + '_' + lastName;
      },
      { immediate: true, deep: true }
    );
    // 监视，不需要配置 immediate，本身就会进行监视（默认执行一次）
    // watchEffect(() => {
    //   fullName3.value = user.firstName + '_' + user.lastName;
    // });

    // 监视 fullName3 的数据，改变 firstName 和 lastName
    watchEffect(()=>{
      const names = fullName3.value.split('_')
      user.firstName = names[0]
      user.lastName = names[1]
    })

    // watch 可以监视多个数据
    // watch([user.firstName, user.lastName, fullName3], ()=>{
    //   // 这里的代码就没有执行，fullName3是超响应式数据，但是 user.firstName user.lastName 不是响应式的数据
    //   console.log('==== ')
    // })
    // 当我们使用 watch 监视非响应的数据的时候，代码需要改一下，使用回调的方式
    watch([()=>user.firstName, ()=>user.lastName], ()=>{
      // 这里的代码就没有执行，fullName3是超响应式数据，但是 user.firstName user.lastName 不是响应式的数据
      console.log('==== ')
    })

    return {
      user,
      fullName1,
      fullName2,
      fullName3
    };
  }
});
</script>

<style></style>
