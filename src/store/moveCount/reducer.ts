import { AppActions } from 'store/types';
import { State } from './types';

const reducer = (state: State, action: AppActions): State => {
  switch (action.type) {
    case 'move':
      return state + 1;

    case 'shuffle':
      return 0;

    default:
      return state;
  }
};

export { reducer };
