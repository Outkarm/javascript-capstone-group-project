export default async function fetchData(id) {
  const fetching = await fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=id`)
    .then((response) => response.json());
  return fetching;
}
