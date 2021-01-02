import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
body {
  background: #F0F2F5;
  color: #1C1E21;
  -webkit-font-smoothing: antialiased;
}
body, input, button {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}
button {
  cursor: pointer;
}

li, ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
}
`;