import Route from '@ember/routing/route';

export default class CarsEditRoute extends Route {
	model(params){
		return this.model.findRecord('car', params.id)
	}
}
