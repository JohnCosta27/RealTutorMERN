import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AboutTheTutor from '../StyledComponents/AboutTheTutor';
import Section from '../StyledComponents/Section';
import DefaultAppBar from '../general/DefaultAppBar';
import Banner from '../StyledComponents/Banner';
import Alex from '../../images/People/alex.jpg';

const GCSEbiology = () => {
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
				title="GCSE Biology"
				subtitle="The first step in understanding life around us."
			/>
			<Section background="offwhite" centered={true} medium={true}>
				<div style={{ maxWidth: 800 }}>
					<Typography variant="h1">How we teach it</Typography>
					<br></br>
					<Typography variant="body2">
						GCSE biology is one of the most popular GCSE options and
						as one of the core sciences a good understanding of the
						subject is important when it comes to progressing
						further in science. It is well known that there is a
						large workload that comes with biology and because of
						this the more exposure to the subject that the student
						can have then the better they will perform.
					</Typography>
					<br></br>
					<Typography variant="body2">
						Throughout the sessions we will go over the content of
						the course focusing on the topics that the student finds
						more difficult to understand. We will also use exam
						questions and past paper examples to consolidate the
						learning that the student has done and to aid with
						revision.
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

export default GCSEbiology;
