import { fireEvent, render } from '@testing-library/react';
import { SlidingPuzzle } from '../SlidingPuzzle';

import { useReducer } from 'react';

import { BoardState } from 'store/board/types';

const initialState: BoardState = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0]
];

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useReducer: jest.fn()
}));

const mockedUseReducer = useReducer as unknown as jest.MockedFn<
  typeof useReducer
>;

describe('SlidingPuzzle', () => {
  const mockDispatch = jest.fn();
  mockedUseReducer.mockReturnValue([initialState, mockDispatch]);

  it('renders the Sliding Puzzle component', () => {
    const { getByText, getAllByTestId } = render(<SlidingPuzzle />);

    const heading = getByText(/Sliding Puzzle/i);
    expect(heading).toBeInTheDocument();

    const puzzlePieces = getAllByTestId('puzzle-piece');
    expect(puzzlePieces).toHaveLength(9);
  });

  it('dispatches move action when puzzle piece is clicked', () => {
    const { getAllByTestId } = render(<SlidingPuzzle />);

    const puzzlePieces = getAllByTestId('puzzle-piece');
    const firstPuzzlePiece = puzzlePieces[0];

    fireEvent.click(firstPuzzlePiece);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'move',
      y: 0,
      x: 0
    });
  });
});
