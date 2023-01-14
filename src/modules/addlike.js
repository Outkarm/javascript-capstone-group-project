import { getLikes, addLike } from './fetchlike.js';

let liked = false;
const seeLikes = async (btn, txt, food) => {
  const theLikes = await getLikes();
  theLikes.forEach((e) => {
    if (btn.id === e.item_id) {
      txt.innerText = e.likes;
    }
    btn.addEventListener('click', () => {
      if (food.id === e.item_id) {
        if (liked === false) {
          e.likes += 1;
          txt.innerText = e.likes;
          liked = true;
        } else {
          e.likes -= 1;
          txt.innerText = e.likes;
          liked = false;
        }
        e.likes = Math.floor(txt.innerText);
        addLike(e.item_id, e.likes);
      }
    });
  });
};

export { seeLikes as default };
