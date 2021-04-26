import react, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const MainPageButtons = (props) => {
	const [width, setWidth] = useState(window.innerWidth);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', () => setWidth(window.innerWidth));
	}, []);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const useStyles = makeStyles((theme) => ({
		list: {
			display: 'flex',
			float: 'right',
		},
		listItem: {
			marginLeft: 10,
			marginRight: 10,
		},
		drawerPaper: {
			width: '100%',
		},
		drawerItem: {
			width: width / 1.5,
			marginTop: 20,
			marginButtom: 20,
			marginLeft: 10,
			marginRight: 10,
		},
	}));

	const classes = useStyles();

	const contactUsMobile = () => {
		props.contactus();
		setOpen(false);
	}

	if (width < 750) {
		return (
			<div>
				<IconButton onClick={handleDrawerOpen}>
					<MenuIcon color="secondary" />
				</IconButton>
				<SwipeableDrawer
					open={open}
					onClose={handleDrawerClose}
					onOpen={handleDrawerOpen}
					disableRestoreFocus
				>
					<Button
						variant="outlined"
						color="secondary"
						className={classes.drawerItem}
					>
						About Us
					</Button>
					<Button
						variant="outlined"
						color="secondary"
						className={classes.drawerItem}
					>
						Subjects
					</Button>
					<Button
						variant="outlined"
						color="secondary"
						className={classes.drawerItem}
					>
						Our Team
					</Button>
					<Button
						variant="contained"
						color="secondary"
						className={classes.drawerItem}
						onClick={contactUsMobile}
					>
						Contact Us
					</Button>
				</SwipeableDrawer>
			</div>
		);
	} else {
		return (
			<AppBar position="absolute" className={classes.appBar}>
				<Toolbar
					style={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<Typography variant="h3">Real Tutor</Typography>
					<List className={classes.list}>
						<Button color="secondary" className={classes.listItem}>
							About Us
						</Button>
						<Button color="secondary" className={classes.listItem}>
							Subjects
						</Button>
						<Button color="secondary" className={classes.listItem}>
							Our Team
						</Button>
						<Button
							variant="contained"
							color="secondary"
							className={classes.listItem}
							onClick={props.contactus}
						>
							Contact Us
						</Button>
					</List>
				</Toolbar>
			</AppBar>
		);
	}
};

export default MainPageButtons;
