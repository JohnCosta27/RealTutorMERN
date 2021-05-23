import react from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AboutTheTutor from '../StyledComponents/AboutTheTutor';
import Section from '../StyledComponents/Section';
import DefaultAppBar from '../general/DefaultAppBar';
import Banner from '../StyledComponents/Banner';
import Alex from '../../images/People/alex.jpg';

const GCSEchemistry = () => {
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
				title="GCSE Chemistry"
				subtitle="Learning about the properties of chemicals and how they interact."
			/>
			<Section background="offwhite" centered={true} medium={true}>
				<div style={{ maxWidth: 800 }}>
					<Typography variant="h1">How we teach it</Typography>
					<br></br>
					<Typography variant="body2">
						While it is possible to remember all of the theory in
						chemistry, we have found that being able to spot
						patterns in reactions and being able to predict what
						will happen in specific situations is a far better way
						to learn the content in this subject. While learning to
						recognise patterns the student will be able to
						understand to a deeper level why things happen in the
						way they do and over time they will learn to apply the
						knowledge they have to exam questions.
					</Typography>
					<br></br>
					<Typography variant="body2">
						Constant revision and visiting topics that we have not
						covered in a while during sessions will be the most
						effective way of ensuring that the student will get the
						best result possible and reach their full potential.
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

			<Section auto={true} background="lightteal">
				<Typography variant="h1">About the tutors</Typography>
			</Section>

			<AboutTheTutor
				background="lightteal"
				person={Alex}
				name="Alex Field"
				aboutme="I am an undergraduate studying medical biosciences at
				Imperial College London. I studied Biology, Chemistry
				and maths at A level achieving an A* in Maths and an A
				grade in biology and chemistry. I have always had a
				strong passion for the biological sciences and often
				researched topics beyond the spectrum of what was
				necessary for the course. I have always had a strong
				ability in the sciences and achieved the top grades at
				GCSE level and am continuing to show great ability after
				being accepted into Imperial College."
			/>
		</div>
	);
};

export default GCSEchemistry;
