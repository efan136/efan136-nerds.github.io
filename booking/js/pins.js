'use strict';
(function () {
  const mainPinX = '570px';
  const mainPinY = '375px';
  const MAIN_PIN_ARROW_HEIGHT = 22;
  const MAX_PINS_ON_MAP = 5;

  window.mainPin = document.querySelector(".map__pin--main");
  window.serverData = [];

  let pinTemplate = document.querySelector("#pin").content.querySelector(".map__pin");
  let mapPins = document.querySelector(".map__pins");


  window.mainPinStartY = Math.round(window.mainPin.offsetHeight + MAIN_PIN_ARROW_HEIGHT);
  window.mainPinStartX = Math.round(window.mainPin.offsetWidth / 2);

  window.mainPinResetPosition = () => {
    window.mainPin.style.left = mainPinX;
    window.mainPin.style.top = mainPinY;
  };

  let removePins = () => {
    let drawnPins = document.querySelectorAll('.map__pin');
    for (let i = drawnPins.length - 1; i >= 1; i--) {
      mapPins.removeChild(drawnPins[i]);
    }
  };

  window.pins = {
    removePins: removePins
  };

  let sliceServerData = (data) => {
    if (data.length > MAX_PINS_ON_MAP) {
      return data.slice(0, MAX_PINS_ON_MAP);
    } else {
      return data;
    }
  };

  window.drawPins = (data) => {
    let slicedData = sliceServerData(data);
    for (let i = 0; i < slicedData.length; i++) {
      let pinElement = pinTemplate.cloneNode(true);
      pinElement.querySelector("img").src = slicedData[i].author.avatar;
      pinElement.querySelector("img").alt = slicedData[i].author.title;
      pinElement.style.left = slicedData[i].location.x + "px";
      pinElement.style.top = slicedData[i].location.y + "px";
      mapPins.appendChild(pinElement);
    }
  };

  window.successHandler = (data) => {
    window.serverData = data;
    window.drawPins(data);
    window.filtredData = window.serverData;
    window.filtredPins = window.filtredData;
  };

  window.errorHandler = (errorMessage) => {
    let node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  mapPins.addEventListener('click', (evt) => {
    let drawnMapPins = document.querySelectorAll('.map__pin');
    let drawnMapPinsImg = document.querySelectorAll('.map__pin img');
    for (let i = 1; i <= drawnMapPins.length; i++) {
      if (drawnMapPins[i] === evt.target || drawnMapPinsImg[i] === evt.target) {
        window.drawCard(window.filtredPins[i - 1]);
      }
    }
  });
})();
