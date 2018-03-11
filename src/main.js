import Vue from 'vue'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
Vue.use(VueRouter);
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
import App from './App'
import routes from './router/routes'
import publics from "./public"
Vue.prototype.publics=publics;
const router = new VueRouter({
  routes,
  //mode:"history"
})

const app = new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
