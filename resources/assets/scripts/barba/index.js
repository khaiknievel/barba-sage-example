import view from './views/base'
import base from './transitions/base'

export default {
  debug: !console.log,
  logLevel: 4,

  // View object will handle the global-hooks.
  // Use the routes to handle page-specific base on body.classname.
  views: [ view ],
  transitions: [ base ],
}
