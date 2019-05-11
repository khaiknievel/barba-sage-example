const shared = {
  /** Globals element query. */
  '$': {
    window: $(window),
    html: $('html'),
    body: $('body'),
    header: $('header.banner'),
    barba: $('div[data-barba="wrapper"]'),
    footer: $('footer.content-info'),
    preloader: $('#site-preloader'),
  },

  /** Stores the Router instance. */
  router: null,

  /** Stores the `barba` object. */
  barba: null,

  /**
   * Init listener.
   */
  onInit() {
    console.log('onInit')
  },

  /**
   * Resize listener.
   *
   * @param int Window width
   * @param int Window height
   */
  onResize(w, h) {
    console.log('onResize', w, h)
  },
}

export default shared
