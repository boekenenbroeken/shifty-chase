import { Board } from '../types';

const create2DArray = (
  flatArray: number[],
  numRows: number,
  numCols: number
): Board => {
  const board = [];
  for (let i = 0; i < numRows; i++) {
    board.push(flatArray.slice(i * numCols, (i + 1) * numCols));
  }

  return board;
};

export { create2DArray };
