import Ember from 'ember'
import Authenticated from 'ember-simple-auth/mixins/authenticated-route-mixin'

const { get, set } = Ember

export default Ember.Route.extend(Authenticated, {
  pageTitle: 'Media',
  toggleDropzone () {
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

      var settings = {
        url: '/api/upload',
        headers: {}
      }

      file.read().then(url => {
        if (get(record, 'url') == null) {
          set(record, 'url', url)
        }
      })

      this.get('session').authorize('authorizer:token', (headerName, headerValue) => {
        settings.headers[headerName] = headerValue

        file.upload(settings).then(response => {
          set(record, 'url', response.headers.Location)
          return record.save()
        }, () => {
          record.rollback()
        })
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
