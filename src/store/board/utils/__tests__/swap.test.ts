import { swap } from '../swap';

import { Board } from 'store/board/types';

describe('swap', () => {
  let board: Board;

  beforeEach(() => {
    board = [
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
        { value: 9, x: 2, y: 2 }
      ]
    ];
  });

  it('should swap two elements in the board', () => {
    const newBoard = swap(board, 1, 1, 2, 2);

    const expectedBoard = [
      [
        { value: 1, x: 0, y: 0 },
        { value: 2, x: 1, y: 0 },
        { value: 3, x: 2, y: 0 }
      ],
      [
        { value: 4, x: 0, y: 1 },
        { value: 9, x: 2, y: 2 },
        { value: 6, x: 2, y: 1 }
      ],
      [
        { value: 7, x: 0, y: 2 },
        { value: 8, x: 1, y: 2 },
        { value: 5, x: 1, y: 1 }
      ]
    ];

    expect(newBoard).toEqual(expectedBoard);
  });

  it('should return the same board if the positions are the same', () => {
    const newBoard = swap(board, 0, 0, 0, 0);

    expect(newBoard).toEqual(board);
  });

  it('should return the original board if the input is out of bounds', () => {
    const result = swap(board, 0, 1, 1, 300);
    expect(result).toEqual(board);
  });

  it('should catch and log any errors thrown during swapping', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation();

    expect(swap(board, 0, 1, 100, 200)).toEqual(board);
    expect(console.error).toHaveBeenCalled();

    spy.mockRestore();
  });
});
