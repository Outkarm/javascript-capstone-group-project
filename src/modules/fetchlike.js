const getLikes = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IXJFUIasaU3NTiCbJHbl/likes/'
  );
  const data = await response.json();
  return data;
};

const addLike = async (id, k) => {
  const result = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IXJFUIasaU3NTiCbJHbl/likes/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: id,
        likes: k,
      }),
    },
  );
  const response = await result.text();
  return response;
};

export { getLikes, addLike };