//global navigation element
const createNav = () => {
let nav = document.querySelector('nav');

nav.innerHTML = `
<div class="navbar">
  <div class="navbar-container">
    <div class="logo-container">
      <img id="logo" src="logo" alt="personal logo">
    </div>
    <div class="nav-links-container">
      <ul class="nav-links">
        <li><a href="/index.html">About Me</li>
        <li><a href="/projects.html">Projects</li>
        <li><a href="/resume.html">Resume</li>
      </ul>
    </div>
  </div>
</div>

`;

}

createNav ();