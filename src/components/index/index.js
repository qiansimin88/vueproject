import Vue from 'vue';
import Recommend from '../../api/recommend';
import BaseView from '../../util/view';
import Swiper from '../../../static/js/swiper-3.3.1.min.js';
import lazyLoad from 'lazyloadjs';

export default {	
	mixins : [ BaseView ],				//方法混合
	data (){
		return {
			topicItem : [],
			editor_recommend : [],
			bannerimg:[]
		}	
	},
	created (){
		this.res();
	},
	ready (){
		this.$nextTick(() => {
			let indexSwiper = new Swiper('.swiper-container',{
				loop: true,
		        lazyLoading : true,
		        lazyLoadingInPrevNext : true,
		        preloadImages : false,
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        spaceBetween: 30
			})
		}) 		
	},
	events : {	
	},
	methods : {
		res (){
			Recommend.topic(( error, result ) => {
				if( error ) return console.log(error);
				this.topicItem = result
			});
			Recommend.banner((error,result) => {
				this.bannerimg = result;
			});

			Recommend.editor((error, result) => {
				if( error ) return console.log(error);
				this.editor_recommend = result
			});
		},
		show (){
			this.showDialog({
				title : 'smile',
				content : ":)"
			}, true);
		}
	}
}