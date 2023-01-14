import { getComments } from './fetchcomment.js';

const commentNum = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  )
    .then((response) => response.json())
    .then((data) => {
      data.meals.forEach(async (e) => {
        const counting = await getComments(e.idMeal);
        const num = counting.length;
        return num;
      });
    });
  return response;
};

commentNum();
