import React from 'react';
import {ThemeProvider} from '@material-ui/core';
import theme from './styles/theme';
import Passenger from './PassengerInfo';
import PaymentButtons from './PaymentButtons';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Passenger />
      <PaymentButtons />
    </ThemeProvider>
  );
}

export default App;
