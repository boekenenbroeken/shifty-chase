import { AppActions } from 'store/types';
import { reducer } from '../reducer';

describe('reducer', () => {
  it('should return the initial state', () => {
    const initialState = 0;
    const action = {} as AppActions;
    const state = reducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it('should handle the move action', () => {
    const initialState = 0;
    const action = { type: 'move' } as AppActions;
    const state = reducer(initialState, action);

    expect(state).toEqual(initialState + 1);
  });

  it('should handle the shuffle action', () => {
    const initialState = 2;
    const action = { type: 'shuffle' } as AppActions;
    const state = reducer(initialState, action);

    expect(state).toEqual(0);
  });

  it('should handle an unknown action', () => {
    const initialState = 0;
    const action = { type: 'unknown' } as unknown as AppActions;
    const state = reducer(initialState, action);

    expect(state).toEqual(initialState);
  });
});
