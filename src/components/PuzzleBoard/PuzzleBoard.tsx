import { PuzzlePiece } from 'components/PuzzlePiece';
import type { Board } from 'store/board/types';

import { StyledPuzzleBoard } from './PuzzleBoard.styles';

type Props = {
  board: Board;
  onMove: (y: number, x: number) => void;
};

const PuzzleBoard = ({ board, onMove }: Props) => (
  <StyledPuzzleBoard size={board.length} data-testid="puzzle-board">
    {board.map((row, rowIndex) =>
      row.map(({ value, x, y }, colIndex) => (
        <PuzzlePiece
          key={value}
          value={value}
          initialX={x}
          initialY={y}
          size={board.length}
          onClick={() => {
            onMove(rowIndex, colIndex);
          }}
        />
      ))
    )}
  </StyledPuzzleBoard>
);

export { PuzzleBoard };
