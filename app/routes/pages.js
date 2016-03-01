import Ember from 'ember'
import Authenticated from 'ember-simple-auth/mixins/authenticated-route-mixin'

export default Ember.Route.extend(Authenticated, {
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
  setupController (controller, model) {
    this._super(controller, model)
    this.get('parentController').set('outer', false)
  }
})
