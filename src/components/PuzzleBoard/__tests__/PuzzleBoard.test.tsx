import { render, fireEvent } from '@testing-library/react';
import { PuzzleBoard } from '../PuzzleBoard';

describe('PuzzleBoard', () => {
  const board = [
    [
      { value: 1, x: 0, y: 0 },
      { value: 2, x: 1, y: 0 },
      { value: 3, x: 2, y: 0 }
    ],
    [
      { value: 4, x: 0, y: 1 },
      { value: 5, x: 1, y: 1 },
      { value: 6, x: 2, y: 1 }
    ],
    [
      { value: 7, x: 0, y: 2 },
      { value: 8, x: 1, y: 2 },
      { value: 0, x: 2, y: 2 }
    ]
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
