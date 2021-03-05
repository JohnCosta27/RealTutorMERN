import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route} from 'react-router-dom';

//Pages
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import StudentDashboard from '../pages/StudentDashboard';

function App() {
  return (
    <Router>
    <Route exact path="/" render={(props) => (<Dashboard></Dashboard>)}></Route>
    <Route path="/login" render={(props) => (<Login></Login>)}></Route>
    <Route path="/studentdashboard" render={(props) => (<StudentDashboard></StudentDashboard>)}></Route>
    </Router>
    );
  }

  export default App;
  