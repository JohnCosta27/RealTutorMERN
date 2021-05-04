import React from 'react';
import './App.css';
//Pages
import Login from '../pages/Login';
import StudentDashboard from '../pages/StudentDashboard';
import TutorDashboard from '../pages/TutorDashboard';
import MainPage from '../pages/MainPage';
import StripeTest from '../pages/StripeTest';
import SubjectPage from '../pages/SubjectPage';

import ALevelMaths from '../subjects/Alevelmaths';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route path="/login" component={Login} />
					<Route
						path="/studentdashboard"
						component={StudentDashboard}
					/>
					<Route path="/tutordashboard" component={TutorDashboard} />
					<Route path="/stripe" component={StripeTest} />
					<Route path="/subjects" component={SubjectPage} />
					<Route path="/subjects/alevelmaths" component={ALevelMaths} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
}
export default App;
