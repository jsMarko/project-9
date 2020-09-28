// Stuff coming soon

const btnfilters = document.querySelector("#filter-btns-container");
const btnShowAll = document.querySelector("#show-all-btn");
const fetchApiBtn = document.querySelector("#fetch-api-btn");
const javascriptBtn = document.querySelector("#javascript-btn");
const sassBtn = document.querySelector("#sass-btn");
const cssBtn = document.querySelector("#css-btn");

const projectCards = document.querySelectorAll(".project-card");

btnfilters.addEventListener("click", (e) => {
   const btn = e.target;

   if (btn === fetchApiBtn) {
      for (let i = 0; i < projectCards.length; i++) {
         if (projectCards[i].classList.contains("fetch-api")) {
            projectCards[i].style.display = "";
         } else {
            projectCards[i].style.display = "none";
         }
      }
   } else if (btn === javascriptBtn) {
      for (let i = 0; i < projectCards.length; i++) {
         if (projectCards[i].classList.contains("javascript")) {
            projectCards[i].style.display = "";
         } else {
            projectCards[i].style.display = "none";
         }
      }
   } else if (btn === sassBtn) {
      for (let i = 0; i < projectCards.length; i++) {
         if (projectCards[i].classList.contains("sass")) {
            projectCards[i].style.display = "";
         } else {
            projectCards[i].style.display = "none";
         }
      }
   } else if (btn === cssBtn) {
      for (let i = 0; i < projectCards.length; i++) {
         if (projectCards[i].classList.contains("css-html")) {
            projectCards[i].style.display = "";
         } else {
            projectCards[i].style.display = "none";
         }
      }
   } else if (btn === btnShowAll) {
      for (let i = 0; i < projectCards.length; i++) {
         projectCards[i].style.display = "";
      }
   }
});
