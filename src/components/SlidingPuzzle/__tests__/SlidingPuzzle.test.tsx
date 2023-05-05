import { fireEvent, render, waitFor } from '@testing-library/react';
import { SlidingPuzzle } from '../SlidingPuzzle';

import { useReducer } from 'react';

import type { AppState } from 'store/types';

const initialState: AppState = {
  board: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0]
  ],
  moveCount: 0
};

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

    const shuffleButton = getByText(/Shuffle/i);
    expect(shuffleButton).toBeInTheDocument();

    const moveCount = getByText(/Move count/i);
    expect(moveCount).toBeInTheDocument();
  });

  it('should shuffle the board on mount', () => {
    const { getByTestId } = render(<SlidingPuzzle />);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'shuffle'
    });

    waitFor(() => {
      expect(getByTestId('puzzle-board').textContent).not.toEqual('123456780');
    });
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

  it('should move the piece when clicked', () => {
    const { getByTestId, getAllByTestId, getByText } = render(
      <SlidingPuzzle />
    );
    const initialBoard = getByTestId('puzzle-board').textContent;

    const puzzlePieces = getAllByTestId('puzzle-piece');
    const firstPuzzlePiece = puzzlePieces[0];
    const moveCount = getByText(/Move count/i);

    expect(moveCount).toHaveTextContent('Move count: 0');

    fireEvent.click(firstPuzzlePiece);

    waitFor(() => {
      const movedBoard = getByTestId('puzzle-board').textContent;

      expect(initialBoard).not.toEqual(movedBoard);

      expect(moveCount).toHaveTextContent('Move count: 1');
    });
  });

  it('should not move the piece when clicked if it is not adjacent to the empty space', () => {
    const { getByTestId, getAllByTestId, getByText } = render(
      <SlidingPuzzle />
    );
    const initialBoard = getByTestId('puzzle-board').textContent;

    const puzzlePieces = getAllByTestId('puzzle-piece');
    const lastPuzzlePiece = puzzlePieces[8];

    const moveCount = getByText(/Move count/i);

    fireEvent.click(lastPuzzlePiece);

    waitFor(() => {
      const movedBoard = getByTestId('puzzle-board').textContent;

      expect(initialBoard).toEqual(movedBoard);

      expect(moveCount).toHaveTextContent('Move count: 0');
    });
  });

  it('dispatches shuffle action when shuffle button is clicked', () => {
    const { getByText } = render(<SlidingPuzzle />);

    const shuffleButton = getByText(/Shuffle/i);

    fireEvent.click(shuffleButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'shuffle'
    });
  });

  it('should shuffle the board when the shuffle button is clicked', () => {
    const { getByTestId, getByRole } = render(<SlidingPuzzle />);
    const initialBoard = getByTestId('puzzle-board').textContent;

    fireEvent.click(getByRole('button', { name: /shuffle/i }));

    waitFor(() => {
      const shuffledBoard = getByTestId('puzzle-board').textContent;

      expect(initialBoard).not.toEqual(shuffledBoard);
    });
  });

  it('shoud reset move count when the shuffle button is clicked', () => {
    const initialState: AppState = {
      board: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 0]
      ],
      moveCount: 5
    };

    const mockDispatch = jest.fn();
    mockedUseReducer.mockReturnValue([initialState, mockDispatch]);

    const { getByText, getByRole } = render(<SlidingPuzzle />);

    const moveCount = getByText(/Move count/i);

    fireEvent.click(getByRole('button', { name: /shuffle/i }));

    waitFor(() => {
      expect(moveCount).toHaveTextContent('Move count: 0');
    });
  });
});
