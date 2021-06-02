import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import LeftDrawer from '../general/LeftDrawer';

import PlanLesson from '../FeatureComponents/PlanLesson';
import StudentList from '../FeatureComponents/StudentList';
import AddReport from '../FeatureComponents/AddReport';
import Progress from '../FeatureComponents/Progress';
import StudentLessons from '../FeatureComponents/StudentLessons';
import BigLesson from '../general/BigLesson';

const StudentDashboard = () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	const useStyles = makeStyles((theme) => ({
		studentNameWrapper: {
			flex: 1,
		},
		studentNameText: {
			textAlign: 'center',
		},
		paper: {
			margin: 5,
			textAlign: 'center',
			height: 350,
			borderRadius: 10,
		},
		cardsWrapper: {
			width: '90%',
			marginLeft: '5%',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
		},
		cardContent: {
			flex: 5,
			display: 'flex',
			flexDirection: 'column',
		},
		cardAction: {
			width: '50%',
			marginLeft: '25%',
			marginBottom: 10,
			flex: 1,
			display: 'flex',
			justifyContent: 'center',
		},
		button: {
			marginLeft: 5,
			marginRight: 5,
		},
		content: {
			flexGrow: 1,
			backgroundColor: theme.palette.background.default,
			padding: theme.spacing(3),
			marginTop: 50,
		},
		componentWrapper: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	}));

	const [auth, setAuth] = useState({ empty: true });
	const [current, setCurrent] = useState(0);
	const [name, setName] = useState("");

	useEffect(() => {
		getAuth();
	}, []);

	const getAuth = async () => {
		const response = await fetch('/accounts/auth', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		});

		const data = await response.json();

		if (data.level >= 2 && urlParams.get('tutorid') != data.id) {
			document.location.href = 'tutordashboard?tutorid=' + data.id;
		} else if (data.level == 1 && urlParams.get('studentid') != data.id) {
			document.location.href = 'studentdashboard?studentid=' + data.id;
		}

		if (data.level == 2) {
			setName(data.name);
		} else {
			const getName = await fetch(
				'/accounts/getname?tutorid=' +
					urlParams.get('tutorid'),
				{
					method: 'GET',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					credentials: 'include',
				}
			);

			const name = await getName.json();
			setName(name.name);
		}

		setAuth(data);
	};

	const logout = async () => {
		const response = await fetch('/accounts/logout', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		});

		const data = await response.json();
		document.location.href = '/';
		document.cookie = '';

	}

	const classes = useStyles();

	if (auth.level <= 1) {
		document.location.href = "/login";
	} else if (auth.level >= 2) {
		return (
			<div className="App">
				<LeftDrawer changeState={setCurrent} level={3} logout={logout}/>
				<div className={classes.content}>
					<div className={classes.studentNameWrapper}>
						<Typography variant="h1">{name}</Typography>
					</div>

					<br></br>

					<div className={classes.componentWrapper}>
						{current === 0 ? (
							<StudentList level={auth.level} />
						) : (
							<div></div>
						)}
						{current === 1 ? (
							<StudentLessons level={2} />
						) : (
							<div></div>
						)}
					</div>
				</div>
			</div>
		);
	} else {
		return <div></div>;
	}
};
export default StudentDashboard;
