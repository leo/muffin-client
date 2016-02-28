import DS from 'ember-data'

const attr = DS.attr

export default DS.Model.extend({
  title: attr('string'),
  author: attr('string'),
  dates: {
    created: attr('date'),
    updated: attr('date')
  },
  content: attr('string'),
  slug: {
    type: attr('string'),
    lowercase: true
  }
})
