import Ember from 'ember'

export default Ember.Route.extend({
  pageTitle: 'Test',
  editableTitle: true,
  renderTemplate () {
    this.render('edit')
  }
})
