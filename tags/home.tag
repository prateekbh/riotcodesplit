<home>
	<h1 onclick={gocart}>Go Cart</h1>
	<h1 onclick={goco}>Go Checkout</h1>
	<script>
		this.gocart=function(){
			riot.route('/cart');
		}

		this.goco=function(){
			riot.route('/co');
		}
	</script>
</home>