import { onBeforeMount, onMounted, Ref, ref } from 'vue';

interface IResult {
  x: Ref<number>;
  y: Ref<number>;
}

export default function(): IResult {
  const x = ref(-1);
  const y = ref(-1);

  // 点击事件的回调函数
  const clickHandler = (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };

  // 页面已经加载完毕了，在进行点击操作
  // 页面加载完毕的生命周期
  onMounted(() => {
    window.addEventListener('click', clickHandler);
  });

  // 页面卸载前的生命周期
  onBeforeMount(() => {
    window.removeEventListener('click', clickHandler);
  });

  return {
    x,
    y
  };
}
