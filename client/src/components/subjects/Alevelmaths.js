import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AboutTheTutor from '../StyledComponents/AboutTheTutor';
import Section from '../StyledComponents/Section';
import DefaultAppBar from '../general/DefaultAppBar';
import Banner from '../StyledComponents/Banner';
import John from '../../images/People/john.jpg';
import Ronnie from '../../images/People/ronnie.jpg';

const Alevelmaths = () => {
	const useStyles = makeStyles((theme) => ({
		cardDisplay: {
			display: 'flex',
			justifyContent: 'space-between',
			[theme.breakpoints.down('sm')]: {
				flexDirection: 'column',
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
			<Section background="offwhite" centered={true} auto={true} narrow={true} column={true}>
				<div style={{ maxWidth: 800 }}>
					<Typography variant="h1">How we teach it</Typography>
					<br></br>
					<Typography variant="body2">
						The only way you get better at maths is by doing maths.
						Our Maths lessons are question based, which means as the
						student learns new content we actively show them exam
						questions with topics they just learnt, this way the
						student can get accustomed to the type of questions as
						well as reinforcing their knowledge.
					</Typography>
					<br></br>
					<Typography variant="body2">
						We also make sure to constantly revise what we have done
						before, this will allow for reinforced learning to come
						into play which means the student will not forgot
						content, which so very often happens in colleges. This
						is possible due to our custom made software which tracks
						progress and can tell us exactly what the student knows.
					</Typography>
					<br></br>
					<br></br>
				</div>
				<div>
					<div style={{ display: 'flex' }}>
						<Typography
							variant="h4"
							color="secondary"
							style={{ marginRight: 10 }}
						>
							1.
						</Typography>
						<Typography variant="h4" color="primary">
							Question based learning
						</Typography>
					</div>
					<br></br>
					<div style={{ display: 'flex' }}>
						<Typography
							variant="h4"
							color="secondary"
							style={{ marginRight: 10 }}
						>
							2.
						</Typography>
						<Typography variant="h4" color="primary">
							Progress tracking
						</Typography>
					</div>
					<br></br>
					<div style={{ display: 'flex' }}>
						<Typography
							variant="h4"
							color="secondary"
							style={{ marginRight: 10 }}
						>
							3.
						</Typography>
						<Typography variant="h4" color="primary">
							Constant revision
						</Typography>
					</div>
					<br></br>
				</div>
			</Section>

			<Section auto={true} background="lightteal">
				<Typography variant="h1">About the tutors</Typography>
			</Section>

			<AboutTheTutor
				background="lightteal"
				person={John}
				name="John Costa"
				aboutme="I am taking a Computer Science degree at Royal Holloway,
				I am also the CEO of Real Tutor. Maths has been my
				favourite subject until I met computer science but it
				still holds a crutial place in my heart. I have an A* in
				A-level Maths, an A in Further Maths and an A in
				Computer Science, as well as years of tutoring
				experience."
			/>
			<AboutTheTutor
				background="offwhite"
				person={Ronnie}
				name="Ronnie Nobbs"
				aboutme="I am an undergraduate student at Southampton University,
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
				is the language of the universe."
			/>
		</div>
	);
};

export default Alevelmaths;
