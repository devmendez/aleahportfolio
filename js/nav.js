//global navigation element
const createNav = () => {
let nav = document.querySelector('nav');

nav.innerHTML = `
<div class="navbar" id="navbar">
  <div class="navbar-container">
    <div class="logo-container">
    <img src="/images/ar.png" id="logo" alt="aleah logo">
    </div>      
        <ul id="Navigation">
        <div class="nav-links">
          <li class="link"><a href="/index.html">About Me</li>
          <li class="link active"><a href="/html/projects.html">Projects</li>
          <li class="link"><a href="/html/resume.html">Resume</li>
          </div>
        </ul>      
      <div class="menu-icon" onclick="menutoggle()"><i class="fa-solid fa-bars"></i></div>
    
  </div>
</div>

`;

}

createNav ();


//setting the active class to the selected page
var header = document.querySelector(".nav-links");
var links = header.getElementsByClassName("link");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

//Hamburger menu
var Navigation = document.getElementById("Navigation");

Navigation.style.maxHeight = "0px";

function menutoggle(){
    if(Navigation.style.maxHeight == "0px")
    {
        Navigation.style.maxHeight = "200px";
    }
    else
    {
        Navigation.style.maxHeight = "0px"
    }
}

