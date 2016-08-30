import riot from 'riot';
import tag from './tags/home.tag';
/*require.ensure('./tags/cart.tag',(e)=>{
	console.log(e);
})*/
function loadpart2(module){
	return new Promise((resolve,reject)=>{
		require.ensure(['./tags/cart.tag','./tags/co.tag'], (require) => {
			switch(module){
				case 'CART':
					require('./tags/cart.tag');
				break;
				case 'CO':
					require('./tags/co.tag');
				break;
			}
			resolve();
		});
	});
}
riot.route('/cart',()=>{
	loadpart2('CART').then(()=>{
		document.body.appendChild(document.createElement('cart'));
		riot.mount('cart');
	});
})
riot.route('/co',()=>{
	loadpart2('CO').then(()=>{
		document.body.appendChild(document.createElement('co'));
		riot.mount('co');
	});
})
riot.mount('*');
