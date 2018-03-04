<template>
	<div>
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item in imgData" :key="item.img">
				<img class="imgimg" v-if="item.img" :src="item.img" :alt="item.src">
				<img class="srcimg" v-else :src="item.src" :alt="item.src">
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script>
export default {
	data(){
		return{

		}
	},
	props:['imgData']
}
</script>
<style lang="less">
.mint-swipe{
	height:30vh;
	.mint-swipe-item{
		text-align: center;
		.imgimg{
			width:100%;
			height:100%;
		}
		.srcimg{
			height:100%;
		}
	}
}
</style>