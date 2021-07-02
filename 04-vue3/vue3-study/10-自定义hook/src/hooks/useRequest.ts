import { Ref, ref, UnwrapRef } from 'vue';
// 引入 axios
import axios from 'axios';

interface IResult<T> {
  loading: Ref<boolean>;
  data: Ref<UnwrapRef<T> | null>;
  errorMsg: Ref<string>;
}

// 发送 ajax 的请求
export default function<T>(url: string): IResult<T> {
  // 加载状态
  const loading = ref(true);
  // 请求成功的数据
  const data = ref<T | null>(null); // 坑
  // 错误信息
  const errorMsg = ref('');

  // 发送请求
  axios
    .get(url)
    .then((response) => {
      // 改变加载状态
      loading.value = false;
      data.value = response.data;
    })
    .catch((error) => {
      // 改变加载状态
      loading.value = false;
      errorMsg.value = error.message || '未知错误';
    });

  return {
    loading,
    data,
    errorMsg
  };
}
