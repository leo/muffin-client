import DS from 'ember-data'

export default DS.Model.extend({
  email: DS.attr('string'),
  title: Ember.computed('id', function () {
    return this.get('id')
  })
})
