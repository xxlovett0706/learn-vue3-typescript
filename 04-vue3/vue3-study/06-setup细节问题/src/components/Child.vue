<template>
  <div>
    <h2>Child子级组件</h2>
    <h3>msg: {{ msg }}</h3>
    <!-- <h3>{{ count }}</h3> -->
    <button @click="emitXxx">分发事件</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Child',
  props: ['msg'],
  // setup 的细节问题：
  // setup 是在 beforeCreate 生命周期回调之前就执行了，而且就执行一次
  // 由此可以推断出：setup 在执行的时候，当前的组件还没有创建出来，也就意味着：组件实例对象 this 根本就不能说使用
  // this 是 undefined，说明就不能通过 this 再去调用 data/computed/methods/props 的相关内容了
  // 其实所有的 composition API 相关回调函数中也都不可以

  // setup 中的返回值是一个对象，内部的属性和方法是给 html 模版使用的
  // setup 中的对象内部的属性和 data 函数中的 return 对象的属性都可以在 html 模版中使用
  // setup 中的对象中的属性和 data 函数中的对象中的属性会合并为组件对象的属性
  // setup 中的对象中的方法和 methods 对象中的方法会合并为组件对象的方法
  // 在 Vue3 中 尽量不要混合使用 data 和 setup 及 methods 和 setup
  // setup 中也无法访问 data 和 methods，因为无法调用 this

  // setup(props, context) {
    setup(props, {attrs, emit}){
    // props 参数，是一个对象，里面有父级组件向子级组件传递的数据，并且是在子级组件中使用 props 接收到的额所有的属性【包含 props 配置声明且传入了的所有属性的对象】
    // console.log(props.msg);
    // console.log(context.attrs);
    // console.log(context.emit);
    // context 参数，是一个对象，里面有 attrs 对象（获取当前组件标签上的所有的属性的对象，但是该属性是在 props 中没有声明接收的所有的对象）【包含没有在 props 配置中声明的属性的对象，相当于 this.$attrs】，emit 方法（分发事件的），slots 对象（插槽）
    console.log(attrs.msg2);

    console.log('===========');
    console.log('setup执行了', this);

    const showMsg1 = () => {
      console.log('setup中的showMsg方法');
    };

    // 按钮的点击事件的回调函数
    const emitXxx = () => {
      emit('xxx', '++');
    };

    return {
      // setup 中一般都是返回一个对象，对象中的属性和方法都可以在 html 模版中孙直接使用
      showMsg1,
      emitXxx
    };
  }
  // // 数据初始化的生命周期回调
  // beforeCreate() {
  //   console.log('breforeCreate 执行了');
  // },
  // mounted() {
  //   console.log('mounted 执行了', this);
  // },
  // data() {
  //   return {
  //     count: 10
  //   };
  // },
  // methods: {
  //   showMsg2() {
  //     console.log('methods中的showMsg方法');
  //   }
  // }
});
</script>

<style></style>
