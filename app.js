import riot from 'riot';
import header from './tags/header.tag';
import appRoutes from './tags/routes.tag';

riot.mount('header');
riot.mount('app-router');

// riot.route('/',function(){    
//     riot.mount('home');
// });

// riot.route('/browse/*',function(){    
//     riot.mount('browse');
// });



// riot.route.start(true);