import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Top from "@/components/Top";
import SliderLoop from "@/components/SliderLoop";

Vue.config.productionTip = false;
//注册全局组件
//低部组件
Vue.component("Footer", Footer);
//头部组件
Vue.component("Header", Header);
//顶部组件
Vue.component("Top", Top);
//轮播图组件
Vue.component("SliderLoop", SliderLoop);

new Vue({
  beforeCreate() {
    //全局事件总线
    Vue.prototype.$bus = this;
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
