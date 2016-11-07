webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _riot = __webpack_require__(1);

	var _riot2 = _interopRequireDefault(_riot);

	var _header = __webpack_require__(3);

	var _header2 = _interopRequireDefault(_header);

	var _routes = __webpack_require__(4);

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

	module.exports=riot.tag2('header', '<div class="nav"> <svg fill="#000000" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none"></path> <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path> </svg> </div> <div class="name"> <h1><a href="#">Riot Shop</a></h1> </div>', '', '', function(opts) {
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(1);

	module.exports=riot.tag2('app-router', '<router> <route path="/" component="{this.parent.loadHome}"></route> <route path="/browse/:category" component="{this.parent.loadBrowse}"></route> <route path="/product/:category/:productName" component="{this.parent.loadProduct}"></route> </router>', '', '', function(opts) {
			this.loadHome = function(){
				return new Promise((resolve,reject) => {
					__webpack_require__.e/* nsure */(1, function(require){
						var tagName = __webpack_require__(5);
						console.log(tagName);
						resolve("home");
					});
				})
			}
			this.loadBrowse = function(){
				return new Promise((resolve,reject) => {
					__webpack_require__.e/* nsure */(2, function(require){
						__webpack_require__(6);
						resolve("browse");
					});
				})
			}
			this.loadProduct = function(){
				return new Promise((resolve,reject) => {
					__webpack_require__.e/* nsure */(3, function(require){
						__webpack_require__(7);
						resolve("product");
					});
				})
			}
	});

/***/ }
]);