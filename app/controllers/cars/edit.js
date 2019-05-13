import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CarsEditController extends Controller { 

	@action BrandSet(brand){
		console.log(brand);
		this.brand = brand;
	}

	@action 
	async update(id, brand, color, price, img_url){
		let mybrand = brand;
		let mycolor = color;
		let myprice = price;
		let img = img_url;
		console.log({mybrand, mycolor, myprice, img});
		let post = await this.store.findRecord('car', id).then(result => {
			result.set('brand', mybrand);
			result.set('color', mycolor);
			result.set('price', myprice);
			result.set('img_url', img);
			result.save();
			alert('Datos Actualizados');
		});
	}
}
