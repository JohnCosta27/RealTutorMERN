import react from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { teal } from '@material-ui/core/colors'

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
			display: "flex", 
			justifyContent: "space-between",
			[theme.breakpoints.down('sm')]: {
				flexDirection: "column"
			}
		}
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
			<div className={classes.sectionWrapper}>
				<div
					className={classes.sectionPaper}
					style={{ flexDirection: 'column' }}
				>
					<Typography variant="h2">How we teach it</Typography>
					<br></br>
					<Typography variant="h5">
						The only way you get better at maths is by doing maths.
						Our Maths lessons are question based, which means as the
						student learns new content we actively show them exam
						questions with topics they just learnt, this way the
						student can get accustomed to the type of questions as
						well as reinforcing their knowledge.
					</Typography>
					<br></br>
					<Typography variant="h3">
						3 ways in which we help
					</Typography>
					<div className={classes.cardDisplay}>
						<TitleDescriptionCard title="This is card 1" description="This is a little bit of a description on this super awesome card 1" />
						<TitleDescriptionCard title="This is card 2" description="This is a little bit of a description on this super awesome card 2" />
						<TitleDescriptionCard title="This is card 3" description="This is a little bit of a description on this super awesome card 3" />
					</div>
				</div>
			</div>

			<div className={classes.sectionWrapper} style={{backgroundColor: teal[200]}}>
				<div className={classes.sectionPaper}>

				</div>
			</div>

		</div>
	);
};

export default Alevelmaths;
