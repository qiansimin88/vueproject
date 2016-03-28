import { UriBuilder } from './url';
import * as com from './ui';

function parseJSON ( res ){
	return res.json();
}

function completeUri ( url ){

	let protocol = location.protocol === "file:" ? "http:" : location.protocol;

	return protocol + "//" + location.hostname + ":" + location.port + url;
}

//发送请求
function fetchTo ( u, options, callback, isView ){
	return fetch( u, options )
		//做json parse处理
    	.then( parseJSON )
    	//接口必须按照json.ret.result结构，否则抛错
    	.then(( json ) => { 
    		if( isView ){
    			com.ui.view_loading.show = false;
    		}
    		return callback( null, json.ret.result ); 		
    	})
		.catch((error) => {
			if( isView ){
				com.ui.view_loading.show = false;
				com.ui.view_load_fail.show = true;
				com.ui.view_load_fail.retryCb = function (){
					com.ui.view_loading.show = true;
					fetchTo( u, options, callback, isView );	
				};
			} else {
				return callback( error );
			}
		})
}

function paramParse ( url, options, callback ){
	let opt, fn;

	if( typeof options === "function" ){
		opt = {};
		fn = options;
	} else {
		opt = options;
		fn = callback;
	}

	return {
		opt,
		fn
	}
}

export default {
	get ( url, options, callback ){

		let o = paramParse( url, options, callback );

		return this.send(
			url, Object.assign( o.opt, {
				method : 'get',
				result_type : 'json'
			}), o.fn
		);
	},
	post ( url, options, callback ){

		let o = paramParse( url, options, callback );

		return this.send(
			url, Object.assign( o.opt, {
				method : 'post'
			}), o.fn
		);
	},
	send ( url, options, callback ){

		let isView = options.view || false;

		delete options.view;

		let u = new UriBuilder(completeUri( url )),
			oc = Object.assign( options, {} ),
			content = {};

		//默认为get请求
		if( !oc.method ) oc.method = 'get';

		if( oc.method === "get" ){

			u.params = oc;

			//method已经没用啦
			delete u.params.method;
		
		} else if( oc.method === "post" ){

			content.method = oc.method;

			//将method赋值给content的method后不需要在放入content.body中
			delete oc.method;

			//传入fetch的内容都需要做stringify处理
			content.body = JSON.stringify( oc );
			
			content.headers = JSON.stringify({
				'Content-Type'  : 'application/json'
			});

			options = content;
		}	

		//build新的uri
		u = u.build();

		//发起请求
		return fetchTo( u, options, callback, isView );
	}	
}















