import Vue from 'vue'
import App from './App.vue'

// 导入需要被全局注册的那个组件
import Count from '@/components/count.vue'
Vue.component('Mycount',Count)

Vue.config.productionTip = false

// $mount 相当于el挂载
new Vue({
  render: h => h(App),
}).$mount('#app')
