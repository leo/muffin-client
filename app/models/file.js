import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr('raw'),
  contentType: DS.attr('string'),
  uploadDate: DS.attr('date')
})
