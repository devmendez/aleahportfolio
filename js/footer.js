//global footer element
const createFooter = () => {
let footer = document.querySelector('footer');

footer.innerHTML = `
<div class="footer">
  <div class="footer-container">     
        <p><i class="fas fa-envelope" id="envelope"></i><a href="mailto:aleahragan06@gmail.com" target="_blank">aleahragan06@gmail.com</a></p>
        <p><i class="fa-brands fa-linkedin" id="linked"></i><a href="www.linkedin.com/in/aleah-ragan" target="_blank">www.linkedin.com/in/aleah-ragan</a></p>
  </div>
</div>
`;

}

createFooter();