import type { Board } from '../types';

const getMove = (board: Board, y: number, x: number) => {
  const DIRECTIONS = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0]
  ] as const;

  for (let i = 0; i < DIRECTIONS.length; i++) {
    const newY = y + DIRECTIONS[i][1];
    const newX = x + DIRECTIONS[i][0];

    if (board[newY] && board[newY][newX]?.value === 0) {
      return [newY, newX];
    }
  }

  return null;
};

export { getMove };
