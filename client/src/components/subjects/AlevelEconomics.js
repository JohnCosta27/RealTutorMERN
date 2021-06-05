import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AboutTheTutor from '../StyledComponents/AboutTheTutor';
import Section from '../StyledComponents/Section';
import DefaultAppBar from '../general/DefaultAppBar';
import Banner from '../StyledComponents/Banner';
import Zach from '../../images/People/zach.jpg';

const AlevelEconomics = () => {
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
				title="A-level Economics"
				subtitle="Finance fuels the world, we’re here to help"
			/>
			<Section background="offwhite" centered={true} medium={true}>
				<div style={{ maxWidth: 800 }}>
					<Typography variant="h1">How we teach it</Typography>
					<br></br>
					<Typography variant="body2">
						A Level Economics is one of the most diverse and
						intersecting subjects that is offered. You learn about
						Micro, Macro and psychological Economics. It is a
						subject that you truly need to understand in order to
						succeed. Simply learning facts will not allow you to
						achieve the best grade you can get. At Real Tutor we are
						going to give you the knowledge and the understanding
						you need. In addition to this, we can help you develop
						your writing skills and exam technique.
					</Typography>
					<br></br>
					<Typography variant="body2">
						At GCSE most subjects are not massively time pressured
						and require less focus on exam technique and writing.
						This changes for A level, where every second counts,
						selecting the right question matters and the structure
						of your essay can determine your mark-band. Our tutors
						have recently gone through this ordeal themselves and
						can equip you with everything you need to maximise your
						mark within the exam. Finally it is important in
						economics to look at the cause and effect of certain
						economic stimuli, and come to a conclusion on how this
						will affect the wider economy. We will challenge you to
						think critically and analytically, which you then can
						apply to create chains of events and link together key
						points.
					</Typography>
					<br></br>
					<br></br>
				</div>
				<div style={{ minWidth: 400 }}>
					<div style={{ display: 'flex' }}>
						<Typography
							variant="h4"
							color="secondary"
							style={{ marginRight: 10 }}
						>
							1.
						</Typography>
						<Typography variant="h4" color="primary">
                        Exam technique and writing style
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
                        Confident Understanding 
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
                        Analytical skills
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
				person={Zach}
				name="Zach Seth"
				aboutme="I currently work as a Risk Analyst in the financial
				sector. I am the COO of Real tutor, a company I
				co-founded with John. We noticed a gap in the market for
				high quality tutoring and didn't hesitate to take the
				opportunity. My business mindset came from my love of
				Economics, in which I achieved an A at Farnborough
				Sixth-form college. I enjoyed reading beyond the
				curriculum and continue to read about finance and
				economics now. I would like to share my mindset with
				students by developing their understanding of the world
				of finance."
			/>

		</div>
	);
};

export default AlevelEconomics;
