/** globals TweenLite */

export default {

  namespace: 'base',

  /**
   * ---------------------------------------------------------------------------
   * Appear transitions.
   * ---------------------------------------------------------------------------
   */

  beforeAppear() {
    console.log('Transition -- Before Appear')
  },

  appear() {
    console.log('Transition -- Appear')
  },

  afterAppear() {
    console.log('Transition -- After Appear')
  },

  /**
   * ---------------------------------------------------------------------------
   * Leave transitions.
   * ---------------------------------------------------------------------------
   */

  beforeLeave() {
    console.log('Transition -- Before Leave')
  },

  leave() {
    console.log('Transition -- Leave')
  },

  afterLeave() {
    console.log('Transition -- After Leave')
  },

  /**
   * ---------------------------------------------------------------------------
   * Enter transitions.
   * ---------------------------------------------------------------------------
   */

  beforeEnter() {
    console.log('Transition -- Before Enter')
  },

  enter() {
    console.log('Transition -- Enter')
  },

  afterEnter() {
    console.log('Transition -- After Enter')
  },
}
