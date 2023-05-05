import { useEffect, useReducer } from 'react';

import { rootReducer } from '../../store/rootReducer';

import { PuzzleBoard } from 'components/PuzzleBoard';
import type { AppState } from 'store/types';

const initialState: AppState = {
  board: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0]
  ],
  moveCount: 0
};

const SlidingPuzzle = () => {
  const [{ board, moveCount }, dispatch] = useReducer(
    rootReducer,
    initialState
  );

  const handleMove = (y: number, x: number) => {
    dispatch({ type: 'move', y, x });
  };

  const handleShuffle = () => {
    dispatch({ type: 'shuffle' });
  };

  useEffect(() => {
    handleShuffle();
  }, []);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>Sliding Puzzle</h1>
      <p>Move count: {moveCount}</p>
      <PuzzleBoard board={board} onMove={handleMove} />

      <button type="button" onClick={handleShuffle}>
        Shuffle
      </button>
    </div>
  );
};

export { SlidingPuzzle };
