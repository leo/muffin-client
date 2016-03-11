import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['media'],
  classNameBindings: ['isOpen:open'],
  attributeBindings: ['id'],
  id: 'overlay',
  store: Ember.inject.service(),

  isOpen: function () {
    return this.get('visibility')
  }.property('visibility'),

  expose: function () {
    const appController = this.get('targetObject')
    const exposedName = 'modal-' + this.get('type')

    appController.set(exposedName, this)
  }.on('init'),

  init () {
    this._super()
    this.set('model', this.get('store').findAll('file'))
  },

  actions: {
    toggleModal () {
      this.toggleProperty('visibility')
      $(document.body).toggleClass('no-scroll')
    }
  },

  inModal: true
})
