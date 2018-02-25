// 入口文件
import Vue from "vue";

// 导入mui的样式
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';
import VueResource from 'vue-resource';

// 按需导入mint-ui中的组件
import { Header ,Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


Vue.use(VueResource);

// 导入app模板组件
import app from './App.vue'
import router from './router.js'

var vm = new Vue({
	el:'#app',
	render:c =>c(app),
	router
})
