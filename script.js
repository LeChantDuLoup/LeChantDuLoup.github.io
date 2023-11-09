document.addEventListener("DOMContentLoaded", function () {
  getHeroPos();
  window.addEventListener("scroll", scrolled);

  function scrolled() {
    printNavbar();
    getHeroPos();
    printUnderline();
    printComp();
    printParcours();
    printProjet();
    printButton();
    printContact();
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

  function getHeroPos() {
    var hero = document.getElementById("presentation");
    var linkPres = document.getElementById("link-pres");

    var windowHeight = window.innerHeight;
    var elementTop = hero.getBoundingClientRect().top;
    var elementVisible = 150;
    var activeElement = document.getElementsByClassName("active");

    if (elementTop < windowHeight - elementVisible) {
      for (var i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.remove("active");
      }
      linkPres.classList.add("active");
    } else {
      linkPres.classList.remove("active");
    }
  }

  function printComp() {
    var compRight = document.querySelectorAll(".comp-right");
    var compLeft = document.querySelectorAll(".comp-left");
    var linkComp = document.getElementById("link-comp");

    for (var i = 0; i < compRight.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = compRight[i].getBoundingClientRect().top;
      var elementVisible = 150;
      var activeElement = document.getElementsByClassName("active");

      if (elementTop < windowHeight - elementVisible) {
        compRight[i].classList.add("appearsRight");
        compRight[i].classList.remove("invisible");
        compLeft[i].classList.add("appearsLeft");
        compLeft[i].classList.remove("invisible");
        for (var i = 0; i < activeElement.length; i++) {
          activeElement[i].classList.remove("active");
        }
        linkComp.classList.add("active");
      } else {
        linkComp.classList.remove("active");
        compRight[i].classList.remove("appearsRight");
        compRight[i].classList.add("invisible");
        compLeft[i].classList.remove("appearsLeft");
        compLeft[i].classList.add("invisible");
      }
    }
  }

  function printParcours() {
    var parcours = document.getElementById("parcours");
    var chronologie = document.getElementById("chronologie");
    var linkParcours = document.getElementById("link-parcours");
    var experiences = document.getElementsByClassName("exp");

    var windowHeight = window.innerHeight;
    var elementTop = parcours.getBoundingClientRect().top;
    var elementVisible = 150;
    var activeElement = document.getElementsByClassName("active");

    if (elementTop < windowHeight - elementVisible) {
      chronologie.classList.add("appearsChrono");
      chronologie.classList.remove("invisible");
      for (var i = 0; i < experiences.length; i++) {
        experiences[i].classList.add("appearsExp");
        experiences[i].classList.remove("invisible");
      }
      for (var i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.remove("active");
      }
      linkParcours.classList.add("active");
    } else {
      linkParcours.classList.remove("active");
      chronologie.classList.remove("appearsChrono");
      for (var i = 0; i < experiences.length; i++) {
        experiences[i].classList.remove("appearsExp");
      }
    }
  }

  function printProjet() {
    var projets = document.getElementById("projets");
    var linkProjets = document.getElementById("link-projets");
    var sectionProjet = document.getElementsByClassName("sectionProjet");

    var windowHeight = window.innerHeight;
    var elementTop = projets.getBoundingClientRect().top;
    var elementVisible = 150;
    var activeElement = document.getElementsByClassName("active");

    if (elementTop < windowHeight - elementVisible) {
      for (var i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.remove("active");
      }
      linkProjets.classList.add("active");
      for (var i = 0; i < sectionProjet.length; i++) {
        sectionProjet[i].classList.add("appearsProject");
      }
    } else {
      linkProjets.classList.remove("active");
      for (var i = 0; i < sectionProjet.length; i++) {
        sectionProjet[i].classList.remove("appearsProject");
      }
    }
  }

  function printContact() {
    var contact = document.getElementById("contact");
    var linkContact = document.getElementById("link-contact");

    var windowHeight = window.innerHeight;
    var elementTop = contact.getBoundingClientRect().top;
    var elementVisible = 150;
    var activeElement = document.getElementsByClassName("active");

    if (elementTop < windowHeight - elementVisible) {
      for (var i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.remove("active");
      }
      linkContact.classList.add("active");
    } else {
      linkContact.classList.remove("active");
    }
  }

  function printButton() {
    var backToTop = document.getElementById("btn-back-to-top");
    var comp = document.querySelectorAll(".comp-right");

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
});
