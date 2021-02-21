import React from 'react';
import './App.css';

import { createMuiTheme } from '@material-ui/core/styles';
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
      text: '#DDDDDD'
    }
  }
});

function App() {
  return (
    <Router>
      <Route exact path="/" render={(props) => (<Dashboard theme={theme}></Dashboard>)}></Route>
      <Route path="/login" render={(props) => (<Login theme={theme}></Login>)}></Route>
      <Route path="/studentdashboard" render={(props) => (<StudentDashboard theme={theme}></StudentDashboard>)}></Route>
    </Router>
    );
  }
  
  export default App;
  