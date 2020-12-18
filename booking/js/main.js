"use strict";

let addForm = document.querySelector(".ad-form");
window.fieldsets = document.querySelectorAll("fieldset");
window.selects = document.querySelectorAll("select");

window.form.fillAddressFieldDisabled();

window.form.disableForm(window.fieldsets);
window.form.disableForm(window.selects);

addForm.addEventListener("input", () => {
  window.form.validateGuestForm();
});

window.activatePage = (evt) => {
  if (evt.which === 1) {
    window.map.activateMap();
    window.form.activateForm(window.fieldsets);
    window.form.activateForm(window.selects);
    window.form.fillAddressFieldActive();
    window.load(window.successHandler, window.errorHandler);
    window.formResetButton.addEventListener("click", () => {
      window.pinCards.closePinCard();
      window.returnDefaultPage();
      window.mainPin.addEventListener("mousedown", window.activatePage);
    });
    window.mainPin.removeEventListener("mousedown", window.activatePage);
  }
};

window.mainPin.addEventListener("mousedown", window.activatePage);
