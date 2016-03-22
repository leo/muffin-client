import Ember from 'ember'

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  checkMenuState: function () {
    const toggler = $('#chest .toggle')

    if (toggler.hasClass('on')) {
      $('#chest nav').slideToggle(300)
      toggler.toggleClass('on')
    }
  }.observes('currentPath'),
  actions: {
    logout() {
      this.get('session').invalidate()
    },
    openModal (target) {
      var modal = this.get('modal-' + target)
      modal.send('toggleModal')
    }
  }
})
