<template>
	<div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newsdata" :key="item.id">
				<router-link :to="'/newsinfo/'+item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<p class='mui-ellipsis'>{{ item.title }}</p>
						<p class="timeAndclick">
							<span>时间：{{ item.add_time | dataF }}</span>
							<span>点击：{{ item.click }}</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>

import { Toast } from 'mint-ui'

export default{
	data(){
		return{
			newsdata:[]
		}
	},
	created(){
		this.getNewsData();
	},
	methods:{
		getNewsData(){
			this.$http.get('api/getnewslist').then(res=>{
				console.log(res.body);
				if(res.body.status == 0){
					this.newsdata = res.body.message;
				}else{
					Toast('获取数据失败')
				}
			})
		}
	}
}
</script>
<style lang="less" scoped>
.mui-media-body{
	.timeAndclick{
		display: flex;
    	color: #26a2ff;
    	justify-content: space-between;
    	font-size: 12px;
	}
}
</style>