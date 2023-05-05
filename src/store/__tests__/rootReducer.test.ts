import { waitFor } from '@testing-library/react';
import { rootReducer } from '../rootReducer';
import { AppActions } from '../types';

const initialState = {
  board: [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 5]
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

    waitFor(() => {
      expect(state.board).toEqual([
        [1, 2, 3],
        [4, 0, 6],
        [7, 8, 5]
      ]);
      expect(state.moveCount).toEqual(1);
    });
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
