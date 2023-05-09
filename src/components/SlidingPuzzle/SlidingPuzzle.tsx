import { useReducer } from 'react';

import { PuzzleBoard } from 'components/PuzzleBoard';
import { Container } from 'components/Container';
import { Heading } from 'components/Heading';
import { Button } from 'components/Button';
import { MoveCount } from 'components/MoveCount';
import { Congrats } from 'components/Congrats';
import { AppState, BoardActionTypes } from 'store/types';
import { rootReducer } from 'store/rootReducer';
import { getMove } from 'store/board/utils';
import img from 'assets/images/great_wave.jpg';

import { StyledImg, StyledButtonsContainer } from './SlidingPuzzle.style';

type Props = {
  initialState: AppState;
};

const SlidingPuzzle = ({ initialState }: Props) => {
  const [{ board, moveCount }, dispatch] = useReducer(
    rootReducer,
    initialState
  );

  const handleMove = (y: number, x: number) => {
    if (!board.currentBoard) return;
    if (board.isSolved) return;

    const move = getMove(board.currentBoard, y, x);

    if (!move) return;

    const [moveY, moveX] = move;

    dispatch({ type: BoardActionTypes.MOVE, y, x, moveY, moveX });
  };

  const handleStart = () => {
    dispatch({ type: BoardActionTypes.INIT, size: 3 });
  };

  const handleShuffle = () => {
    dispatch({ type: BoardActionTypes.SHUFFLE });
  };

  const handleNextLevel = () => {
    dispatch({ type: BoardActionTypes.LEVELUP });
  };

  return (
    <Container>
      <Heading>Shifty chase</Heading>
      {board.currentBoard ? (
        <>
          <MoveCount count={moveCount} />
          <PuzzleBoard
            board={board.currentBoard}
            onMove={handleMove}
            isSolved={board.isSolved}
          />

          {board.isSolved && <Congrats />}
          <StyledButtonsContainer>
            <Button
              onClick={handleNextLevel}
              disabled={!board.isSolved}
              theme="blue"
            >
              Next level
            </Button>
            <Button onClick={handleShuffle}>Shuffle</Button>
          </StyledButtonsContainer>
        </>
      ) : (
        <>
          <StyledImg src={img} />
          <Button theme="pink" onClick={handleStart}>
            Start Game
          </Button>
        </>
      )}
    </Container>
  );
};

export { SlidingPuzzle };
