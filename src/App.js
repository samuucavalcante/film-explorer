import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Route from './routes';

import GlobalStyles from './styles/global';

const App = () => (
  <>
    <BrowserRouter>
      <Route />
    </BrowserRouter>
    <GlobalStyles />
  </>
)

export default App;