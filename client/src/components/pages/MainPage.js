import React, { useState, useEffect, useRef } from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import { teal, grey, blue } from '@material-ui/core/colors';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import transparentLogo from '../../images/TransparentLogo.png';
import DefaultAppBar from '../general/DefaultAppBar';
import Banner from '../StyledComponents/Banner';

import BannerBackground from '../../images/Banner.jpeg';

const MainPage = () => {
	const [enter, setEnter] = useState(false);
	const contactUsRef = useRef(null);

	const useStyles = makeStyles((theme) => ({
		banner: {
			width: '100%',
			height: 800,
			backgroundImage: `url(${BannerBackground})`,
			backgroundSize: 'cover',
			display: 'flex',
			flexDirection: 'column',
			position: 'relative',
			backgroundPositionX: 'center',
			[theme.breakpoints.down('sm')]: {
				height: 600,
			},
			[theme.breakpoints.down('xs')]: {
				height: 800,
			},
		},
		centeredWrapper: {
			width: '80%',
			marginLeft: '10%',
			position: 'absolute',
			bottom: 150,
		},
		bannerImage: {
			width: '100%',
			height: '100%',
			objectFit: 'cover',
		},
		name: {
			width: '80%',
			marginLeft: '10%',
			marginTop: 75,
		},
		bigText: {
			[theme.breakpoints.down('sm')]: {
				fontSize: 50,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 100,
			},
		},
		sectionWrapper: {
			backgroundColor: '#fafafa',
			width: '100%',
			display: 'flex',
			height: '100vh',
			[theme.breakpoints.down('md')]: {
				height: '120vh',
			},
		},
		sectionPaper: {
			width: '80%',
			height: '97.5%',
			marginTop: '1.25%',
			marginBottom: '1.25%',
			marginLeft: '10%',
			marginRight: '10%',
			display: 'flex',
			paddingTop: 20,
			paddingLeft: 20,
			paddingBottom: 20,
			paddingRight: 20,
			[theme.breakpoints.down('md')]: {
				flexDirection: 'column',
			},
		},
		card: {
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
		},
		subjectCard: {
			[theme.breakpoints.down('xs')]: {
				height: 100,
			},
			height: 250,
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			cursor: 'pointer',
			transition: 'all 200ms',
			'&:hover': {
				transform: 'translateY(-3px) scale(1.1)',
			},
		},
		cardDisplay: {
			display: 'flex',
			justifyContent: 'space-between',
			[theme.breakpoints.down('md')]: {
				flexDirection: 'column',
			},
		},
		smallSection: {
			width: '100%',
			display: 'flex',
			height: 600,
			[theme.breakpoints.down('md')]: {
				height: 'auto',
			},
		},
		image: {
			width: '40vw',
			[theme.breakpoints.down('md')]: {
				width: '60vw',
			},
			[theme.breakpoints.down('sm')]: {
				width: '80vw',
			},
			[theme.breakpoints.down('xs')]: {
				width: '90vw',
			},
		},
		list: {
			display: 'flex',
			float: 'right',
		},
		listItem: {
			marginLeft: 10,
			marginRight: 10,
		},
		socialWrapper: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer',
		},
		contactWrapper: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer',
		},
		icons: {
			fontSize: 100,
			[theme.breakpoints.down('sm')]: {
				fontSize: 50,
			},
		},
	}));

	const classes = useStyles();

	useEffect(() => {
		handleChange();
		checkQuery();
		setTimeout(() => {
			setEnter(true);
		}, 1000);
	}, []);

	const checkQuery = () => {
		const urlParams = new URLSearchParams(window.location.search);
		if (urlParams.get('section') == 'contact-us') {
			contactUs();
		}
	};

	const [checked, setChecked] = React.useState(false);

	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	const contactUs = () => {
		contactUsRef.current.scrollIntoView();
	};

	return (
		<div>
			<DefaultAppBar contactus={contactUs} />
			<Banner mainpage={true} />
			<div
				className={classes.smallSection}
				style={{
					backgroundImage: `url("https://i.imgur.com/bdZ8fF6.png")`,
					backgroundColor: '#FAFAFA',
				}}
			>
				<div
					className={classes.sectionPaper}
					style={{
						alignItems: 'center',
					}}
				>
					<div style={{ maxWidth: 800 }}>
						<Typography variant="h1" color="secondary">
							Tuition meets the digital age
						</Typography>
						<Typography variant="body2">
							We have custom built software, coded by our CEO, to
							keep track of student progress and help lesson
							planning and reporting.
						</Typography>
						<br></br>
						<Typography variant="body2">
							State of the art software.
						</Typography>
						<br></br>
						<Typography variant="body2">
							Flawless tutoring.
						</Typography>
						<br></br>
						<Typography variant="body2">
							The future of education is here.
						</Typography>
						<br></br>
						<br></br>
					</div>
					<div style={{ maxWidth: 800 }}>
						<img src={transparentLogo} className={classes.image} />
						<br></br>
						<br></br>
					</div>
				</div>
			</div>

			<div
				className={classes.smallSection}
				style={{
					backgroundImage: `url("https://i.imgur.com/bdZ8fF6.png")`,
					backgroundColor: teal[200],
					backgroundPositionY: -600,
				}}
			>
				<div
					className={classes.sectionPaper}
					style={{
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<div style={{ width: '100%' }}>
						<div style={{ maxWidth: 800, float: 'right' }}>
							<Typography variant="h1" align="right">
								The Experiment...
							</Typography>
							<Typography variant="body2" align="right">
								Other tutoring providers select teachers as
								they're tutors. After extensive research, we
								found that teachers are too far removed from the
								exam procedures. This gave us an idea, We took a
								select few University undergraduates, with top A
								level grades, and ran some sample tutoring
								sessions. We found the Tutees to be hugely more
								engaged and learnt the syllabus noticeably
								faster. We also noted that when an Undergraduate
								was studying a related field, the students'
								learning was optimized.
							</Typography>
							<br></br>
							<Typography variant="h3" align="left">
								The Conclusion...
							</Typography>
							<Typography variant="body2">
								After the research we based our employment
								process off our findings. Our cherry picked
								Tutors will help our students achieve the best
								grade they are possibile of, no matter your
								current course progression.
							</Typography>
							<br></br>
							<Typography
								variant="body2"
								align="right"
							></Typography>
							<br></br>
							<br></br>
						</div>
					</div>
				</div>
			</div>
			<div
				className={classes.smallSection}
				style={{
					backgroundImage: `url("https://i.imgur.com/bdZ8fF6.png")`,
					backgroundColor: '#FAFAFA',
					backgroundPositionY: -1200,
				}}
			>
				<div
					className={classes.sectionPaper}
					style={{
						alignItems: 'center',
					}}
				>
					<div style={{ maxWidth: 700 }}>
						<Typography variant="h1" color="secondary">
							We. Really. Care.
						</Typography>
						<Typography variant="body2">
							Our 5% charity pleage is simply one example of how
							much we care about the community and the world
							around us.
						</Typography>
						<br></br>
						<Typography variant="body2">
							You won't just talk to your tutor. You will talk to
							the CEO, COO and other members of staff, about your
							own progress, and ways we could make your life
							easier. All so you can achieve the best grade.
						</Typography>
						<br></br>
						<Typography variant="body2">
							Real Tutor offers you peace of mind. We will never
							turn away a student in need, and we promise to
							always deliver the best quality education. Period.
						</Typography>
						<br></br>
						<br></br>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
						}}
					>
						<div>
							<div style={{ display: 'flex' }}>
								<Typography
									variant="h3"
									color="secondary"
									style={{ marginRight: 10 }}
								>
									1.
								</Typography>
								<Typography variant="h3" color="primary">
									5% charity pledge
								</Typography>
							</div>
							<br></br>
							<div style={{ display: 'flex' }}>
								<Typography
									variant="h3"
									color="secondary"
									style={{ marginRight: 10 }}
								>
									2.
								</Typography>
								<Typography variant="h3" color="primary">
									Our personal approach
								</Typography>
							</div>
							<br></br>
							<div style={{ display: 'flex' }}>
								<Typography
									variant="h3"
									color="secondary"
									style={{ marginRight: 10 }}
								>
									3.
								</Typography>
								<Typography variant="h3" color="primary">
									Market leading tutoring
								</Typography>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className={classes.sectionWrapper}
				style={{
					backgroundImage: `url("https://i.imgur.com/bdZ8fF6.png")`,
					backgroundColor: blue[200],
					backgroundPositionY: -1800,
				}}
			>
				<div
					className={classes.sectionPaper}
					style={{ flexDirection: 'column' }}
				>
					<Typography variant="h2">Subjects we offer</Typography>
					<br></br>
					<Grid
						container
						spacing={3}
						justify="center"
						alignItems="center"
					>
						<Grid
							item
							lg={3}
							md={4}
							sm={6}
							xs={12}
							onClick={() =>
								(document.location.href = '/alevelmaths')
							}
						>
							<Paper className={classes.subjectCard}>
								<Typography variant="h3" align="center">
									A-level Maths
								</Typography>
							</Paper>
						</Grid>
						<Grid
							item
							lg={3}
							md={4}
							sm={6}
							xs={12}
							onClick={() =>
								(document.location.href =
									'/alevelfurthermaths')
							}
						>
							<Paper className={classes.subjectCard}>
								<Typography variant="h3" align="center">
									A-level Further Maths
								</Typography>
							</Paper>
						</Grid>
						<Grid item lg={3} md={4} sm={6} xs={12}>
							<Paper className={classes.subjectCard}>
								<Typography
									variant="h3"
									align="center"
									onClick={() =>
										(document.location.href =
											'/alevelphysics')
									}
								>
									A-level Physics
								</Typography>
							</Paper>
						</Grid>
						<Grid item lg={3} md={4} sm={6} xs={12}>
							<Paper className={classes.subjectCard}>
								<Typography variant="h3" align="center">
									GCSE Computer Science
								</Typography>
							</Paper>
						</Grid>
						<Grid
							item
							lg={3}
							md={4}
							sm={6}
							xs={12}
							onClick={() =>
								(document.location.href =
									'/alevelcomputerscience')
							}
						>
							<Paper className={classes.subjectCard}>
								<Typography variant="h3" align="center">
									A-level Computer Science
								</Typography>
							</Paper>
						</Grid>
						<Grid
							item
							lg={3}
							md={4}
							sm={6}
							xs={12}
							onClick={() =>
								(document.location.href = '/subjects')
							}
						>
							<Paper className={classes.subjectCard}>
								<Typography variant="h3" align="center">
									View all
								</Typography>
							</Paper>
						</Grid>
					</Grid>
				</div>
			</div>
			<div
				className={classes.sectionWrapper}
				style={{
					backgroundImage: `url("https://i.imgur.com/bdZ8fF6.png")`,
					backgroundColor: grey[200],
					backgroundPositionY: 'calc(-1800px - 100vh)',
				}}
				ref={contactUsRef}
			>
				<div className={classes.sectionPaper}>
					<div style={{ flex: 1 }}>
						<Typography variant="h1" align="center">
							Contact us
						</Typography>
						<br></br>
						<Typography variant="h2">Emails:</Typography>
						<br></br>
						<div className={classes.contactWrapper}>
							<MailIcon
								color="primary"
								className={classes.icons}
							/>
							<Typography variant="h4" align="center">
								john@realtutor.online (CEO)
							</Typography>
						</div>
						<br></br>
						<div className={classes.contactWrapper}>
							<MailIcon
								color="primary"
								className={classes.icons}
							/>
							<Typography variant="h4" align="center">
								zach@realtutor.online (COO)
							</Typography>
						</div>
						<br></br>
						<Typography variant="h3">Phone numbers:</Typography>
						<br></br>
						<div className={classes.contactWrapper}>
							<PhoneIcon
								color="primary"
								className={classes.icons}
							/>
							<Typography variant="h4" align="center">
								+44 7443 494507 (Zach)
							</Typography>
						</div>
						<br></br>
						<div className={classes.contactWrapper}>
							<PhoneIcon
								color="primary"
								className={classes.icons}
							/>
							<Typography variant="h4" align="center">
								+44 7576 870036 (John)
							</Typography>
						</div>
						<br></br>
					</div>
					<div style={{ flex: 1 }}>
						<Typography variant="h1" align="center">
							Socials
						</Typography>
						<div
							className={classes.sectionPaper}
							style={{
								flexDirection: 'column',
								justifyContent: 'space-between',
								height: '80%',
							}}
						>
							<div
								className={classes.socialWrapper}
								onClick={() =>
									window
										.open(
											'https://www.instagram.com/realtutor_online/',
											'_blank'
										)
										.focus()
								}
							>
								<InstagramIcon
									color="secondary"
									className={classes.icons}
								></InstagramIcon>
								<Typography variant="h3">
									@realtutor_online
								</Typography>
							</div>
							<div
								className={classes.socialWrapper}
								onClick={() =>
									window
										.open(
											'https://www.youtube.com/channel/UCDIjZ-wLxyCc9yB49pK-Pqw',
											'_blank'
										)
										.focus()
								}
							>
								<YouTubeIcon
									color="secondary"
									className={classes.icons}
								></YouTubeIcon>
								<Typography variant="h3">Real Tutor</Typography>
							</div>
							<div
								className={classes.socialWrapper}
								className={classes.socialWrapper}
								onClick={() =>
									window
										.open(
											'https://www.facebook.com/real.tutor.509/',
											'_blank'
										)
										.focus()
								}
							>
								<FacebookIcon
									color="secondary"
									className={classes.icons}
								></FacebookIcon>
								<Typography variant="h3">Real Tutor</Typography>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
