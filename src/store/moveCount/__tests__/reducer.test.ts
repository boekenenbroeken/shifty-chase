import type { AppActions } from 'store/types';
import { reducer } from '../reducer';
import { ActionTypes as BoardActionTypes } from '../../board/types';

describe('reducer', () => {
  it('should return the initial state', () => {
    const initialState = 0;
    const action = {} as AppActions;
    const state = reducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it('should handle the move action', () => {
    const initialState = 0;
    const action = { type: BoardActionTypes.MOVE } as AppActions;
    const state = reducer(initialState, action);

    expect(state).toEqual(initialState + 1);
  });

  it('should handle the shuffle action', () => {
    const initialState = 2;
    const action = { type: BoardActionTypes.SHUFFLE } as AppActions;
    const state = reducer(initialState, action);

    expect(state).toEqual(0);
  });

  it('should handle the levelup action', () => {
    const initialState = 2;
    const action = { type: BoardActionTypes.LEVELUP } as AppActions;
    const state = reducer(initialState, action);

    expect(state).toEqual(0);
  });

  it('should handle an unknown action', () => {
    const initialState = 0;
    const action = { type: 'unknown' };

    // @ts-expect-error
    const state = reducer(initialState, action);

    expect(state).toEqual(initialState);
  });
});
