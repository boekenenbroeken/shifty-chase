import styled from 'styled-components';

const StyledPuzzleBoard = styled.div`
  background-color: #5fc3ae;
  display: grid;
  grid-template-columns: ${props => `repeat(${props.size}, 1fr)`};
  grid-template-rows: ${props => `repeat(${props.size}, 1fr)`};
  max-width: 500px;
  max-height: 500px;
  width: 100%;
  aspect-ratio: 1/1;
  margin-bottom: ${props => (props.isSolved ? '0' : '60px')};
`;

export { StyledPuzzleBoard };
