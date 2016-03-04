import DS from 'ember-data'

export default DS.Transform.extend({
  deserialize (serialized) {
    return Ember.isNone(serialized) ? {} : serialized
  },
  serialize (deserialized) {
    return Ember.isNone(deserialized) ? {} : deserialized
  }
})
