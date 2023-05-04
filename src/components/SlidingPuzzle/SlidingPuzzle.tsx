import { useReducer } from 'react';

import { reducer } from '../../store/board/reducer';
import { BoardState } from '../../store/board/types';

import { PuzzleBoard } from 'components/PuzzleBoard';

const initialState: BoardState = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0]
];

const SlidingPuzzle = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleMove = (y: number, x: number) => {
    dispatch({ type: 'move', y, x });
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>Sliding Puzzle</h1>
      <PuzzleBoard board={state} onMove={handleMove} />
    </div>
  );
};

export { SlidingPuzzle };
