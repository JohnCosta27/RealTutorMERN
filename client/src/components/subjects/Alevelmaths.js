import react from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { teal, grey } from '@material-ui/core/colors';

import TitleDescriptionCard from '../general/TitleDescriptionCard';

const Alevelmaths = () => {
	const useStyles = makeStyles((theme) => ({
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
		banner: {
			width: '100%',
			height: 800,
			backgroundImage: `url("https://www.oxygenna.com/wp-content/uploads/2015/11/18.jpg")`,
			display: 'flex',
			flexDirection: 'column',
			position: 'relative',
			justifyContent: 'center',
			alignItems: 'center',
			paddingLeft: 10,
			paddingRight: 10,
		},
		cardDisplay: {
			display: 'flex',
			justifyContent: 'space-between',
			[theme.breakpoints.down('sm')]: {
				flexDirection: 'column',
			},
		},
		smallSection: {
			width: '100%',
			display: 'flex',
			height: 600,
		},
	}));

	const classes = useStyles();

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
				<Typography variant="h1" align="center">
					A-level Maths
				</Typography>
				<br></br>
				<Typography variant="h3" align="center">
					One of the most important A-levels a student can take.
				</Typography>
			</div>
			<div className={classes.smallSection}>
				<div
					className={classes.sectionPaper}
					style={{
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<div style={{ maxWidth: 800 }}>
						<Typography variant="h1">How we teach it</Typography>
						<br></br>
						<Typography variant="body2">
							The only way you get better at maths is by doing
							maths. Our Maths lessons are question based, which
							means as the student learns new content we actively
							show them exam questions with topics they just
							learnt, this way the student can get accustomed to
							the type of questions as well as reinforcing their
							knowledge.
						</Typography>
						<br></br>
						<br></br>
					</div>
				</div>
			</div>

			<div
				className={classes.smallSection}
				style={{ backgroundColor: teal[200] }}
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
								Really Experienced Tutors
							</Typography>
							<br></br>
							<Typography variant="body2" align="right">
								We are all fairly young, which means we have gone through this process, we know what the exam papers are and we know exactly how to help you. We are not detached teachers who've taken their exams decades ago.
							</Typography>
							<br></br>
							<br></br>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.smallSection} style={{backgroundColor: grey[200]}}>
				<div
					className={classes.sectionPaper}
					style={{
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<div style={{ maxWidth: 800 }}>
						<Typography variant="h1">How we teach it</Typography>
						<br></br>
						<Typography variant="body2">
							The only way you get better at maths is by doing
							maths. Our Maths lessons are question based, which
							means as the student learns new content we actively
							show them exam questions with topics they just
							learnt, this way the student can get accustomed to
							the type of questions as well as reinforcing their
							knowledge.
						</Typography>
						<br></br>
						<br></br>
					</div>
				</div>
			</div>
			<div className={classes.smallSection} style={{backgroundColor: teal[200]}}>
				<div className={classes.sectionPaper} style={{justifyContent: 'center'}}>
					<Typography variant="h1">Contact us</Typography>
				</div>
			</div>
		</div>
	);
};

export default Alevelmaths;
