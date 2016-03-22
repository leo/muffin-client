import DS from 'ember-data'

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  updatedAt: DS.attr('date'),
  content: DS.attr('string'),
  slug: DS.attr('string'),
  lastUpdated: Ember.computed(function () {
    var times = ['20', '1h', '5min', '10sec']
    return times[Math.floor(Math.random() * times.length)]
  })
})
