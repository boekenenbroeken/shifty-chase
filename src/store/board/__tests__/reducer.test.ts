import { reducer } from '../reducer';
import type { Action } from '../types';

describe('reducer', () => {
  describe('init', () => {
    it('should initialize the board and shuffle it', () => {
      const initialState = {
        initialBoard: null,
        currentBoard: null,
        isSolved: false
      };
      const action: Action = { type: 'init', size: 3 };
      const newState = reducer(initialState, action);

      expect(newState.initialBoard).toHaveLength(3);
      expect(newState.currentBoard).toHaveLength(3);
      expect(newState.isSolved).toBe(false);

      // Ensure that the board is shuffled
      const flatInitial = newState.initialBoard.flat().map(item => item.value);
      const flatCurrent = newState.currentBoard.flat().map(item => item.value);
      expect(flatInitial).not.toEqual(flatCurrent);
    });

    it('should shuffle the board when the "shuffle" action is dispatched', () => {
      const board = [
        [
          { value: 1, x: 0, y: 0 },
          { value: 2, x: 1, y: 0 }
        ],
        [
          { value: 3, x: 0, y: 1 },
          { value: 0, x: 1, y: 1 }
        ]
      ];
      const state = {
        initialBoard: board,
        currentBoard: board,
        isSolved: false
      };
      const action: Action = { type: 'shuffle' };
      const nextState = reducer(state, action);
      expect(nextState.initialBoard).not.toEqual(nextState.currentBoard);
      expect(nextState.currentBoard).toHaveLength(
        nextState.initialBoard.length
      );
      expect(nextState.currentBoard[0]).toHaveLength(
        nextState.initialBoard[0].length
      );
      expect(nextState.currentBoard[1]).toHaveLength(
        nextState.initialBoard[1].length
      );
    });
  });

  describe('move', () => {
    it('should swap two puzzle pieces', () => {
      const initialState = {
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
            { value: 4, x: 0, y: 0 },
            { value: 2, x: 1, y: 0 },
            { value: 3, x: 2, y: 0 }
          ],
          [
            { value: 1, x: 0, y: 1 },
            { value: 5, x: 1, y: 1 },
            { value: 6, x: 2, y: 1 }
          ],
          [
            { value: 7, x: 0, y: 2 },
            { value: 8, x: 1, y: 2 },
            { value: 0, x: 2, y: 2 }
          ]
        ],
        isSolved: false
      };
      const action: Action = { type: 'move', y: 0, x: 0, moveY: 0, moveX: 1 };
      const newState = reducer(initialState, action);

      expect(newState.currentBoard[0][0].value).toBe(2);
      expect(newState.currentBoard[0][1].value).toBe(4);
      expect(newState.isSolved).toBe(false);
    });

    it('should do nothing if puzzle piece cannot be moved', () => {
      const initialBoard = [
        [
          { value: 1, x: 0, y: 0 },
          { value: 2, x: 1, y: 0 }
        ],
        [
          { value: 3, x: 1, y: 1 },
          { value: 0, x: 0, y: 1 }
        ]
      ];
      const currentBoard = [
        [
          { value: 1, x: 0, y: 0 },
          { value: 2, x: 1, y: 0 }
        ],
        [
          { value: 0, x: 1, y: 1 },
          { value: 3, x: 0, y: 1 }
        ]
      ];

      const state = {
        initialBoard: initialBoard,
        currentBoard: currentBoard,
        isSolved: false
      };

      const action: Action = { type: 'move', y: 0, x: 0, moveY: 0, moveX: 0 };
      const nextState = reducer(state, action);

      expect(nextState).toEqual(state);
    });
  });

  describe('default', () => {
    it('should return the state', () => {
      const initialState = {
        initialBoard: null,
        currentBoard: null,
        isSolved: false
      };

      const action = { type: 'unknown' } as unknown as Action;

      expect(reducer(initialState, action)).toEqual(initialState);
    });
  });
});
