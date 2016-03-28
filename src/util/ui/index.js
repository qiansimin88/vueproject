import Vue from 'vue';

//ui components
//直接插入页面
Vue.component('ui-alert', require("./modal/alert.vue")),
Vue.component('ui-confirm', require("./modal/confirm.vue")),
Vue.component('ui-loading', require("./modal/loading.vue")),
Vue.component('ui-load-fail', require("./modal/loadFail.vue")),
Vue.component('ui-view-loading', require("./modal/view_loading.vue")),
Vue.component('ui-view-load-fail', require("./modal/view_loadFail.vue"));

//layout components
//需要的地方引用
Vue.component('layout-header', require("./layout/header.vue"));

//创建ui-components template
let ui_components = Vue.extend({
		template : `
					<ui-alert v-ref:alert keep-alive></ui-alert> 
				   	<ui-confirm v-ref:confirm keep-alive></ui-confirm>
				    <ui-loading v-ref:loading keep-alive></ui-loading>
				    <ui-load-fail v-ref:load_fail keep-alive></ui-load-fail>
			   	    <ui-view-loading v-ref:view_loading keep-alive></ui-view-loading> 
			   	    <ui-view-load-fail v-ref:view_load_fail keep-alive></ui-view-load-fail>
			   	   `
	});

//注册ui-components
Vue.component('ui-components', ui_components);

//生成ui-components
export let origin = new Vue({
   el : '#ui-components',
});

export let ui = origin.$children[0].$refs;

