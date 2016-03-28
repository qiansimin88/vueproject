<template>
	<header class="layout-header">
		<div class="layout-header-left iconfont icon-iconfontzuojiantou" @click.prevent="notify('back')">
		</div>
		<div class="layout-header-title">
			<h2 v-text="title"></h2>
		</div>
		<div class="layout-header-right">
		</div>
	</header>
</template>

<style lang="less">
	.layout-header {
		display: flex; 
		align-items : center;
		top: 0;
	    height: 44px;
	    line-height: 44px;
	    text-align: center;
	    background-color: #099fde;
	    color: #fff;
	    z-index: 960; 
	    width: 100%;

		.layout-header-left, .layout-header-right {
			width:50px; font-size: .32rem;
			&.layout-header-left {
				&:active {
					background: #077cad;
				}
			}
		}
		.layout-header-title {
			flex:1; font-size:0.32rem;
		}
	}
</style>
<script>
export default {
	name : 'layout-header',
	props : {
		title : {
			default : '我的数据'
		}	
	},
	methods : {
		notify ( type ){
			this.$dispatch( type );
		}
	}	
}
</script>



























