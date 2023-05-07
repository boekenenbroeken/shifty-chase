import type { State } from '../types';
import { reducer } from '../reducer';
import { Action } from '../types';

const initialState: State = [
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
];

describe('reducer', () => {
  describe('when given a "move" action', () => {
    it('should move the piece and return the new board state', () => {
      const action = { type: 'move', y: 2, x: 1 } as Action;
      const expectedState = [
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
          { value: 0, x: 2, y: 2 },
          { value: 8, x: 1, y: 2 }
        ]
      ];

      expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('should not move the piece if it is not adjacent to the empty space', () => {
      const action = { type: 'move', y: 0, x: 0 } as Action;

      expect(reducer(initialState, action)).toEqual(initialState);
    });
  });

  describe('shuffle', () => {
    it('should shuffle the board state', () => {
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

      expect(flattenedShuffledState.sort((a, b) => a.value - b.value)).toEqual(
        flattenedInitialState.sort((a, b) => a.value - b.value)
      );
    });
  });

  describe('default', () => {
    it('should return the state', () => {
      const action = { type: 'unknown' } as unknown as Action;

      expect(reducer(initialState, action)).toEqual(initialState);
    });
  });
});
