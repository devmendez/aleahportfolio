//global navigation element
const createNav = () => {
let nav = document.querySelector('nav');

nav.innerHTML = `
<div class="navbar" id="navbar">
  <div class="navbar-container">
    <div class="logo-container">
    <img src="./images/ar.png" id="logo" alt="aleah logo">
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

