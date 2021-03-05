import { createMuiTheme } from '@material-ui/core/styles';
import { grey, blueGrey, teal } from '@material-ui/core/colors';
// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: grey,
        cards: '#FFFFFF',
        divBackground: "#009688",
        background: teal
      },
    typography: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      h1: {
        fontSize: "5em",
        color: grey[900]
      }
    }
});
export default theme;