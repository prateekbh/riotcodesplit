webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _browse = __webpack_require__(9);

	var _browse2 = _interopRequireDefault(_browse);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(1);

	module.exports=riot.tag2('browse', '<ul class="productgrid"> <li class="product" each="{product in products}"> <navigate to="/product/{category}/{product.name}"> <img class="productpic" riot-src="https://shop.polymer-project.org{product.image}" height="300" width="300"> <div class="producttitle">{product.title}</div> </navigate> </li> </ul>', '', '', function(opts) {
			this.products=[];
			this.category='';

			this.on('mount',function(){
				var productList =[];
				if(typeof window !== 'undefined'){
					productList = window.products[opts.category];
				}
				this.update({
					category: opts.category,
					products: productList
				});
			});
	});

/***/ }

});