webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _product = __webpack_require__(10);

	var _product2 = _interopRequireDefault(_product);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(1);

	module.exports=riot.tag2('product', '<div class="productinfo" if="{productDesc}"> <div class="productpic"> <img class="pic" riot-src="https://shop.polymer-project.org{productDesc.image}"></img> </div> <div class="info"> <div class="name"> <span class="label">Name: </span> <span class="desc">{productDesc.title}</span> </div> <div class="price"> <span class="label">Price: </span> <span class="desc">{productDesc.price}</span> </div> </div> </div>', '', '', function(opts) {
			this.productDesc=null;
			this.on('mount',function(){
				var plist = window.products[opts.category];
				for(var i=0; i<plist.length; i++){
					if (plist[i].name === opts.productName){
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