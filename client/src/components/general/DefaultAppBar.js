import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../../images/logo.png";

const DefaultAppBar = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    list: {
      display: "flex",
      float: "right",
    },
    listItem: {
      marginLeft: 10,
      marginRight: 10,
    },
    drawerPaper: {
      width: "100%",
    },
    drawerItem: {
      width: width / 1.5,
      marginTop: 20,
      marginButtom: 20,
      marginLeft: 10,
      marginRight: 10,
      color: "#bbbbbb",
    },
    paper: {
      background: theme.palette.grey.main,
    },
    appbarLogo: {
      width: 50,
      height: 50,
      marginRight: 10,
      backgroundImage: `url(${Logo})`,
      backgroundSize: "contain",
    },
  }));

  const classes = useStyles();

  const contactUs = () => {
    document.location.href = "/?section=contact-us";
  };

  if (width < 850) {
    return (
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ position: "fixed !important" }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <div className={classes.appbarLogo}></div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => (document.location.href = "/")}
            >
              <Typography variant="h3">Real Tutor</Typography>
            </div>
          </div>
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon color="secondary" />
          </IconButton>
          <SwipeableDrawer
            open={open}
            onClose={handleDrawerClose}
            onOpen={handleDrawerOpen}
            disableRestoreFocus
            classes={{ paper: classes.paper }}
          >
            <Button
              className={classes.drawerItem}
              onClick={() => (document.location.href = "/")}
            >
              Home
            </Button>
            <Button
              className={classes.drawerItem}
              onClick={() => (document.location.href = "/how-it-works")}
            >
              How it works
            </Button>
            <Button
              className={classes.drawerItem}
              onClick={() => (document.location.href = "/subjects")}
            >
              Subjects
            </Button>
            <Button
              className={classes.drawerItem}
              onClick={() => (document.location.href = "/team")}
            >
              Our Team
            </Button>
            <Button
              className={classes.drawerItem}
              onClick={() => (document.location.href = "/contactus")}
            >
              Contact Us
            </Button>
            <Button
              className={classes.drawerItem}
              onClick={() => (document.location.href = "/login")}
            >
              Login
            </Button>
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>
    );
  } else {
    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <div className={classes.appbarLogo}></div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => (document.location.href = "/")}
            >
              <Typography variant="h3">Real Tutor</Typography>
            </div>
          </div>
          <List className={classes.list}>
            <Button
              color="secondary"
              className={classes.listItem}
              onClick={() => (document.location.href = "/how-it-works")}
            >
              How it works
            </Button>
            <Button
              color="secondary"
              className={classes.listItem}
              onClick={() => (document.location.href = "/subjects")}
            >
              Subjects
            </Button>
            <Button
              color="secondary"
              className={classes.listItem}
              onClick={() => (document.location.href = "/team")}
            >
              Our Team
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.listItem}
              onClick={() => (document.location.href = "/contactus")}
            >
              Contact Us
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.listItem}
              onClick={() => (document.location.href = "/login")}
            >
              Login
            </Button>
          </List>
        </Toolbar>
      </AppBar>
    );
  }
};

export default DefaultAppBar;
