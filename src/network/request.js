// 1.引入axios
import axios from "axios";

// 2.创建axios实例
export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000/api/wh",
    timeout: 5000,
  });
  // 2.1.设置拦截器
  instance.interceptors.response.use(res => {
    // 响应成功时拦截
    return res.data;
  },error => {
    // 响应失败时拦截
    console.log(error);
  });

  return instance(config);
}

