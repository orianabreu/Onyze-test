import { createMuiTheme } from "@material-ui/core";
import styled from "styled-components";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
  palette: {
    primary: {
      main: "#1976d2",
      dark: "#3f51b5",
      light: "#aab6fe",
    },
    secondary: {
      main: "#388e3c",
      light: "#81c784",
    },
    grey: {
      light: "#9e9e9e",
    },
  },
});

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4f6fc;
  width: 100vw;
  min-height: 100vh;
  padding: 24px 0;
`;

export default theme;
