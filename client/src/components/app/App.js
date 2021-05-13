import React from 'react';
import './App.css';
//Pages
import Login from '../pages/Login';
import StudentDashboard from '../pages/StudentDashboard';
import TutorDashboard from '../pages/TutorDashboard';
import MainPage from '../pages/MainPage';
import StripeTest from '../pages/StripeTest';
import SubjectPage from '../pages/SubjectPage';
import HowItWorks from '../pages/HowItWorks';
import Team from '../pages/Team';

import ALevelMaths from '../subjects/Alevelmaths';
import ALevelFurtherMaths from '../subjects/Alevelfurthermaths';
import ALevelPhysics from '../subjects/Alevelphysics';
import ALevelArt from '../subjects/Alevelart';
import AlevelEconomics from '../subjects/AlevelEconomics';
import ALevelComputerScience from '../subjects/Alevelcomputerscience';
import GCSEComputerScience from '../subjects/GCSEcomputerscience';

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
					<Route path="/how-it-works" component={HowItWorks} />
					<Route path="/team" component={Team} />
					<Route exact path="/subjects" component={SubjectPage} />
					<Route exact path="/alevelmaths" component={ALevelMaths} />
					<Route exact path="/alevelfurthermaths" component={ALevelFurtherMaths} />
					<Route exact path="/alevelphysics" component={ALevelPhysics} />
					<Route exact path="/alevelart" component={ALevelArt} />
					<Route exact path="/aleveleconomics" component={AlevelEconomics} />
					<Route exact path="/alevelcomputerscience" component={ALevelComputerScience} />
					<Route exact path="/gcsecomputerscience" component={GCSEComputerScience} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
}
export default App;
