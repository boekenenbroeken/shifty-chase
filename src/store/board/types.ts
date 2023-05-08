type Action =
  | { type: 'init'; size: number }
  | { type: 'move'; y: number; x: number; moveY: number; moveX: number }
  | { type: 'shuffle' };

type PuzzlePiece = { value: number; x: number; y: number };
type Board = PuzzlePiece[][];

type State = {
  initialBoard: Board | null;
  currentBoard: Board | null;
  isSolved: boolean;
};

export type { Action, State, Board, PuzzlePiece };
