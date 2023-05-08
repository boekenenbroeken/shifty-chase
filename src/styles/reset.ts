import { createGlobalStyle } from 'styled-components';

/* https://www.joshwcomeau.com/css/custom-css-reset/ */

/*
  1. Use a more-intuitive box-sizing model.
  2. Remove default margin
  3. Allow percentage-based heights in the application
  4. Add accessible line-height
  5. Improve text rendering
  6. Improve media defaults
  7. Remove built-in form typography styles
  8. Avoid text overflows
  9. Create a root stacking context
*/

const CSSReset = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root,
  #__next {
    isolation: isolate;
  }
`;

export { CSSReset };
