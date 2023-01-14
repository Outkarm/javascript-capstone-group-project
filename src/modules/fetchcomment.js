const postComment = async (id, usr, com) => {
  await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0hv6N1ThBvh5uDeVdjVD/comments',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: id,
        username: usr,
        comment: com,
      }),
    },
  );
};

const getComments = async (f) => {
  const res = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0hv6N1ThBvh5uDeVdjVD/comments/?item_id=${f}`,
  );
  const datas = await res.json();
  return datas;
};

export { getComments, postComment };
