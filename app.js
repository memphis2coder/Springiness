const textWrapper = document.querySelector(".title");
// const nav = document.querySelector(".navbar-custom"); <!-- maybe dont need -->
const toggle = document.querySelector(".navbar-toggler");

// Wrap every letter in a span
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

// this adds the animations to jumbotron-title
anime
  .timeline({ loop: false })
  .add({
    targets: ".title .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  })
  .add({
    targets: ".title",
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// this makes the hr grow from 0 to 64vw
function lineGrow() {
  var expand = document.querySelector(".line");
  add.classList.add(".grow");
}

// this adds the overlay to main body after toggle is clicked
function overlay() {
  const element = document.querySelector(".main");
  element.classList.toggle("overlay");
}

// Aos animate of scroll
AOS.init();

// Weather widget
!(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = "https://weatherwidget.io/js/widget.min.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
})(document, "script", "weatherwidget-io-js");
