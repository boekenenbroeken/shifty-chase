import { fireEvent, render, waitFor } from '@testing-library/react';
import { SlidingPuzzle } from '../SlidingPuzzle';

import { useReducer } from 'react';

import type { AppState } from 'store/types';

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

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useReducer: jest.fn()
}));

const mockedUseReducer = useReducer as unknown as jest.MockedFn<
  typeof useReducer
>;

describe('SlidingPuzzle', () => {
  describe('when the board is initialized', () => {
    const initialState: AppState = {
      board: {
        initialBoard: board,
        currentBoard: board,
        isSolved: false
      },
      moveCount: 0
    };

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

    it('dispatches move action when puzzle piece is clicked', () => {
      const { getAllByTestId } = render(<SlidingPuzzle />);

      const puzzlePieces = getAllByTestId('puzzle-piece');

      const moveablePuzzlePiece = puzzlePieces[7];

      fireEvent.click(moveablePuzzlePiece);

      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'move',
        y: 2,
        x: 1,
        moveY: 2,
        moveX: 2
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
        board: {
          initialBoard: board,
          currentBoard: board,
          isSolved: false
        },
        moveCount: 0
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
});
