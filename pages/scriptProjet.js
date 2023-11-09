document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", scrolled);

  function scrolled() {
    printNavbar();
    printUnderline();
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
  
});
