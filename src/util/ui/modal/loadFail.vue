<template>
<div class="mui-popup mui-popup-small" :class="{ 'mui-popup-out' : !show }">
    <div class="mui-loadFail" v-text="title"></div>
</div>
<div class="mui-popup-backdrop" :class="{ 'mui-inActive' : !show }"></div>
</template>
<script>
export default {
	name : 'loadFail',
	props : {
		show : {
			type : Boolean,
			default : false,
			twoWay : true
		},
        title : {
            type : String,
            default : '加载失败:('
        }		
	}
}
</script>
<style lang="less" src="./modal.less"></style>
