import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import DefaultAppBar from '../general/DefaultAppBar';
import SubjectCard from '../general/SubjectCard';
import Banner from '../StyledComponents/Banner';

import BannerBackground from '../../images/Banner.jpeg';

const SubjectPage = () => {
	const useStyles = makeStyles((theme) => ({
		subjectListWrapper: {
			width: '100%',
			backgroundColor: '#FAFAFA',
			height: 'auto',
		},
		subjectGridWrapper: {
			paddingTop: 20,
			paddingLeft: "5%",
			paddingRight: "5%",
			paddingBottom: 20,
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
	}));

	const classes = useStyles();

	const contactUs = () => {
		document.location.href = '/?section=contact-us';
	};

	return (
		<div>
			<DefaultAppBar contactus={contactUs} />
			<Banner small={true} title="Subject list"/>
			<div className={classes.subjectListWrapper}>
				<div className={classes.subjectGridWrapper}>
					<Typography variant="h2">A-levels</Typography>
					<Grid
						container
						spacing={3}
						justify="center"
						alignItems="center"
						className={classes.subjectGrid}
					>
						<SubjectCard title="Maths" />
						<SubjectCard title="Further Maths" />
						<SubjectCard title="Computer Science" />
						<SubjectCard title="Physics" />
						<SubjectCard title="Economics" />
						<SubjectCard title="Art" />
					</Grid>
				</div>
				<div className={classes.subjectGridWrapper}>
					<Typography variant="h2">GCSEs</Typography>
					<Grid
						container
						spacing={3}
						justify="center"
						alignItems="center"
						className={classes.subjectGrid}
					>
						<SubjectCard title="Physics" />
						<SubjectCard title="Computer Science" />
						<SubjectCard title="Art" />
						<SubjectCard title="Graphics" />
					</Grid>
				</div>
			</div>
		</div>
	);
};
export default SubjectPage;
