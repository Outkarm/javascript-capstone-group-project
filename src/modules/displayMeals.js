import commentSec from './addcomment.js';

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
          likeCont.classList.add('like-cont');
          likeCommentCont.append(likeCont);
          const like = document.createElement('i');
          like.classList.add('fa-regular', 'fa-heart', 'like');
          likeCont.append(like);
          const countLike = document.createElement('span');
          countLike.innerText = 3;
          likeCont.append(countLike);
          const commentBtn = document.createElement('button');
          commentBtn.innerText = 'Comment';
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
