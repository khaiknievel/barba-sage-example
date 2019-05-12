export default {
  init() {
    // JavaScript to be fired on all pages
    console.log('Common')
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
  destroy() {
    // JavaScript to be fired when barba triggers beforeLeave
  },
};
