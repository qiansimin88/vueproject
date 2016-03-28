<template>
<div class="mui-popup mui-popup-small" :class="{ 'mui-popup-out' : !show }">
    <div class="mui-loading">
      <span class="line1"></span>
      <span class="line2"></span>
      <span class="line3"></span>
      <span class="line4"></span>
      <span class="line5"></span>
      <span class="line6"></span>
      <span class="line7"></span>
      <span class="line8"></span>
    </div>
</div>
<div class="mui-popup-backdrop" :class="{ 'mui-inActive' : !show }"></div>
</template>
<script>
export default {
	name : 'loading',
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

.mui-loading {
    width: 80px;
    height: 60px;
    margin: 20px auto;
    position: relative;

    span {
        width: 4px;
        height: 20px;
        background-color: #ccc;
        position: absolute;
        left: 38px;
        animation: mui-loading 1s infinite;
    }

    .line1 {
        background-color: #000;
        transform: rotate(0deg);
        animation-delay: .3s;
    }
    .line2 {
        top: 5px;
        left: 52px;
        transform: rotate(45deg);
        animation-delay: .4s;
    }
    .line3 {
        top: 18px;
        left: 57px;
        transform: rotate(90deg);
        animation-delay: .5s;
    }
    .line4 {
        top: 31px;
        left: 52px;
        transform: rotate(135deg);
        animation-delay: .6s;
    }
    .line5 {
        top: 37px;
        animation-delay: .7s;
    }
    .line6 {
        top: 32px;
        left: 24px;
        transform: rotate(-135deg);
        animation-delay: .8s;
    }
    .line7 {
        top: 18px;
        left: 19px;
        transform: rotate(-90deg);
        animation-delay: .9s;
    }
    .line8 {
        top: 5px;
        left: 24px;
        transform: rotate(-45deg);
        animation-delay: 1s;
    }
}

@keyframes mui-loading {
    0% {
        background-color: #ccc;
    }
    50% {
        background-color: #000;
    }
    100% {
        background-color: #ccc;
    }
}

</style>