<template>
	<div>
		<div class="common">
			<h3>发表评论</h3>
			<hr>
			<textarea placeholder="请输入内容(不多于100个字)"></textarea>
			<mt-button type="primary" size="large">发表评论</mt-button>
			<div class="container">
				<div class="container-box" v-for="(item,i) in commentlist" :key='item.add_time'>
					<div class="container-title">
						第{{ i+1 }}楼 : {{ item.user_name }}  发表时间 : {{item.add_time | dataF}}
					</div>
					<div class="container-nei">
						{{ item.content }}
					</div>
				</div>
			</div>
			<mt-button type="danger" size="large" plain @click='addmore()'>加载更多</mt-button>
		</div>
	</div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
	data(){
		return{
			commentlist:[],
			pageIndex:1
		}
	},
	props: ["id"],
	created(){
		this.getCommentData()
	},
	methods:{
		getCommentData(){
			this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(res=>{
				if(res.body.status == 0){
					this.commentlist = this.commentlist.concat(res.body.message);
				}else{
					Toast('获取评论失败')
				}
			})
		},
		addmore(){
			this.pageIndex++;
			this.getCommentData();
		}
	}
}

</script>
<style lang='less' scoped>
.common{
    h3{
      color:#000;
      text-align: left;
      font-size:16px;
    }
    hr{
      margin: 10px 0;
    }
    textarea{
      font-size: 13px;
      margin: 10px 0;
    }
    .container{
      padding:0;
      margin: 5px 0;
      .container-box{
        font-size: 13px;
        .container-title{
          background: #ccc;
          line-height: 25px;
        }
        .container-nei{
          line-height: 25px;
        }
      }
    }
  }
</style>