import Ember from 'ember'
import Authenticated from 'ember-simple-auth/mixins/authenticated-route-mixin'

export default Ember.Route.extend(Authenticated, {
  pageTitle: 'Dashboard',
  parentController: Ember.computed(function () {
    return this.controllerFor('application')
  }),
  setupController: function (controller, model) {
    this._super(controller, model)
    this.get('parentController').set('outer', false)
  }
})
