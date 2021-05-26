import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

const Lesson = (props) => {
	const [lesson, setLesson] = useState({});
	const [open, setOpen] = useState(false);

	const [q1, setq1] = useState(50);
	const [q2, setq2] = useState(50);
	const [q3, setq3] = useState(50);

	useEffect(() => {
		getLessons();
	}, []);

	const getLessons = async () => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);

		const response = await fetch(
			'/accounts/getstudentlatestlesson?studentid=' +
				urlParams.get('studentid'),
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				credentials: 'include',
			}
		);

		const data = await response.json();
		setLesson(data);
	};

	const useStyles = makeStyles((theme) => ({
		dialog: {
			display: 'flex',
			flexDirection: 'column',
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: 10,
			paddingBottom: 10,
		},
		dialogWrapper: {
			[theme.breakpoints.down('sm')]: {
				width: '95%',
				marginLeft: '2.5%',
			},
		},
		paper: {
			minWidth: '70%',
			[theme.breakpoints.down('sm')]: {
				minWidth: '95%',
			},
		},
	}));
	const classes = useStyles();

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmit = async () => {
		let body = {
			answers: [
				{
					question: 'How good was your lesson?',
					answer: q1,
				},
				{
					question: 'Did the tutor do well?',
					answer: q2,
				},
				{
					question: 'Would you recommend it to a friend?',
					answer: q3,
				},
			],
			lessonID: lesson._id,
		};

		const submitFeedback = await fetch('/forms/studentfeedback', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			credentials: 'include',
			body: JSON.stringify(body),
		});

		const data = await submitFeedback.json();
		
		lesson.studentFeedback = true;
		setLesson(lesson);
		setOpen(false);

	};

	const getFeedbackButton = () => {

		if (Object.keys(lesson).length == 0) {
			console.log("dsa")
			return <div></div>;
		}

		if (!lesson.studentFeedback && props.level == 1) {
			return (
				<div style={{ float: 'left' }}>
					<Button
						variant="contained"
						color="secondary"
						onClick={handleOpen}
					>
						Add feedback
					</Button>
				</div>
			);
		}
		return <div></div>;
	};

	if (lesson.error != null) {
		return <div></div>;
	} else {
		return (
			<div>
				<Typography variant="h4" align="left">
					Latest lesson:
				</Typography>
				<Typography variant="body1" align="left">
					{lesson.plan}
				</Typography>
				<br></br>
				{getFeedbackButton()}
				<Dialog
					onClose={handleClose}
					open={open}
					className={classes.dialogWrapper}
					classes={{ paper: classes.paper }}
				>
					<div className={classes.dialog}>
						<Typography variant="h1" noWrap={true} align="center">
							Lesson feedback form
						</Typography>
						<br></br>
						<Typography variant="h3">
							How good was your lesson?
						</Typography>
						<Slider
							value={q1}
							onChange={(event, newValue) => setq1(newValue)}
							defaultValue={50}
							step={2}
							min={0}
							max={100}
							valueLabelDisplay="auto"
							style={{ width: '95%', marginLeft: '2.5%' }}
						/>
						<Typography variant="h3">
							Did the tutor do well?
						</Typography>
						<Slider
							value={q2}
							onChange={(event, newValue) => setq2(newValue)}
							defaultValue={50}
							step={2}
							min={0}
							max={100}
							valueLabelDisplay="auto"
							style={{ width: '95%', marginLeft: '2.5%' }}
						/>
						<Typography variant="h3">
							Would you recommend it to a friend?
						</Typography>
						<Slider
							value={q3}
							onChange={(event, newValue) => setq3(newValue)}
							defaultValue={50}
							step={2}
							min={0}
							max={100}
							valueLabelDisplay="auto"
							style={{ width: '95%', marginLeft: '2.5%' }}
						/>
						<Button
							align="center"
							color="secondary"
							variant="contained"
							style={{ width: '95%', marginLeft: '2.5%' }}
							onClick={handleSubmit}
						>
							Submit
						</Button>
					</div>
				</Dialog>
			</div>
		);
	}
};

export default Lesson;
