import React from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import Lesson from "../general/Lessons";

const ManagerDashboardComponent = () => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      margin: 5,
      textAlign: "center",
      height: "auto",
      borderRadius: 10,
    },
    smallBox: {
      display: "flex",
      marginLeft: 25,
      marginRight: 25,
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        marginLeft: 10,
        marginRight: 10,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h2">Company Overview</Typography>
          <br></br>
          <Box className={classes.smallBox}>
            <Typography variant="h4">Total students:</Typography>
            <Typography variant="h4">10</Typography>
          </Box>
          <Box className={classes.smallBox}>
            <Typography variant="h4">Revenue:</Typography>
            <Typography variant="h4">£10</Typography>
          </Box>
          <Box className={classes.smallBox}>
            <Typography variant="h4">Avg Feedback:</Typography>
            <Typography variant="h4">100%</Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h2">Your teaching</Typography>
          <Box className={classes.smallBox} style={{ flexDirection: "column" }}>
            <Typography variant="h4" align="left">
              Latest lesson:
            </Typography>
            <Lesson level={3} />
          </Box>
        </Paper>
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h2">idk what to put here</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default ManagerDashboardComponent;
