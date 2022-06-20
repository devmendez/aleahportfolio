//global footer element
const createFooter = () => {
let footer = document.querySelector('footer');

footer.innerHTML = `
<div class="footer">
  <div class="footer-container">
      <div class="footer-content-first">
        <p><i class="fas fa-envelope"></i><a href="mailto:aleahragan06@gmail.com" target="_blank">aleahragan06@gmail.com</a></p>
        <p><i class="fa-brands fa-linkedin"></i><a href="" target="_blank">aleah's linked in here</a></p>
      </div>
      <div class="footer-content-second">
      <p>&#169; aleah ragan , 2022</p>
      </div>
  </div>
</div>
`;

}

createFooter();