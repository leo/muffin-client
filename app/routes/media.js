import Ember from 'ember'
import Authenticated from 'ember-simple-auth/mixins/authenticated-route-mixin'

const { get, set } = Ember

export default Ember.Route.extend(Authenticated, {
  pageTitle: 'Media',
  list: true,
  toggleDropzone () {
    $('body').toggleClass('dz-open')
  },
  actions: {
    uploadImage (file) {
      const record = this.store.createRecord('file', {
        filename: get(file, 'name'),
        contentType: get(file, 'type'),
        length: get(file, 'size')
      })

      $('body').removeClass('dz-open')

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
          for (var property in response.body) {
            set(record, property, response.body[property])
          }
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
