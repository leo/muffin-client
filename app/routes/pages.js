import Ember from 'ember'

export default Ember.Route.extend({
  pageTitle: 'Pages',
  renderTemplate: function () {
    this.render('list')
  },
  model () {
    return this.store.findAll('page')
  }
})
