type Action = { type: 'move'; y: number; x: number } | { type: 'shuffle' };

type Board = number[][];

type State = Board;

export type { Action, State, Board };
