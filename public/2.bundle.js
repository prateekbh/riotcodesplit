webpackJsonp([2],{

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(1);

	riot.tag2('browse', '<ul class="productgrid"> <li class="product" each="{product in products}"> <a href="/#product/{category}/{product.name}"> <img class="productpic" riot-src="https://shop.polymer-project.org{product.image}" height="300" width="300"> <div class="producttitle">{product.title}</div> </a> </li> </ul>', '', '', function(opts) {
			this.products=[];
			this.category='';

			this.on('mount',function(){
				this.update({
					category: opts.category,
					products: window.products[opts.category]
				});
			});
	});

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(1);

	riot.tag2('product', '<div class="productinfo" if="{productDesc}"> <div class="productpic"> <img class="pic" riot-src="https://shop.polymer-project.org{productDesc.image}"></img> </div> <div class="info"> <div class="name"> <span class="label">Name: </span> <span class="desc">{productDesc.title}</span> </div> <div class="price"> <span class="label">Price: </span> <span class="desc">{productDesc.price}</span> </div> </div> </div>', '', '', function(opts) {
			this.productDesc=null;
			this.on('mount',function(){
				var plist = window.products[opts.cat];
				for(var i=0; i<plist.length; i++){
					if (plist[i].name === opts.name){
						this.update({
							productDesc: plist[i]
						});
						break;
					}
				}
			})
	});


/***/ }

});