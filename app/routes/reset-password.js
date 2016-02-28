import Ember from 'ember'

export default Ember.Route.extend({
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
