import DS from 'ember-data'
import DataAdapter from 'ember-simple-auth/mixins/data-adapter-mixin'

export default DS.JSONAPIAdapter.extend(DataAdapter, {
  namespace: 'api',
  authorizer: 'authorizer:token'
})
