'use strict';
(function () {
  let isEnterEvent = (evt, action) => {
    if (evt.key === 'Enter') {
      action();
    }
  };

  let isEscEvent = (evt, action) => {
    if (evt.key === 'Escape') {
      action();
    }
  };

  let sliceArr = (array, maxValue) => {
    if (array.length > maxValue) {
      return array.slice(0, maxValue);
    } else {
      return array;
    }
  };

  window.util = {
    isEnterEvent: isEnterEvent,
    isEscEvent: isEscEvent,
    sliceArr: sliceArr
  };
})();
