import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import http from 'axios'
import VueAxios from 'vue-axios'
import '../api/mock.js'
import 'element-ui/lib/theme-chalk/index.css'
// 导入路由模块
import router from '@/router'


// 导入样式
// import './assets/css/bootstrap.css'
// import $ from 'jquery'
import './index.css'

Vue.prototype.$http = http
// http.defaults.baseURL = ''

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, http)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
