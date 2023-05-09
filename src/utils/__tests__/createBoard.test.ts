import { createBoard } from '../createBoard';

describe('createBoard', () => {
  it('creates a 2x2 board with correct values and positions', () => {
    const board = createBoard(2);
    expect(board).toEqual([
      [
        { value: 1, x: 0, y: 0 },
        { value: 2, x: 1, y: 0 }
      ],
      [
        { value: 3, x: 0, y: 1 },
        { value: 0, x: 1, y: 1 }
      ]
    ]);
  });

  it('creates a 3x3 board with correct values and positions', () => {
    const board = createBoard(3);
    expect(board).toEqual([
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
    ]);
  });

  it('creates a 4x4 board with correct values and positions', () => {
    const board = createBoard(4);
    expect(board).toEqual([
      [
        { value: 1, x: 0, y: 0 },
        { value: 2, x: 1, y: 0 },
        { value: 3, x: 2, y: 0 },
        { value: 4, x: 3, y: 0 }
      ],
      [
        { value: 5, x: 0, y: 1 },
        { value: 6, x: 1, y: 1 },
        { value: 7, x: 2, y: 1 },
        { value: 8, x: 3, y: 1 }
      ],
      [
        { value: 9, x: 0, y: 2 },
        { value: 10, x: 1, y: 2 },
        { value: 11, x: 2, y: 2 },
        { value: 12, x: 3, y: 2 }
      ],
      [
        { value: 13, x: 0, y: 3 },
        { value: 14, x: 1, y: 3 },
        { value: 15, x: 2, y: 3 },
        { value: 0, x: 3, y: 3 }
      ]
    ]);
  });
});
