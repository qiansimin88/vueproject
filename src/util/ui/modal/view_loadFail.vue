<template>
  <div class="mui-popup top25" :class="{ 'mui-popup-out' : !show }">
      <p class="mui-loading-text">网络不给力，再试试吧。</p>
      <button class="btn-retry" @click="_retry" @click.prevent="retry()">重试</button>
  </div>
  <div class="mui-popup-backdrop mui-popup-backdrop-full" :class="{ 'mui-inActive' : !show }"></div>
</template>
<script>
export default {
	name : 'view_loadFail',
	props : {
		show : {
			type : Boolean,
			default : false,
			twoWay : true
		},
		rertyCb : {
			type : Function,
			default : function (){}
		}		
	},
	methods : {
		_retry (){
			this.show = false;
			let loading = this.$parent.$refs.view_loading;
			loading.show = true;
		},
		retry (){
			let loading = this.$parent.$refs.view_loading;
			loading.show = false;
			return this.retryCb();
		}
	}
}
</script>
<style lang="less" src="./modal.less"></style>
<style lang="less">

.mui-popup {
	.mui-loading-text {
	    text-shadow: 1px 1px #fff, -1px -1px #ccc;
	    color:#999; font-size:16px; margin-top:30px;
	    line-height: 22px;
	}
	.btn-retry {
	    background-color: #52bceb;
	    height: 44px;
	    line-height: 44px;
	    border-radius: 5px;
	    color: #fff;
	    font-size: 20px;
	    border:none;
	    width:100%;
	}
}

</style>