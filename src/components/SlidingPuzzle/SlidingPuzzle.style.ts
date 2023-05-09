import styled from 'styled-components';

const StyledImg = styled.img`
  margin: 60px 0;
  width: 100%;
  aspect-ratio: 1/1;
  max-width: 500px;
  max-height: 500px;
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

export { StyledImg, StyledButtonsContainer };
