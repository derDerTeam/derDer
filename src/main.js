import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

Vue.config.productionTip = false;
//注册全局组件
Vue.component("Footer", Footer);
Vue.component("Header", Header);
new Vue({
  beforeCreate() {
    //全局事件总线
    Vue.prototype.$bus = this;
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
