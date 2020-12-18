
'use strict';
(function () {
  let pinBorderTop = 130;
  let pinBorderBottom = 630;
  let leftMapBorder = 0 - window.mainPinStartX;
  let rightMapBorder = window.mainMap.offsetWidth - window.mainPinStartX;

  window.mainPin.addEventListener('keydown', (evt) => {
    window.util.isEnterEvent(evt, () => {
      window.load(window.successHandler, window.errorHandler);
      window.map.activateMap();
    });
  });

  window.mainPin.addEventListener('mousedown', (evt) => {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = (moveEvt) => {

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.mainPin.style.top = (window.mainPin.offsetTop - shift.y) + 'px';
      window.mainPin.style.left = (window.mainPin.offsetLeft - shift.x) + 'px';

      if (window.mainPin.offsetLeft < leftMapBorder) {
        window.mainPin.style.left = (window.mainPin.offsetLeft + shift.x) + 'px';

      } else if (window.mainPin.offsetLeft >= rightMapBorder) {
        window.mainPin.style.left = (window.mainMap.offsetWidth - (window.mainPin.offsetWidth / 2) - shift.x) + 'px';
      }

      if (window.mainPin.offsetTop <= pinBorderTop) {
        window.mainPin.style.top = window.mainPin.offsetTop + shift.y + 'px';
      } else if (window.mainPin.offsetTop > pinBorderBottom) {
        window.mainPin.style.top = window.mainPin.offsetTop + shift.y + 'px';
      }

      window.form.fillAddressFieldActive();

    };

    var onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
