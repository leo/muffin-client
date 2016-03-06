import Ember from 'ember'

export function initialize () {
  Ember.Route.reopen({
    pageTitle: '',
    list: false,
    editableTitle: false,
    setupController: function (controller, model) {
      this._super(controller, model)
      document.title = this.pageTitle + ' — Muffin'

      var app = this.controllerFor('application')

      if (app) {
        app.set('pageTitle', this.pageTitle)
        app.set('list', this.list)
        app.set('editableTitle', this.editableTitle)
      }
    }
  })
}

export default {
  name: 'setup-route',
  initialize
}
