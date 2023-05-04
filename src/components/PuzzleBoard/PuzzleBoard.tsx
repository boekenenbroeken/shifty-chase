import { PuzzlePiece } from 'components/PuzzlePiece';

type Props = {
  board: number[][];
  onMove: (y: number, x: number) => void;
};

const PuzzleBoard = ({ board, onMove }: Props) => {
  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', width: '240px' }}
      data-testid="puzzle-board"
    >
      {board.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <PuzzlePiece
            key={value}
            value={value}
            onClick={() => {
              onMove(rowIndex, colIndex);
            }}
          />
        ))
      )}
    </div>
  );
};

export { PuzzleBoard };
