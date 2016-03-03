import Ember from 'ember'

export default Ember.Component.extend({
  tagName: '',
  rows: ['Title', 'Author', 'Date'],
  init: function () {
    this._super()
    const first = this.data.toArray().shift()

    const titles = {
      title: 'Title',
      updatedAt: 'Date',
      author: 'Author'
    }

    var rows = []

    for (var title in titles) {
      if (first.get(title)) {
        rows.push(titles[title])
      }
    }

    this.set('rows', rows)
  }
})
