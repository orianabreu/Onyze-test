import React from 'react';
import {ThemeProvider} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './styles/theme';
import {MainContainer} from './styles/theme';
import Passenger from './PassengerInfo';
import passengers from './passengers';

function createPassenger(person) {
  return (<Passenger 
    key={person.id}
    id={person.id}
    img={person.imgURL}
    name={person.name}
    email={person.email}
    phone={person.phone}
    location={person.location}
    departure={person.departure}
    address1={person.address1}
    arrival={person.arrival}
    address2={person.address2}
  />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainContainer>
        {passengers.map(createPassenger)}
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
