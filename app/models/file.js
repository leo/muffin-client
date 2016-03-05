import DS from 'ember-data'

export default DS.Model.extend({
  filename: DS.attr('string'),
  contentType: DS.attr('string'),
  length: DS.attr('string'),
  uploadDate: DS.attr('date'),
  md5: DS.attr('string')
})
