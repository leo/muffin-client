import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['media'],
  classNameBindings: ['isOpen:open'],
  attributeBindings: ['id'],
  id: 'overlay',

  isOpen () {
    return this.get('visibility')
  }.property( 'visibility' ),

  expose () {
    const appController = this.get('targetObject')
    const exposedName = 'modal-' + this.get('type')

    appController.set(exposedName, this)
  }.on('init'),

  init () {
    const store = this.get('targetObject.store')

    this._super()
    this.set('model', store.findAll('file'))
  },

  actions: {
    toggleModal () {
      this.toggleProperty('visibility')
      $(document.body).toggleClass('no-scroll')
    }
  },

  inModal: true
})
