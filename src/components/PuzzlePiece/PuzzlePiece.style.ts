import styled from 'styled-components';

import img from 'assets/images/great_wave.jpg';

interface PuzzlePieceProps {
  size: number;
  rowIndex: number;
  colIndex: number;
}

const StyledPuzzlePiece = styled.button<PuzzlePieceProps>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid white;
  background-image: ${props => (props.value === 0 ? undefined : `url(${img})`)};
  cursor: pointer;
  background-size: ${props => props.backgroundSize};
  background-position: ${props => props.backgroundPosition};
  color: red;
  font-size: 20px;
  font-weight: bold;
  color: white;
  -webkit-text-stroke: 1px black;
`;

export { StyledPuzzlePiece };
