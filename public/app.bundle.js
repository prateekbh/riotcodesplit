webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _header = __webpack_require__(1);

	var _header2 = _interopRequireDefault(_header);

	var _riot = __webpack_require__(2);

	var _riot2 = _interopRequireDefault(_riot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_riot2.default.route('/', function () {
	    _riot2.default.mount('home');
	});

	_riot2.default.route('/browse/*', function () {
	    _riot2.default.mount('browse');
	});

	_riot2.default.mount('header');

	_riot2.default.route.start(true);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(2);

	riot.tag2('header', '<div class="nav"> <svg fill="#000000" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none"></path> <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path> </svg> </div> <div class="name"> <h1><a href="#">Riot Shop</a></h1> </div>', '', '', function(opts) {
	});

/***/ }
]);