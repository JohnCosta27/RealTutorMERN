import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { grey, teal } from '@material-ui/core/colors';
// A custom theme for this app
let theme = createMuiTheme({
	palette: {
		primary: {
			main: grey[900],
		},
		secondary: {
			main: teal[500],
		},
		offWhite: {
			main: '#FAFAFA'
		},
		lightTeal: {
			main: teal[200]
		},
		cards: '#FFFFFF',
		divBackground: '#009688',
		leftNav: '#313131',
		lightText: '#DDDDDD',
	},
	typography: {
		fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
		h1: {
			fontSize: '4em',
			color: grey[900],
		},
		h3: {
			fontWeight: 'lighter',
		},
		h4: {
			fontWeight: 'lighter'
		},
		h5: {
			fontWeight: 'lighter'
		},
		body2: {
			fontWeight: 'lighter',
			fontSize: '20px',
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
	zIndex: {
		drawer: 0
	}
});

theme = responsiveFontSizes(theme);
export default theme;
