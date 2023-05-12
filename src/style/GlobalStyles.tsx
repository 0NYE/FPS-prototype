import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyles;
