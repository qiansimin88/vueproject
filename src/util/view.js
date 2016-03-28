import Vue from 'vue';
import * as com from './ui';
import path from './path';

export default {
	route : {
		canActivate : function ( transition ){
			transition.next()
		},
		canDeactivate : function ( transition ){
			transition.next();
		}
	},
	methods : {	
		showDialog ({  content, title }, isShow ){
			this.ui.alert.content = content;
			this.ui.alert.title = title;
			this.ui.alert.show = isShow;	
		}
	},
	data (){
	},
	created (){
		
		let self = this,
			$events = this.$options.events;

		this.ui = com.ui;
		this.path = {};

		//将path方法映射在view上
		for( let i in path ) {
			self.path[ i ] = function (){
				return path[ i ].apply( self, arguments );
			}
		}
		//view中的events映射组件的events
		for( let i in $events )	com.origin.$on( i, () => $events[i].call( self ) )
	},
	beforeCompile (){	
	},
	compiled (){
	},
	ready (){
	},
	beforeDestory (){
	},
	destoryed (){
	}
};