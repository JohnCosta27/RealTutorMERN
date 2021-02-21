import React from 'react';
import './App.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { grey, blueGrey, teal } from '@material-ui/core/colors';

import { BrowserRouter as Router, Route} from 'react-router-dom';

//Pages
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import StudentDashboard from './components/pages/StudentDashboard';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[500],
      background: teal[900],
      light: grey[100],
      text: '#DDDDDD',
      cards: grey[500]
    }
  },
typography: {
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
  