import React, { useState, useEffect } from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';

import { teal } from '@material-ui/core/colors';

const MainPage = () => {
	const [enter, setEnter] = useState(false);

	const useStyles = makeStyles((theme) => ({
		banner: {
			width: '100%',
			height: 800,
			backgroundImage: `url("https://www.oxygenna.com/wp-content/uploads/2015/11/18.jpg")`,
			display: 'flex',
			flexDirection: 'column',
			position: 'relative',
		},
		centeredWrapper: {
			width: '80%',
			marginLeft: '10%',
			position: 'absolute',
			bottom: 0,
		},
		bannerImage: {
			width: '100%',
			height: '100%',
			objectFit: 'cover',
		},
		name: {
			width: '80%',
			marginLeft: '10%',
			marginTop: 75,
		},
		bigText: {
			[theme.breakpoints.down('sm')]: {
				fontSize: 50,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 100,
			},
		},
		sectionWrapper: {
			backgroundColor: '#fafafa',
			width: '100%',
			display: 'flex',
			height: '100vh',
		},
		sectionPaper: {
			width: '80%',
			height: '97.5%',
			marginTop: '1.25%',
			marginBottom: '1.25%',
			marginLeft: '10%',
			marginRight: '10%',
			display: 'flex',
			paddingTop: 20,
			paddingLeft: 20,
			paddingBottom: 20,
			paddingRight: 20,
		},
		card: {
			width: '100%',
		},
	}));

	const classes = useStyles();

	useEffect(() => {
		handleChange();
		setTimeout(() => {
			setEnter(true);
		}, 1000);
	}, []);

	const [checked, setChecked] = React.useState(false);

	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	return (
		<div>
			<AppBar position="absolute" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" noWrap>
						Real Tutor
					</Typography>
				</Toolbar>
			</AppBar>
			<div className={classes.banner}>
				<div className={classes.name}>
					<Typography variant="h1" style={{ fontSize: 120 }}>
						A new approach to teaching
					</Typography>
				</div>
				<Slide in={checked} timeout={1500} in={enter} direction="left">
					<div className={classes.centeredWrapper}>
						<Typography variant="h1" className={classes.bigText}>
							£20 an hour
						</Typography>
						<Typography variant="h1">
							The future is online
						</Typography>
					</div>
				</Slide>
			</div>
			<div>
				<div
					className={classes.sectionWrapper}
					style={{
						backgroundImage: `url("https://i.imgur.com/bdZ8fF6.png")`,
						backgroundColor: '#FAFAFA',
					}}
				>
					<div className={classes.sectionPaper}>
						<div className={classes.card} style={{ flex: 5 }}>
							<Typography variant="h2">
								Our goal is to provide seriously good and
								affordable tuition.
							</Typography>
							<br></br>
							<Typography variant="body2">
								This is some inspirational text to make
								customers feel like they want to have us and
								that we are really coolk or something.
							</Typography>
						</div>
					</div>
				</div>
				<div
					className={classes.sectionWrapper}
					style={{
						backgroundColor: teal[200],
						backgroundImage: `url("https://i.imgur.com/bdZ8fF6.png")`,
						backgroundPositionY: "-100vh"
					}}
				></div>
			</div>
		</div>
	);
};

export default MainPage;
