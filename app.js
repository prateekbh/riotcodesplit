var riot = require('riot');
var header = require('./tags/header.tag');
var appRoutes =  require('./tags/routes.tag');

if(riot.render && module.exports){
	var render = require("riot-ssr");
	module.exports = function(_location,cb){
		render('app-router',{location: _location},function(rendered){
			cb(riot.render('header',{}) + rendered);
		});
	}
}else{
	riot.mount('header');
	riot.mount('app-router');
}


// riot.route('/',function(){    
//     riot.mount('home');
// });

// riot.route('/browse/*',function(){    
//     riot.mount('browse');
// });



// riot.route.start(true);