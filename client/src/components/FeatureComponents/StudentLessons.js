import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import BigLesson from '../general/BigLesson';
import LoadingDisk from '../general/LoadingDisk';

const StudentLessons = (props) => {
	const [rows, setRows] = useState([]);
	const [width, setWidth] = useState(window.innerWidth);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getLessons();
		window.addEventListener('resize', () => setWidth(window.innerWidth));
	}, []);

	const getLessons = async () => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);

		let request = '';
		if (props.level == 1) {
			request =
				'/accounts/getstudentlessons?studentid=' +
				(await urlParams.get('studentid'));
		} else if (props.level >= 2) {
			request =
				'/accounts/gettutorlessons?tutorid=' +
				(await urlParams.get('tutorid'));
		}

		const response = await fetch(request, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		});

		const data = await response.json();
		data.sort(function(a, b) {
			return a.datetime - b.datetime;
		});
		let lessons = [];
		for (let lesson of data) {
			let specPoints = [];
			for (let point of lesson.specPoints) {
				specPoints.push(point.content);
			}

			let specPointsAchieved = [];
			for (let point of lesson.specPointsAchieved) {
				specPointsAchieved.push(point.content);
			}

			lessons.push(
				createData(
					lesson._id,
					lesson.title,
					lesson.plan,
					specPoints,
					lesson.report,
					specPointsAchieved,
					lesson.date,
					lesson.student,
					lesson.tutor
				)
			);
		}

		lessons.sort((a, b) => {
			return b.date - a.date;
		});
		await setRows(lessons);
		setLoading(false);
	};

	const createData = (
		_id,
		title,
		plan,
		specPoints,
		report,
		specPointsAchieved,
		date,
		student,
		tutor
	) => {
		return {
			_id,
			title,
			plan,
			specPoints,
			report,
			specPointsAchieved,
			date,
			student,
			tutor,
		};
	};

	const useStyles = makeStyles((theme) => ({
		table: {
			minWidth: 650,
			[theme.breakpoints.down('sm')]: {
				minWidth: 0,
				overflow: 'scroll',
			},
		},
	}));

	const classes = useStyles();

	if (width < 1000 || (width < 1300 && props.level == 2)) {
		if (props.level == 1) {
			return (
				<div>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Title</TableCell>
								<TableCell>Expand</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<BigLesson
									id={row._id}
									_id={row._id}
									title={row.title}
									plan={row.plan}
									specPoints={row.specPoints}
									specPointsAchieved={row.specPointsAchieved}
									report={row.report}
									date={row.date}
									mobile={true}
									level={1}
								/>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<LoadingDisk loading={loading} />
				</div>
			);
		} else if (props.level == 2) {
			return (
				<div>
					<TableContainer component={Paper}>
						<Table
							className={classes.table}
							aria-label="simple table"
						>
							<TableHead>
								<TableRow>
									<TableCell>Title</TableCell>
									<TableCell>Expand</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<BigLesson
										id={row._id}
										_id={row._id}
										title={row.title}
										student={row.student}
										plan={row.plan}
										specPoints={row.specPoints}
										specPointsAchieved={
											row.specPointsAchieved
										}
										report={row.report}
										date={row.date}
										mobile={true}
										level={2}
									/>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<LoadingDisk loading={loading} />
				</div>
			);
		}
	} else {
		if (props.level == 1) {
			return (
				<div>
					<TableContainer component={Paper}>
						<Table
							className={classes.table}
							aria-label="simple table"
						>
							<TableHead>
								<TableRow>
									<TableCell>Title</TableCell>
									<TableCell>Specification Points</TableCell>
									<TableCell>
										Achieved Specification Points
									</TableCell>
									<TableCell style={{ width: 150 }}>
										Date
									</TableCell>
									<TableCell>Expand</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<BigLesson
										id={row._id}
										_id={row._id}
										title={row.title}
										plan={row.plan}
										specPoints={row.specPoints}
										specPointsAchieved={
											row.specPointsAchieved
										}
										report={row.report}
										date={row.date}
										mobile={false}
										level={1}
									/>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<LoadingDisk loading={loading} />
				</div>
			);
		} else if (props.level == 2) {
			console.log("Hello")
			return (
				<div>
					<TableContainer component={Paper}>
						<Table
							className={classes.table}
							aria-label="simple table"
						>
							<TableHead>
								<TableRow>
									<TableCell>Student</TableCell>
									<TableCell>Title</TableCell>
									<TableCell>Specification Points</TableCell>
									<TableCell>
										Achieved Specification Points
									</TableCell>
									<TableCell style={{ width: 150 }}>
										Date
									</TableCell>
									<TableCell>Expand</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<BigLesson
										id={row._id}
										_id={row._id}
										student={row.student}
										title={row.title}
										plan={row.plan}
										specPoints={row.specPoints}
										specPointsAchieved={
											row.specPointsAchieved
										}
										report={row.report}
										date={row.date}
										mobile={false}
										level={2}
									/>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<LoadingDisk loading={loading} />
				</div>
			);
		}
	}
};

export default StudentLessons;
