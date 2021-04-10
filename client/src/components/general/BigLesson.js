import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { Typography } from '@material-ui/core';

const BigLesson = (props) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const useStyles = makeStyles((theme) => ({
		biglesson: {
			display: 'flex',
			flexDirection: 'column',
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: 10,
			paddingBottom: 10,
		},
	}));
	const classes = useStyles();

	return (
		<TableRow hover key={props._id}>
			<TableCell component="th" scope="row">
				{props.title}
			</TableCell>
			<TableCell>
				<ul>
					{props.specPoints.map((point) => (
						<li key={point.contentID}>{point}</li>
					))}
				</ul>
			</TableCell>
			<TableCell>
				<ul>
					{props.specPointsAchieved.map((point) => (
						<li key={point.contentID}>{point}</li>
					))}
				</ul>
			</TableCell>
			<TableCell>
				{new Date(props.date * 1000).toDateString('en-UK')}
			</TableCell>
			<TableCell>
				<Button color="secondary" onClick={handleClickOpen}>
					Expand
				</Button>
			</TableCell>

			<Dialog
				open={open}
				onClose={handleClose}
				onClick={() => handleClickOpen}
				className={classes.bigLessonWrapper}
			>
				<Typography variant="h3">{props.title}</Typography>
				<Typography variant="h4">Date</Typography>
				<Typography variant="body1">{new Date(props.date * 1000).toString()}</Typography>
				<div className={classes.biglesson}>
					<Typography variant="h4">Plan</Typography>
					<Typography variant="body1">{props.plan}</Typography>
					<Typography variant="h4">Spec points</Typography>
					<ul>
						{props.specPointsAchieved.map((point) => (
							<li key={point.contentID}>{point}</li>
						))}
					</ul>
					<Typography variant="h4">Report</Typography>
					<Typography variant="body1">{props.report}</Typography>
					<Typography variant="h4">Spec points achieved</Typography>
					<ul>
						{props.specPointsAchieved.map((point) => (
							<li key={point.contentID}>{point}</li>
						))}
					</ul>
					<Button
						onClick={handleClose}
						color="primary"
						variant="contained"
					>
						Close
					</Button>
				</div>
			</Dialog>
		</TableRow>
	);
};

export default BigLesson;
