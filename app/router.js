import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cars', {path: '/'}, function() {
    this.route('edit',{path: 'edit/:id'});
    this.route('create');
  });
});

export default Router;
