import styled from 'styled-components';

const gradient = `
  background: linear-gradient(
    90deg,
    #f0779f 0%,
    #fbee00 25%,
    #6cc4a7 50%,
    #01bceb 100%
  );
`;

const gradientBackwards = `
  background: linear-gradient(
    90deg,
    #01bceb 0%,
    #6cc4a7 25%,
    #fbee00 50%,
    #f0779f 100%
  );
`;

const textEffects = `
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #532c31;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const StyledHeading = styled.h1`
  font-size: 72px;
  position: relative;
  font-family: 'Tomorrow', sans-serif;
  text-align: center;
  line-height: normal;
  ${gradient}
  ${textEffects}

  &::after,
  &::before {
    content: ${({ children }) => `'${children}'`};
    width: 100%;
    position: absolute;
  }

  &::after {
    left: -3px;
    top: 3px;
    z-index: -1;
    ${gradientBackwards}
    ${textEffects}
  }

  &::before {
    left: -6px;
    top: 6px;
    z-index: -2;
    ${gradient}
    ${textEffects}
  }
`;

export { StyledHeading };
