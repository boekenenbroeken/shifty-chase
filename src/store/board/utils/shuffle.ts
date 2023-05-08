import { Board } from '../types';
import { create2DArray } from './create2DArray';

const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};

const shuffleBoard = (board: Board) => {
  const flattenedBoard = board.flat();
  const shuffledArray = shuffleArray(flattenedBoard);
  const shuffledBoard = create2DArray(
    shuffledArray,
    board.length,
    board[0].length
  );

  return shuffledBoard;
};

export { shuffleArray, shuffleBoard };
