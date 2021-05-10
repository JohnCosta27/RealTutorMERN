import react from 'react';

import { makeStyles } from '@material-ui/styles';

import DefaultAppBar from '../general/DefaultAppBar';
import Banner from '../StyledComponents/Banner';
import { Typography } from '@material-ui/core';

import John from '../../images/john.jpg';

const Team = () => {
	const useStyles = makeStyles((theme) => ({
		sectionWrapper: {
			backgroundColor: '#fafafa',
			width: '100%',
			display: 'flex',
			height: '100vh',
		},
		sectionPaper: {
			width: '80%',
			height: '97.5%',
			marginTop: '1.25%',
			marginBottom: '1.25%',
			marginLeft: '10%',
			marginRight: '10%',
			display: 'flex',
			paddingTop: 100,
			paddingLeft: 100,
			paddingBottom: 100,
			paddingRight: 100,
			justifyContent: 'space-between',
			[theme.breakpoints.down('md')]: {
				flexDirection: 'column',
				justifyContent: 'center',
                paddingTop: 20,
                paddingLeft: 20,
                paddingBottom: 20,
                paddingRight: 20,
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
		tutorPicturesWrapper: {
			width: '100%',
			height: 500,
			display: 'flex',
			flexDirection: 'row',
			float: 'left',
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
			backgroundImage: `url(${John})`,
			backgroundSize: 'contain',
			backgroundRepeat: 'no-repeat',
			backgroundPositionY: 'center',
			float: 'left',
		},
	}));

	const classes = useStyles();

	return (
		<div>
			<DefaultAppBar />
			<Banner
				small={true}
				title="Meet the team"
				subtitle="A small, close team, working to provide the best tutoring"
			/>
			<div className={classes.smallSection}>
				<div
					className={classes.sectionPaper}
					style={{ alignItems: 'center' }}
				>
					<div style={{ flex: 1 }}>
						<Typography variant="h1">John Costa</Typography>
						<div className={classes.tutorPicturesWrapper}>
							<div className={classes.tutorPictures}></div>
						</div>
					</div>
					<div style={{ flex: 1 }}>
                    <Typography variant="h3">About me</Typography>
						<Typography variant="body2">
							Hello Hello Hello Hello Hello Hello Hello Hello
							Hello Hello Hello Hello Hello Hello Hello Hello
							Hello Hello Hello Hello Hello Hello Hello Hello
							Hello Hello Hello Hello Hello Hello Hello Hello
							Hello Hello Hello Hello Hello Hello Hello Hello
						</Typography>

                        <br></br>

                        <Typography variant="h3">Roles</Typography>
                        <Typography variant="body2">1. CEO of the company</Typography>
                        <Typography variant="body2">2. Code all of the companies systems</Typography>
                        <Typography variant="body2">3. Teach Maths, Further Maths and Computer Science</Typography>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
