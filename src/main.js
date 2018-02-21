// 入口文件
import Vue from "vue"

// 导入mui的样式
import './lib/mui/css/mui.css'

// 按需导入mint-ui中的组件
import { Header } from 'mint-ui';
Vue.component(Header.name,Header);




// 导入app模板组件
import app from './App.vue'

var vm = new Vue({
	el:'#app',
	render:c =>c(app)
})