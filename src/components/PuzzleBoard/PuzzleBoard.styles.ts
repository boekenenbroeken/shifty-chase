import styled from 'styled-components';

const StyledPuzzleBoard = styled.div`
  background-color: #aaaaaa;
  display: grid;
  grid-template-columns: ${props => `repeat(${props.size}, 1fr)`};
  grid-template-rows: ${props => `repeat(${props.size}, 1fr)`};
  width: 500px;
  height: 500px;
`;

export { StyledPuzzleBoard };
