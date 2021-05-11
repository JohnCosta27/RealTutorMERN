import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const SubjectCard = (props) => {
	const useStyles = makeStyles((theme) => ({
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

	return (
			<Grid item lg={3} md={4} sm={6} xs={12} onClick={props.onClick}>
				<Paper className={classes.subjectCard} elevation={4}>
					<Typography variant="h3" align="center">{props.title}</Typography>
				</Paper>
			</Grid>
	);
};
export default SubjectCard;
