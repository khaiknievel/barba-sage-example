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
 * Testing for post-transition
 * ---------------------------------------------------------------------------
 */

/** Example load the gsap, e.g. Use enqueue_script instead. */
; [
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/plugins/CSSPlugin.min.js',
].forEach((url) => {
  const script = document.createElement('script')
  script.src = url
  document.body.append(script)
})

function examplePostLink() {
  $('article.post .entry-title a').addClass('post-link')
}

barba.hooks.beforeAppear(examplePostLink)
barba.hooks.beforeEnter(examplePostLink)
barba.hooks.afterEnter(examplePostLink)

/**
 * ---------------------------------------------------------------------------
 * Initialize
 * ---------------------------------------------------------------------------
 */

/** Initialize barba with config. */
barba.init(barbaConfig)

shared.$.window.
  on('load', function() {
    shared.$.html.addClass('page-load')

    shared.$.preloader.on('transitionend', function () {
      shared.$.html.addClass('page-load--transitionend')
    })
  })
;
