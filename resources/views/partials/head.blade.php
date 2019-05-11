<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <style>
    @keyframes a-spinner {
      from { -webkit-transform: rotate(0deg);transform: rotate(0deg); }
      to { -webkit-transform: rotate(360deg);transform: rotate(360deg); }
    }

    .preloader {
      cursor: progress;
      opacity: 1;
      -webkit-transition: opacity 1s;transition: opacity 1s;
      will-change: opacity;
      position: fixed; top: 0; right: 0; bottom: 0; left: 0;
      z-index: 10000;
    }

    .preloader > div {
      position: absolute; top: 0; right: 0; bottom: 0; left: 0;
    }

    .preloader__bg {
      background-color: #fff;
    }

    /** Define the spinner style early used for preloaders */
    .preloader__spinner {
      height: 1.5em;
      width: 1.5em;
      margin: auto;
      border: 2px solid #000;
      border-top-color: #fff;
      border-radius: 100%;
      -webkit-animation: a-spinner 1s infinite linear;
              animation: a-spinner 1s infinite linear;
    }

    html.page-load .preloader { opacity: 0; }
    html.page-load--transitionend .preloader { display: none; }

  </style>
  @php wp_head() @endphp
</head>
