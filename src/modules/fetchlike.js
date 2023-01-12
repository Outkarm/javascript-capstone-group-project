const fetchLike = (mealId) => {
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${mealId}/likes`)
    .then((response) => response.json())
    .then((data) => {
      // update the like count on the page
      const likeCount = document.querySelector(`#meal-${mealId} .like-count`);
      likeCount.innerText = data.likes;
    })
    .catch((error) => {
      console.error(`Error fetching likes: ${error}`);
    });
};

export default fetchLike;
