import { shuffleArray } from '../shuffleArray';

describe('shuffleArray', () => {
  test('shuffles array in place', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffledArray = shuffleArray(array);

    // Make sure the shuffled array has the same elements as the original array
    expect(new Set(shuffledArray)).toEqual(new Set(array));

    // Make sure the shuffled array is not in the same order as the original array
    expect(shuffledArray).not.toEqual(array);
  });
});
