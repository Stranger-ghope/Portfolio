// for hamburger nav

const hamburger = document.querySelector('.hamburger-menu');
const listNav = document.querySelector('.list-nav');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    listNav.classList.toggle("active");
})

document.querySelectorAll(".portlink").forEach(n => n.addEventListener ("click", () => {
        hamburger.classList.remove("active");
        listNav.classList.remove("active");
}))



// fixed navigation
// Top sticky nav
window.addEventListener("scroll", function (){
    var Header = document.querySelector("header");
    Header.classList.toggle("newheader", window.scrollY > 500);
})


// Active link current link
// Get the container element
var btnContainer = document.getElementById("allnav");

var linksNav = btnContainer.getElementsByClassName("portlink");

for (var i = 0; i < linksNav.length; i++) {
  linksNav[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += "active";
  });
}


