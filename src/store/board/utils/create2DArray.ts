import { BoardState } from '../types';

const create2DArray = (
  flatArray: number[],
  numRows: number,
  numCols: number
): BoardState => {
  const boardState = [];
  for (let i = 0; i < numRows; i++) {
    boardState.push(flatArray.slice(i * numCols, (i + 1) * numCols));
  }

  return boardState;
};

export { create2DArray };
