import React from 'react';
import './App.css';
//Pages
import Dashboard from '../pages/Dashboard';
import Login from '../Login';
import StudentDashboard from '../pages/StudentDashboard';
import Lessons from '../pages/Lessons';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/studentdashboard" component={StudentDashboard} />
    <Route path="/lessons" component={Lessons} />
    </Switch>
    </Router>
    );
  }
export default App;
  