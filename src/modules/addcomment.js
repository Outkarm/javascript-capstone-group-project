const popup = document.querySelector(".pop-up");

const commentSec = (meal) => {
  const commentPopUp = document.createElement("div");
  popup.append(commentPopUp);
  const closebtn = document.createElement("span");
  closebtn.classList.add("closebutton");
  closebtn.innerText = "&times;";
  const comSecImg = document.createElement("img");
  comSecImg.src = meal.strMealThumb;
  comSecImg.alt = "dish";
  commentPopUp.append(comSecImg);
  const comSecMName = document.createElement("p");
  comSecMName.innerText = meal.strMeal;
  commentPopUp.append(comSecMName);
  const commentArea = document.createElement("div");
  commentPopUp.append(commentArea);
  const commentInput = document.createElement("form");
  commentArea.append(commentInput);
  const Name = document.createElement("input");
  commentInput.append(Name);
  const message = document.createElement("input");
  commentInput.append(message);
  const comments = document.createElement("div");
  commentArea.append(comments);
};

export { commentSec as default };
