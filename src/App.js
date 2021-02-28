import React from "react";
import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme, { MainContainer } from "./styles/theme";

import PassengerInfo from "./components/PassengerInfo";
import passengers from "./data/passengers";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainContainer>
        {passengers.map(({ id, ...rest }) => (
          <PassengerInfo key={id} id={id} {...rest} />
        ))}
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
