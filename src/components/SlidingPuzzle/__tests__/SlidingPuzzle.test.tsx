import { fireEvent, render, RenderResult } from '@testing-library/react';
import { SlidingPuzzle } from '../SlidingPuzzle';

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

const getInitialState = (state?: {
  board?: Partial<AppState['board']>;
  moveCount?: AppState['moveCount'];
}): AppState => ({
  board: {
    initialBoard: board,
    currentBoard: board,
    isSolved: false,
    level: 3,
    ...state?.board
  },
  moveCount: state?.moveCount ?? 0
});

const getShuffleButton = (screen: RenderResult) =>
  screen.getByRole('button', { name: /shuffle/i });

const getMoveCount = (screen: RenderResult) => screen.getByText(/Move count/i);

const getPuzzleBoard = (screen: RenderResult) =>
  screen.getByTestId('puzzle-board');

const getAllPuzzlePieces = (screen: RenderResult) =>
  screen.getAllByTestId('puzzle-piece');

const getStartButton = (screen: RenderResult) =>
  screen.getByRole('button', { name: /start/i });

const getNextLevelButton = (screen: RenderResult) =>
  screen.getByRole('button', { name: /Next level/i });

beforeEach(() => {
  jest.resetAllMocks();
});

describe('SlidingPuzzle', () => {
  describe('when the board is initialized', () => {
    it('renders the Sliding Puzzle component', () => {
      const initialState = getInitialState();

      const screen = render(<SlidingPuzzle initialState={initialState} />);

      const heading = screen.getByText(/Shifty chase/i);
      expect(heading).toBeInTheDocument();

      const puzzlePieces = getAllPuzzlePieces(screen);
      expect(puzzlePieces).toHaveLength(
        initialState.board.currentBoard.flat().length
      );

      const shuffleButton = getShuffleButton(screen);
      expect(shuffleButton).toBeInTheDocument();

      const moveCount = getMoveCount(screen);
      expect(moveCount).toBeInTheDocument();
    });

    it('renders congratulations text if puzzle is solved', () => {
      const initialState = getInitialState({ board: { isSolved: true } });

      const screen = render(<SlidingPuzzle initialState={initialState} />);

      const congratulationsText = screen.getByText(/Yay! It is solved/i);
      expect(congratulationsText).toBeInTheDocument();
    });

    it('should initialize board when start button is clicked', () => {
      const initialState = getInitialState({
        board: {
          currentBoard: null,
          initialBoard: null,
          level: 0,
          isSolved: false
        }
      });

      const screen = render(<SlidingPuzzle initialState={initialState} />);

      const startButton = getStartButton(screen);

      fireEvent.click(startButton);

      expect(getPuzzleBoard(screen)).toBeInTheDocument();
      expect(getShuffleButton(screen)).toBeInTheDocument();
      expect(getNextLevelButton(screen)).toBeInTheDocument();
      expect(getAllPuzzlePieces(screen)).toHaveLength(9);
      expect(getMoveCount(screen)).toHaveTextContent('Move count: 0');
    });

    it('should go to the next level when the next level button is clicked', () => {
      const initialState = getInitialState({
        board: { isSolved: true },
        moveCount: 10
      });

      const screen = render(<SlidingPuzzle initialState={initialState} />);

      expect(getMoveCount(screen)).toHaveTextContent('Move count: 10');
      expect(getAllPuzzlePieces(screen)).toHaveLength(
        initialState.board.level ** 2
      );

      fireEvent.click(getNextLevelButton(screen));

      expect(getMoveCount(screen)).toHaveTextContent('Move count: 0');
      expect(getAllPuzzlePieces(screen)).toHaveLength(
        (initialState.board.level + 1) ** 2
      );
    });

    it('should move the piece when clicked', () => {
      const initialState = getInitialState();

      const screen = render(<SlidingPuzzle initialState={initialState} />);

      const puzzlePieces = getAllPuzzlePieces(screen);

      const moveablePiece = puzzlePieces[7];
      const emptyPiece = puzzlePieces[8];
      const moveCount = getMoveCount(screen);

      expect(moveCount).toHaveTextContent('Move count: 0');

      fireEvent.click(moveablePiece);

      const newPuzzlePieces = getAllPuzzlePieces(screen);

      expect(newPuzzlePieces[7]).toBe(emptyPiece);
      expect(newPuzzlePieces[8]).toBe(moveablePiece);
      expect(moveCount).toHaveTextContent('Move count: 1');
    });

    it('should not move the piece when clicked if it is not adjacent to the empty space', () => {
      const initialState = getInitialState();

      const screen = render(<SlidingPuzzle initialState={initialState} />);

      const initialBoard = getPuzzleBoard(screen).textContent;

      const puzzlePieces = getAllPuzzlePieces(screen);

      const emptyPuzzlePiece = puzzlePieces.find(
        item => item.textContent === ''
      );

      const moveCount = getMoveCount(screen);

      fireEvent.click(emptyPuzzlePiece);

      const movedBoard = getPuzzleBoard(screen).textContent;

      expect(initialBoard).toEqual(movedBoard);
      expect(moveCount).toHaveTextContent('Move count: 0');
    });

    it('should shuffle the board when the shuffle button is clicked', () => {
      const initialState = getInitialState();
      const screen = render(<SlidingPuzzle initialState={initialState} />);
      const initialBoard = getPuzzleBoard(screen).textContent;

      fireEvent.click(getShuffleButton(screen));

      const shuffledBoard = getPuzzleBoard(screen).textContent;

      expect(initialBoard).not.toEqual(shuffledBoard);
    });

    it('shoud reset move count when the shuffle button is clicked', () => {
      const initialState = getInitialState({ moveCount: 10 });

      const screen = render(<SlidingPuzzle initialState={initialState} />);

      expect(getMoveCount(screen)).toHaveTextContent('Move count: 10');

      fireEvent.click(getShuffleButton(screen));

      expect(getMoveCount(screen)).toHaveTextContent('Move count: 0');
    });
  });
});
