import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;

 


}

  html {
    ::-webkit-scrollbar {
  width:7px;
  height: 7px;
}
 
::-webkit-scrollbar-track {
  background:rgba(0, 0, 0, 0.2);
  border-radius: 20px;

}
 

::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background: #ff6d6d;

}
overflow-y: auto;

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