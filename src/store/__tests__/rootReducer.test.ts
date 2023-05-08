import { rootReducer } from '../rootReducer';
import type { AppActions } from '../types';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      board: {
        initialBoard: null,
        currentBoard: null,
        isSolved: false
      },
      moveCount: 0
    };

    const state = rootReducer(initialState, {} as AppActions);

    expect(state).toEqual(initialState);
  });

  it('should handle an init action', () => {
    const initialState = {
      board: {
        initialBoard: null,
        currentBoard: null,
        isSolved: false
      },
      moveCount: 0
    };

    const action: AppActions = { type: 'init', size: 3 };
    const state = rootReducer(initialState, action);

    expect(state.board.currentBoard).toEqual(expect.any(Array));
    expect(state.board.initialBoard).toEqual(expect.any(Array));
    expect(state.board.isSolved).toBe(false);
    expect(state.moveCount).toBe(0);
  });

  it('should handle a move action', () => {
    const initialState = {
      board: {
        initialBoard: [
          [
            { value: 1, x: 0, y: 0 },
            { value: 2, x: 1, y: 0 },
            { value: 3, x: 2, y: 0 }
          ],
          [
            { value: 4, x: 0, y: 1 },
            { value: 5, x: 1, y: 1 },
            { value: 6, x: 2, y: 1 }
          ],
          [
            { value: 7, x: 0, y: 2 },
            { value: 8, x: 1, y: 2 },
            { value: 0, x: 2, y: 2 }
          ]
        ],
        currentBoard: [
          [
            { value: 1, x: 0, y: 0 },
            { value: 2, x: 1, y: 0 },
            { value: 3, x: 2, y: 0 }
          ],
          [
            { value: 4, x: 0, y: 1 },
            { value: 5, x: 1, y: 1 },
            { value: 0, x: 2, y: 2 }
          ],
          [
            { value: 7, x: 0, y: 2 },
            { value: 8, x: 1, y: 2 },
            { value: 6, x: 2, y: 1 }
          ]
        ],
        isSolved: false
      },
      moveCount: 0
    };

    const action: AppActions = { type: 'move', y: 1, x: 1, moveX: 2, moveY: 2 };
    const state = rootReducer(initialState, action);

    expect(state.board.currentBoard).toEqual([
      [
        { value: 1, x: 0, y: 0 },
        { value: 2, x: 1, y: 0 },
        { value: 3, x: 2, y: 0 }
      ],
      [
        { value: 4, x: 0, y: 1 },
        { value: 6, x: 2, y: 1 },
        { value: 0, x: 2, y: 2 }
      ],
      [
        { value: 7, x: 0, y: 2 },
        { value: 8, x: 1, y: 2 },
        { value: 5, x: 1, y: 1 }
      ]
    ]);
    expect(state.moveCount).toEqual(1);
  });

  it('should handle a shuffle action', () => {
    const initialState = {
      board: {
        initialBoard: [
          [
            { value: 1, x: 0, y: 0 },
            { value: 2, x: 1, y: 0 },
            { value: 3, x: 2, y: 0 }
          ],
          [
            { value: 4, x: 0, y: 1 },
            { value: 5, x: 1, y: 1 },
            { value: 6, x: 2, y: 1 }
          ],
          [
            { value: 7, x: 0, y: 2 },
            { value: 8, x: 1, y: 2 },
            { value: 0, x: 2, y: 2 }
          ]
        ],
        currentBoard: [
          [
            { value: 1, x: 0, y: 0 },
            { value: 2, x: 1, y: 0 },
            { value: 3, x: 2, y: 0 }
          ],
          [
            { value: 4, x: 0, y: 1 },
            { value: 5, x: 1, y: 1 },
            { value: 0, x: 2, y: 2 }
          ],
          [
            { value: 7, x: 0, y: 2 },
            { value: 8, x: 1, y: 2 },
            { value: 6, x: 2, y: 1 }
          ]
        ],
        isSolved: false
      },
      moveCount: 0
    };

    const action: AppActions = { type: 'shuffle' };
    const state = rootReducer(initialState, action);

    expect(state.board.currentBoard).not.toEqual(
      initialState.board.currentBoard
    );
    expect(state.moveCount).toEqual(0);
  });

  it('should handle an unknown action', () => {
    const initialState = {
      board: {
        initialBoard: null,
        currentBoard: null,
        isSolved: false
      },
      moveCount: 0
    };

    const action: AppActions = {
      type: 'UNKNOWN_ACTION'
    } as unknown as AppActions;
    const state = rootReducer(initialState, action);

    expect(state).toEqual(initialState);
  });
});
