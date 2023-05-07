import { rootReducer } from '../rootReducer';
import type { AppActions } from '../types';

const initialState = {
  board: [
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
  moveCount: 0
};

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const state = rootReducer(initialState, {} as AppActions);

    expect(state).toEqual(initialState);
  });

  it('should handle a move action', () => {
    const action: AppActions = { type: 'move', y: 1, x: 2 };
    const state = rootReducer(initialState, action);

    expect(state.board).toEqual([
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
    ]);
    expect(state.moveCount).toEqual(1);
  });

  it('should handle a shuffle action', () => {
    const action: AppActions = { type: 'shuffle' };
    const state = rootReducer(initialState, action);

    expect(state.board).not.toEqual(initialState.board);
    expect(state.moveCount).toEqual(0);
  });

  it('should handle an unknown action', () => {
    const action: AppActions = {
      type: 'UNKNOWN_ACTION'
    } as unknown as AppActions;
    const state = rootReducer(initialState, action);

    expect(state).toEqual(initialState);
  });
});
