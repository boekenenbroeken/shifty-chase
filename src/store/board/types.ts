type BoardState = number[][];

type Action = { type: 'move'; y: number; x: number } | { type: 'shuffle' };

export type { BoardState, Action };
