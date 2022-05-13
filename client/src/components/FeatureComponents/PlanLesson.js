import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

import Select from "react-select";

import DateMomentUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const PlanLesson = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [points, setPoints] = useState([]);
  const [title, setTitle] = useState("");
  const [plan, setPlan] = useState("");
  const [selectedPoints, setSelectedPoints] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    getSpecPoints();
  }, []);

  const getSpecPoints = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const response = await fetch(
      "/spec/getspecfromstudentid?studentid=" + urlParams.get("studentid"),
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

    if (data.error != undefined) {
      //No authentication
    } else {
      let formattedPoints = [];
      for (let point of data) {
        formattedPoints.push({
          value: point._id,
          label: point.content,
        });
      }

      setPoints(formattedPoints);
    }
  };

  const submitLesson = async (event) => {
    //StudentID, TutorID, plan, specPoints, date

    setClicked(true);

    event.preventDefault();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const studentid = urlParams.get("studentid");

    const response = await fetch("/accounts/getid", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();
    const tutorid = data.id;
    const date = Math.floor(new Date(selectedDate).getTime() / 1000);

    let formattedpoints = [];
    for (let p of selectedPoints) formattedpoints.push(p.value);

    const body = {
      title: title,
      date: date,
      plan: plan,
      studentid: studentid,
      tutorid: tutorid,
      specPoints: formattedpoints,
    };
    console.log(body);

    const saveLesson = await fetch("/accounts/addlesson", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    });

    const saveLessonResponse = await saveLesson.json();

    console.log(saveLessonResponse);

    if (saveLessonResponse.error != undefined) {
      //something?
    } else {
      document.location.href = "studentdashboard?studentid=" + studentid;
    }
  };

  const planChange = (event) => {
    setPlan(event.target.value);
  };

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const useStyles = makeStyles((theme) => ({
    lessonsWrapper: {
      width: "90%",
      height: "95%",
      marginLeft: "5%",
      display: "flex",
      justifyContent: "center",
    },
    multiLineInput: {
      width: "90%",
      leftMargin: "5%",
      marginBottom: 10,
    },
    inputBox: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
    },
    gridItem: {
      marginTop: 10,
      marginBottom: 10,
    },
    button: {
      width: "50%",
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
    },
  }));

  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: "#009688",
        primary25: "#b2dfdb",
        primary50: "#80cbc4",
      },
    };
  };

  const classes = useStyles();

  return (
    <form onSubmit={submitLesson}>
      <Grid container spacing={3} className={classes.lessonsWrapper}>
        <Grid item lg={8} md={12}>
          <Paper elevation={2} className={classes.inputBox}>
            <Typography variant="h2">Lesson Title</Typography>
            <TextField
              label="Title"
              placeholder="This is a title"
              variant="outlined"
              onBlur={titleChange}
              style={{ width: "50%" }}
              color="secondary"
            />
            <Divider className={classes.gridItem} />

            <Typography variant="h2">Lesson Planning</Typography>
            <TextField
              label="Plan"
              placeholder="This is plan"
              multiline
              rows={3}
              variant="outlined"
              className={classes.multiLineInput}
              onBlur={planChange}
              color="secondary"
            />
            <Divider />

            <Typography variant="h2">Date and Time</Typography>
            <MuiPickersUtilsProvider utils={DateMomentUtils}>
              <DateTimePicker
                onChange={handleDateChange}
                style={{ width: "50%" }}
                inputVariant="outlined"
                value={selectedDate}
                color="secondary"
              />
            </MuiPickersUtilsProvider>

            <Divider className={classes.gridItem} />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={clicked}
            >
              Submit plan
            </Button>
          </Paper>
        </Grid>
        <Grid item lg={4} md={12}>
          <Paper className={classes.inputBox}>
            <Typography variant="h3">Select planned spec points</Typography>
            <Select
              options={points}
              theme={customTheme}
              isMulti
              name="Specification points"
              onChange={setSelectedPoints}
            />
          </Paper>
        </Grid>
      </Grid>
    </form>
  );
};

export default PlanLesson;
