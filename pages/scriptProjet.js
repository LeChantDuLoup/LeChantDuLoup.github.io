document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", scrolled);
  loadGallery(null);

  function scrolled() {
    printNavbar();
    printUnderline();
    printButton();
  }

  function printNavbar() {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  function printUnderline() {
    var underlineAnime = document.querySelectorAll(".will-anime");

    for (var i = 0; i < underlineAnime.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = underlineAnime[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        underlineAnime[i].classList.add("h2-animed");
      } else {
        underlineAnime[i].classList.remove("h2-animed");
      }
    }
  }

  function printButton() {
    var backToTop = document.getElementById("btn-back-to-top");
    var comp = document.querySelectorAll(".compProjet");

    for (var i = 0; i < comp.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = comp[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        backToTop.classList.remove("invisible");
      } else {
        backToTop.classList.add("invisible");
      }
    }

    backToTop.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }

  function loadGallery(img) {
    if (!img) {
      img = document.getElementById("img1");
    } else {
      var imgId = img.id;
      img = document.getElementById(imgId);
    }
    var bigImg = document.getElementById("img-left");
    var imgStyle = window.getComputedStyle(img, null);
    var bgImg = imgStyle.getPropertyValue("background-image");
    bigImg.style.backgroundImage = bgImg;
    var activeImgClass = document.querySelectorAll(".activeImg");

    for (var i = 0; i < activeImgClass.length; i++) {
      activeImgClass[i].classList.remove("activeImg");
    }

    img.classList.add("activeImg");
  }

  var imgs = document.querySelectorAll(".imgGallery");
  for (let img of imgs) {
    img.addEventListener("click", function () {
      console.log(img);
      loadGallery(img);
    });
  }
});
