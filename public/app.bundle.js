webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _riot = __webpack_require__(1);

	var _riot2 = _interopRequireDefault(_riot);

	var _routes = __webpack_require__(3);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_riot2.default.mount('header');
	_riot2.default.mount('app-router');

	// riot.route('/',function(){    
	//     riot.mount('home');
	// });

	// riot.route('/browse/*',function(){    
	//     riot.mount('browse');
	// });


	// riot.route.start(true);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(1);

	riot.tag2('app-router', '<router> <route path="/" component="{this.parent.loadHome}"></route> <route path="/browse/:category" component="browse"></route> <route path="/product/:category/:productName" component="product"></route> </router>', '', '', function(opts) {
			var self = this;
			self.loadHome = function(){
				console.log("loading home");
				return new Promise((resolve, reject) => {
					__webpack_require__.e/* nsure */(1, (require)=>{
						require('./home.tag');
						resolve();
					});
				});
			}
	});

/***/ }
]);