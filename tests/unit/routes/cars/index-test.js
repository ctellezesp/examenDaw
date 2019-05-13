import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cars/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cars/index');
    assert.ok(route);
  });
});
