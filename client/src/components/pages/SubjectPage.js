import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import MainPageButtons from '../general/MainPageButtons';

const SubjectPage = () => {
	const useStyles = makeStyles((theme) => ({}));

	const classes = useStyles();

    const contactUs = () => {
        document.location.href = "/?section=contact-us"
    }

	return (
		<div>
			<AppBar position="absolute" className={classes.appBar}>
				<Toolbar
					style={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<Typography variant="h3">Real Tutor</Typography>
                    <MainPageButtons contactus={contactUs}/>
				</Toolbar>
			</AppBar>
		</div>
	);
};
export default SubjectPage;
