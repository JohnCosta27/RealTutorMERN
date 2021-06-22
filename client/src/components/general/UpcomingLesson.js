import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import LoadingDisk from '../general/LoadingDisk';

const UpcomingLesson = () => {
	const [upcomingLesson, setUpcomingLesson] = useState({ empty: true });
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getUpcomingLesson();
	}, []);

	const getUpcomingLesson = async () => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);

		const response = await fetch(
			'/accounts/getstudentupcoming?studentid=' +
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
		if (data.error != "No upcoming lesson") {
			setUpcomingLesson(data);
		}
		setLoading(false);
	};

	if (upcomingLesson.empty) {
		return (
			<div>
				<LoadingDisk loading={loading} />
			</div>
		)
	} else {
		return (
			<div>
				<Typography variant="h4" align="left">
					{upcomingLesson.title}
				</Typography>
				<ul>
					{upcomingLesson.specPoints.map((point) => (
						<li key={point.contentID}>
							<Typography variant="body1" align="left">
								{point.content}
							</Typography>
						</li>
					))}
				</ul>
			</div>
		);
	}
};

export default UpcomingLesson;
