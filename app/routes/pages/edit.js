import Ember from 'ember'
import Authenticated from 'ember-simple-auth/mixins/authenticated-route-mixin'

export default Ember.Route.extend(Authenticated, {
  pageTitle: Ember.computed(function () {
    return 'Test'
  }),
  renderTemplate () {
    this.render('edit')
  },
  model (params) {
    return this.store.findRecord('page', params.page_id);
  }
})
