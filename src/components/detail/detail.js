import Vue from 'vue';
import BaseView from '../../util/view';
import Recommend from '../../api/recommend';

export default {	
	mixins : [ BaseView ],
	data (){
		return {
			custom : []
		}	
	},
	created (){
		this.res();
	},
	ready (){
	},
	events : {	
		back (){
			this.path.go('/');
		}
	},
	methods : {
		res () {
			Recommend.customDate( this.$route.params._id, ( error, result ) => {
				if( error ) return console.log(error);
				this.custom = result
			})
		}
	}
}