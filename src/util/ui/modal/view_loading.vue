<template>
<div class="mui-popup top25" :class="{ 'mui-popup-out' : !show }">
    <div class="mui-loading mui-view-loading">
      <span class="line1"></span>
      <span class="line2"></span>
      <span class="line3"></span>
      <span class="line4"></span>
      <span class="line5"></span>
      <span class="line6"></span>
      <span class="line7"></span>
      <span class="line8"></span>
    </div>
    <p class="mui-loading-text">感受创造与分享的快乐</p>
</div>
<div class="mui-popup-backdrop mui-popup-backdrop-full" :class="{ 'mui-inActive' : !show }"></div>
</template>
<script>
export default {
	name : 'view_loading',
	props : {
		show : {
			type : Boolean,
			default : false,
			twoWay : true
		}		
	}
}
</script>
<style lang="less" src="./modal.less"></style>
<style lang="less">

.mui-loading-text {
    text-shadow: 1px 1px #fff, -1px -1px #ccc;
    color:#999; font-size:16px; margin-top:30px;
    line-height: 22px;
}

.mui-view-loading {
    span {
        animation: mui-view-loading 1s infinite;
        border-radius: 20px;
    }

    .line1 {
        background-color: #666;
    }
}

.mui-popup-backdrop.mui-popup-backdrop-full {
    opacity:1; background: #eee;
}

@keyframes mui-view-loading {
    0% {
        background-color: #ccc;
    }
    50% {
        background-color: #666;
    }
    100% {
        background-color: #ccc;
    }
}

</style>