import Vue from 'vue'
import VueRouter from 'vue-router'
// import pathArr from '@/router/pathArr.js'

// 导入需要的组件
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'

import Users from '@/components/menus/MyUsers.vue'
import Door from '@/components/menus/MyDoor.vue'
import Light from '@/components/menus/MyLight.vue'
import Lift from '@/components/menus/MyLift.vue'
import Info from '@/components/menus/UserInfo.vue'
// import { toISOString } from 'core-js/core/date'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
	if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
	return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    // 登录的路由规则
    { path: '/login', component: Login },
    // 后台主页的路由规则
    {
      path: '/home',
      component: Home,
      redirect: '/home/users',
      children: [
       
        { path: 'users', component: Users},
        { path: 'door', component: Door },
        { path: 'light', component: Light },
        { path: 'lift', component: Lift },
        { path: 'info', component: Info },
        
      ]
    }
  ]
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
     next();
  } else {// 每次页面跳转执行，token錯誤，均提示跳转到首页
     let token = sessionStorage.getItem('token');
     if (token === null || token === '' || token === undefined) {
        setTimeout(function () {
           next('/login');
        },1000)
     }else{
        next();
     }
  }
});

export default router
