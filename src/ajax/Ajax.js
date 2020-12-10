import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import store from "@/store";
//配置基础路径和超时限制
const instance = axios.create({
  baseURL: "/api", //请求路径当中公共的路径
  timeout: 20000,
});
//添加进度条信息 使用nprogress插件
//请求拦截器, 1 可以在请求时候添加功能 2我们可以对请求报文处理
instance.interceptors.request.use(function(config) {
  // config就是请求报文
  //1添加功能 进度的功能
  NProgress.start();
  //2可以对请求报文进行处理
  let userToken = store.state.user.token;
  if (userToken) {
    config.headers.token = userToken;
  }
  return config;
});
//响应连接器  1可以添加功能 2可以处理响应报文

instance.interceptors.response.use(
  function(response) {
    NProgress.done();
    //返回直接data中的数据
    return response.data;
  },
  function(error) {
    //统一处理错误
    alert("发送ajax请求失败" + error.message || "位置错误");
    return new Promise(() => {});
    // return Promise.reject(error);
  }
);
export default instance;
