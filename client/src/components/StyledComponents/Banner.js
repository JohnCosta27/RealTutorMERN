import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

import BannerBackground from '../../images/Banner.jpeg';

/*
Component props:
MainPage: Boolean, perhaps inefficient, but this component will render 
differently when on the main page than on other pages.
*/

const Banner = (props) => {
	const [enter, setEnter] = useState(false);
	const [height, setHeight] = useState(800);

	useEffect(() => {
		if (props.small) {
			setHeight(600);
		}
		setTimeout(() => {
			setEnter(true);
		}, 1000);
	}, []);

	const useStyles = makeStyles((theme) => ({
		banner: {
			width: '100%',
			height: height,
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
				height: (props.mainpage) ? 800 : height,
			},
		},
		name: {
			width: '80%',
			marginLeft: '10%',
			marginTop: 75,
		},
		centeredWrapper: {
			width: '80%',
			marginLeft: '10%',
			position: 'absolute',
			bottom: 150,
		},
	}));

	const classes = useStyles();

	if (props.mainpage) {
		return (
			<div className={classes.banner}>
				<div className={classes.name}>
					<Typography variant="h1" style={{ color: '#FAFAFA' }}>
						Covid stole your education. We're here to give it back.
					</Typography>
					<br></br>
				</div>
				<Slide timeout={1500} in={enter} direction="left">
					<div className={classes.centeredWrapper}>
						<Typography variant="h2" style={{ color: '#FAFAFA' }}>
							£20 an hour (GCSE)
						</Typography>
						<Typography variant="h2" style={{ color: '#FAFAFA' }}>
							£30 an hour (A-level)
						</Typography>
						<Typography variant="h3" color="secondary">
							The future is online.
						</Typography>
					</div>
				</Slide>
			</div>
		);
	} else {
		return (
			<div
				className={classes.banner}
				style={{
					backgroundPositionY: -100,
                    justifyContent: 'center',
                    alignItems: 'center',
					backgroundRepeat: 'no-repeat'
				}}
			>
				<br></br>
				<Typography
					variant="h1"
					align="center"
					style={{ color: '#FAFAFA' }}
				>
					Subject List
				</Typography>
			</div>
		);
	}
};

export default Banner;
