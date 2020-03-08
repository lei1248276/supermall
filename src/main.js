import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
/* 导入解决移动端300ms延迟问题插件*/
import FastClick from "fastclick";
/* 导入图片懒加载插件*/
import VueLazyLoad from 'vue-lazyload';

/* 导入自定义toast插件*/
import toast from "./components/common/toast/index";
/* 使用自定义toast插件*/
Vue.use(toast);

// 解决移动端300ms延迟问题
FastClick.attach(document.body);

// 使用图片懒加载的插件
Vue.use(VueLazyLoad);

/* 事件总线 $bus*/
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
