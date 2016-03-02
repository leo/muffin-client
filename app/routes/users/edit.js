import Ember from 'ember'

export default Ember.Route.extend({
  pageTitle: 'Test',
  renderTemplate () {
    this.render('edit')
  }
})
