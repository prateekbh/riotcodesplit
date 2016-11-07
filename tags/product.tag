<product>
	<div class="productinfo" if={productDesc}>
		<div class="productpic">
			<img class="pic" src='https://shop.polymer-project.org{productDesc.image}'/>
		</div>
		<div class="info">
			<div class="name">
				<span class="label">Name: </span>
				<span class="desc">{productDesc.title}</span>
			</div>
			<div class="price">
				<span class="label">Price: </span>
				<span class="desc">{productDesc.price}</span>
			</div>
		</div>
	</div>
	<script>
		this.productDesc=null;
		this.on('mount',function(){
			var productList = [];
			if(typeof window !== 'undefined'){
				productList = window.products[opts.category];
			}else{
				productList = require('../data.json');
			}
			for(var i=0; i<productList.length; i++){
				if (productList[i].name === opts.productName){
					this.update({
						productDesc: productList[i]
					});
					break;
				}
			}
		})
	</script>
</product>
