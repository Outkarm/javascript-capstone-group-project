const bod = document.querySelector("body");

const commentSec = (meal) => {
  const popup = document.createElement("section");
  popup.classList.add("pop-up");
  bod.append(popup);
  const commentPopUp = document.createElement("div");
  commentPopUp.classList.add("comment-pop-up");
  popup.append(commentPopUp);
  const closebtn = document.createElement("span");
  closebtn.classList.add("closebutton");
  closebtn.innerText = "X";
  closebtn.addEventListener("click", () => {
    window.location.reload();
  });
  commentPopUp.append(closebtn);
  const comSecImg = document.createElement("img");
  comSecImg.src = meal.strMealThumb;
  comSecImg.alt = "dish";
  comSecImg.classList.add("com-sec-image");
  commentPopUp.append(comSecImg);
  const comSecMName = document.createElement("p");
  comSecMName.innerText = meal.strMeal;
  comSecMName.classList.add("com-sec-m-name");
  commentPopUp.append(comSecMName);
  const commentArea = document.createElement("div");
  commentArea.classList.add("comment-area");
  commentPopUp.append(commentArea);
  const commentInput = document.createElement("form");
  commentInput.classList.add("comment-input");
  commentArea.append(commentInput);
  const Name = document.createElement("input");
  Name.classList.add("name");
  Name.placeholder = "Your Name";
  commentInput.append(Name);
  const message = document.createElement("input");
  message.classList.add("message");
  message.placeholder = "What is on your mind";
  commentInput.append(message);
  const comments = document.createElement("div");
  comments.classList.add("comments");
  commentArea.append(comments);
};

export { commentSec as default };
