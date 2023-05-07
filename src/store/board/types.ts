type Action = { type: 'move'; y: number; x: number } | { type: 'shuffle' };

type PuzzlePiece = { value: number; x: number; y: number };
type Board = PuzzlePiece[][];

type State = Board;

export type { Action, State, Board, PuzzlePiece };
