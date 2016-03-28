export default {
	isAndroid (){
		return false;
	},
	isIOS (){
		return false;
	},
	isWeiXin (){
		return false;
	},
	isHybrid (){
		return this.isAndroid() || this.isIOS() || this.isWeiXin();
	},
	isWeb (){
		return !isHybrid();
	}
}	