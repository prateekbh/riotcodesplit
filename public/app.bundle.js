webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _riot = __webpack_require__(1);

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

/***/ }
]);