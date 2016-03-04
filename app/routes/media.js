import Ember from 'ember'
import Authenticated from 'ember-simple-auth/mixins/authenticated-route-mixin'

const { get, set } = Ember

export default Ember.Route.extend(Authenticated, {
  pageTitle: 'Media',
  actions: {
    uploadImage (file) {
      const properties = ['type', 'size', 'name']
      var details = {}

      for (var property of properties) {
        details[property] = get(file, property)
      }

      const record = this.store.createRecord('file', details)

      file.read().then(url => {
        if (get(record, 'url') == null) {
          set(record, 'url', url)
        }
      })

      file.upload('/api/upload').then(response => {
        set(record, 'url', response.headers.Location)
        return record.save()
      }, () => {
        record.rollback()
      })
    }
  }
})
