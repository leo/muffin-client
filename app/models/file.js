import DS from 'ember-data'

export default DS.Model.extend({
  filename: DS.attr('string'),
  contentType: DS.attr('image/png'),
  length: DS.attr('string'),
  chunkSize: DS.attr('string'),
  uploadDate: DS.attr('date'),
  md5: DS.attr('string')
})
