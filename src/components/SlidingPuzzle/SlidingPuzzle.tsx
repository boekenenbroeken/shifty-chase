import { useReducer } from 'react';

import { rootReducer } from '../../store/rootReducer';

import { PuzzleBoard } from 'components/PuzzleBoard';
import type { AppState } from 'store/types';
import { getMove } from 'store/board/utils';
import img from 'assets/images/great_wave.jpg';

const initialState: AppState = {
  board: {
    initialBoard: null,
    currentBoard: null,
    isSolved: false
  },
  moveCount: 0
};

const SlidingPuzzle = () => {
  const [{ board, moveCount }, dispatch] = useReducer(
    rootReducer,
    initialState
  );

  const handleMove = (y: number, x: number) => {
    if (!board.currentBoard) return;

    const move = getMove(board.currentBoard, y, x);

    if (!move) return;

    const [moveY, moveX] = move;

    dispatch({ type: 'move', y, x, moveY, moveX });
  };

  const handleStart = () => {
    dispatch({ type: 'init', size: 3 });
  };

  const handleShuffle = () => {
    dispatch({ type: 'shuffle' });
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>Sliding Puzzle</h1>
      {board.currentBoard ? (
        <>
          <PuzzleBoard board={board.currentBoard} onMove={handleMove} />
          <p>
            Move count: {moveCount} {board.isSolved && 'Yaaay! It is solved'}
          </p>
          <button type="button" onClick={handleShuffle}>
            Shuffle
          </button>
        </>
      ) : (
        <>
          <img src={img} width="500" height="500" />
          <button
            style={{ marginTop: '24px' }}
            type="button"
            onClick={handleStart}
          >
            Start
          </button>
        </>
      )}
    </div>
  );
};

export { SlidingPuzzle };
