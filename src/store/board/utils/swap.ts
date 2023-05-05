import { Board } from '../types';

const swap = (
  board: Board,
  y1: number,
  x1: number,
  y2: number,
  x2: number
): Board => {
  try {
    const newBoard = [...board];
    const temp = newBoard[y1][x1];
    newBoard[y1][x1] = newBoard[y2][x2];
    newBoard[y2][x2] = temp;

    return newBoard;
  } catch (error) {
    console.error('Error while swapping elements:', error);

    return board;
  }
};

export { swap };
