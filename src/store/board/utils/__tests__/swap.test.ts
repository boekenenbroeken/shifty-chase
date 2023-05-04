import { BoardState } from '../../types';
import { swap } from '../swap';

describe('swap', () => {
  let board: BoardState;

  beforeEach(() => {
    board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
  });

  it('should swap two elements in the board', () => {
    const newBoard = swap(board, 1, 1, 2, 2);

    const expectedBoard = [
      [1, 2, 3],
      [4, 9, 6],
      [7, 8, 5]
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
    const board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    const spy = jest.spyOn(console, 'error').mockImplementation();

    expect(swap(board, 0, 1, 100, 200)).toEqual(board);
    expect(console.error).toHaveBeenCalled();

    spy.mockRestore();
  });
});
