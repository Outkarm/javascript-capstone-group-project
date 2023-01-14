describe('counting test', () => {
  test('number of meals ', () => {
    const meal = [];
    const theCount = meal.length;
    expect(theCount).toBe(0);
  });

  test('number the meal', () => {
    const meal = [{ rice: true }, { oat: false }];
    const theCount = meal.length;
    expect(theCount).toBe(2);
  });
});
