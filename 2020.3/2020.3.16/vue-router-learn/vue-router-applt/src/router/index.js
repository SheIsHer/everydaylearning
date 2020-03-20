import VueRouter from './vue-router';
import Vue from 'vue'
import routes from './routes';
Vue.use(VueRouter, { a : 1 });
export default new VueRouter({
  mode: 'history',
  routes
})

// 路由里面 主要mode
// router-link router-view
// this.$router this.$route
// Vue.use 注册插件