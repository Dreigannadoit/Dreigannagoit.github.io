const navbar = document.getElementById("navbar");


prevScrollpos = window.pageYOffset;
var i = 50;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (window.scrollY > i) {
    navbar.classList.add('sticky');

    if (prevScrollpos > currentScrollPos) {
      navbar.style.transform = "translate(0%, 0%)";
    }

    else {
      navbar.style.transform = "translate(0%, -100%)";
    }
  }

  else {
    navbar.classList.remove('sticky');
  }

  prevScrollpos = currentScrollPos;
}
