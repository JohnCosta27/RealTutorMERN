import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MenuBook from '@material-ui/icons/MenuBook';
import Home from '@material-ui/icons/Home';
import LessonIcon from '@material-ui/icons/FormatListBulleted';

const LeftDrawer = (props) => {
	const [open, setOpen] = useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const drawerWidth = 300;

	const useStyles = makeStyles((theme) => ({
		leftNavWrapper: {
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		leftNavPaper: {
			backgroundColor: theme.palette.leftNav,
			height: '100%',
			width: drawerWidth,
		},
		button: {
			marginLeft: 5,
			marginRight: 5,
		},
		drawer: {
			width: drawerWidth,
			zIndex: 0,
		},
		drawerPaper: {
			width: drawerWidth,
		},
		icon: {
			color: theme.palette.divBackground,
		},
		text: {
			color: theme.palette.lightText,
		},
		appBar: {
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			zIndex: theme.zIndex.drawer + 1,
		},
		appBarShift: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		toolbar: {
			overflow: 'auto',
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		hide: {
			display: 'none',
		},
	}));

	const classes = useStyles();
	const theme = useTheme();

	//Level 1 -> Student looking at student dashboard
	//Level 2 -> Tutor looking at student dashboard
	//Level 3 -> Tutor looking at tutor dashbgoard

	if (props.level == 1) {
		return (
			<div
				className={classes.leftNavWrapper}
				style={open ? { width: drawerWidth } : { width: 0 }}
			>
				<AppBar
					position="fixed"
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open,
					})}
				>
					<Toolbar>
						<MenuIcon
							onClick={handleDrawerOpen}
							edge="start"
							className={clsx(
								classes.menuButton,
								open && classes.hide
							)}
						/>
						<Typography variant="h6" noWrap>
							Real Tutor
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					open={open}
					anchor="left"
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div className={classes.drawerContainer}>
						<List>
							<IconButton onClick={handleDrawerClose}>
								{theme.direction === 'ltr' ? (
									<ChevronLeftIcon />
								) : (
									<ChevronRightIcon />
								)}
							</IconButton>
							<ListItem
								button
								key={0}
								onClick={() => props.changeState(0)}
							>
								<ListItemIcon>
									<Home color="secondary" />
								</ListItemIcon>
								<ListItemText primary={'Dashboard'} />
							</ListItem>

							<ListItem
								button
								key={1}
								onClick={() => props.changeState(1)}
							>
								<ListItemIcon>
									<LessonIcon color="secondary" />
								</ListItemIcon>
								<ListItemText primary={'View lessons'} />
							</ListItem>

							<ListItem
								button
								key={2}
								onClick={() => props.changeState(2)}
							>
								<ListItemIcon>
									<AssessmentIcon color="secondary" />
								</ListItemIcon>
								<ListItemText primary={'View progress'} />
							</ListItem>
						</List>
					</div>
				</Drawer>
			</div>
		);
	} else if (props.level == 2) {
		return (
			<div
				className={classes.leftNavWrapper}
				style={open ? { width: drawerWidth } : { width: 0 }}
			>
				<AppBar
					position="fixed"
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open,
					})}
				>
					<Toolbar>
						<MenuIcon
							onClick={handleDrawerOpen}
							edge="start"
							className={clsx(
								classes.menuButton,
								open && classes.hide
							)}
						/>
						<Typography variant="h6" noWrap>
							Real Tutor
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					open={open}
					anchor="left"
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div className={classes.drawerContainer}>
						<List>
							<IconButton onClick={handleDrawerClose}>
								{theme.direction === 'ltr' ? (
									<ChevronLeftIcon />
								) : (
									<ChevronRightIcon />
								)}
							</IconButton>
							<ListItem
								button
								key={0}
								onClick={() => props.changeState(0)}
							>
								<ListItemIcon>
									<Home color="secondary" />
								</ListItemIcon>
								<ListItemText primary={'Dashboard'} />
							</ListItem>

							<ListItem
								button
								key={1}
								onClick={() => props.changeState(1)}
							>
								<ListItemIcon>
									<LessonIcon color="secondary" />
								</ListItemIcon>
								<ListItemText primary={'View lessons'} />
							</ListItem>

							<ListItem
								button
								key={2}
								onClick={() => props.changeState(2)}
							>
								<ListItemIcon>
									<AssessmentIcon color="secondary" />
								</ListItemIcon>
								<ListItemText primary={'View progress'} />
							</ListItem>

							<ListItem
								button
								key={3}
								onClick={() => props.changeState(3)}
							>
								<ListItemIcon>
									<AddIcon color="secondary" />
								</ListItemIcon>
								<ListItemText primary={'Plan lesson'} />
							</ListItem>

							<ListItem
								button
								key={4}
								onClick={() => props.changeState(4)}
							>
								<ListItemIcon>
									<MenuBook color="secondary" />
								</ListItemIcon>
								<ListItemText primary={'Add report'} />
							</ListItem>
						</List>
					</div>
				</Drawer>
			</div>
		);
	} else if (props.level == 3) {
		return (
			<div
				className={classes.leftNavWrapper}
				style={open ? { width: drawerWidth } : { width: 0 }}
			>
				<AppBar
					position="fixed"
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open,
					})}
				>
					<Toolbar>
						<MenuIcon
							onClick={handleDrawerOpen}
							edge="start"
							className={clsx(
								classes.menuButton,
								open && classes.hide
							)}
						/>
						<Typography variant="h6" noWrap>
							Real Tutor
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					open={open}
					anchor="left"
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div className={classes.drawerContainer}>
						<List>
							<IconButton onClick={handleDrawerClose}>
								{theme.direction === 'ltr' ? (
									<ChevronLeftIcon />
								) : (
									<ChevronRightIcon />
								)}
							</IconButton>
							<ListItem
								button
								key={0}
								onClick={() => props.changeState(0)}
							>
								<ListItemIcon>
									<Home color="secondary" />
								</ListItemIcon>
								<ListItemText primary={'Dashboard'} />
							</ListItem>

							<ListItem
								button
								key={1}
								onClick={() => props.changeState(1)}
							>
								<ListItemIcon>
									<LessonIcon color="secondary" />
								</ListItemIcon>
								<ListItemText primary={'View lessons'} />
							</ListItem>
						</List>
					</div>
				</Drawer>
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default LeftDrawer;
