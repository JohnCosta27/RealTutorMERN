import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import LoadingDisk from "../general/LoadingDisk";
import { fromUnixTime } from "date-fns";

const ManagerStudentList = () => {
  const [students, setStudents] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStudents();
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const getStudents = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const response = await fetch("/admin/getstudents", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();

    let studentData = [];
    for (let student of data) {
      let subjects = [];
      console.log(student.subjects);
      for (let subject of student.subjects) {
        subjects.push(subject.specificationName);
      }

      studentData.push(
        createData(
          student._id,
          student.name,
          student.tutor,
          student.tutorid,
          subjects,
          student.remainingHours,
          student.hours
        )
      );
    }

    setStudents(studentData);
    setLoading(false);
  };

  const createData = (
    _id,
    name,
    tutor,
    tutorid,
    subjects,
    remainingHours,
    hours
  ) => {
    return {
      _id,
      name,
      tutor,
      tutorid,
      subjects,
      remainingHours,
      hours,
    };
  };

  const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
      [theme.breakpoints.down("sm")]: {
        minWidth: 0,
        overflow: "scroll",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Tutor</TableCell>
              <TableCell>Subject(s)</TableCell>
              <TableCell>Hours left</TableCell>
              <TableCell>Total hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => {
              return (
                <TableRow hover key={student._id}>
                  <TableCell component="th" scope="row">
                    {student.name}
                  </TableCell>
                  <TableCell>{student.tutor}</TableCell>
                  <TableCell>
                    <ul>
                      {student.subjects.map((subject) => (
                        <li>{subject}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>{student.remainingHours}</TableCell>
                  <TableCell>{student.hours}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <LoadingDisk loading={loading} />
    </div>
  );
};
export default ManagerStudentList;
