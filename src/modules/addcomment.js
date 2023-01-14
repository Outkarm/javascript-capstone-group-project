import { getComments, postComment } from './fetchcomment.js';

const bod = document.querySelector('body');
let commCount = 0;

const commentSec = async (meal) => {
  const commentList = await getComments(meal.idMeal);
  const popup = document.createElement('section');
  popup.id = meal.idMeal;
  popup.classList.add('pop-up');
  bod.append(popup);
  const commentPopUp = document.createElement('div');
  commentPopUp.classList.add('comment-pop-up');
  popup.append(commentPopUp);
  const closebtn = document.createElement('span');
  closebtn.classList.add('closebutton');
  closebtn.innerText = 'X';
  closebtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.reload();
  });
  commentPopUp.append(closebtn);
  const comSecImg = document.createElement('img');
  comSecImg.src = meal.strMealThumb;
  comSecImg.alt = 'dish';
  comSecImg.classList.add('com-sec-image');
  commentPopUp.append(comSecImg);
  const comSecMName = document.createElement('p');
  comSecMName.innerText = meal.strMeal;
  comSecMName.classList.add('com-sec-m-name');
  const cC = document.createElement('span');
  cC.classList.add('c-c');
  comSecMName.append(cC);
  commentPopUp.append(comSecMName);
  const commentArea = document.createElement('div');
  commentArea.classList.add('comment-area');
  commentPopUp.append(commentArea);
  const commentInput = document.createElement('form');
  commentInput.classList.add('comment-input');
  commentArea.append(commentInput);
  const Name = document.createElement('input');
  Name.classList.add('name');
  Name.placeholder = 'Your Name';
  commentInput.append(Name);
  const message = document.createElement('input');
  message.classList.add('message');
  message.placeholder = 'What is on your mind';
  commentInput.append(message);
  const submit = document.createElement('button');

  submit.innerText = 'Submit';
  submit.classList.add('submit');

  commentPopUp.append(submit);
  const comments = document.createElement('div');
  comments.classList.add('comments');
  commentArea.append(comments);
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    postComment(popup.id, Name.value, message.value);
    const commentTxt = document.createElement('p');
    commentTxt.innerText = `Just now    ${Name.value} : ${message.value}`;
    comments.append(commentTxt);
    message.value = '';
    Name.value = '';
  });
  commentList.forEach((e) => {
    const commentTxt = document.createElement('p');
    commentTxt.innerText = `${e.creation_date}    ${e.username} : ${e.comment}`;
    comments.append(commentTxt);
    commCount += 1;
    cC.innerText = `   (${commCount})`;
  });
};

export { commentSec as default };
