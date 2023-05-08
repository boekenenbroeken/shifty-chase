import { createBoard } from 'components/SlidingPuzzle/utils/createBoard';
import type { AppActions } from 'store/types';
import type { State } from './types';
import { swap, shuffleBoard, checkIsSolved } from './utils';

const reducer = (state: State, action: AppActions): State => {
  switch (action.type) {
    case 'init': {
      const board = createBoard(action.size);

      return {
        initialBoard: board,
        currentBoard: shuffleBoard(board),
        isSolved: false
      };
    }

    case 'move': {
      const board = swap(
        state.currentBoard,
        action.y,
        action.x,
        action.moveY,
        action.moveX
      );

      const isSolved = checkIsSolved(state.initialBoard, board);

      return { ...state, currentBoard: board, isSolved };
    }

    case 'shuffle': {
      const shuffledBoard = shuffleBoard(state.currentBoard);

      return { ...state, currentBoard: shuffledBoard, isSolved: false };
    }

    default:
      return state;
  }
};

export { reducer };
