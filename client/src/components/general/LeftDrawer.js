import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MenuBook from '@material-ui/icons/MenuBook';
import Home from '@material-ui/icons/Home';
import LessonIcon from '@material-ui/icons/FormatListBulleted';

const LeftDrawer = (props) => {
	const drawerWidth = 300;

	const useStyles = makeStyles((theme) => ({
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
			zIndex: theme.zIndex.drawer + 1,
		},
		toolbar: {
			overflow: 'auto',
		},
	}));

	const classes = useStyles();

	if (props.level == 1) {
		return (
			<div>
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<Typography variant="h6" noWrap>
							Real Tutor
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<Toolbar />
					<div className={classes.drawerContainer}>
						<List>
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
	} else if (props.level >= 2) {
		return (
			<div>
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<Typography variant="h6" noWrap>
							Real Tutor
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<Toolbar />
					<div className={classes.drawerContainer}>
						<List>
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
	} else {
		return <div></div>;
	}
};

export default LeftDrawer;
