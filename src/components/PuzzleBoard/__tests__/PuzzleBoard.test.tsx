import { render, fireEvent } from '@testing-library/react';
import { PuzzleBoard } from '../PuzzleBoard';

describe('PuzzleBoard', () => {
  const board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0]
  ];
  const onMove = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the puzzle board', () => {
    const { getAllByTestId } = render(
      <PuzzleBoard board={board} onMove={onMove} />
    );

    expect(getAllByTestId('puzzle-piece')).toHaveLength(9);
  });

  it('should call onMove with correct arguments when puzzle piece is clicked', () => {
    const { getAllByTestId } = render(
      <PuzzleBoard board={board} onMove={onMove} />
    );
    const puzzlePieces = getAllByTestId('puzzle-piece');

    fireEvent.click(puzzlePieces[2]);

    expect(onMove).toHaveBeenCalledTimes(1);
    expect(onMove).toHaveBeenCalledWith(0, 2);
  });
});
