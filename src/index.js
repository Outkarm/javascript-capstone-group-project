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