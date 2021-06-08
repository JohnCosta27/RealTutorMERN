import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AboutTheTutor from '../StyledComponents/AboutTheTutor';
import Section from '../StyledComponents/Section';
import DefaultAppBar from '../general/DefaultAppBar';
import Banner from '../StyledComponents/Banner';
import John from '../../images/People/john.jpg';

const Alevelcomputerscience = () => {
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
				title="A-level Computer Science"
				subtitle="A way to understand the digital world."
			/>
			<Section background="offwhite" centered={true} auto={true} narrow={true} column={true}>
				<div style={{ maxWidth: 800 }}>
					<Typography variant="h1">How we teach it</Typography>
					<br></br>
					<Typography variant="body2">
						We aim to make you understand computers and the
						technology world, there is a lot of theory involved with
						this A-level and a lot of things that you need to
						remember, and to do this we will present information in
						an interactive way that actually explains the world
						around you, instead of just sitting you down and
						lecturing you. We will show you how the internet works,
						how you could create tiny networks, develop your own
						project, and even a sneak peak at the code that makes up
						our systems.
					</Typography>
					<br></br>
					<Typography variant="body2">
						You will undertake your own tiny projects as you learn
						as well as constantly looking at exam questions and
						looking ahead in the specification to know what you need
						to do next, so you really understand exactly what you
						need to learn.
					</Typography>
					<br></br>
					<br></br>
				</div>
				<div style={{minWidth: 400}}>
					<div style={{ display: 'flex' }}>
						<Typography
							variant="h4"
							color="secondary"
							style={{ marginRight: 10 }}
						>
							1.
						</Typography>
						<Typography variant="h4" color="primary">
							Experiment based learning
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
							Taught by the CEO
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
							Actual coding
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

		</div>
	);
};

export default Alevelcomputerscience;
