import Ember from 'ember'

export function initialize () {
  Ember.Route.reopen({
    pageTitle: '',
    breadcrumbs: [],
    setupController: function (controller, model) {
      this._super(controller, model)
      document.title = this.pageTitle + ' — Muffin'

      var app = this.controllerFor('application')

      if (app) {
        app.set('pageTitle', this.pageTitle)
        app.set('breadcrumbs', this.breadcrumbs)
      }
    }
  })
}

export default {
  name: 'setup-route',
  initialize
}
