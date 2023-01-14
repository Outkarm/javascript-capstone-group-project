import fetchMock from 'fetch-mock';
import showMealNum from './itemCounter.js';

describe('showMealNum', () => {
  beforeEach(() => {
    fetchMock.getOnce('https://www.themealdb.com/api/json/v1/1/search.php?s=', {
      meals: [
        { idMeal: '1', strMeal: 'Meal 1' },
        { idMeal: '2', strMeal: 'Meal 2' },
      ],
    });
  });

  afterEach(() => {
    fetchMock.reset();
  });

  it('should fetch the number of meals', async () => {
    const mealNum = await showMealNum();
    expect(mealNum).toEqual(2);
  });
});