import React from 'react';
import './App.css';
//Pages
import Login from '../pages/Login';
import StudentDashboard from '../pages/StudentDashboard';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
    <Switch>
    <Route path="/login" component={Login} />
    <Route path="/studentdashboard" component={StudentDashboard} />
    </Switch>
    </Router>
    </ThemeProvider>
    );
  }
export default App;
  