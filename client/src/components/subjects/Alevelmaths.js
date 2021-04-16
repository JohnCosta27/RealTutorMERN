import react from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Alevelmaths = () => {
	const useStyles = makeStyles((theme) => ({
		sectionWrapper: {
			backgroundColor: '#fafafa',
			width: '100%',
			display: 'flex',
			height: '100vh',
		},
		sectionPaper: {
			width: '80%',
			height: '97.5%',
			marginTop: '1.25%',
			marginBottom: '1.25%',
			marginLeft: '10%',
			marginRight: '10%',
			display: 'flex',
			paddingTop: 20,
			paddingLeft: 20,
			paddingBottom: 20,
			paddingRight: 20,
		},
		banner: {
			width: '100%',
			height: 800,
			backgroundImage: `url("https://www.oxygenna.com/wp-content/uploads/2015/11/18.jpg")`,
			display: 'flex',
			flexDirection: 'column',
			position: 'relative',
			justifyContent: 'center',
			alignItems: 'center',
			paddingLeft: 10,
			paddingRight: 10
		},
	}));

	const classes = useStyles();

	return (
		<div>
			<AppBar position="absolute" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" noWrap>
						Real Tutor
					</Typography>
				</Toolbar>
			</AppBar>
			<div className={classes.banner}>
				<Typography variant="h1" align="center">A-level Maths</Typography>
				<br></br>
				<Typography variant="h3" align="center">One of the most important A-levels a student can take.</Typography>
			</div>
            <div className={classes.sectionWrapper}>

            </div>
		</div>
	);
};

export default Alevelmaths;