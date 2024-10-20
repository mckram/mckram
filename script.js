const nav = document.getElementById('nav');
const menu = document.querySelector('.menu');

nav.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    }
    else {
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "inline-block"
    }
});


  // When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").style.height = "6rem";
  } else {
    document.getElementById("logo").style.height = "7em";
  }
}


function load_page()
{ document.getElementById("loading").style.display = "none" }

window.setTimeout(load_page, 0)