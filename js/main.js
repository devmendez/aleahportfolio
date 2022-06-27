//Bootstrap modal copied message
// function myCopyFunction() {
//   var copyText = document.getElementById('myInput');
//   copyText.select();
//   copyText.setSelectionRange(0, 99999)
//   document.execCommand("copy")
//   $(".message").text("link copied");
//   };


  

const likeBtn = document.querySelector(".like-btn");
let likeIcon = document.querySelector("#icon"),
  count = document.querySelector("#count");

let clicked = false;


likeBtn.addEventListener("click", (e) => {
  e.preventDefault;
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    count.textContent++;
  } else {
    clicked = false;
    likeIcon.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    count.textContent--;
  }


});