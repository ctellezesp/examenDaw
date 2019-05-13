import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CarsCreateController extends Controller {
	@action
	createCar(){
		let car = this.store.createRecord('car', {
			brand: this.brand,
			color: this.color,
			price: this.price,
			wheels: this.wheels,
			img_url: this.img_url
		});
		car.save();
		alert('Registro Creado');
	}
}
