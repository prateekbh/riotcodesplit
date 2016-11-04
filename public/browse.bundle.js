webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _browse = __webpack_require__(5);

	var _browse2 = _interopRequireDefault(_browse);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(1);

	riot.tag2('browse', '<ul class="productgrid"> <li class="product" each="{product in products}"> <nav href="/product/{category}/{product.name}"> <img class="productpic" riot-src="https://shop.polymer-project.org{product.image}" height="300" width="300"> <div class="producttitle">{product.title}</div> </nav> </li> </ul>', '', '', function(opts) {
			this.products=[];
			this.category='';

			this.on('mount',function(){
				this.update({
					category: opts.category,
					products: window.products[opts.category]
				});
			});
	});

/***/ }

});