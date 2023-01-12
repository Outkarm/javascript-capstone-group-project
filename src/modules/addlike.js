const addlike = (mealId) => {
  // get the current like count
  const likeCount = document.querySelector(`#meal-${mealId} .like-count`);
  let count = parseInt(likeCount.innerText, 10);

  // increment the like count by 1
  count += 1;
  likeCount.innerText = count;

  // send a POST request to the server to update the number of likes
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${mealId}/likes`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ likes: count }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(`Error adding like: ${error}`);
    });
};

export default addlike;
