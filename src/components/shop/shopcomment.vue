<template>
  <div>
    <common :id="id"></common>
  </div>
</template>

<script>
import common from "../subcom/comment.vue";

export default {
	data(){
		return{
			id:this.$route.params.id
		}
	},
  components: {
    common
  }
};
</script>

<style lang="scss" scoped>

</style>
