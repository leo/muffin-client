import Ember from 'ember'
import Authenticated from 'ember-simple-auth/mixins/authenticated-route-mixin'
import RouteName from '../../mixins/route-name'

export default Ember.Route.extend(Authenticated, RouteName, {
  pageTitle: 'Pages',
  list: true,
  renderTemplate () {
    this.render('list')
  },
  model () {
    return this.store.findAll('page')
  },
  actions: {
    delete (page) {
      page.deleteRecord()

      if (page.get('isDeleted')) {
        page.save()
      }
    }
  }
})
