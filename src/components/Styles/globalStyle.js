import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #eee;
  }

  .dark {
  background: black;
}
.dark h1 {
  color: white;
}
`;
 
export default GlobalStyle
