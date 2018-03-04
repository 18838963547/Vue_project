<template>
	<div>
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a class="mui-control-item mui-active"
					@click="imgList(0)">
						全部
					</a>
					<a class="mui-control-item"
					v-for="item in headerData"
					:key="item.id"
					@click="imgList(item.id)"
					>
						{{ item.title }}
					</a>
				</div>
			</div>

		</div>
		<ul class="imgbox">
			<router-link v-for="item in imgData" :key="item.id"
			:to="'/photosinfo/' + item.id" tag="li">
				<img v-lazy="item.img_url">
				<div class="info">
					<h2>{{item.title}}</h2>
					<p>{{item.zhaiyao}}</p>
				</div>
			</router-link>
		</ul>
	</div>
</template>
<script>

import mui from '../../lib/mui/js/mui.min.js'
export default {
	data(){
		return{
			headerData:[],
			imgData:[]
		}
	},
	created(){
		this.headerList(),
		this.imgList(0)
	},
	mounted(){
		mui('.mui-scroll-wrapper').scroll({
    		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  		});
	},
	methods:{
		headerList(){
			this.$http.get('api/getimgcategory').then(res=>{
				if(res.body.status == 0){
					this.headerData = res.body.message
				}else{
					Toast('获取数据失败')
				}
			})
		},
		imgList(id){
			this.$http.get("api/getimages/" + id).then(res => {
       			this.imgData = res.body.message;
      		});
		}
	}
}

</script>
<style lang='less' scoped>
*{
	touch-action:pan-y;
}
.imgbox{
	list-style:none;
	margin:0;
	padding:0 0px;
	padding-bottom:10px;
	li{
		text-align: center;
    	display: block;
    	position: relative;
    	background: #ccc;
    	margin: 10px;
		img{
			width: 100%;
			vertical-align:middle;
		}

		img[lazy=loading] {
			width: 40px;
			height: 300px;
			margin: auto;
		}
		.info{
			position: absolute;
			bottom:0;
			left: 0;
			right:0;
			text-align: left;
			color:#fff;
			max-height: 82px;
			background: rgba(0,0,0,0.4);
			h2{
				font-size: 14px;
			}
			p{
				color:#fff;
				font-size: 12px;
			}
		}
	}
	li:first-child{
    margin-top:0;
  }
}


</style>