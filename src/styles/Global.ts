import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  background: ${(props) => props.theme.background};
  font: 400 1rem 'Poppins', sans-serif;
}


* {
  box-sizing: border-box;
}

`;
