import { create2DArray } from '../create2DArray';

describe('create2DArray', () => {
  const flatArray = [
    { value: 1, y: 0, x: 0 },
    { value: 2, y: 0, x: 0 },
    { value: 3, y: 0, x: 0 },
    { value: 4, y: 0, x: 0 },
    { value: 5, y: 0, x: 0 },
    { value: 6, y: 0, x: 0 }
  ];

  it('creates a 2D array from a flat array with the specified number of rows and columns', () => {
    const numRows = 2;
    const numCols = 3;
    const expectedOutput = [
      [
        { value: 1, y: 0, x: 0 },
        { value: 2, y: 0, x: 0 },
        { value: 3, y: 0, x: 0 }
      ],
      [
        { value: 4, y: 0, x: 0 },
        { value: 5, y: 0, x: 0 },
        { value: 6, y: 0, x: 0 }
      ]
    ];
    const result = create2DArray(flatArray, numRows, numCols);

    expect(result).toEqual(expectedOutput);
  });

  it('creates a 2D array from a flat array with a different number of rows and columns', () => {
    const numRows = 3;
    const numCols = 2;
    const expectedOutput = [
      [
        { value: 1, y: 0, x: 0 },
        { value: 2, y: 0, x: 0 }
      ],
      [
        { value: 3, y: 0, x: 0 },
        { value: 4, y: 0, x: 0 }
      ],
      [
        { value: 5, y: 0, x: 0 },
        { value: 6, y: 0, x: 0 }
      ]
    ];
    const result = create2DArray(flatArray, numRows, numCols);

    expect(result).toEqual(expectedOutput);
  });

  it('creates a 2D array from a flat array with one row', () => {
    const flatArray = [
      { value: 1, x: 0, y: 0 },
      { value: 2, x: 0, y: 0 },
      { value: 3, x: 0, y: 0 }
    ];
    const numRows = 1;
    const numCols = 3;
    const expectedOutput = [
      [
        { value: 1, x: 0, y: 0 },
        { value: 2, x: 0, y: 0 },
        { value: 3, x: 0, y: 0 }
      ]
    ];
    const result = create2DArray(flatArray, numRows, numCols);

    expect(result).toEqual(expectedOutput);
  });

  it('creates a 2D array from a flat array with one column', () => {
    const flatArray = [
      { value: 1, x: 0, y: 0 },
      { value: 2, x: 0, y: 0 },
      { value: 3, x: 0, y: 0 }
    ];
    const numRows = 3;
    const numCols = 1;
    const expectedOutput = [
      [{ value: 1, x: 0, y: 0 }],
      [{ value: 2, x: 0, y: 0 }],
      [{ value: 3, x: 0, y: 0 }]
    ];
    const result = create2DArray(flatArray, numRows, numCols);

    expect(result).toEqual(expectedOutput);
  });
});
