const showMealNum = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const data = await response.json();
  const mealNum = data.meals.length;
  return mealNum;
};

export { showMealNum as default };