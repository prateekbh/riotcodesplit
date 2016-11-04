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
			this.update({
				category: opts.category,
				products: window.products[opts.category]
			});
		});
	</script>
</browse>