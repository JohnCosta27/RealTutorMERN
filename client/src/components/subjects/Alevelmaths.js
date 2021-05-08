import react from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { teal, grey } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

import TitleDescriptionCard from '../general/TitleDescriptionCard';
import DefaultAppBar from '../general/DefaultAppBar';
import Banner from '../StyledComponents/Banner';
import BannerBackground from '../../images/Banner.jpeg';
import John from '../../images/john.jpg';

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
			justifyContent: 'space-between',
			[theme.breakpoints.down('md')]: {
				flexDirection: 'column',
				justifyContent: 'center',
			},
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
			[theme.breakpoints.down('md')]: {
				height: 'auto',
			},
		},
		tutorPicturesWrapper: {
			width: '100%',
			height: 500,
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			marginLeft: 100,
			[theme.breakpoints.down('md')]: {
				marginLeft: 0,
			},
			[theme.breakpoints.down('xs')]: {
				flexDirection: 'column',
			},
		},
		tutorPictures: {
			width: '100%',
			height: '100%',
			backgroundImage: `url(${John})`,
			backgroundSize: 'contain',
			backgroundRepeat: 'no-repeat',
			backgroundPositionY: 'center',
			backgroundPositionX: 'center',
			marginRight: 10,
		},
	}));

	const classes = useStyles();

	return (
		<div>
			<DefaultAppBar />
			<Banner
				title="A-level Maths"
				subtitle="One of the most important A-levels"
			/>
			<div
				className={classes.smallSection}
				style={{ backgroundColor: '#FAFAFA' }}
			>
				<div
					className={classes.sectionPaper}
					style={{ alignItems: 'center' }}
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
						<Typography variant="body2">
							We also make sure to constantly revise what we have
							done before, this will allow for reinforced learning
							to come into play which means the student will not
							forgot content, which so very often happens in
							colleges. This is possible due to our custom made
							software which tracks progress and can tell us
							exactly what the student knows.
						</Typography>
						<br></br>
						<br></br>
					</div>
					<div>
						<div style={{ display: 'flex' }}>
							<Typography
								variant="h3"
								color="secondary"
								style={{ marginRight: 10 }}
							>
								1.
							</Typography>
							<Typography variant="h3" color="primary">
								Question based learning
							</Typography>
						</div>
						<br></br>
						<div style={{ display: 'flex' }}>
							<Typography
								variant="h3"
								color="secondary"
								style={{ marginRight: 10 }}
							>
								2.
							</Typography>
							<Typography variant="h3" color="primary">
								Progress tracking
							</Typography>
						</div>
						<br></br>
						<div style={{ display: 'flex' }}>
							<Typography
								variant="h3"
								color="secondary"
								style={{ marginRight: 10 }}
							>
								3.
							</Typography>
							<Typography variant="h3" color="primary">
								Constant revision
							</Typography>
						</div>
						<br></br>
					</div>
				</div>
			</div>

			<div
				className={classes.smallSection}
				style={{ backgroundColor: teal[200] }}
			>
				<div className={classes.sectionPaper}>
					<div style={{ width: '100%' }}>
						<div style={{ maxWidth: 800, float: 'left' }}>
							<Typography variant="h1" align="left">
								About the tutors
							</Typography>
							<br></br>
							<Typography variant="h3" align="left">
								John
							</Typography>
							<Typography variant="body2" align="left">
								I am taking a Computer Science degree at Royal
								Holloway, I am also the CEO of Real Tutor. Maths
								has been my favourite subject until I met
								computer science but it still holds a crutial
								place in my heart. I have an A* in A-level Maths
								and an A in Further Maths, as well as years of
								tutoring experience.
							</Typography>
							<Typography variant="h3" align="right">
								Ronnie
							</Typography>
							<Typography variant="body2" align="right">
								Something
							</Typography>
							<br></br>
							<br></br>
						</div>
					</div>
					<div className={classes.tutorPicturesWrapper}>
						<div className={classes.tutorPictures}></div>
						<div className={classes.tutorPictures}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Alevelmaths;
