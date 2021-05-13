import react from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Section from '../StyledComponents/Section';
import DefaultAppBar from '../general/DefaultAppBar';
import Banner from '../StyledComponents/Banner';
import John from '../../images/People/john.jpg';

const GCSEcomputerscience = () => {
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
				title="GCSE Computer Science"
				subtitle="An introduction to computers and programming."
			/>
			<Section background="offwhite" centered={true} small={true}>
				<div style={{ maxWidth: 800 }}>
					<Typography variant="h1">How we teach it</Typography>
					<br></br>
					<Typography variant="body2">
						In many ways, GCSE Computer Science is all about the
						teacher. If you have a teacher you don’t quite get along
						with or whose style of teaching doesn’t do you any
						favours, you won’t like computer science. At Real Tutor
						we make sure you love computer science. There are simply
						too many fascinating things about this subject for a
						student to not enjoy it, so rest assured that you will
						not only pass your exams with flying colours, but you
						will have a deeper appreciation for computers.
					</Typography>
					<br></br>
					<Typography variant="body2">
						We make sure we take a hands on approach, how are you
						going to learn about computers without coding? We will
						make sure to do tiny programs and show you theoretical
						concepts with a hands on approach, aided by our use of
						digital solutions to enhance tutoring.
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
							Coding. Coding. Coding.
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
							Hands on with theory.
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
							Constant revision.
						</Typography>
					</div>
					<br></br>
				</div>
			</Section>

			<Section background="lightteal" medium={true} centered={true}>
				<div style={{ width: '100%' }}>
					<div style={{ maxWidth: 800, float: 'left' }}>
						<Typography variant="h1" align="left">
							About the tutors
						</Typography>
						<br></br>
						<Typography variant="h3" align="left">
							John
						</Typography>
						<Typography variant="body2" align="left">
							I am taking a Computer Science degree at Royal
							Holloway, I am also the CEO of Real Tutor. Maths has
							been my favourite subject until I met computer
							science but it still holds a crutial place in my
							heart. I have an A* in A-level Maths, an A in
							Further Maths and an A in Computer Science, as well
							as years of tutoring experience.
						</Typography>
					</div>
				</div>
				<div className={classes.tutorPicturesWrapper}>
					<div
						className={classes.tutorPictures}
						style={{ backgroundImage: `url(${John})` }}
					></div>
				</div>
			</Section>
		</div>
	);
};

export default GCSEcomputerscience;
