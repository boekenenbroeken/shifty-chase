type Action =
  | { type: 'init'; size: number }
  | { type: 'move'; y: number; x: number; moveY: number; moveX: number }
  | { type: 'shuffle' }
  | { type: 'levelup' };

type PuzzlePiece = { value: number; x: number; y: number };
type Board = PuzzlePiece[][];

type State = {
  initialBoard: Board | null;
  currentBoard: Board | null;
  level: number;
  isSolved: boolean;
};

export type { Action, State, Board, PuzzlePiece };
