import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

import BannerBackground from '../../images/Banner.jpeg';
import SmallBannerBackground from '../../images/SmallBanner.jpeg';
import SmallerBannerBackground from '../../images/SmallerBanner.jpeg';

/*
Component props:
MainPage: Boolean, perhaps inefficient, but this component will render 
differently when on the main page than on other pages.
*/

const Banner = (props) => {
	const [enter, setEnter] = useState(false);
	const [height, setHeight] = useState(800);
	const [width, setWidth] = useState(window.innerWidth);

	const updateWidth = () => {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		if (props.small) {
			setHeight(600);
		}
		setTimeout(() => {
			setEnter(true);
		}, 1000);

		window.addEventListener("resize", updateWidth);

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
			backgroundPositionX: 'right',
			backgroundPositionY: 'center',
			[theme.breakpoints.down('md')]: {
				height: 725,
				backgroundImage: `url(${SmallBannerBackground})`,
				backgroundPositionX: 'center',
			},
			[theme.breakpoints.down('xs')]: {
				height: props.mainpage ? 500 : height,
				backgroundImage: `url(${SmallerBannerBackground})`,
				backgroundSize: 'cover',
				backgroundPositionY: 50
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
			bottom: 100,
			[theme.breakpoints.down('sm')]: {
				bottom: 50,
			},
		},
	}));

	const classes = useStyles();

	if (props.mainpage) {
		return (
			<div className={classes.banner}>
				<div className={classes.name}>
					<Typography variant="h3" style={{ color: '#FAFAFA' }}>
						Covid stole your education. We're here to give it back.
					</Typography>
					<br></br>
				</div>
				<Slide timeout={1500} in={enter} direction="left">
					{width < 440 ? (
						<div className={classes.centeredWrapper}>
							<Typography
								variant="h4"
								style={{ color: '#FAFAFA' }}
							>
								£20 an hour (GCSE)
							</Typography>
							<Typography
								variant="h4"
								style={{ color: '#FAFAFA' }}
							>
								£30 an hour (A-level)
							</Typography>
							<Typography
								variant="h4"
								style={{ color: '#FAFAFA' }}
							>
								The future is online.
							</Typography>
						</div>
					) : (
						<div className={classes.centeredWrapper}>
							<Typography
								variant="h2"
								style={{ color: '#FAFAFA' }}
							>
								£20 an hour (GCSE)
							</Typography>
							<Typography
								variant="h2"
								style={{ color: '#FAFAFA' }}
							>
								£30 an hour (A-level)
							</Typography>
							<Typography
								variant="h3"
								style={{ color: '#FAFAFA' }}
							>
								The future is online.
							</Typography>
						</div>
					)}
				</Slide>
			</div>
		);
	} else {
		return (
			<div
				className={classes.banner}
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<br></br>
				<Typography
					variant="h1"
					align="center"
					style={{ color: '#FAFAFA' }}
				>
					{props.title}
				</Typography>
				<Typography
					variant="h3"
					align="center"
					style={{ color: '#FAFAFA' }}
				>
					{props.subtitle}
				</Typography>
			</div>
		);
	}
};

export default Banner;
