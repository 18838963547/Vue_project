<template>
	<div>
		<!-- 轮播图 -->
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item in imgData" :key="item.img">
				<img :src="item.img" alt="">
			</mt-swipe-item>
		</mt-swipe>

		<!-- 六宫格 -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		    	<router-link to="/newslist">
		        	<img src="../../images/menu1.png" alt="">
		        	<div class="mui-media-body">新闻资讯</div>
		    	</router-link>
		    </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		    	<router-link to="/photoslist">
		        	<img src="../../images/menu2.png" alt="">
		        	<div class="mui-media-body">图片分享</div>
		    	</router-link>
		    </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		    	<router-link to="/shop/shoplist">
		        	<img src="../../images/menu3.png" alt="">
		        	<div class="mui-media-body">商品购买</div>
		    	</router-link>
		    </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		    	<a href="#">
		        	<img src="../../images/menu4.png" alt="">
		        	<div class="mui-media-body">留言反馈</div>
		    	</a>
		    </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		    	<a href="#">
		        	<img src="../../images/menu5.png" alt="">
		        	<div class="mui-media-body">视频专区</div>
		    	</a>
		    </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		    	<a href="#">
		        	<img src="../../images/menu6.png" alt="">
		        	<div class="mui-media-body">联系我们</div>
		    	</a>
		    </li>
		</ul>
	</div>
</template>
<script>

import { Toast } from 'mint-ui'
export default {
	data(){
		return {
			imgData:[]
		}
	},
	created(){
		this.getImgData();
	},
	methods:{
		getImgData(){
			this.$http.get('api/getlunbo').then(res=>{
				if(res.body.status == 0){
					this.imgData = res.body.message
				}else{
					Toast('轮播图数据获取失败')
				}
			})
		}
	}
}
</script>
<style lang="scss" scoped>
	.mint-swipe{
		height: 40vh;
		.mint-swipe-item{
			img{
				width: 100%;
				height: 100%;
			}
		}
	}

	.mui-table-view{
		background-color: #fff;
		.mui-table-view-cell{
			border:none;
			img{
				width: 60px;
				height: 60px;
			}
			.mui-media-body{
				font-size:12px
			}
		}
	}
</style>