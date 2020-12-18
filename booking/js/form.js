
'use strict';
(function () {
  let main = document.querySelector('main');
  let addressField = document.querySelector("#address");
  let accommodationType = document.querySelector("#type");
  let accommodationPrice = document.querySelector("#price");

  let roomNumber = document.querySelector("#room_number");
  let guestNumber = document.querySelector("#capacity");
  window.addForm = document.querySelector('.ad-form');
  window.formResetButton = document.querySelector('.ad-form__reset');
  let enterTimeIn = document.querySelector("#timein");
  let leavingTime = document.querySelector("#timeout");

  let setLeavingTime = (timeIn, timeOut) => {
    if (timeIn.value === "12:00") {
      timeOut.value = "12:00";
    } else if (timeIn.value === "13:00") {
      timeOut.value = "13:00";
    } else if (timeIn.value === "14:00") {
      timeOut.value = "14:00";
    }
  };

  let disableForm = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
      arr[i].disabled = true;
    }
  };

  let fillAddressFieldDisabled = () => {
    addressField.value = Math.round(window.mainPin.offsetTop + (window.mainPin.offsetHeight / 2)) + "," + Math.round(window.mainPin.offsetLeft + (window.mainPin.offsetWidth / 2));
  };

  let activateForm = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
      arr[i].disabled = false;
    }
  };

  let fillAddressFieldActive = () => {
    let mainPinCurrentY = Math.round(window.mainPin.offsetTop + window.mainPinStartY);
    let mainPinCurrentX = Math.round(window.mainPin.offsetLeft + window.mainPinStartX);
    addressField.value = mainPinCurrentY + "," + mainPinCurrentX;
  };

  let validateGuestForm = () => {
    if (Number(roomNumber.value) === 1 && Number(guestNumber.value) !== 1) {
      roomNumber.setCustomValidity('1 комната только для одного гостя');
    } else if (Number(roomNumber.value) === 2 && Number(guestNumber.value) > 2) {
      roomNumber.setCustomValidity('2 комната только для одного или 2 гостей');
    } else if (Number(roomNumber.value) === 2 && Number(guestNumber.value) === 0) {
      roomNumber.setCustomValidity('2 комнаты только для одного или двух гостей');
    } else if (Number(roomNumber.value) === 3 && Number(guestNumber.value) < 1) {
      roomNumber.setCustomValidity('3 комнаты только для одного , двух или трех гостей');
    } else if (Number(roomNumber.value) === 100 && Number(guestNumber.value) !== 0) {
      roomNumber.setCustomValidity('100 комнат не для гостей');
    } else {
      roomNumber.setCustomValidity('');
    }
  };

  let setMinPrice = () => {
    if (accommodationType.value === "flat") {
      accommodationPrice.min = 1000;
      accommodationPrice.placeholder = 1000;
    } else if (accommodationType.value === "bungalow") {
      accommodationPrice.min = 0;
      accommodationPrice.placeholder = 0;
    } else if (accommodationType.value === "house") {
      accommodationPrice.min = 5000;
      accommodationPrice.placeholder = 5000;
    } else if (accommodationType.value === "palace") {
      accommodationPrice.min = 10000;
      accommodationPrice.placeholder = 10000;
    }
  };

  window.returnDefaultPage = () => {
    window.map.disableMap();
    window.form.disableForm(window.fieldsets);
    window.form.disableForm(window.selects);
    window.pins.removePins();
    window.addForm.reset();
    window.mainPinResetPosition();
    window.mainPin.addEventListener("mousedown", window.activatePage);
  };

  let errorHandler = () => {
    let errorTemplate = document.querySelector('#error').content.querySelector('.error');
    let uploadErrorPopup = errorTemplate.cloneNode(true);
    main.appendChild(uploadErrorPopup);
    let errorButton = document.querySelector('.error__button');
    let errorPopup = document.querySelector('.error');
    let closeErrorPopup = () => {
      main.removeChild(errorPopup);
    };

    errorButton.addEventListener('click', () => {
      closeErrorPopup();
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        closeErrorPopup();
      }
    });
    document.addEventListener('click', () => {
      closeErrorPopup();
    });
  };

  let successHandler = () => {
    window.returnDefaultPage();
    let successTemplate = document.querySelector('#success').content.querySelector('.success');
    let uploadSuccessElement = successTemplate.cloneNode(true);
    main.appendChild(uploadSuccessElement);
    let SuccessPopup = main.querySelector('.success');
    let closeSuccessPopup = () => {
      if (main.contains(SuccessPopup)) {
        main.removeChild(SuccessPopup);
      }
    };

    document.addEventListener('click', () => {
      closeSuccessPopup();
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        closeSuccessPopup();
      }
    });
  };

  window.addForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    window.upload(new FormData(window.addForm), successHandler, errorHandler);
  });


  window.addForm.addEventListener('change', () => {
    setMinPrice();
    setLeavingTime(enterTimeIn, leavingTime);
  });

  window.form = {
    validateGuestForm: validateGuestForm,
    fillAddressFieldDisabled: fillAddressFieldDisabled,
    disableForm: disableForm,
    activateForm: activateForm,
    fillAddressFieldActive: fillAddressFieldActive
  };
})();
