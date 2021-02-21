import React from 'react';
import {ThemeProvider} from '@material-ui/core';
import theme from './styles/theme';
import Passenger from './PassengerInfo';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Passenger />
    </ThemeProvider>
  );
}

export default App;
