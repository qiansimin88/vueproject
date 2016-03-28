import tools from './tools';

export default {
	go ( path ){
		if( tools.isHybrid() ){
			
		} 
		else {
			
			this.$router.go( path );
		}
	}
}