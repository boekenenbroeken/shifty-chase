import { createBoard } from 'utils/createBoard';
import type { AppActions } from 'store/types';
import { ActionTypes, State } from './types';
import { swap, shuffleBoard, checkIsSolved } from './utils';

const reducer = (state: State, action: AppActions): State => {
  switch (action.type) {
    case ActionTypes.INIT: {
      const board = createBoard(action.size);

      return {
        initialBoard: board,
        currentBoard: shuffleBoard(board),
        level: action.size,
        isSolved: false
      };
    }

    case ActionTypes.MOVE: {
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

    case ActionTypes.SHUFFLE: {
      const shuffledBoard = shuffleBoard(state.currentBoard);

      return { ...state, currentBoard: shuffledBoard, isSolved: false };
    }

    case ActionTypes.LEVELUP: {
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
