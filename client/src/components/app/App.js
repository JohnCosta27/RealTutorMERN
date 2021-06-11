import React, { useEffect } from 'react';
import './App.css';
//Pages
import Login from '../pages/Login';
import StudentDashboard from '../pages/StudentDashboard';
import TutorDashboard from '../pages/TutorDashboard';
import ManagerDashboard from '../pages/ManagerDashboard';
import MainPage from '../pages/MainPage';
import SubjectPage from '../pages/SubjectPage';
import HowItWorks from '../pages/HowItWorks';
import Team from '../pages/Team';
import Payment from '../pages/Payment';

import ALevelMaths from '../subjects/Alevelmaths';
import ALevelFurtherMaths from '../subjects/Alevelfurthermaths';
import ALevelPhysics from '../subjects/Alevelphysics';
import ALevelChemistry from '../subjects/Alevelchemistry';
import ALevelBiology from '../subjects/Alevelbiology';
import ALevelArt from '../subjects/Alevelart';
import AlevelEconomics from '../subjects/AlevelEconomics';
import ALevelComputerScience from '../subjects/Alevelcomputerscience';
import GCSEComputerScience from '../subjects/GCSEcomputerscience';
import GCSEPhysics from '../subjects/GCSEphysics';
import GCSEChemistry from '../subjects/GCSEchemistry';
import GCSEBiology from '../subjects/GCSEbiology';

import PrivacyPolicy from '../pages/PrivacyPolicy';
import Manifesto from '../pages/Manifesto';
import ContactUs from '../pages/ContactUs';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	useLocation,
} from 'react-router-dom';

import ReactGA from 'react-ga';

function usePageViews() {
	let location = useLocation();
	useEffect(() => {
		if (!window.GA_INITIALIZED) {
			ReactGA.initialize('UA-169952657-1');
			window.GA_INITIALIZED = true;
		}
		ReactGA.set({ page: location.pathname });
		ReactGA.pageview(location.pathname);
	}, [location]);
}

function App() {
	console.log("dsa")
	usePageViews();
	return (
		<Switch>
			<Route exact path="/" component={MainPage} />
			<Route path="/login" component={Login} />
			<Route path="/studentdashboard" component={StudentDashboard} />
			<Route path="/tutordashboard" component={TutorDashboard} />
			<Route path="/managerdashboard" component={ManagerDashboard} />
			<Route path="/payment" component={Payment} />
			<Route path="/how-it-works" component={HowItWorks} />
			<Route path="/team" component={Team} />
			<Route path="/contactus" component={ContactUs} />
			<Route exact path="/subjects" component={SubjectPage} />
			<Route exact path="/alevelmaths" component={ALevelMaths} />
			<Route
				exact
				path="/alevelfurthermaths"
				component={ALevelFurtherMaths}
			/>
			<Route exact path="/alevelphysics" component={ALevelPhysics} />
			<Route exact path="/alevelchemistry" component={ALevelChemistry} />
			<Route exact path="/alevelbiology" component={ALevelBiology} />
			<Route exact path="/alevelart" component={ALevelArt} />
			<Route exact path="/aleveleconomics" component={AlevelEconomics} />
			<Route
				exact
				path="/alevelcomputerscience"
				component={ALevelComputerScience}
			/>
			<Route
				exact
				path="/gcsecomputerscience"
				component={GCSEComputerScience}
			/>
			<Route exact path="/gcsephysics" component={GCSEPhysics} />
			<Route exact path="/gcsechemistry" component={GCSEChemistry} />
			<Route exact path="/gcsebiology" component={GCSEBiology} />
			<Route exact path="/privacypolicy" component={PrivacyPolicy} />
			<Route exact path="/manifesto" component={Manifesto} />
		</Switch>
	);
}
export default App;
