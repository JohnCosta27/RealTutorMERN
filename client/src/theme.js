import { createMuiTheme } from '@material-ui/core/styles';
import { grey, teal } from '@material-ui/core/colors';
// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: grey,
        cards: '#FFFFFF',
        divBackground: "#009688",
        leftNav: '#313131',
        lightText: '#DDDDDD'
      },
    typography: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      h1: {
        fontSize: "5em",
        color: grey[900]
      },
      h3: {
        fontWeight: "lighter"
      }
    }
});
export default theme;