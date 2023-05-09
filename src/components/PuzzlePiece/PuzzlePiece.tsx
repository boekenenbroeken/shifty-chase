import { StyledPuzzlePiece } from './PuzzlePiece.style';
import { getPosition } from './utils/getPosition';

type Props = {
  value: number;
  size?: number;
  initialX: number;
  initialY: number;
  onClick: () => void;
};

const PuzzlePiece = ({ size, value, onClick, initialX, initialY }: Props) => {
  const [positionX, positionY] = getPosition({
    size,
    rowIndex: initialY,
    colIndex: initialX
  });

  return (
    <StyledPuzzlePiece
      data-testid="puzzle-piece"
      onClick={onClick}
      size={size}
      value={value}
      backgroundSize={`${size * 100}%`}
      backgroundPosition={`${positionX}% ${positionY}%`}
    >
      {value === 0 ? '' : value}
    </StyledPuzzlePiece>
  );
};

export { PuzzlePiece };
