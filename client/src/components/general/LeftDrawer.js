import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const LeftDrawer = () => {

    const drawerWidth = 300;

    const useStyles = makeStyles(theme => ({
        leftNav: {
            flex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minWidth: 400,
        },
        leftNavPaper: {
            backgroundColor: theme.palette.leftNav,
            height: "100%",
            width: drawerWidth
        },
        button: {
            marginLeft: 5,
            marginRight: 5
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0
        },
        drawerPaper: {
            width: drawerWidth,
        },
        icon: {
            color: theme.palette.divBackground
        },
        text: {
            color: theme.palette.lightText
        }
    }));

    const classes = useStyles();

    return (
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.leftNavPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon className={classes.icon}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} className={classes.text}/>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    );

}

export default LeftDrawer;