
'use strict';
(function () {
  const TYPE_FILES = ['jpg', 'jpeg', 'png', 'gif'];
  let avatarChooser = document.querySelector("#avatar");
  let avatarPreview = document.querySelector(".ad-form-header__preview img");
  let photosChooser = document.querySelector("#images");
  let photosPreview = document.querySelector(".ad-form__photo img");


  let showPreview = (fileChooser, preview) => {
    fileChooser.addEventListener('change', () => {
      let file = fileChooser.files[0];
      let fileName = file.name.toLowerCase();

      let matches = TYPE_FILES.some((it) => fileName.endsWith(it));

      if (matches) {
        let reader = new FileReader();
        reader.addEventListener('load', () => {
          preview.src = reader.result;
        });

        reader.readAsDataURL(file);
      }
    });
  };

  showPreview(avatarChooser, avatarPreview);
  showPreview(photosChooser, photosPreview);
})();
