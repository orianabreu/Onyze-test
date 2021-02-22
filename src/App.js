import React from 'react';
import {ThemeProvider} from '@material-ui/core';
import theme from './styles/theme';
import Passenger from './PassengerInfo';
import Stepper from './TravelStepper';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Passenger />
      <Stepper />
    </ThemeProvider>
  );
}

export default App;
