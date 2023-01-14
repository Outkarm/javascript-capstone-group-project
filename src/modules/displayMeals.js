import commentSec from './addcomment.js';
import seeLikes from './addlike.js';

let foodNum = 0;
const showMeal = async (container) => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.meals) {
        data.meals.forEach((meal) => {
          const id = meal.idMeal;
          const theMeal = document.createElement('div');
          theMeal.id = meal.idMeal;
          theMeal.classList.add('the-meal');
          container.append(theMeal);
          const theMealImg = document.createElement('img');
          theMealImg.id = meal.idMeal;
          theMealImg.src = meal.strMealThumb;
          theMealImg.alt = 'Dish';
          theMealImg.classList.add('the-meal-img');
          theMeal.append(theMealImg);
          const theMealName = document.createElement('p');
          theMealName.innerText = meal.strMeal;
          theMealName.id = meal.idMeal;
          theMealName.classList.add('the-meal-name');
          theMeal.append(theMealName);
          const likeCommentCont = document.createElement('div');
          likeCommentCont.classList.add('like-comment-cont');
          theMeal.append(likeCommentCont);
          const likeCont = document.createElement('div');
          foodNum += 1;
          likeCont.classList.add('like-cont');
          likeCommentCont.append(likeCont);
          const like = document.createElement('i');
          like.classList.add('fa-regular', 'fa-heart', 'like');
          like.id = id;
          likeCont.append(like);
          const countLike = document.createElement('span');
          seeLikes(like, countLike, theMeal);
          likeCont.append(countLike);
          const commentBtn = document.createElement('button');
          commentBtn.innerText = 'Comment';
          const numF = document.querySelector('.meal-count');
          numF.innerText = `(${foodNum})`;
          commentBtn.id = meal.idMeal;
          likeCommentCont.append(commentBtn);
          commentBtn.addEventListener('click', () => {
            if (id === commentBtn.id) {
              commentSec(meal);
            }
          });
        });
      }
    });
  return response;
};

export { showMeal as default };