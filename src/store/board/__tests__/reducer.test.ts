import { createBoard } from 'utils/createBoard';
import { reducer } from '../reducer';
import { Action, ActionTypes } from '../types';

const BLANK_STATE = {
  initialBoard: null,
  currentBoard: null,
  level: 0,
  isSolved: false
};

describe('reducer', () => {
  describe('init', () => {
    it('should initialize the board and shuffle it', () => {
      const action: Action = { type: ActionTypes.INIT, size: 3 };
      const newState = reducer(BLANK_STATE, action);

      expect(newState.initialBoard).toHaveLength(3);
      expect(newState.initialBoard[0]).toHaveLength(3);
      expect(newState.currentBoard).toHaveLength(3);
      expect(newState.currentBoard[0]).toHaveLength(3);
      expect(newState.isSolved).toBe(false);
      expect(newState.level).toBe(3);

      // Ensure that the board is shuffled
      const flatInitial = newState.initialBoard.flat().map(item => item.value);
      const flatCurrent = newState.currentBoard.flat().map(item => item.value);
      expect(flatInitial).not.toEqual(flatCurrent);
    });

    it('should shuffle the board when the "shuffle" action is dispatched', () => {
      const level = 2;
      const board = createBoard(level);

      const state = {
        initialBoard: board,
        currentBoard: board,
        level,
        isSolved: false
      };

      const action: Action = { type: ActionTypes.SHUFFLE };
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
        level: 3,
        isSolved: false
      };
      const action: Action = {
        type: ActionTypes.MOVE,
        y: 0,
        x: 0,
        moveY: 0,
        moveX: 1
      };
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
        level: 3,
        isSolved: false
      };

      const action: Action = {
        type: ActionTypes.MOVE,
        y: 0,
        x: 0,
        moveY: 0,
        moveX: 0
      };
      const nextState = reducer(state, action);

      expect(nextState).toEqual(state);
    });
  });

  describe('levelup', () => {
    it('should increase the level and expand the board', () => {
      const initialState = reducer(BLANK_STATE, {
        type: ActionTypes.INIT,
        size: 3
      });
      const nextLevelState = reducer(initialState, {
        type: ActionTypes.LEVELUP
      });

      expect(nextLevelState.level).toEqual(4);
      expect(nextLevelState.initialBoard.length).toEqual(4);
      expect(nextLevelState.initialBoard[0].length).toEqual(4);
      expect(nextLevelState.currentBoard.length).toEqual(4);
      expect(nextLevelState.currentBoard[0].length).toEqual(4);
      expect(nextLevelState.isSolved).toEqual(false);
    });
  });

  describe('default', () => {
    it('should return the state', () => {
      const action = { type: 'unknown' } as unknown as Action;

      expect(reducer(BLANK_STATE, action)).toEqual(BLANK_STATE);
    });
  });
});
