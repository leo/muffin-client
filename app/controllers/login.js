import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate() {
      if($('form').hasClass('shake')) {
        return
      }

      let credentials = this.getProperties( 'identification', 'password' )

      this.get('session').authenticate('authenticator:jwt', credentials).catch(reason => {
        var timeout

        clearTimeout(timeout)
        this.set('loginStatus', 'shake')

        $('input').addClass('wrong')

        timeout = setTimeout(function () {
          this.set('loginStatus', '')
        }.bind(this), 1000)

        this.set('errorMessage', reason.error)
      })
    }
  },

  checkError: function (top, which) {
    var type = which === 'password' ? 'password' : 'text'
    $('input[type="' + type + '"]').removeClass('wrong')
  }.observes('username', 'password')
})
