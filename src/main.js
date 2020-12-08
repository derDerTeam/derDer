import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FixedBar from '@/components/FixedBar'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import SliderLoop from "@/components/SliderLoop";

//注册全局组件
//低部组件
Vue.component("Footer", Footer);
//头部组件
Vue.component("Header", Header);
//顶部组件
Vue.component("Top", Top);
//轮播图组件
Vue.component("SliderLoop", SliderLoop);

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
