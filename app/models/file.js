import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr('raw'),
  type: DS.attr('string'),
  size: DS.attr('string'),
  uploadDate: DS.attr('date')
})
