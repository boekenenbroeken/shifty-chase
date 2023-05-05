import { reducer as boardReducer } from './board/reducer';
import { reducer as moveCountReducer } from './moveCount/reducer';
import type { AppActions, AppState } from './types';

const rootReducer = (
  { board, moveCount }: Partial<AppState>,
  action: AppActions
) => ({
  board: boardReducer(board, action),
  moveCount: moveCountReducer(moveCount, action)
});

export { rootReducer };
