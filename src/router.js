
import Vue from 'vue'
import VueRouter from 'vue-router'

import home from './components/Home.vue'
import user from './components/User.vue'
import shopcar from './components/Shopcar.vue'
import search from './components/Search.vue'

Vue.use(VueRouter)

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
  	{path:'/',redirect:'/home'},
  	{path:'/home',component:home},
  	{path:'/user',component:user},
  	{path:'/shopcar',component:shopcar},
  	{path:'/search',component:search}
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router