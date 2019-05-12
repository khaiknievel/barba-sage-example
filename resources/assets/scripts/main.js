// import external dependencies
import 'jquery';

// Import everything from autoload
import './autoload/**/*'

// Import shared object.
import shared from './shared'

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import aboutUs from './routes/about';

// import barba
import barba from '@barba/core'
import barbaConfig from './barba'

/** Populate Router instance with DOM routes */
shared.routes = new Router({
  common,
  home,
  aboutUs,
})

/** Stores as part of a shared component. */
shared.barba = barba

/**
 * ---------------------------------------------------------------------------
 * Initialize
 * ---------------------------------------------------------------------------
 */

jQuery(document)
  .on('ready', function() {
    /** Initialize barba with config. */
    barba.init(barbaConfig)
  })
;
