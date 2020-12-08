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
  render: h => h(App)
}).$mount('#app')
