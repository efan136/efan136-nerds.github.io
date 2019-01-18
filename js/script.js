var ppbtn = document.querySelector(".contacts-btn");
var popup = document.querySelector(".popup");
var close = document.querySelector(".pop-up__close");
var ppname = popup.querySelector("[name=name]");
var form = popup.querySelector("form")
var ppemail = popup.querySelector("[name=email]");
var pptextarea = popup.querySelector("[name=feedback]");
var storage = localStorage.getItem("ppname");
var storageemail = localStorage.getItem("ppemail");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("ppname");
} catch (err) {
  isStorageSupport = false;
}

ppbtn.addEventListener
  ("click", function (evt)
  {
  evt.preventDefault();
  popup.classList.add("modal-show");
  ppname.focus();
  if (storage) {
    ppname.value = storage;
    ppemail.value = storageemail;
    pptextarea.focus();
  } else {
    pptextarea.focus();
  }
});

close.addEventListener
  ("click", function (evt) 
  {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  ppname.classList.remove("invalid");
  ppemail.classList.remove("invalid");
  pptextarea.classList.remove("invalid");
});


  ppname.addEventListener
  ("click", function (evt) 
  {
  evt.preventDefault();
  ppname.classList.remove("invalid");
});

  ppemail.addEventListener
  ("click", function (evt) 
  {
  evt.preventDefault();
  ppemail.classList.remove("invalid");
});

  pptextarea.addEventListener
  ("click", function (evt) 
  {
  evt.preventDefault();
  pptextarea.classList.remove("invalid");
});


form.addEventListener("submit", function(evt) {
  if (!ppname.value || !ppemail.value || !pptextarea.value) 
  {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
  } else {
    if (isStorageSupport)  {
      localStorage.setItem("ppname", ppname.value);
      localStorage.setItem("ppemail", ppemail.value);
  }
}
});

form.addEventListener("submit", function(evt) 
  {
  if (!ppname.value) {evt.preventDefault()
  ppname.classList.add("invalid");}
});

form.addEventListener("submit", function(evt) 
  {
  if (!ppemail.value) {evt.preventDefault()
  ppemail.classList.add("invalid");}
});

form.addEventListener("submit", function(evt)
  {
  if (!pptextarea.value) {evt.preventDefault()
  pptextarea.classList.add("invalid");}
});

window.addEventListener("keydown", function(evt)
  {
  if (evt.keyCode ===27) {evt.preventDefault();
    if (popup.classList.contains("modal-show")) 
      { popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      pptextarea.classList.remove("invalid");
      ppemail.classList.remove("invalid");
      ppname.classList.remove("invalid");
    }
   }
  });


   