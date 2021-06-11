import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

import BannerBackground from '../../images/Banner.jpeg';
import SmallBannerBackground from '../../images/SmallBanner.jpeg';
import SmallerBannerBackground from '../../images/SmallerBanner.jpeg';
import BannerWithoutLogo from '../../images/BannerWithoutLogo.jpg';
import Logo from '../../images/TransparentWhiteText.png';

/*
Component props:
MainPage: Boolean, perhaps inefficient, but this component will render 
differently when on the main page than on other pages.
*/

//{//<div style={{width: '100%', height: "62.5%", backgroundImage: `url(${Logo})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>//}

const Banner = (props) => {
	const [enter, setEnter] = useState(false);
	const [height, setHeight] = useState(800);
	const [width, setWidth] = useState(window.innerWidth);

	const updateWidth = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		if (props.small) {
			setHeight(600);
		}
		setTimeout(() => {
			setEnter(true);
		}, 1000);

		window.addEventListener('resize', updateWidth);
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
			justifyContent: props.mainpage ? 'start' : 'center',
			alignItems: 'center',
			backgroundRepeat: 'no-repeat',
			[theme.breakpoints.down('md')]: {
				height: 725,
				backgroundImage: `url(${SmallBannerBackground})`,
				backgroundPositionX: 'center',
				justifyContent: props.mainpage ? 'start' : 'flex-end',
			},
			[theme.breakpoints.down('xs')]: {
				height: props.mainpage ? 500 : height,
				backgroundImage: `url(${BannerWithoutLogo})`,
				backgroundSize: 'cover',
				backgroundPositionY: 0,
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
				width: '80%',
				marginLeft: '10%',
				bottom: 50,
			},
			[theme.breakpoints.down('xs')]: {
				width: '100%',
				marginLeft: 0,
				bottom: 100,
			},
		},
		titles: {},
		spacer: {
			width: '100%',
			height: 500,
		},
		logoMobile: {
			width: '100%',
		},
	}));

	const classes = useStyles();

	if (props.mainpage) {
		return (
			<div className={classes.banner} style={{ height: 800 }}>
				<div className={classes.name}>
					<Typography variant="h3" style={{ color: '#FAFAFA' }}>
						Covid stole your education. We're here to give it back.
					</Typography>
					<br></br>
				</div>
				{width < 601 ? (
					<div
						style={{
							width: '100%',
							height: '50%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img src={Logo} className={classes.logoMobile} />
						<div className={classes.centeredWrapper}>
							<Typography
								variant="h3"
								align="center"
								style={{ color: '#FAFAFA' }}
							>
								£20 an hour (GCSE)
							</Typography>
							<Typography
								variant="h3"
								align="center"
								style={{ color: '#FAFAFA' }}
							>
								£30 an hour (A-level)
							</Typography>
							<Typography
								variant="h4"
								align="center"
								style={{ color: '#FAFAFA' }}
							>
								The future is online.
							</Typography>
						</div>
					</div>
				) : (
					<div className={classes.centeredWrapper}>
						<Typography variant="h2" style={{ color: '#FAFAFA' }}>
							£20 an hour (GCSE)
						</Typography>
						<Typography variant="h2" style={{ color: '#FAFAFA' }}>
							£30 an hour (A-level)
						</Typography>
						<Typography variant="h3" style={{ color: '#FAFAFA' }}>
							The future is online.
						</Typography>
					</div>
				)}
			</div>
		);
	} else {
		return (
			<div className={classes.banner}>
				{width < 601 ? (
					<div
						style={{
							width: '100%',
							height: '75%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img src={Logo} className={classes.logoMobile} />
					</div>
				) : (
					<div></div>
				)}
				<div className={classes.titles}>
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
			</div>
		);
	}
};

export default Banner;
