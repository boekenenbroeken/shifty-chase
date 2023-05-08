import { checkIsSolved, getValuesArray } from '../checkIsSolved';

describe('checkIsSolved', () => {
  it('returns true when initial board and current board are the same', () => {
    const initialBoard = [
      [
        { value: 1, x: 0, y: 0 },
        { value: 2, x: 0, y: 0 },
        { value: 3, x: 0, y: 0 }
      ],
      [
        { value: 4, x: 0, y: 0 },
        { value: 5, x: 0, y: 0 },
        { value: 6, x: 0, y: 0 }
      ],
      [
        { value: 7, x: 0, y: 0 },
        { value: 8, x: 0, y: 0 },
        { value: 9, x: 0, y: 0 }
      ]
    ];
    const currentBoard = [
      [
        { value: 1, x: 0, y: 0 },
        { value: 2, x: 0, y: 0 },
        { value: 3, x: 0, y: 0 }
      ],
      [
        { value: 4, x: 0, y: 0 },
        { value: 5, x: 0, y: 0 },
        { value: 6, x: 0, y: 0 }
      ],
      [
        { value: 7, x: 0, y: 0 },
        { value: 8, x: 0, y: 0 },
        { value: 9, x: 0, y: 0 }
      ]
    ];
    const result = checkIsSolved(initialBoard, currentBoard);
    expect(result).toBe(true);
  });

  it('returns false when initial board and current board are different', () => {
    const initialBoard = [
      [
        { value: 1, x: 0, y: 0 },
        { value: 2, x: 0, y: 0 },
        { value: 3, x: 0, y: 0 }
      ],
      [
        { value: 4, x: 0, y: 0 },
        { value: 5, x: 0, y: 0 },
        { value: 6, x: 0, y: 0 }
      ],
      [
        { value: 7, x: 0, y: 0 },
        { value: 8, x: 0, y: 0 },
        { value: 9, x: 0, y: 0 }
      ]
    ];
    const currentBoard = [
      [
        { value: 1, x: 0, y: 0 },
        { value: 2, x: 0, y: 0 },
        { value: 3, x: 0, y: 0 }
      ],
      [
        { value: 4, x: 0, y: 0 },
        { value: 5, x: 0, y: 0 },
        { value: 6, x: 0, y: 0 }
      ],
      [
        { value: 7, x: 0, y: 0 },
        { value: 8, x: 0, y: 0 },
        { value: 0, x: 0, y: 0 }
      ]
    ];
    const result = checkIsSolved(initialBoard, currentBoard);
    expect(result).toBe(false);
  });
});

describe('getValuesArray', () => {
  test('should return an array with all the values from a 2x2 board', () => {
    const board = [
      [
        { value: 1, x: 0, y: 0 },
        { value: 2, x: 0, y: 0 }
      ],
      [
        { value: 3, x: 0, y: 0 },
        { value: 4, x: 0, y: 0 }
      ]
    ];
    const expected = [1, 2, 3, 4];
    const result = getValuesArray(board);
    expect(result).toEqual(expected);
  });

  test('should return an array with all the values from a 3x3 board', () => {
    const board = [
      [
        { value: 1, x: 0, y: 0 },
        { value: 2, x: 0, y: 0 },
        { value: 3, x: 0, y: 0 }
      ],
      [
        { value: 4, x: 0, y: 0 },
        { value: 5, x: 0, y: 0 },
        { value: 6, x: 0, y: 0 }
      ],
      [
        { value: 7, x: 0, y: 0 },
        { value: 8, x: 0, y: 0 },
        { value: 9, x: 0, y: 0 }
      ]
    ];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = getValuesArray(board);
    expect(result).toEqual(expected);
  });
});
