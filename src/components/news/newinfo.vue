<template>
	<div class="newsInfoBox">
		<h3>{{infoData.title}}</h3> 
		<p class="timeClick">
			<span>时间 :{{infoData.add_time | dataF}}</span>
			<span>点击 : {{infoData.click}}</span>
		</p>
		<div class="content" v-html="infoData.content"></div>
		<comment :id='id'></comment>
	</div>
</template>
<script>
import { Toast } from 'mint-ui'
import comment from '../subcom/comment.vue'

export default{
	data(){
		return{
			id:this.$route.params.id,
			infoData:[]
		}
	},
	created(){
		this.getNewsINfo()
	},
	methods:{
		getNewsINfo(){
			this.$http.get('api/getnew/'+this.id).then(res=>{
				// console.log(res);
				if(res.body.status == 0){
					this.infoData = res.body.message[0]
				}else{
					Toast('获取数据失败')
				}

			})
		}
	},
	components:{
		comment
	}
}
</script>
<style lang='less'>
.newsInfoBox {
  padding: 0 3px;
  h3 {
    color: red;
    text-align: center;
    font-size: 15px;
  }
  .timeClick {
    display: flex;
    justify-content: space-between;
    color: #26a2ff;
  }
  .content{
    img{
      width:100%
    }
  }
}
</style>