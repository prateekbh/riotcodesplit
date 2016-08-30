import riot from 'riot';
import tag from './tags/home.tag';
/*require.ensure('./tags/cart.tag',(e)=>{
	console.log(e);
})*/
function loadpart2(cb){
	return new Promise((resolve,reject)=>{
		require.ensure(['./tags/cart.tag','./tags/co.tag'], () => {
			resolve();
		});
	});
}
riot.route('/cart',()=>{
	loadpart2().then(()=>{
		document.body.appendChild(document.createElement('cart'));
		riot.mount('cart');
	});
})
riot.route('/co',()=>{
	loadpart2().then(()=>{
		document.body.appendChild(document.createElement('co'));
		riot.mount('co');
	});
})
riot.mount('*');
