
'use strict';
(function () {
  let mapFilter = document.querySelector('.map__filters');
  let housingType = document.querySelector('#housing-type');
  let housingPrice = document.querySelector('#housing-price');
  let housingRooms = document.querySelector('#housing-rooms');
  let housingGuests = document.querySelector('#housing-guests');
  let husingFeatures = document.querySelectorAll('#housing-features input');

  let updatePins = () => {
    window.filtredPins = window.serverData;
    let filtredByType = (data) => {
      if (housingType.value !== 'any') {
        let filterType = data.filter((newPin) => newPin.offer.type === housingType.value);
        window.filtredPins = filterType;
      }
    };

    let filtredByPrice = (data) => {
      if (housingPrice.value !== 'any') {
        let priceFilter = data.filter((newPin) => {
          let acommodationPrice;
          if (newPin.offer.price < 10000) {
            acommodationPrice = "low";
          } else if (newPin.offer.price > 10000 && newPin.offer.price < 50000) {
            acommodationPrice = "middle";
          } else if (newPin.offer.price >= 50000) {
            acommodationPrice = "high";
          }
          return acommodationPrice === housingPrice.value;
        });
        window.filtredPins = priceFilter;
      }
    };
    let filtredByRooms = (data) => {
      if (housingRooms.value !== 'any') {
        let roomFilter = data.filter((newPin) => newPin.offer.rooms + '' === housingRooms.value);
        window.filtredPins = roomFilter;
      }
    };

    let filtredByGuests = (data) => {
      if (housingGuests.value !== 'any') {
        let guestFilter = data.filter((newPin) => newPin.offer.guests + '' === housingGuests.value);
        window.filtredPins = guestFilter;
      }
    };

    let filtredByFeatures = () => {
      for (let i = 0; i < husingFeatures.length; i++) {
        if (husingFeatures[i].checked) {
          let featuresFilter = window.filtredPins.filter((newPin) => newPin.offer.features[i] === husingFeatures[i].value);
          window.filtredPins = featuresFilter;
        }
      }
    };

    filtredByType(window.filtredPins);
    filtredByPrice(window.filtredPins);
    filtredByRooms(window.filtredPins);
    filtredByGuests(window.filtredPins);
    filtredByFeatures(window.filtredPins);
    window.drawPins(window.filtredPins);
  };

  let updateMap = () => {
    let pinCard = document.querySelector('.popup');
    if (window.mainMap.contains(pinCard)) {
      window.pinCards.closePinCard();
    }
    window.pins.removePins();
    updatePins();
  };

  mapFilter.addEventListener('change', () => {
    window.debounce(updateMap);
  });
})();
