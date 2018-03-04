<template>
	<div class="mui-numbox" data-numbox-min="1">
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" :value="initCount" @change="changeNum" ref="num1">
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js"
export default {
	data(){
		return{
			maxv:''
		}
	},
	mounted(){
		mui(".mui-numbox").numbox();
	},
	props:["maxCount","initCount","goodsid"],
	watch: {
    	maxCount:function(newv,oldv){
     		mui('.mui-numbox').numbox().setOption('max',newv)
    	}
  	},
	
	methods:{
		changeNum(){
			console.log(this.$refs.num1.value);
			this.$emit("numchange",parseInt(this.$refs.num1.value));
			this.$store.commit("upgoodsData",{id:this.goodsid,count:this.$refs.num1.value})
		},
		// countChange(){
		// 	this.$store.commit("upgoodsData",{id:this.goodsid,count:this.$refs.num1.value})
		// }
	}
}
</script>
<style lang="less" scoped>
.mui-numbox{
    height:30px;
}
</style>