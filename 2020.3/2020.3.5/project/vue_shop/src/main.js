import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://119.23.53.78:8888/'
axios.interceptors.request.use(config => {
  console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config;
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
