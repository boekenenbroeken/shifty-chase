import styled from 'styled-components';

import img from 'assets/images/great_wave.jpg';

type Props = {
  size: number;
  rowIndex: number;
  colIndex: number;
};

const StyledPuzzlePiece = styled.button<Props>`
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
`;

export { StyledPuzzlePiece };
