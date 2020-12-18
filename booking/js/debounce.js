'use strict';
(function () {

  const DEBOUNCE_INTERVAL = 300; // MS debounce interval
  let lastTimeout;
  window.debounce = (cb) => {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(cb, DEBOUNCE_INTERVAL);

  };
})();
