import React from 'react';
import {ThemeProvider} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './styles/theme';
import {MainContainer} from './styles/theme';
import Passenger from './PassengerInfo';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainContainer>
        <Passenger />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
