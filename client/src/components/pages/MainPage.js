import React, { useState, useEffect } from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import { teal, grey } from '@material-ui/core/colors';

import TitleDescriptionCard from '../general/TitleDescriptionCard';
import transparentLogo from '../../images/TransparentLogo.png';

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
			[theme.breakpoints.down('md')]: {
				flexDirection: "column"
			}
		},
		card: {
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
		},
		subjectCard: {
			[theme.breakpoints.down('xs')]: {
				height: 150,
			},
			height: 250,
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			cursor: 'pointer',
			transition: 'all 200ms',
			'&:hover': {
				transform: 'translateY(-3px) scale(1.1)',
			},
		},
		cardDisplay: {
			display: 'flex',
			justifyContent: 'space-between',
			[theme.breakpoints.down('md')]: {
				flexDirection: 'column',
			},
		},
		smallSection: {
			width: '100%',
			display: 'flex',
			height: 600,
		},
		image: {
			width: '40vw',
			[theme.breakpoints.down('md')]: {
				width: '60vw',
			},
		}
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
					<Typography variant="h3">Real Tutor</Typography>
				</Toolbar>
			</AppBar>
			<div className={classes.banner}>
				<div className={classes.name}>
					<Typography variant="h1">
						A new approach to teaching
					</Typography>
				</div>
				<Slide in={checked} timeout={1500} in={enter} direction="left">
					<div className={classes.centeredWrapper}>
						<Typography variant="h2">£20 an hour (GCSE)</Typography>
						<Typography variant="h2">
							£30 an hour (A-level)
						</Typography>
						<Typography variant="h3">
							The future is online
						</Typography>
					</div>
				</Slide>
			</div>
			<div
				className={classes.smallSection}
				style={{
					backgroundImage: `url("https://i.imgur.com/bdZ8fF6.png")`,
					backgroundColor: '#FAFAFA',
				}}
			>
				<div
					className={classes.sectionPaper}
					style={{
						alignItems: 'center',

					}}
				>
					<div style={{ maxWidth: 800 }}>
						<Typography variant="h1">
							Tuition meets the digital age
						</Typography>
						<Typography variant="body2">
							This means we have custom built software, made by
							our CEO, to keep track of student progress and help
							lesson planning and reporting.
						</Typography>
						<br></br>
						<br></br>
					</div>
					<div style={{ maxWidth: 800 }}>
						<img src={transparentLogo} className={classes.image} />
						<br></br>
						<br></br>
					</div>
				</div>
			</div>

			<div
				className={classes.smallSection}
				style={{
					backgroundImage: `url("https://i.imgur.com/bdZ8fF6.png")`,
					backgroundColor: teal[200],
					backgroundPositionY: -600,
				}}
			>
				<div
					className={classes.sectionPaper}
					style={{
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<div style={{ width: '100%' }}>
						<div style={{ maxWidth: 800, float: 'right' }}>
							<Typography variant="h1" align="right">
								Close and experienced team
							</Typography>
							<Typography variant="body2" align="right">
								Our team is composed of cherry picked
								individuals, and we all know each other and work
								together to provide the best overall tutoring
								experience, something not a lot of competitors
								can say. Each member is also experienced and
								well versed in the subject they teach.
							</Typography>
							<br></br>
							<br></br>
						</div>
					</div>
				</div>
			</div>
			<div
				className={classes.sectionWrapper}
				style={{
					backgroundImage: `url("https://i.imgur.com/bdZ8fF6.png")`,
					backgroundColor: grey[200],
					backgroundPositionY: -1200,
				}}
			>
				<div
					className={classes.sectionPaper}
					style={{ flexDirection: 'column' }}
				>
					<Typography variant="h2">Subjects we offer</Typography>
					<br></br>
					<Grid
						container
						spacing={3}
						justify="center"
						alignItems="center"
					>
						<Grid
							item
							lg={3}
							md={4}
							sm={6}
							xs={12}
							onClick={() =>
								(document.location.href =
									'/subjects/alevelmaths')
							}
						>
							<Paper className={classes.subjectCard}>
								<Typography variant="h3" align="center">
									A-level Maths
								</Typography>
							</Paper>
						</Grid>
						<Grid item lg={3} md={4} sm={6} xs={12}>
							<Paper className={classes.subjectCard}>
								<Typography variant="h3" align="center">
									A-level Further Maths
								</Typography>
							</Paper>
						</Grid>
						<Grid item lg={3} md={4} sm={6} xs={12}>
							<Paper className={classes.subjectCard}>
								<Typography variant="h3" align="center">
									GCSE Chemistry
								</Typography>
							</Paper>
						</Grid>
						<Grid item lg={3} md={4} sm={6} xs={12}>
							<Paper className={classes.subjectCard}>
								<Typography variant="h3" align="center">
									GCSE Computer Science
								</Typography>
							</Paper>
						</Grid>
						<Grid item lg={3} md={4} sm={6} xs={12}>
							<Paper className={classes.subjectCard}>
								<Typography variant="h3" align="center">
									A-level Computer Science
								</Typography>
							</Paper>
						</Grid>
					</Grid>
				</div>
			</div>
			<div
				className={classes.sectionWrapper}
				style={{
					backgroundImage: `url("https://i.imgur.com/bdZ8fF6.png")`,
					backgroundColor: teal[200],
					backgroundPositionY: `calc(-1200px - 100vh)`,
				}}
			>
				<div className={classes.sectionPaper}>
					<div style={{ flex: 1 }}>
						<Typography variant="h1">Contact us</Typography>
					</div>
					<div style={{ flex: 1 }}>
						<Typography variant="h1">
							Socials and useful links
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
