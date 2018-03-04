// 入口文件
import Vue from "vue";

// 导入mui的样式
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';
import VueResource from 'vue-resource';
import moment from "moment";
import VuePreview from 'vue-preview'
import Vuex from "vuex"

// 按需导入mint-ui中的组件
import { Header ,Swipe, SwipeItem,Button,Lazyload,Switch} from 'mint-ui';
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);


Vue.use(VueResource);
Vue.use(Lazyload)
Vue.use(VuePreview)
Vue.use(Vuex)
Vue.http.options.root = 'http://vue.studyit.io';
Vue.http.options.emulateJSON = true;

// 全局日期格式化
Vue.filter('dataF',function(info, option = 'YYYY-MM-DD HH:mm:ss'){
  return moment(info).format(option);
})

// 导入app模板组件
import app from './App.vue'
import router from './router.js'

var shopcar = JSON.parse(localStorage.getItem('shopcar') || '[]');
var store = new Vuex.Store({
	state:{ //this.$store.state.XXX
		shopcar:shopcar
	},
	mutations:{ // this.$store.commit('方法名称'，'按需传递的唯一参数')
		addToCar(state,goodsinfo){
			var flag = false
			state.shopcar.some(item=>{
				if(item.id == goodsinfo.id){
					item.count +=parseInt(goodsinfo.count)
					flag = true;
					return true
				}
			});
			if(!flag){
				state.shopcar.push(goodsinfo);
			}

			localStorage.setItem('shopcar',JSON.stringify(state.shopcar))
		},
		upgoodsData(state,goodsinfo){
			state.shopcar.some(item=>{
				if(item.id == goodsinfo.id){
					item.count = parseInt(goodsinfo.count);
					return true;
				}
			})
			localStorage.setItem('shopcar',JSON.stringify(state.shopcar));
		},
		removeDate(state,id){
			state.shopcar.forEach((item,i)=>{
				if(item.id == id){
					state.shopcar.splice(i,1);
					return true
				}
			})
			localStorage.setItem('shopcar',JSON.stringify(state.shopcar));
		},
		updateGoodsSelected(state,info){
			state.shopcar.some(item=>{
				if(item.id == info.id){
					item.selected = info.selected
				}
			})
			localStorage.setItem('shopcar',JSON.stringify(state.shopcar));
		}
	},
	getters:{ //this.$store.getters.xxx
		getAllCount(state){
			var c = 0;
			state.shopcar.forEach(item=>{
				c += item.count;
			})
			return c;
		},
		getgoodsCount(state){
			var o={}
			state.shopcar.forEach(item=>{
				o[item.id]=item.count;
			})
			return o;
		},
		getGoodsSelected(state){
			var o={};
			state.shopcar.forEach(item=>{
				o[item.id]=item.selected
			})
			return o;
			console.log(o)
		},
		getGoodsCountAndAmount(state) {
            var o = {
                count: 0, // 勾选的数量
                amount: 0 // 勾选的总价
            }
            state.shopcar.forEach(item => {
                if (item.selected) {
                    o.count += item.count
                    o.amount += item.price * item.count
                }
            })
            return o
        }
	}
})

var vm = new Vue({
	el:'#app',
	render:c =>c(app),
	router,
	store
})
