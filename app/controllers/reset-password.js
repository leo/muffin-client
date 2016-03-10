import Ember from 'ember'

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  ajax: Ember.inject.service(),
  actions: {
    resetPassword () {
      if($('form').hasClass('shake')) {
        return
      }

      var timeout
      clearTimeout(timeout)

      const name = this.get('username')

      const request = this.get('ajax').request('/api/reset-password', {
        data: { name }
      })

      request.then(result => {
        if (result.error) {
          this.set('loginStatus', 'shake')
          $('input').addClass('wrong')

          timeout = setTimeout(function () {
            this.set('loginStatus', '')
          }.bind(this), 1000)

          this.set('errorMessage', result.error)

          return
        }

        console.log(result)
      })
    }
  }
})
