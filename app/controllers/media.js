import Ember from 'ember'

export default Ember.Controller.extend({
  actions: {
    fileLoaded (file) {
      console.log(file.name, file.type, file.size)
      console.log(file.name, file.type, file.data, file.size)
    }
  }
})
