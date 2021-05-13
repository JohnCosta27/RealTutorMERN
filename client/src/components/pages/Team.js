import react from 'react';

import { makeStyles } from '@material-ui/styles';

import DefaultAppBar from '../general/DefaultAppBar';
import Banner from '../StyledComponents/Banner';
import { Typography } from '@material-ui/core';

import Section from '../StyledComponents/Section';

import John from '../../images/People/john.jpg';
import Ronnie from '../../images/People/ronnie.jpg';

const Team = () => {
	const useStyles = makeStyles((theme) => ({
		tutorPicturesWrapper: {
			width: '100%',
			height: 500,
			display: 'flex',
			flexDirection: 'row',
			float: 'left',
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
			backgroundSize: 'contain',
			backgroundRepeat: 'no-repeat',
			backgroundPositionY: 'center',
			float: 'left',
		},
	}));

	const classes = useStyles();

	return (
		<div>
			<DefaultAppBar />
			<Banner
				small={true}
				title="Meet the team"
				subtitle="A small, close team, working to provide the best tutoring"
			/>
			<Section medium={true} centered={true}>
				<div style={{ flex: 1 }}>
					<Typography variant="h1">John Costa</Typography>
					<div className={classes.tutorPicturesWrapper}>
						<div
							className={classes.tutorPictures}
							style={{ backgroundImage: `url(${John})` }}
						></div>
					</div>
				</div>
				<div style={{ flex: 1 }}>
					<Typography variant="h3">About me</Typography>
					<Typography variant="body2">
						I am taking a Computer Science degree at Royal Holloway,
						I am also the CEO of Real Tutor. Maths has been my
						favourite subject until I met computer science but it
						still holds a crutial place in my heart. I have an A* in
						A-level Maths, an A in Further Maths and an A in
						Computer Science, as well as years of tutoring
						experience.
					</Typography>

					<br></br>

					<Typography variant="h3">Roles</Typography>
					<Typography variant="body2">
						1. CEO of the company
					</Typography>
					<Typography variant="body2">
						2. Code all of the companies systems
					</Typography>
					<Typography variant="body2">
						3. Teach Maths, Further Maths and Computer Science
					</Typography>
				</div>
			</Section>

			<Section medium={true} centered={true} background="lightteal">
				<div style={{ flex: 1 }}>
					<Typography variant="h1">Ronnie Nobbs</Typography>
					<div className={classes.tutorPicturesWrapper}>
						<div
							className={classes.tutorPictures}
							style={{ backgroundImage: `url(${Ronnie})` }}
						></div>
					</div>
				</div>
				<div style={{ flex: 1 }}>
					<Typography variant="h3">About me</Typography>
					<Typography variant="body2">
						I am an undergraduate student at Southampton University,
						a part of the Russell Group, and I am working towards a
						Master’s Degree in Physics with Mathematics. I have an
						A* in Maths, an A in Physics and a B in Further Maths,
						coupled with experience in tutoring Physics and Maths.
						Physics was unlocked as a passion of mine once I started
						my GCSE learning in Year 10. I would research topics far
						beyond the scope of the GCSE course. It lit a fire
						underneath me, a burning passion to grow my knowledge, a
						conquest in life that will never end. Mathematics
						naturally followed on from my passion in physics, for it
						is the language of the universe.
					</Typography>

					<br></br>

					<Typography variant="h3">Roles</Typography>
					<Typography variant="body2">
						1. Teach A-level and GCSE Physics
					</Typography>
					<Typography variant="body2">
						2. Teach A-level Maths and Further Maths
					</Typography>
				</div>
			</Section>
		</div>
	);
};

export default Team;
