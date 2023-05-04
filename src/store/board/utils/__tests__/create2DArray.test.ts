import { create2DArray } from '../create2DArray';

describe('create2DArray', () => {
  it('creates a 2D array from a flat array with the specified number of rows and columns', () => {
    const flatArray = [1, 2, 3, 4, 5, 6];
    const numRows = 2;
    const numCols = 3;
    const expectedOutput = [
      [1, 2, 3],
      [4, 5, 6]
    ];
    const result = create2DArray(flatArray, numRows, numCols);

    expect(result).toEqual(expectedOutput);
  });

  it('creates a 2D array from a flat array with a different number of rows and columns', () => {
    const flatArray = [1, 2, 3, 4, 5, 6];
    const numRows = 3;
    const numCols = 2;
    const expectedOutput = [
      [1, 2],
      [3, 4],
      [5, 6]
    ];
    const result = create2DArray(flatArray, numRows, numCols);

    expect(result).toEqual(expectedOutput);
  });

  it('creates a 2D array from a flat array with one row', () => {
    const flatArray = [1, 2, 3];
    const numRows = 1;
    const numCols = 3;
    const expectedOutput = [[1, 2, 3]];
    const result = create2DArray(flatArray, numRows, numCols);

    expect(result).toEqual(expectedOutput);
  });

  it('creates a 2D array from a flat array with one column', () => {
    const flatArray = [1, 2, 3];
    const numRows = 3;
    const numCols = 1;
    const expectedOutput = [[1], [2], [3]];
    const result = create2DArray(flatArray, numRows, numCols);

    expect(result).toEqual(expectedOutput);
  });
});
