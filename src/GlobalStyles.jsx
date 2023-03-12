import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
    /* font-family: ${({ theme: { font } }) => font.family};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color:  ${({ theme: { colors } }) => colors.mainBg};
  color: ${({ theme: { colors } }) => colors.mainText};

  text-shadow: 10px 10px 30px ${({ theme: { colors } }) =>
    colors.startTextShadow},
     -10px -10px 30px ${({ theme: { colors } }) => colors.endTextShadow};

  -webkit-text-stroke: 1px ${({ theme: { colors } }) => colors.textStroke};
  -webkit-text-fill-color: ${({ theme: { colors } }) => colors.textFill};
  letter-spacing: 5px; */
}
 
/* h1, h2, h3, h4, p {} */

ul, ol {
  list-style: none;
}

img {
  display: block;
  width: 100%;
}

button {
    all: unset;
    cursor: pointer;
}
`;
