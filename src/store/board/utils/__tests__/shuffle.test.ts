import { shuffleArray, shuffleBoard } from '../shuffle';

describe('shuffleArray', () => {
  it('shuffles array in place', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffledArray = shuffleArray(array);

    // Make sure the shuffled array has the same elements as the original array
    expect(new Set(shuffledArray)).toEqual(new Set(array));

    // Make sure the shuffled array is not in the same order as the original array
    expect(shuffledArray).not.toEqual(array);
  });
});

describe('shuffleBoard', () => {
  it('shuffles board in place', () => {
    const board = [
      [
        { value: 1, x: 0, y: 0 },
        { value: 2, x: 1, y: 0 },
        { value: 3, x: 2, y: 0 }
      ],
      [
        { value: 4, x: 0, y: 1 },
        { value: 5, x: 1, y: 1 },
        { value: 6, x: 2, y: 1 }
      ],
      [
        { value: 7, x: 0, y: 2 },
        { value: 8, x: 1, y: 2 },
        { value: 0, x: 2, y: 2 }
      ]
    ];
    const shuffledBoard = shuffleBoard(board);

    // Make sure the shuffled board has the same elements as the original board
    expect(new Set(shuffledBoard.flat())).toEqual(new Set(board.flat()));

    // Make sure the shuffled board is not in the same order as the original board
    expect(shuffledBoard).not.toEqual(board);
  });
});
