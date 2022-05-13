import React, { useState, useEffect } from "react";
import StudentCard from "../general/StudentCard";

import { makeStyles } from "@material-ui/core/styles";

const StudentList = (props) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getTutorStudents();
  }, []);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const getTutorStudents = async () => {
    const response = await fetch(
      "/accounts/gettutorstudents?tutorid=" + urlParams.get("tutorid"),
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
    console.log(data);
    try {
      setStudents(data.students);
    } catch (error) {}
  };

  const useStyles = makeStyles((theme) => ({
    studentListWrapper: {
      display: "flex",
      flexDirection: "column",
      width: "50%",
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.studentListWrapper}>
      {students.map((student) => (
        <StudentCard
          firstname={student.firstname}
          surname={student.surname}
          id={student._id}
        />
      ))}
    </div>
  );
};

export default StudentList;
