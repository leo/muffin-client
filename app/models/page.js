import DS from 'ember-data'

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  dates: {
    created: DS.attr('date'),
    updated: DS.attr('date')
  },
  content: DS.attr('string'),
  slug: DS.attr('string')
})
