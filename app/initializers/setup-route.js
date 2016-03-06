import Ember from 'ember'
const { getOwner } = Ember

export function initialize () {
  Ember.Route.reopen({
    pageTitle: '',
    list: false,
    editableTitle: false,
    setupController (controller, model) {
      this._super(controller, model)

      var middle = false

      const app = this.controllerFor('application')
      const nameParts = this.routeName.split('.')

      // Check if route has a parent
      if (nameParts.length > 1 && nameParts[1] !== 'index') {
        const parent = getOwner(this).lookup('route:' + nameParts[0] + '.index')
        middle = ' ‹ ' + parent.get('pageTitle')
      }

      document.title = this.pageTitle + (middle || '') + ' — Muffin'

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
