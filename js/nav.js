//global navigation element
const createNav = () => {
let nav = document.querySelector('nav');

nav.innerHTML = `
<div class="navbar" id="navbar">
  <div class="navbar-container">
    <div class="logo-container">
    <img src="./images/ar.png" id="logo" alt="aleah logo"></a>
    </div>
    <div class="nav-links-container">
      <ul class="nav-links" id="Navigation">
        <li><a href="/index.html">About Me</li>
        <li><a href="/projects.html">Projects</li>
        <li><a href="/resume.html">Resume</li>
      </ul>
      <div class="menu-icon" onclick="menutoggle()"><i class="fa-solid fa-bars"></i></div>
    </div>
  </div>
</div>

`;

}

createNav ();


//When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

//Get the navbar
var navbar = document.getElementById("navbar");

//Get the offset position of the navbar
var sticky = navbar.offsetTop;

//Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }else {
        navbar.classList.remove("sticky");
    }
}


// //Hamburger menu
// var Navigation = document.getElementById("Navigation");

// Navigation.style.maxHeight = "0px";

// function menutoggle(){
//     if(Navigation.style.maxHeight == "0px")
//     {
//         Navigation.style.maxHeight = "200px";
//     }
//     else
//     {
//         Navigation.style.maxHeight = "0px"
//     }
// }

