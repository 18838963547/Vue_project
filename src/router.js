
import Vue from 'vue'
import VueRouter from 'vue-router'

import home from './components/tabber/Home.vue'
import user from './components/tabber/User.vue'
import shopcar from './components/tabber/Shopcar.vue'
import search from './components/tabber/Search.vue'
import newslist from './components/news/newList.vue'
import newsinfo from './components/news/newinfo.vue'
import photoslist from './components/photos/share.vue'
import photosinfo from './components/photos/info.vue'
import shoplist from './components/shop/shoplist.vue'
import shopinfo from './components/shop/shopinfo.vue'
import shopdetail from './components/shop/shopdetail.vue'
import shopcomment from './components/shop/shopcomment.vue'


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
    {path:'/photoslist',component:photoslist},
    {path:'/photosinfo/:id',component:photosinfo},
    {path:'/shop/shoplist',component:shoplist},
    {path:'/shop/shopinfo/:id',component:shopinfo},
    {path:'/shop/shopdetail/:id',component:shopdetail,name:"shopdetail"},
  	{path:'/shop/shopcomment/:id',component:shopcomment}



  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router