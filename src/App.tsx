import { SlidingPuzzle } from 'components/SlidingPuzzle';
import type { AppState } from 'store/types';
import { CSSReset } from 'styles/reset';

const initialState: AppState = {
  board: {
    initialBoard: null,
    currentBoard: null,
    isSolved: false,
    level: 0
  },
  moveCount: 0
};

const App = () => (
  <>
    <CSSReset />
    <SlidingPuzzle initialState={initialState} />
  </>
);

export { App };
