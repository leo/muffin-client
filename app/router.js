import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('reset-password');
  this.route('pages', function() {
    this.route('edit', { path: '/:page_id' } );
  });
  this.route('users');
  this.route('media');
});

export default Router;
