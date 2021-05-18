import react from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Section from '../StyledComponents/Section';
import DefaultAppBar from '../general/DefaultAppBar';
import Banner from '../StyledComponents/Banner';
import Ronnie from '../../images/People/ronnie.jpg';

const Alevelphysics = () => {
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
				title="A-level Physics"
				subtitle="Your next step to unlocking the universe, and all its secrets."
			/>
			<Section background="offwhite" centered={true} medium={true}>
				<div style={{ maxWidth: 800 }}>
					<Typography variant="h1">How we teach it</Typography>
					<br></br>
					<Typography variant="body2">
						Physics is often called one of the hardest A-levels,
						next to Further Maths and Chemistry. However, it doesn’t
						have to be. At Real Tutor, we offer physics tutoring
						that sheds new light upon what can be a rather daunting
						subject. Concepts that often seem counterintuitive and
						backwards can be explained in a multitude of different
						ways. Most students tend to struggle with the concepts
						and the theory, as opposed to the mathematics. Despite
						this, both will still be covered in the necessary detail
						that fits the needs of the student.
					</Typography>
					<br></br>
					<Typography variant="body2">
						At the end of each session, the student will be given a
						worked example, and exam questions that cover the
						content in that lesson. These will not be answered under
						exam conditions however. The tutor will be there at all
						times during the session to answer questions. Also,
						depending on how the tutor feels the student is
						progressing, the student may be given surprise questions
						on previously covered topics, as a form of revision.
						Speaking of which, constant revision will be a prime
						aspect of ensuring a student’s growth in physics.
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
							Tackling difficult theory on a conceptual level
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
							Restating problems using analogy
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
							Surprise questions to test knowledge retention
						</Typography>
					</div>
					<br></br>
				</div>
			</Section>

			<Section background="lightteal" small={true}>
				<div style={{ width: '100%' }}>
					<div style={{ maxWidth: 800, float: 'left' }}>
						<Typography variant="h1" align="left">
							About the tutors
						</Typography>
						<br></br>
						<Typography variant="h3" align="left">
							Ronnie
						</Typography>
						<Typography variant="body2" align="left">
							I am an undergraduate student at Southampton
							University, a part of the Russell Group, and I am
							working towards a Master’s Degree in Physics with
							Mathematics. I have an A* in Maths, an A in Physics
							and a B in Further Maths, coupled with experience in
							tutoring Physics and Maths. Physics was unlocked as
							a passion of mine once I started my GCSE learning in
							Year 10. I would research topics far beyond the
							scope of the GCSE course. It lit a fire underneath
							me, a burning passion to grow my knowledge, a
							conquest in life that will never end. Mathematics
							naturally followed on from my passion in physics,
							for it is the language of the universe.
						</Typography>
						<br></br>
						<br></br>
					</div>
				</div>
				<div className={classes.tutorPicturesWrapper}>
					<div className={classes.tutorPictures} style={{backgroundImage: `url(${Ronnie})`}}></div>
				</div>
			</Section>
		</div>
	);
};

export default Alevelphysics;
