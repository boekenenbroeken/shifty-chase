import type { AppActions } from 'store/types';
import type { State } from './types';
import { ActionTypes as BoardActionTypes } from '../board/types';

const reducer = (state: State, action: AppActions): State => {
  switch (action.type) {
    case BoardActionTypes.MOVE:
      return state + 1;

    case BoardActionTypes.SHUFFLE:
      return 0;

    case BoardActionTypes.LEVELUP:
      return 0;

    default:
      return state;
  }
};

export { reducer };
