import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Lesson from "../general/Lessons";
import Progress from "../general/Progress";
import UpcomingLesson from "../general/UpcomingLesson";
import LoadingDisk from "../general/LoadingDisk";
import Paper from "@material-ui/core/Paper";

const StudentDashboard = (props) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const [hours, setHours] = useState();

  useEffect(() => {
    getHours();
  }, []);

  const getHours = async () => {
    const response = await fetch(
      "/accounts/getremaininghours?studentid=" + urlParams.get("studentid"),
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const data = await response.json();
    setHours(data.hours);
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      margin: 5,
      textAlign: "center",
      height: 350,
      borderRadius: 10,
    },
    cardsWrapper: {
      width: "90%",
      marginLeft: "5%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardContent: {
      flex: 5,
      display: "flex",
      flexDirection: "column",
    },
    cardAction: {
      width: "50%",
      marginLeft: "25%",
      marginBottom: 10,
      flex: 1,
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        width: "90%",
        marginLeft: "5%",
      },
    },
    button: {
      marginLeft: 5,
      marginRight: 5,
    },
  }));

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <Paper className={classes.paper} elevation={3}>
          <Box display="flex" className={classes.cardsWrapper}>
            <Typography variant="h2">Lessons</Typography>
            <Box className={classes.cardContent}>
              <Lesson level={props.level} />
            </Box>
            <Box className={classes.cardAction}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={() => {
                  props.changeState(4);
                }}
                style={props.level == 1 ? { display: "none" } : {}}
              >
                Add report
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={() => {
                  props.changeState(1);
                }}
              >
                View lessons
              </Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <Paper className={classes.paper} elevation={3}>
          <Box display="flex" className={classes.cardsWrapper}>
            <Typography variant="h2">Upcoming</Typography>
            <Box className={classes.cardContent}>
              <UpcomingLesson />
            </Box>
            <Box className={classes.cardAction}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={() => {
                  props.changeState(3);
                }}
                style={props.level == 1 ? { display: "none" } : {}}
              >
                Plan lesson
              </Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <Paper className={classes.paper} elevation={3}>
          <Box display="flex" className={classes.cardsWrapper}>
            <Typography variant="h2">Progress</Typography>
            <Box className={classes.cardContent}>
              <Progress />
            </Box>
            <Box className={classes.cardAction}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  props.changeState(2);
                }}
              >
                View progress
              </Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <Paper className={classes.paper} elevation={3}>
          <Box display="flex" className={classes.cardsWrapper}>
            <Typography variant="h2">Mixed</Typography>
            <Box className={classes.cardContent}>
              <Typography variant="h3">Remaining Hours: {hours}</Typography>
            </Box>
            <Box className={classes.cardAction}></Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default StudentDashboard;
