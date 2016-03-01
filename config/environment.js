module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'muffin',
    environment: environment,
    baseURL: '/admin/',
    locationType: 'auto',

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      version: process.env.npm_package_version
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'font-src': "'self' http://fonts.gstatic.com",
      'connect-src': "'self' http://localhost:5984"
    }
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true
    ENV.APP.LOG_VIEW_LOOKUPS = true
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/admin/'
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
  }

  if (environment === 'production') {

  }

  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token',
    routeIfAlreadyAuthenticated: 'index',
    routeAfterAuthentication: 'index',
    crossOriginWhitelist: ['*']
  }

  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: '/token'
  }

  return ENV
}
