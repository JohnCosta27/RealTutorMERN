import React, {useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import LeftDrawer from '../general/LeftDrawer';
import ManagerDashboardComponent from '../FeatureComponents/ManagerDashboardComponent';
import ManagerStudentList from '../FeatureComponents/ManagerStudentList';

const ManagerDashboard = () => {

    const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

    const [auth, setAuth] = useState({empty: true});
    const [current, setCurrent] = useState(0);
    const [name, setName] = useState();

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

        if (data.level == 2) {
            document.location.href = 'tutordashboard?tutorid=' + data.id;
        } else if (data.level == 1) {
            document.location.href = 'studentdashboard?studentid=' + data.id;
        }

		if (data.level == 3) {
            if (urlParams.get('managerid') != data.id) {
                document.location.href = 'managerdashboard?managerid=' + data.id;
            }
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

    const useStyles = makeStyles((theme) => ({
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
        studentNameWrapper: {
			flex: 1,
		},
    }));

    const classes = useStyles();

    if (auth.level < 3) {
        document.location.href = "/login";
    } else {
        return (
			<div className="App">
				<LeftDrawer changeState={setCurrent} level={4} logout={logout}/>
				<div className={classes.content}>
					<div className={classes.studentNameWrapper}>
						<Typography variant="h1">{name}</Typography>
					</div>

					<br></br>

					<div className={classes.componentWrapper}>

                        {current === 0 ? (
                            <ManagerDashboardComponent />
                        ) : (
                            <div></div>
                        )}

						{current === 1 ? (
							<ManagerStudentList />
						) : (
							<div></div>	
						)}

					</div>
				</div>
			</div>
        );
    }

}

export default ManagerDashboard;