import type { State as BoardState, Action as BoardAction } from './board/types';
import type { State as MoveCountState } from './moveCount/types';

type AppState = {
  board: BoardState;
  moveCount: MoveCountState;
};

type AppActions = BoardAction;

export type { AppState, AppActions };
