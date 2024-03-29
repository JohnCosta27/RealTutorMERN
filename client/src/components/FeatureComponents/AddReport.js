import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import ReactSelect from "react-select";

const AddReport = () => {
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState({ empty: true });

  const [auth, setAuth] = useState({ empty: true });
  const [points, setPoints] = useState([]);
  const [report, setReport] = useState("");
  const [selectedPoints, setSelectedPoints] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    getSpecPoints();
    getLessons();
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
      //something
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

  const getLessons = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const response = await fetch(
      "/accounts/getstudentlessons?studentid=" + urlParams.get("studentid"),
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

    let newData = [];
    for (let lesson of data) {
      if (lesson.report == undefined) {
        newData.push(lesson);
      }
    }

    setLessons(newData);
  };

  const submitLesson = async (event) => {
    //StudentID, TutorID, plan, specPoints, date

    setClicked(true);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const studentid = urlParams.get("studentid");

    event.preventDefault();

    let formattedpoints = [];
    for (let p of selectedPoints) formattedpoints.push(p.value);

    const body = {
      lessonID: selectedLesson,
      report: report,
      specPointsAchieved: formattedpoints,
    };

    const saveLesson = await fetch("/accounts/addlessonreport", {
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

  const reportChange = (event) => {
    setReport(event.target.value);
  };

  const lessonSelect = (event) => {
    setSelectedLesson(event.target.value);
  };

  const useStyles = makeStyles((theme) => ({
    lessonsWrapper: {
      width: "90%",
      height: "95%",
      marginLeft: "5%",
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginLeft: "0%",
      },
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
        width: "100%",
      },
    },
    dropdown: {
      width: "50%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    divider: {
      marginTop: 10,
      marginBottom: 10,
    },
    formWrapper: {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
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
        <Grid item lg={8} md={12} className={classes.formWrapper}>
          <Paper elevation={2} className={classes.inputBox}>
            <Typography variant="h2">Add report</Typography>
            <Divider className={classes.divider} />

            <Typography variant="h3">Select lesson</Typography>
            <FormControl className={classes.dropdown} variant="outlined">
              <InputLabel id="select-lesson">Select lesson</InputLabel>
              <Select
                labelId="Select lesson"
                id="lesson report"
                labelId="select-lesson"
                value={selectedLesson.date}
                label="Select lesson"
                onChange={lessonSelect}
                color="secondary"
              >
                {lessons.map((lesson) => (
                  <MenuItem key={lesson._id} value={lesson._id}>
                    {new Date(lesson.date * 1000).toDateString()}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Divider className={classes.divider} />

            <Typography variant="h3">Lesson Report</Typography>
            <TextField
              label="Add lesson report"
              placeholder="Add lesson report"
              multiline
              rows={3}
              variant="outlined"
              className={classes.multiLineInput}
              onBlur={reportChange}
              color="secondary"
            />

            <Divider className={classes.gridItem} />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={clicked}
            >
              Submit Report
            </Button>
          </Paper>
        </Grid>

        <Grid item lg={4} md={12}>
          <Paper className={classes.inputBox}>
            <Typography variant="h3">Select achieved spec points</Typography>
            <ReactSelect
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

export default AddReport;
