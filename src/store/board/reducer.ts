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
        level: action.size,
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

    case 'levelup': {
      const nextLevel = state.level + 1;
      const board = createBoard(nextLevel);

      return {
        initialBoard: board,
        currentBoard: shuffleBoard(board),
        level: nextLevel,
        isSolved: false
      };
    }

    default:
      return state;
  }
};

export { reducer };
