import Ember from 'ember'
import Authenticated from 'ember-simple-auth/mixins/authenticated-route-mixin'

const { get, set } = Ember

export default Ember.Route.extend(Authenticated, {
  pageTitle: 'Media',
  toggleDropzone (event) {
    $('body').toggleClass('dz-open')
  },
  actions: {
    uploadImage (file) {
      const properties = ['type', 'size', 'name']
      var details = {}

      $('body').removeClass('dz-open')

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
    },
    willTransition () {
      $('body').unbind('dragenter dragleave', this.toggleDropzone)
    },
    didTransition () {
      $('body').on('dragenter dragleave', this.toggleDropzone)
    }
  },
  model () {
    return this.store.findAll('file')
  }
})
