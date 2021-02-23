import React from 'react';
import './App.css';

import { createMuiTheme, rgbToHex, ThemeProvider } from '@material-ui/core/styles';
import { grey, blueGrey, teal } from '@material-ui/core/colors';

import { BrowserRouter as Router, Route} from 'react-router-dom';

//Pages
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import StudentDashboard from './components/pages/StudentDashboard';

const theme = createMuiTheme({
  palette: {
    p: {
      main: blueGrey[500],
      background: teal[500],
      light: grey[100],
      text: '#DDDDDD',
      cards: grey[900]
    },
    primary: teal,
    secondary: grey,
    cards: '#FFFFFF',
    divBackground: "#009688"
  },
typography: {
  fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  h1: {
    fontSize: "5em",
    color: grey[900]
  }
}});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <Route exact path="/" render={(props) => (<Dashboard theme={theme}></Dashboard>)}></Route>
    <Route path="/login" render={(props) => (<Login theme={theme}></Login>)}></Route>
    <Route path="/studentdashboard" render={(props) => (<StudentDashboard theme={theme}></StudentDashboard>)}></Route>
    </Router>
    </ThemeProvider>
    );
  }
  
  export default App;
  