import { reducer } from '../reducer';
import { Action, BoardState } from '../types';

describe('reducer', () => {
  describe('when given a "move" action', () => {
    const initialState = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 0, 8]
    ];

    it('should move the piece and return the new board state', () => {
      const action = { type: 'move', y: 1, x: 1 } as Action;
      const expectedState = [
        [1, 2, 3],
        [4, 0, 6],
        [7, 5, 8]
      ];

      expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('should not move the piece if it is not adjacent to the empty space', () => {
      const action = { type: 'move', y: 0, x: 0 } as Action;

      expect(reducer(initialState, action)).toEqual(initialState);
    });
  });

  describe('default', () => {
    it('should return the state', () => {
      const initialState = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 0, 8]
      ];

      const action = { type: 'unknown' } as unknown as Action;

      expect(reducer(initialState, action)).toEqual(initialState);
    });
  });

  describe('shuffle', () => {
    it('should shuffle the board state', () => {
      const initialState: BoardState = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 0]
      ];

      const action: Action = { type: 'shuffle' };

      // Ensure that the shuffled board state is different from the initial state
      const shuffledState = reducer(initialState, action);
      expect(shuffledState).not.toEqual(initialState);

      // Ensure that the shuffled board state has the same dimensions as the initial state
      expect(shuffledState.length).toEqual(initialState.length);
      expect(shuffledState[0].length).toEqual(initialState[0].length);

      // Ensure that the shuffled board state has the same elements as the initial state
      const flattenedInitialState = initialState.flat();
      const flattenedShuffledState = shuffledState.flat();

      expect(flattenedShuffledState).toHaveLength(flattenedInitialState.length);
      expect(flattenedShuffledState.sort()).toEqual(
        flattenedInitialState.sort()
      );
    });
  });
});
