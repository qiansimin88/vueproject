<template>
<div class="mui-popup" :class="{ 'mui-popup-out' : !show }">
	<div class="mui-popup-inner">
		<div class="mui-popup-title" 
			 v-show="title!==''" 
			 v-text="title"></div>
		<div class="mui-popup-text" v-text="content"></div>
	</div>
	<div class="mui-popup-buttons">
		<span class="mui-popup-button mui-popup-button-bold" 
			@click.prevent="show=false">确定</span>
	</div>
</div>	
<div class="mui-popup-backdrop" :class="{ 'mui-inActive' : !show }"></div>
</template>

<style lang="less" src="./modal.less"></style>
<script>
export default {
	name : 'alert',
	props : {
		show : {
			type : Boolean,
			default : false,
			twoWay : true
		},
		title : {
			type : String,
			default : '提示'
		},
		content : {
			type : String,
			default : '网络错误，请稍后重试!'
		}
	}	
}
</script>