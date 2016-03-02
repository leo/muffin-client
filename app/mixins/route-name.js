import Ember from 'ember'

export default Ember.Mixin.create({
  setupController: function (controller, model) {
    this._super(controller, model)

    const currentPath = this.routeName.split('.')
    const routeName = currentPath.includes('index') ? currentPath[0] : currentPath[1]

    controller.set('routeName', routeName)
  }
})
