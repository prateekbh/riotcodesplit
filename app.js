import header from './tags/header.tag';
import riot from 'riot';

riot.route('/',function(){    
    riot.mount('home');
});

riot.route('/browse/*',function(){    
    riot.mount('browse');
});

riot.mount('header');

riot.route.start(true);