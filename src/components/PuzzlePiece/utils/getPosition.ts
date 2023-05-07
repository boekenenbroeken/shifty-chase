const getPosition = ({
  size,
  rowIndex,
  colIndex
}: {
  size: number;
  rowIndex: number;
  colIndex: number;
}) => {
  const x = Math.round((100 / (size - 1)) * colIndex);
  const y = Math.round((100 / (size - 1)) * rowIndex);

  return [x, y];
};

export { getPosition };
