import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";

import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import GroupIcon from "@material-ui/icons/Group";
import TableChartIcon from "@material-ui/icons/TableChart";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import AssessmentIcon from "@material-ui/icons/Assessment";
import MenuBook from "@material-ui/icons/MenuBook";
import Home from "@material-ui/icons/Home";
import LessonIcon from "@material-ui/icons/FormatListBulleted";

const LeftDrawer = (props) => {
  let openStart;
  if (window.innerWidth < 960) openStart = false;
  else openStart = true;
  const [open, setOpen] = useState(openStart);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    if (window.innerWidth >= 960) setOpen(true);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerWidth = 300;

  const useStyles = makeStyles((theme) => ({
    leftNavWrapper: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    leftNavPaper: {
      backgroundColor: theme.palette.leftNav,
      height: "100%",
      width: drawerWidth,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    button: {
      marginLeft: 5,
      marginRight: 5,
    },
    drawer: {
      width: drawerWidth,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      flexShrink: 0,
      zIndex: 10,
    },
    drawerPaper: {
      width: drawerWidth,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      zIndex: 10,
    },
    icon: {
      color: theme.palette.divBackground,
    },
    text: {
      color: theme.palette.lightText,
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      zIndex: theme.zIndex.drawer + 1,
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      [theme.breakpoints.down("sm")]: {
        width: 0,
      },
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolbar: {
      overflow: "auto",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
  }));

  const classes = useStyles();
  const theme = useTheme();

  const handleClick = (state) => {
    if (width < 960) {
      setOpen(false);
    }
    props.changeState(state);
  };

  //Level 1 -> Student looking at student dashboard
  //Level 2 -> Tutor looking at student dashboard
  //Level 3 -> Tutor looking at tutor dashboard
  //Level 4 -> Manager looking at manager dashboard

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
              className={clsx(classes.menuButton, open && classes.hide)}
            />
            <Typography variant="h6" noWrap>
              Real Tutor
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginLeft: "auto" }}
              onClick={() => {
                console.log("Hello");
                props.logout();
              }}
            >
              Log out
            </Button>
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
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
              <ListItem button key={0} onClick={() => handleClick(0)}>
                <ListItemIcon>
                  <Home color="secondary" />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItem>

              <ListItem button key={1} onClick={() => handleClick(1)}>
                <ListItemIcon>
                  <LessonIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={"View lessons"} />
              </ListItem>

              <ListItem button key={2} onClick={() => handleClick(2)}>
                <ListItemIcon>
                  <AssessmentIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={"View progress"} />
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
              className={clsx(classes.menuButton, open && classes.hide)}
            />
            <Typography variant="h6" noWrap>
              Real Tutor
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginLeft: "auto" }}
              onClick={() => {
                console.log("Hello");
                props.logout();
              }}
            >
              Log out
            </Button>
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
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
              <ListItem button key={0} onClick={() => handleClick(0)}>
                <ListItemIcon>
                  <Home color="secondary" />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItem>

              <ListItem button key={1} onClick={() => handleClick(1)}>
                <ListItemIcon>
                  <LessonIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={"View lessons"} />
              </ListItem>

              <ListItem button key={2} onClick={() => handleClick(2)}>
                <ListItemIcon>
                  <AssessmentIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={"View progress"} />
              </ListItem>

              <ListItem button key={3} onClick={() => handleClick(3)}>
                <ListItemIcon>
                  <AddIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={"Plan lesson"} />
              </ListItem>

              <ListItem button key={4} onClick={() => handleClick(4)}>
                <ListItemIcon>
                  <MenuBook color="secondary" />
                </ListItemIcon>
                <ListItemText primary={"Add report"} />
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
              className={clsx(classes.menuButton, open && classes.hide)}
            />
            <Typography variant="h6" noWrap>
              Real Tutor
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginLeft: "auto" }}
              onClick={() => {
                console.log("Hello");
                props.logout();
              }}
            >
              Log out
            </Button>
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
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
              <ListItem button key={0} onClick={() => handleClick(0)}>
                <ListItemIcon>
                  <Home color="secondary" />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItem>

              <ListItem button key={1} onClick={() => handleClick(1)}>
                <ListItemIcon>
                  <LessonIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={"View lessons"} />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    );
  } else if (props.level == 4) {
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
              className={clsx(classes.menuButton, open && classes.hide)}
            />
            <Typography variant="h6" noWrap>
              Real Tutor
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginLeft: "auto" }}
              onClick={() => {
                props.logout();
              }}
            >
              Log out
            </Button>
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
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>

              <ListItem button key={0} onClick={() => handleClick(0)}>
                <ListItemIcon>
                  <Home color="primary" />
                </ListItemIcon>
                <ListItemText primary={"Manager dashboard"} />
              </ListItem>

              <ListItem button key={0} onClick={() => handleClick(1)}>
                <ListItemIcon>
                  <LessonIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={"View Tutors"} />
              </ListItem>

              <ListItem button key={1} onClick={() => handleClick(2)}>
                <ListItemIcon>
                  <GroupIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={"View Students"} />
              </ListItem>

              <ListItem
                button
                key={2}
                onClick={() => (document.location.href = "/tutordashboard")}
              >
                <ListItemIcon>
                  <Home color="secondary" />
                </ListItemIcon>
                <ListItemText primary={"Tutor Dashboard"} />
              </ListItem>

              <ListItem button key={3} onClick={() => handleClick(3)}>
                <ListItemIcon>
                  <TableChartIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={"Stats"} />
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
