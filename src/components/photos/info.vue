<template>
	<div class="imginfobox">
		<h2>{{imgInfo.title}}</h2>
		<div class="titletime">
			<span>{{imgInfo.add_time | dataF}}</span>
			<span>点击：{{imgInfo.click}}</span>
		</div>
		<img class="preview-img"
                  v-for="(item, index) in imglist"
                  :key="index"
                  :src="item.src" height="100" 
                  @click="$preview.open(index, imglist)">
		<div v-html="imgInfo.content" class="content"></div>


		<common :id="id"></common>
	</div>
</template>
<script>
 import common from '../subcom/comment.vue'
export default{
	data(){
		return{
			id:this.$route.params.id,
			imgInfo:{},
			imglist:[]
		}
	},
	created(){
		this.getphotosInfo();
		this.getImg()
	},
	methods:{
		getphotosInfo(){
			this.$http.get('api/getimageInfo/'+this.id).then(res=>{
				if(res.body.status == 0){
					this.imgInfo = res.body.message[0]
				}
			})
		},
		getImg(){
			this.$http.get('api/getthumimages/' + this.id)
			.then((res)=>{
				if(res.body.status===0){
					res.body.message.forEach(function(item) {
						item.w = 600;
						item.h = 400;
					});
					this.imglist = res.body.message;
				}
			})
		}
	},
	components:{
		common
	}
}
</script>
<style lang="less" scoped>
.imginfobox{
    margin: 0 3px;
    h2{
      color:#26a2ff;
      font-size:15px;
      text-align: center;
    }
    .titletime{
      display: flex;
      justify-content: space-between;
    }
    .content{
      font-size: 14px;
    }
    .preview-img{
      margin: 2px;
    }
  }  
</style>