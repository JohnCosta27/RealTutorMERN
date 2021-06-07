import react from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AboutTheTutor from '../StyledComponents/AboutTheTutor';
import Section from '../StyledComponents/Section';
import DefaultAppBar from '../general/DefaultAppBar';
import Banner from '../StyledComponents/Banner';
import Rio from '../../images/People/rio.jpg';

const Alevelart = () => {
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
				title="A-level Art and Design"
				subtitle="Realising your unique creativity"
			/>
			<Section background="offwhite" centered={true} auto={true} narrow={true} column={true}>
				<div style={{ maxWidth: 800 }}>
					<Typography variant="h1">How we teach it</Typography>
					<br></br>
					<Typography variant="body2">
						Finding your artistic passion in a subject as broad as
						Art can be difficult, however at Real Tutor we strive to
						help you find your style while also achieving the grade
						you deserve. We believe in individuality, being unique
						is something to fuel your art - so why hide it?
					</Typography>
					<br></br>
					<Typography variant="body2">
						A-Level Art is about presenting you and your style,
						whatever that may be; we will help you explore out of
						your comfort zone while also making sure your artwork is
						true to you and a representation of what you can do.
						With drawing, painting and digital tips and tricks from
						ex-students who achieved an A or higher at A-Level,
						you’re guaranteed to learn something new for your
						sketchbooks, and how to apply that to impress the exam
						board. You will also see examples of your personal
						tutor’s sketchbooks, pieces and even final products
						during the course, to inspire and guide you along your
						own artistic journey.
					</Typography>
					<br></br>
					<Typography variant="body2">
						Not only will you impress examiners, but you will also
						leave Sixth Form with a strong and personal portfolio
						ready for your future University applications.
					</Typography>
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
							Practical work
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
							Super experienced tutor
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
							Human approach
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
				person={Rio}
				name="Rio Keefe"
				aboutme="I am a student of Illustration at UCA Farnham. I also
				studied Art and Graphics in school and Sixth Form,
				achieving an A in Art and Design at A-Level and an A* in
				Graphic Products at GCSE. I used my gap year to develop
				my portfolio and grow my online presence; I started my
				small business on Etsy where I sell illustration prints
				and hand-made stickers. I have always taken art
				seriously, despite its reputation as an ‘easy’ subject,
				and use it to express myself. I strongly believe art
				cannot be filtered and should fully represent you and
				your vision for it, embrace your individuality in every
				aspect of your life - especially in your artwork."
			/>
		</div>
	);
};

export default Alevelart;
