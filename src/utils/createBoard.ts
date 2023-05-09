const createBoard = (size: number) => {
  return Array.from({ length: size }).map((_row, rowIndex) =>
    Array.from({ length: size }).map((_col, colIndex) => {
      const lastIndex = size - 1;
      const isLast = rowIndex === lastIndex && colIndex === lastIndex;

      return {
        value: isLast ? 0 : size * rowIndex + colIndex + 1,
        x: colIndex,
        y: rowIndex
      };
    })
  );
};

export { createBoard };
