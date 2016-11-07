<browse>
	<ul class='productgrid'>
		<li class="product" each={product in products}>
			<navigate to='/product/{category}/{product.name}'>
				<img class="productpic" src='https://shop.polymer-project.org{product.image}' height="300" width="300" />
				<div class="producttitle">{product.title}</div>
			</navigate>
		</li>
	</ul>
	<script>
		this.products=[];
		this.category='';
		
		this.on('mount',function(){
			var productList =[];
			if(typeof window !== 'undefined'){
				productList = window.products[opts.category];
			}else{
				productList = require('../data.json');
			}
			this.update({
				category: opts.category,
				products: productList
			});
		});
	</script>
</browse>