

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

const likeBtnThree = document.querySelector(".like-btn-three");
let likeIconThree = document.querySelector("#icon-three"),
  count3 = document.querySelector("#count-three");

let clicked = false;


likeBtnThree.addEventListener("click", (e) => {
  e.preventDefault;
  if (!clicked) {
    clicked = true;
    likeIconThree.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    count.textContent++;
  } else {
    clicked = false;
    likeIconThree.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    count3.textContent--;
  }


});


// var likeCount = document.querySelector('#likeCount');

// function count(){
//   likeCount.value = parseInt(likeCount.value) +1;
// }