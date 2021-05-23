import react, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Section from './Section';
import John from '../../images/People/john.jpg';
import Ronnie from '../../images/People/ronnie.jpg';

const AboutTheTutor = (props) => {
	const useStyles = makeStyles((theme) => ({
		tutorPicturesWrapper: {
			width: '100%',
			height: 500,
			display: 'flex',
			flexDirection: 'row',
			float: 'left',
			[theme.breakpoints.down('md')]: {
				marginLeft: 0,
				backgroundPositionX: 'center',
				backgroundPositionY: 'center',
			},
			[theme.breakpoints.down('xs')]: {
				flexDirection: 'column',
			},
		},
		tutorPictures: {
			width: '60%',
			height: '100%',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
			float: 'left',
            borderRadius: 20,
			[theme.breakpoints.down('md')]: {
				overflow: 'auto',
				justifyContent: 'center',
                marginLeft: '20%',
			},
			[theme.breakpoints.down('xs')]: {
				width: "95%",
				height: 500,
				marginLeft: "2.5%"
			},
		},
		tutorWrapper: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			[theme.breakpoints.down('md')]: {
				flexDirection: 'column',
			},
		},
		mainWrapper: {
			display: 'flex',
			width: '100%',
			height: 'auto',
			justifyContent: 'space-between',
			[theme.breakpoints.down('md')]: {
				flexDirection: 'column',
			},
		},
	}));

	const classes = useStyles();

	return (
		<Section background={props.background} auto={true} centered={true}>
			<div className={classes.tutorWrapper}>
				<div style={{ flex: 1, width: '100%' }}>
					<Typography variant="h1">{props.name}</Typography>
					<div className={classes.tutorPicturesWrapper}>
						<div
							className={classes.tutorPictures}
							style={{ backgroundImage: `url(${props.person})` }}
						></div>
					</div>
				</div>
				<div style={{ flex: 1 }}>
					<Typography variant="h3">About me</Typography>
					<Typography variant="body2">
						{props.aboutme}
					</Typography>
				</div>
			</div>
		</Section>
	);
};

export default AboutTheTutor;
