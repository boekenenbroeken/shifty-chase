import { getMove } from '../getMove';

describe('getMove', () => {
  describe('it should return coordinates of the move', () => {
    it('move down', () => {
      const board = [
        [
          { value: 1, x: 0, y: 0 },
          { value: 2, x: 1, y: 0 },
          { value: 3, x: 2, y: 0 }
        ],
        [
          { value: 4, x: 0, y: 1 },
          { value: 0, x: 1, y: 1 },
          { value: 6, x: 2, y: 1 }
        ],
        [
          { value: 7, x: 0, y: 2 },
          { value: 8, x: 1, y: 2 },
          { value: 5, x: 2, y: 2 }
        ]
      ];

      const move = getMove(board, 0, 1);

      expect(move).toEqual([1, 1]);
    });

    it('move up', () => {
      const board = [
        [
          { value: 1, x: 0, y: 0 },
          { value: 0, x: 1, y: 0 },
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
          { value: 2, x: 2, y: 2 }
        ]
      ];

      const move = getMove(board, 1, 1);

      expect(move).toEqual([0, 1]);
    });

    it('move right', () => {
      const board = [
        [
          { value: 1, x: 0, y: 0 },
          { value: 2, x: 1, y: 0 },
          { value: 0, x: 2, y: 0 }
        ],
        [
          { value: 4, x: 0, y: 1 },
          { value: 3, x: 1, y: 1 },
          { value: 6, x: 2, y: 1 }
        ],
        [
          { value: 7, x: 0, y: 2 },
          { value: 8, x: 1, y: 2 },
          { value: 5, x: 2, y: 2 }
        ]
      ];

      const move = getMove(board, 0, 1);

      expect(move).toEqual([0, 2]);
    });

    it('move left', () => {
      const board = [
        [
          { value: 1, x: 0, y: 0 },
          { value: 2, x: 1, y: 0 },
          { value: 3, x: 2, y: 0 }
        ],
        [
          { value: 4, x: 0, y: 1 },
          { value: 0, x: 1, y: 1 },
          { value: 6, x: 2, y: 1 }
        ],
        [
          { value: 7, x: 0, y: 2 },
          { value: 8, x: 1, y: 2 },
          { value: 5, x: 2, y: 2 }
        ]
      ];

      const move = getMove(board, 1, 2);

      expect(move).toEqual([1, 1]);
    });
  });

  it('should return null if the move is not found', () => {
    const board = [
      [
        { value: 1, x: 0, y: 0 },
        { value: 2, x: 1, y: 0 },
        { value: 3, x: 2, y: 0 }
      ],
      [
        { value: 4, x: 0, y: 1 },
        { value: 0, x: 1, y: 1 },
        { value: 6, x: 2, y: 1 }
      ],
      [
        { value: 7, x: 0, y: 2 },
        { value: 8, x: 1, y: 2 },
        { value: 5, x: 2, y: 2 }
      ]
    ];

    const move = getMove(board, 0, 0);

    expect(move).toBeNull();
  });
});
