import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import login from '@/components/login'
import logout from '@/components/logout'
import changepassword from '@/components/changepassword'
import home from '@/components/home'
import home1 from '@/components/home1'
Vue.use(Router)
// axios.defaults.baseURL = 'http://localhost:8881/flower'

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/user/login'
    },
    {
      path: '/user/login',
      name: 'login',
      component: login
    },
    {
      path: '/user/logout',
      name: 'logout',
      component: logout
    },
    {
      path: '/user/changepassword',
      name: 'changepassword',
      component: changepassword
    },
    {
      path: '/home1',
      name: 'home1',
      component: home1
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    // 测试用的可删
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
