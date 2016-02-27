import Ember from 'ember';
import SetupRouteInitializer from 'muffin/initializers/setup-route';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | setup route', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  SetupRouteInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
