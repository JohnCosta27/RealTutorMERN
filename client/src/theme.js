import { createMuiTheme } from "@material-ui/core/styles";
import { grey, teal, deepOrange, deepPurple, green, cyan } from "@material-ui/core/colors";
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: teal[500]
    },
    cards: "#FFFFFF",
    divBackground: "#009688",
    leftNav: "#313131",
    lightText: "#DDDDDD",
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    h1: {
      fontSize: "5em",
      color: grey[900],
    },
    h3: {
      fontWeight: "lighter",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
  }
});
export default theme;
