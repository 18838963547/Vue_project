
import Vue from 'vue'
import VueRouter from 'vue-router'

import home from './components/tabber/Home.vue'
import user from './components/tabber/User.vue'
import shopcar from './components/tabber/Shopcar.vue'
import search from './components/tabber/Search.vue'
import newslist from './components/news/newList.vue'
import newsinfo from './components/news/newinfo.vue'

Vue.use(VueRouter)

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
  	{path:'/',redirect:'/home'},
  	{path:'/home',component:home},
  	{path:'/user',component:user},
  	{path:'/shopcar',component:shopcar},
  	{path:'/search',component:search},
  	{path:'/newslist',component:newslist},
  	{path:'/newsinfo/:id',component:newsinfo},


  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router