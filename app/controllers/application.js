import Ember from 'ember'

export default Ember.Controller.extend({
  session: Ember.inject.service(),
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
