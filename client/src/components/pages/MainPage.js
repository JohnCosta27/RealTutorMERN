import React, { useEffect } from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';

const MainPage = () => {
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
			height: 400,
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
	}, []);

	const [checked, setChecked] = React.useState(false);

	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	return (
		<div>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" noWrap>
						Real Tutor
					</Typography>
				</Toolbar>
			</AppBar>
			<div className={classes.banner}>
				<div className={classes.name}>
					<Typography variant="h1" style={{ fontSize: 150 }}>
						Real Tutor
					</Typography>
				</div>
				<Slide in={checked} timeout={1000} direction="left">
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
			<div className={classes.sectionWrapper}>
				<Paper className={classes.sectionPaper}>
					<div className={classes.card} style={{ flex: 5 }}>
						<Typography variant="body1">
							This is some text and stuffThis is some text and
							stuffThis is some text and stuffThis is some text
							and stuffThis is some text and stuffThis is some
							text and stuff This is some text and stuffThis is
							some text and stuffThis is some text and stuffThis
							is some text and stuffThis is some text and
							stuffThis is some text and stuff This is some text
							and stuffThis is some text and stuffThis is some
							text and stuffThis is some text and stuffThis is
							some text and stuff
						</Typography>
					</div>
					<div
						style={{
							backgroundImage: `url("https://www.oxygenna.com/wp-content/uploads/2015/11/18.jpg")`,
							flex: 2,
						}}
						className={classes.card}
					></div>
				</Paper>
			</div>
			<div className={classes.cardWrapper}></div>
		</div>
	);
};

export default MainPage;
