//global navigation element
const createNav = () => {
let nav = document.querySelector('nav');

nav.innerHTML = `
<nav class="navbar" id="navbar">  
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
      <a href="javascript:void(0);" class="menu-icon"
      onclick="menutoggle()"> <i class="fa-solid fa-bars"></i>
      </a>
  </nav>

`;
}

createNav ();


//setting the active class to the selected page
// const header = document.getElementsByClassName('nav-links');
// const links = document.querySelectorAll('.link');

// for (var i = 0; i < links.length; i++) {
//   links[i].addEventListener("click", function() {
    
//   var current = document.classList.add("active");
//     current[0].className = current[0].className.replace("active", " ");
//   this.className += "active";
//   });
// }

// const toggle = document.getElementById('toggle')
// const nav = document.getElementById('nav')

// toggle.addEventListener('click', () => nav.classList.toggle('active')
// )





{/* <div class="menu-icon" ><i class="fa-solid fa-bars"></i></div>  */}

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

