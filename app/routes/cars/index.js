import Route from '@ember/routing/route';

export default class CarsIndexRoute extends Route {
	model(){
		return this.store.findAll('car');
	}
}
