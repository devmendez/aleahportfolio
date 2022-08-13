//global footer element
const createFooter = () => {
let footer = document.querySelector('footer');

footer.innerHTML = `
<div class="footer">
  <div class="footer-container">    
       <a href="mailto:aleahragan06@gmail.com" target="_blank"> <i class="fas fa-envelope" id="envelope"></i></a>
       <a href="https://www.linkedin.com/in/aleah-ragan/" target="_blank"><i class="fab fa-brands fa-linkedin" id="linked"></i></a>
  </div>
</div>
`;

}

createFooter();