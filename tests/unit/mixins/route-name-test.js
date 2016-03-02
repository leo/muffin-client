import Ember from 'ember';
import RouteNameMixin from 'muffin/mixins/route-name';
import { module, test } from 'qunit';

module('Unit | Mixin | route name');

// Replace this with your real tests.
test('it works', function(assert) {
  let RouteNameObject = Ember.Object.extend(RouteNameMixin);
  let subject = RouteNameObject.create();
  assert.ok(subject);
});
