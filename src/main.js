<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Top from "@/components/Top";
import FixedBar from '@/components/FixedBar'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
=======
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
>>>>>>> 9a5ee7a42d9d0f826d20c8b83a2766b1afc173a9

//注册全局组件
Vue.component("Footer", Footer);
Vue.component("Header", Header);
Vue.component("Top", Top);
Vue.component("FixedBar", FixedBar);
Vue.use(ElementUI);
new Vue({
  beforeCreate() {
    //全局事件总线
    Vue.prototype.$bus = this;
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
