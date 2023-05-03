import { getMove } from '../getMove';

describe('getMove', () => {
  describe('it should return coordinates of the move', () => {
    it('move down', () => {
      const board = [
        [1, 2, 3],
        [4, 0, 6],
        [7, 8, 5]
      ];

      const move = getMove(board, 0, 1);

      expect(move).toEqual([1, 1]);
    });

    it('move up', () => {
      const board = [
        [1, 0, 3],
        [4, 1, 6],
        [7, 8, 5]
      ];

      const move = getMove(board, 1, 1);

      expect(move).toEqual([0, 1]);
    });

    it('move right', () => {
      const board = [
        [1, 2, 0],
        [4, 1, 6],
        [7, 8, 5]
      ];

      const move = getMove(board, 0, 1);

      expect(move).toEqual([0, 2]);
    });

    it('move left', () => {
      const board = [
        [1, 2, 4],
        [4, 0, 6],
        [7, 8, 5]
      ];

      const move = getMove(board, 1, 2);

      expect(move).toEqual([1, 1]);
    });
  });

  it('should return null if the move is not found', () => {
    const board = [
      [1, 2, 3],
      [4, 0, 6],
      [7, 8, 5]
    ];

    const move = getMove(board, 0, 0);

    expect(move).toBeNull();
  });
});
