enum ActionTypes {
  INIT = 'init',
  MOVE = 'move',
  SHUFFLE = 'shuffle',
  LEVELUP = 'levelup'
}

type Action =
  | { type: ActionTypes.INIT; size: number }
  | {
      type: ActionTypes.MOVE;
      y: number;
      x: number;
      moveY: number;
      moveX: number;
    }
  | { type: ActionTypes.SHUFFLE }
  | { type: ActionTypes.LEVELUP };

type PuzzlePiece = { value: number; x: number; y: number };
type Board = PuzzlePiece[][];

type State = {
  initialBoard: Board | null;
  currentBoard: Board | null;
  level: number;
  isSolved: boolean;
};

export type { Action, State, Board, PuzzlePiece };
export { ActionTypes };
