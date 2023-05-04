import { BoardState, Action } from './types';
import { getMove, swap } from './utils';

const reducer = (state: BoardState, action: Action): BoardState => {
  switch (action.type) {
    case 'move':
      const newPosition = getMove(state, action.y, action.x);

      if (!newPosition) return state;

      const [newY, newX] = newPosition;

      const newState = swap(state, action.y, action.x, newY, newX);

      return newState;

    default:
      return state;
  }
};

export { reducer };
