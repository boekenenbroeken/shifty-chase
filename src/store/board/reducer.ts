import { BoardState, Action } from './types';
import { getMove, swap, shuffleArray, create2DArray } from './utils';

const reducer = (state: BoardState, action: Action): BoardState => {
  switch (action.type) {
    case 'move':
      const newPosition = getMove(state, action.y, action.x);

      if (!newPosition) return state;

      const [newY, newX] = newPosition;

      const newState = swap(state, action.y, action.x, newY, newX);

      return newState;

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
