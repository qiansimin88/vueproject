import http from '../util/http';

export default {
	topic : function ( callback ){
		return http.get('/article/theme_recommend/', 
			callback );
	},
	banner : function ( callback ){
		return http.get('/article/recommend', {
			pagename : 'homepagebannermobile'
		}, callback );
	},
	editor : function ( callback ){
		return http.get('/article/recommend', {
			pagename : 'editor_recommend',
			view : true
		}, callback );
	},
	customDate : function ( id, callback) {
		return http.get('/api/datas/details/' + id , 
			callback );
	}
}		