import Ember from 'ember'
const { getOwner } = Ember

export function initialize () {
  Ember.Route.reopen({
    pageTitle: '',
    list: false,
    editableTitle: false,
    outer: false,
    activate () {
      var cssClasses = this.toCSS()

      if (cssClasses !== 'application') {
        Ember.$('body').addClass(cssClasses)
      }
    },
    deactivate () {
      Ember.$('body').removeClass(this.toCSS())
    },
    toCSS () {
      var classes = this.routeName.split('.')

      if (this.classNames) {
        for (var name of this.classNames) {
          classes.push(name)
        }
      }

      return classes.join(' ')
    },
    afterModel (record, transition) {
      if (!record) {
        return
      } else {
        var title = record.get('title')
      }

      if (!title) {
        return
      }

      this.pageTitle = this.pageTitle || title
      this.editableTitle = true
    },
    setupController (controller, model) {
      this._super(...arguments)

      var middle = false

      const app = this.controllerFor('application')
      const nameParts = this.routeName.split('.')

      // Check if route has a parent
      if (nameParts.length > 1 && nameParts[1] !== 'index') {
        const parent = getOwner(this).lookup('route:' + nameParts[0] + '.index')
        middle = ' ‹ ' + parent.get('pageTitle')
      }

      document.title = this.pageTitle + (middle || '') + ' — muffin'

      const properties = [
        'pageTitle',
        'list',
        'editableTitle',
        'outer'
      ]

      if (!app) {
        return
      }

      for (var property of properties) {
        app.set(property, this[property])
      }
    }
  })
}

export default {
  name: 'setup-route',
  initialize
}
