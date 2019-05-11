import shared from '../../shared'

/**
 * ---------------------------------------------------------------------------
 * Single View as Global Hooks
 * ---------------------------------------------------------------------------
 *
 */
export default {
  namespace: 'base',

  /**
   * ---------------------------------------------------------------------------
   * Appear listeners.
   * ---------------------------------------------------------------------------
   *
   * Method fires on the first visit.
   */

  beforeAppear() {
    console.log('View -- Before Appear')

    /** Will run once. */
    shared.onInit()

    /** Load router events **/
    shared.routes.loadEvents()
  },

  afterAppear() {
    console.log('View -- After Appear')
  },

  /**
   * ---------------------------------------------------------------------------
   * Leave listeners.
   * ---------------------------------------------------------------------------
   */

  beforeLeave() {
    console.log('View -- Before Leave')

    /** Load route 'destroy' events */
    shared.routes.loadEvent('destroy')
  },

  /**
   * After leaving animation has taken place.
   */
  afterLeave() {
    console.log('View -- After Leave')
  },

  /**
   * ---------------------------------------------------------------------------
   * Enter listeners.
   * ---------------------------------------------------------------------------
   */

  beforeEnter({ next }) {
    console.log('View -- Before Enter')

    /** Handles `body` classname replacement beforeEnter */
    const html = document.createElement('html')
    html.innerHTML = next.html

    const classnames = $('body', html).attr('class')

    // Replace the classnames
    shared.$.body.attr('class', classnames)
  },

  afterEnter() {
    console.log('View -- After Enter')

    /** Load events based on the new body-classname */
    shared.routes.loadEvents()
  },
}
