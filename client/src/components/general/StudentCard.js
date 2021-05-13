import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const StudentList = (props) => {
  const useStyles = makeStyles((theme) => ({
    studentCard: {
      cursor: "pointer",
    },
  }));

  const classes = useStyles();

  const handleClick = (id) => {
    document.location.href = "studentdashboard?studentid=" + id;
  };

  return (
    <Paper
      key={props.id}
      className={classes.studentCard}
      onClick={() => handleClick(props.id)}
    >
      <Typography variant="h2">
        {props.firstname} {props.surname}
      </Typography>
    </Paper>
  );
};

export default StudentList;
