//global navigation element
const createNav = () => {
let nav = document.querySelector('nav');

nav.innerHTML = `
<div class="navbar-container">
<div class="navbar">
<img id="logo" src="logo" alt="personal logo">
<ul>
  <li><a href="/index.html">About Me</li>
  <li><a href="/projects.html">Projects</li>
  <li><a href="/resume.html">Resume</li>
</ul>
</div>
</div>

`;

}

createNav ();