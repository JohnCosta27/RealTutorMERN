import React from 'react';
import './App.css';
//Pages
import Dashboard from '../pages/Dashboard';
import Login from '../Login';
import StudentDashboard from '../pages/StudentDashboard';
import Lessons from '../pages/Lessons';
import PlanLesson from '../pages/PlanLesson';
import AddReport from '../pages/AddReport';
import Progress from '../pages/Progress';

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
    <Route exact path="/" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/studentdashboard" component={StudentDashboard} />
    <Route path="/lessons" component={Lessons} />
    <Route path="/planlesson" component={PlanLesson} />
    <Route path="/addreport" component={AddReport} />
    <Route path="/progress" component={Progress} />
    </Switch>
    </Router>
    </ThemeProvider>
    );
  }
export default App;
  