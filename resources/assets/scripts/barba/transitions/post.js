/* globals TweenMax */

export default {
  namespace: 'post',

  from: {
    custom({ trigger }) {
      return trigger.classList && trigger.classList.contains('post-link')
    },
  },

  /**
   * ---------------------------------------------------------------------------
   * Enter transitions.
   * ---------------------------------------------------------------------------
   */

  beforeEnter({ next }) {
    TweenMax.set($('article.post', next.container), {
      opacity: 0,
      y: 5,
    })
  },

  enter() {
    const done = this.async()

    TweenMax.to($('article.post'), 1, {
      opacity: 1,
      y: 0,
      clearProps: 'all',
      onComplete() {
        done()
      },
    })
  },
}
