import Ember from 'ember'
import Unauthenticated from 'ember-simple-auth/mixins/unauthenticated-route-mixin'

export default Ember.Route.extend(Unauthenticated, {
  pageTitle: 'Reset Password',
  classNames: ['login'],
  parentController: Ember.computed(function () {
    return this.controllerFor('application')
  }),
  setupController: function (controller, model) {
    this._super(controller, model)
    this.get('parentController').set('outer', true)
  }
})
