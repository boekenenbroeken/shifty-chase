import type { AppActions } from 'store/types';
import type { State } from './types';
import { getMove, swap, shuffleArray, create2DArray } from './utils';

const reducer = (state: State, action: AppActions): State => {
  switch (action.type) {
    case 'move':
      const newPosition = getMove(state, action.y, action.x);

      if (!newPosition) return state;

      const [newY, newX] = newPosition;

      const newBoard = swap(state, action.y, action.x, newY, newX);

      return newBoard;

    case 'shuffle':
      const flattenedBoard = state.flat();

      const shuffledArray = shuffleArray(flattenedBoard);
      const shuffledBoard = create2DArray(
        shuffledArray,
        state.length,
        state[0].length
      );

      return shuffledBoard;

    default:
      return state;
  }
};

export { reducer };
