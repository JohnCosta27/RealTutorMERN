import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Section from '../StyledComponents/Section';
import DefaultAppBar from '../general/DefaultAppBar';
import Banner from '../StyledComponents/Banner';
import AboutTheTutor from '../StyledComponents/AboutTheTutor';
import John from '../../images/People/john.jpg';
import Ronnie from '../../images/People/ronnie.jpg';

const Alevelfurthermaths = () => {
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
				justifyContent: 'center',
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
				title="A-level Further Maths"
				subtitle="The most difficult A-level"
			/>
			<Section background="offwhite" centered={true} medium={true}>
				<div style={{ maxWidth: 800, justifyContent: 'center' }}>
					<Typography variant="h1">How we teach it</Typography>
					<br></br>
					<Typography variant="body2">
						A-level Further Maths is in a whole different league to
						other A-levels, in fact it is so sought after that
						students with it achieve on average £5000 more in their
						salaries compared to their peers. It is a subject that
						needs incredible ability and attention and we are here
						to help you. We take a very similar approach to A-level
						Maths, however we take a more theoretical approach, as
						much of the content is incredibly dense, so
						understanding what you are doing, before attempting
						questions is extremely important.
					</Typography>
					<br></br>
					<Typography variant="body2">
						We will make sure to constantly look at the A-level as a
						whole and make sure that you know what you have to do
						for each topic, by showing you relevant exam questions
						and how you will break these down to solve the very
						complex problems that can be presented to you.
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
							Theoretical Approach
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
							Constant exam practice
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
							Deep understanding
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

export default Alevelfurthermaths;
