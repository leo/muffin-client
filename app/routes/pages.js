import Ember from 'ember'
import AuthenticatedRoute from 'ember-simple-auth/mixins/authenticated-route-mixin'

export default Ember.Route.extend(AuthenticatedRoute, {
  pageTitle: 'Pages',
  renderTemplate () {
    this.render('list')
  },
  model () {
    return this.store.findAll('page')
  },
  parentController: Ember.computed(function () {
    return this.controllerFor('application')
  }),
  setupController: function (controller, model) {
    this._super(controller, model)
    this.get('parentController').set('outer', false)
  }
})
