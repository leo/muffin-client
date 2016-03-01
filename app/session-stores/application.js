import AdaptiveStore from 'ember-simple-auth/session-stores/adaptive'

export default AdaptiveStore.extend({
  localStorageKey: 'muffin:session'
})
