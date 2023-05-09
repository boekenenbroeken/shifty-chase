import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  font-family: 'Press Start 2P', serif;
  width: 250px;
  height: 50px;
  border: none;
  position: relative;
  color: white;
  text-transform: uppercase;
  font-size: 20px;
  -webkit-text-stroke: 1px #532c2c;

  ${({ theme }) =>
    theme === 'pink'
      ? css`
          background: #f67a9f;
          box-shadow: inset -2px 2px 1px 1px #93495f,
            inset -2px -2px 1px 1px #93495f, inset 2px 0px 1px 1px #93495f;
        `
      : theme === 'blue'
      ? css`
          background: #4dbeb9;
          box-shadow: inset -2px 2px 1px 1px #0e6360,
            inset -2px -2px 1px 1px #0e6360, inset 2px 0px 1px 1px #0e6360;
        `
      : css`
          background: #ffd282;
          box-shadow: inset -2px 2px 1px 1px #98783a,
            inset -2px -2px 1px 1px #98783a, inset 2px 0px 1px 1px #98783a;
        `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  &:not(:disabled):active {
    top: 2px;
  }

  &::after,
  &::before {
    content: '';
    background: #000;
    position: absolute;
    z-index: -1;
  }

  &::after {
    left: -2%;
    top: 0;
    width: 104%;
    height: 100%;
  }

  &::before {
    left: 0;
    top: -5%;
    width: 100%;
    height: 110%;
    z-index: -2;
  }
`;

export { StyledButton };
