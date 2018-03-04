<template>
	<div class="shopinfo-box">

		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :imgData="imgData"></swiper>
				</div>
			</div>
		</div>

		<div class="mui-card">
			<!--页眉，放置标题-->
			<div class="mui-card-header">标题</div>
			<!--内容区-->
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
						市场价：<del>{{goodsinfo.sell_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">{{goodsinfo.market_price}}</span>
					</p>
					<p style="display:flex;height:30px;line-height:30px;">购买数量：<infonum v-on:numchange="numf" :maxCount="goodsinfo.stock_quantity"></infonum></p>
					<p>
						<mt-button type="primary" size="small">立即购买</mt-button>
						<mt-button type="danger" size="small" @click="toaddshopcar">加入购物车</mt-button>
					</p>
				</div>
			</div>
		</div>

		<div class="mui-card">
			<!--页眉，放置标题-->
			<div class="mui-card-header">商品参数</div>
			<!--内容区-->
			<div class="mui-card-content"><div class="mui-card-content-inner">
          <p>商品货号：{{goodsinfo.goods_no}}</p>
          <p>库存情况：{{goodsinfo.stock_quantity}}件</p>
          <p>上架时间：{{goodsinfo.add_time | dataF}}</p>
        </div></div>
			<!--页脚，放置补充信息或支持的操作-->
			<div class="mui-card-footer">
				<mt-button type="primary" size="large" plain @click="goDetail(id)">图文介绍</mt-button>
        		<mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
        	</div>
		</div>

		<transition
		v-on:before-enter="beforeEnter"
		v-on:enter="enter"
		v-on:after-enter="afterEnter">
			<div class="ball" v-if="ballflag" ref="ball"></div>
		</transition>

	</div>
</template>
<script>
import swiper from "../subcom/swiper.vue"
import infonum from "../subcom/infonum.vue"
export default {
	data(){
		return {
			id:this.$route.params.id,
			imgData:[],
			goodsinfo:[],
			ballflag:false,
			selectCount:1
		}
	},
	created(){
		this.getshopinfo();
		this.getGoodsInfo()
	},
	components:{swiper,infonum},
	methods:{
		getshopinfo(){
			this.$http.get('api/getthumimages/'+this.id)
			.then(res=>{
				console.log(res.body)
				if(res.body.status === 0){
					this.imgData = res.body.message;
				}
			})
		},
		// 获取商品的详细信息
		getGoodsInfo(){
			this.$http.get("api/goods/getinfo/" + this.id).then(res=>{
				if(res.body.status === 0){
					this.goodsinfo = res.body.message[0];
				}
			})

		},
		goDetail(id){
			this.$router.push({ name: 'shopdetail', params: id});
		},
		goComment(id){
			this.$router.push("/shop/shopcomment/"+id);
		},
		toaddshopcar(){
			this.ballflag = !this.ballflag;

			var goodsinfo={
				id:this.id,
				count:this.selectCount,
				price:this.goodsinfo.sell_price,
				selected:true
			};

			this.$store.commit('addToCar',goodsinfo);
		},
		beforeEnter(el){
			el.style.transform="translate(0,0)";
		},
		enter(el,done){
			el.offsetWidth;
			let ballP = this.$refs.ball.getBoundingClientRect();

			let badgeP = document.getElementById("badge").getBoundingClientRect();

			let left = badgeP.left - ballP.left;
			let top = badgeP.top - ballP.top;

			el.style.transform=`translate(${left}px,${top}px)`;
			el.style.transition="all 0.2s ease";
			done();
		},
		afterEnter(el){
			this.ballflag = !this.ballflag
		},
		numf(count){
			this.selectCount = count;
			console.log("父组件拿到的值为" + this.selectCount);
		}
	}
}
</script>
<style lang="less" scoped>
.shopinfo-box{
    background: #eeeeee;
    overflow: hidden;
    min-height:500px;
    .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }

  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
  .ball{
  	width: 15px;
  	height: 15px;
  	border-radius:50%;
  	background-color: red;
  	position:absolute;
  	z-index:99;
  	left: 147px;
  	top: 353px;
  }
  }
</style>