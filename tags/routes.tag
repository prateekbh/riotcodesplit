<app-router>
	<router>
			<route path='/' component={this.parent.loadHome}></route>
			<route path='/browse/:category' component='browse'></route>
			<route path='/product/:category/:productName' component='product'></route>
			<!--<router path='/..' component={tag-404}/>-->
	</router>
	<script>
		var self = this;
		self.loadHome = function(){
			console.log("loading home");
			return new Promise((resolve, reject) => {
				require.ensure(['./home.tag'],(require)=>{
					require('./home.tag');
					resolve();
				},"home");
			});
		}
	</script>
</app-router>