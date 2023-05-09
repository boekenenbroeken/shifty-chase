import { Board } from '../types';

const getValuesArray = (board: Board) => {
  return board.flat().map(item => item.value);
};

const checkIsSolved = (initialBoard: Board, currentBoard: Board) => {
  return (
    JSON.stringify(getValuesArray(initialBoard)) ===
    JSON.stringify(getValuesArray(currentBoard))
  );
};

export { checkIsSolved, getValuesArray };
