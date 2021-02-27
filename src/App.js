import React from 'react';
import {ThemeProvider} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './styles/theme';
import {MainContainer} from './styles/theme';
import PassengerInfo from './PassengerInfo';
import passengers from './passengers';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainContainer>
        {passengers.map(({id, ...rest}) => <PassengerInfo key={id} id={id} {...rest} />)}
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
