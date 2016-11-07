webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _home = __webpack_require__(8);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(1);

	riot.tag2('home', '<div class="homelinks"> <div class="homelink men" onclick="{gotomens}"> <div class="title">Shop for Men</div> <div class="pic"></div> </div> <div class="homelink women" onclick="{gotowomens}"> <div class="title">Shop for Women</div> <div class="pic"></div> </div> </div>', '', '', function(opts) {
			this.gotomens=function(){
				this.gotobrowse('men');
			}
			this.gotowomens=function(){
				this.gotobrowse('women');
			}
			this.gotobrowse=function(category){
				riot.route('/browse/'+category);
			}
	});

/***/ }

});