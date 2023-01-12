import "./style.css";
import showMeal from "./modules/displayMeals.js";
import addcomment from "./modules/addcomment.js";
import fetchcomment from "./modules/fetchcomment.js";
import commentCounterFunction from "./modules/commentCounter.js";
import addlike from "./modules/addlike.js";
import fetchlike from "./modules/fetchlike.js";
import itemCounterFunction from "./modules/itemCounter.js";
import keyfunction from "./modules/api_key.js";

// CONTAINER FOR MEALS

const mealsContainer = document.querySelector(".meal-info");
showMeal(mealsContainer);

// const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 99];
// let nooflikes = 0;

// id.forEach((meal) => {
//   fetchData(meal).then(async (res) => {
//     const likesdisplay = await fetchlike(key);
//     nooflikes = 0;
//     likesdisplay.forEach((element) => {
//       if (parseInt(element.item_id, 10) === meal) {
//         nooflikes = element.likes;
//       }
//     });
//     meals.innerHTML += `<div id="${meal}" class="meal-img">
//     <img src="${res.image.medium}">
//     <section class="meal-desk">
//       <p class="meal-title">${res.name}</p>
//       <div class="likeContainer">
//       <button id="${meal}" class="like-button"><i class="fa-regular fa-heart like"></i></button>
//         <p class="likesnumber">No. of likes are: ${nooflikes}</p>
//       </div>
//     </section>
//     <button class="comment-button">Comment</button></div>`;
//   });
// });
