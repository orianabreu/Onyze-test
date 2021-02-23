import React from 'react';
import {ThemeProvider} from '@material-ui/core';
import theme from './styles/theme';
import {MainContainer} from './styles/theme';
import Passenger from './PassengerInfo';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Passenger />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
