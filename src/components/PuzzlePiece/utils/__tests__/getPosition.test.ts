import { getPosition } from '../getPosition';

describe('getPosition', () => {
  it('should return correct position for first cell in 3x3 grid', () => {
    const position = getPosition({ size: 3, rowIndex: 0, colIndex: 0 });
    expect(position).toEqual([0, 0]);
  });

  it('should return correct position for last cell in 3x3 grid', () => {
    const position = getPosition({ size: 3, rowIndex: 2, colIndex: 2 });
    expect(position).toEqual([100, 100]);
  });

  it('should return correct position for middle cell in 3x3 grid', () => {
    const position = getPosition({ size: 3, rowIndex: 1, colIndex: 1 });
    expect(position).toEqual([50, 50]);
  });

  it('should return correct position for first cell in 4x4 grid', () => {
    const position = getPosition({ size: 4, rowIndex: 0, colIndex: 0 });
    expect(position).toEqual([0, 0]);
  });

  it('should return correct position for last cell in 4x4 grid', () => {
    const position = getPosition({ size: 4, rowIndex: 3, colIndex: 3 });
    expect(position).toEqual([100, 100]);
  });

  it('should return correct position for middle cell in 4x4 grid', () => {
    const position = getPosition({ size: 4, rowIndex: 2, colIndex: 2 });
    expect(position).toEqual([67, 67]);
  });
});
