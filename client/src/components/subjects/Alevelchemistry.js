import react from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Section from '../StyledComponents/Section';
import DefaultAppBar from '../general/DefaultAppBar';
import Banner from '../StyledComponents/Banner';
import Ronnie from '../../images/People/ronnie.jpg';

const Alevelchemistry = () => {
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
				title="A-level Chemistry"
				subtitle="The first step in understanding the behaviour of the molecules all around us."
			/>
			<Section background="offwhite" centered={true} medium={true}>
				<div style={{ maxWidth: 800 }}>
					<Typography variant="h1">How we teach it</Typography>
					<br></br>
					<Typography variant="body2">
						A level chemistry is a subject that requires a good
						understanding of many different mathematical principles
						along with the knowledge required for the base content
						of the subject. In order for a student to grasp a
						subject in chemistry to the level they require it is
						important that they are exposed to questions in a
						variety of different contexts and situations. When it
						comes to solving problems and working through questions
						confidence and lots of practice is the most effective
						way of ensuring you are as prepared as you can be.
					</Typography>
					<br></br>
					<Typography variant="body2">
						Past paper questions will be used to discover what areas
						of weakness a student has and then these can be focused
						on. Each lesson will have a plan of what we intend to
						cover but the lessons will not be restricted to this,
						and if questions come up or a student is stronger in a
						certain area than expected then we can cover whatever
						the tutor and student feel would be the most effective
						topics to benefit learning.
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
							Interactive learning
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
							Exam questions
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
							Constant revision over trickier concepts
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
							Alex
						</Typography>
						<Typography variant="body2" align="left">
							I am an undergraduate studying medical biosciences
							at Imperial College London. I studied Biology,
							Chemistry and maths at A level achieving an A* in
							Maths and an A grade in biology and chemistry. I
							have always had a strong passion for the biological
							sciences and often researched topics beyond the
							spectrum of what was necessary for the course. I
							have always had a strong ability in the sciences and
							achieved the top grades at GCSE level and am
							continuing to show great ability after being
							accepted into Imperial College.
						</Typography>
						<br></br>
						<br></br>
					</div>
				</div>
				<div className={classes.tutorPicturesWrapper}>
					<div
						className={classes.tutorPictures}
						style={{ backgroundImage: `url(${Ronnie})` }}
					></div>
				</div>
			</Section>
		</div>
	);
};

export default Alevelchemistry;
