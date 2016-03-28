export default function ( router ){
	router.map({
    	'/' : {
    		name : 'home',
    		component : function ( resolve ){
    			require(['./components/index/index.vue'], resolve);
    		}
    	},
    	'/list' : {
    		name : 'list',
    		component : function ( resolve ){
    			require(['./components/list/list.vue'], resolve);
    		}
    	},
    	'/404' : {
    		name : '404',
    		component : function ( resolve ){
    			require(['./components/404/404.vue'], resolve);
    		}
    	},
        "/detail/:_id": {
            name : 'detail',
            component : function ( resolve ){
                require(['./components/detail/detail.vue'], resolve);
            }
        }
	});

	router.beforeEach(function ({ to, next }){
		next();
	});

	router.afterEach(function ( trans ){
	});

	router.redirect({
	  // 重定向任意未匹配路径到404
	  '*': '/404'
	})
}