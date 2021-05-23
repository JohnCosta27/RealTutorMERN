import react from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AboutTheTutor from '../StyledComponents/AboutTheTutor';
import Section from '../StyledComponents/Section';
import DefaultAppBar from '../general/DefaultAppBar';
import Banner from '../StyledComponents/Banner';
import Ronnie from '../../images/People/ronnie.jpg';

const GCSEphysics = () => {
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
				title="GCSE Physics"
				subtitle="A welcome challenge, made easier."
			/>
			<Section background="offwhite" centered={true} medium={true}>
				<div style={{ maxWidth: 800 }}>
					<Typography variant="h1">How we teach it</Typography>
					<br></br>
					<Typography variant="body2">
						Physics can be a very daunting GCSE, and can often
						appear overwhelming. Feel the same? Well you're in the
						right place. At Real Tutor, we offer top notch tuition
						in order to tackle difficult problems. Physics theory
						that may not seem to make sense at first can be
						explained in different ways by making analogies to what
						the student already knows. Both the theory and the maths
						will be given equal weightings of importance.
					</Typography>
					<br></br>
					<Typography variant="body2">
						At the end of each session, the student will be given
						worked examples, and aided exam questions that cover the
						content in that lesson. Any work not finished in lesson
						may be assigned as optional homework tasks, IE for
						revision purposes. Also, depending on how the tutor
						feels the student is progressing, the student may be
						given surprise questions on previously covered topics,
						as a form of revision. Comprehending topics and
						mathematics is only the beginning. The true key to
						scoring higher in your exams (physics especially) is
						revising what we have previously covered.
					</Typography>
					<br></br>
					<br></br>
				</div>
				<div>
					<div style={{ display: 'flex' }}>
						<Typography
							variant="h5"
							color="secondary"
							style={{ marginRight: 10 }}
						>
							1.
						</Typography>
						<Typography variant="h5" color="primary">
							Constant Revision
						</Typography>
					</div>
					<br></br>
					<div style={{ display: 'flex' }}>
						<Typography
							variant="h5"
							color="secondary"
							style={{ marginRight: 10 }}
						>
							2.
						</Typography>
						<Typography variant="h5" color="primary">
							Using analogies that the student can understand.
						</Typography>
					</div>
					<br></br>
					<div style={{ display: 'flex' }}>
						<Typography
							variant="h5"
							color="secondary"
							style={{ marginRight: 10 }}
						>
							3.
						</Typography>
						<Typography variant="h5" color="primary">
							Constant student feedback
						</Typography>
					</div>
					<br></br>
				</div>
			</Section>

			<Section auto={true} background="lightteal">
				<Typography variant="h1">About the tutors</Typography>
			</Section>

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

export default GCSEphysics;
