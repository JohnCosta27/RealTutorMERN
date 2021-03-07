import React from 'react';
import './App.css';
//Pages
import Dashboard from '../pages/Dashboard';
import Login from '../Login';
import StudentDashboard from '../pages/StudentDashboard';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/studentdashboard" component={StudentDashboard} />
    </Switch>
    </Router>
    );
  }
export default App;
  