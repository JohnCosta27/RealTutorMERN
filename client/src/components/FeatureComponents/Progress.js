import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Progress = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getStudentPoints();
  }, []);

  const getStudentPoints = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const response = await fetch(
      "/accounts/getstudentpoints?studentid=" + urlParams.get("studentid"),
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

    if (data.error != undefined) {
      //Error handling later? Probably redirect.
    } else {
      let dataRows = [];
      for (let point of data) {
        if (point.date.length == 1) {
          dataRows.push(createData(point.content, point.date[0], point._id));
        } else {
          let latestDate = 0;
          for (let d of point.date) {
            if (d > latestDate) {
              latestDate = d;
            }
          }
          dataRows.push(createData(point.content, latestDate, point._id));
        }
      }
      dataRows.sort(function (a, b) {
        return a.date - b.date;
      });
      setRows(dataRows);
    }
  };

  const createData = (content, date, status) => {
    return { content, date, status };
  };

  const getStatus = (date) => {
    //2629800000 == 1 month
    if (new Date() - date * 1000 < 2629800000) {
      return "Good";
    } else {
      return "Needs revision";
    }
  };

  const useStyles = makeStyles((theme) => ({
    studentBoxWrapper: {
      width: "90%",
      marginTop: 50,
      marginLeft: "5%",
    },
    studentBox: {
      display: "flex",
      flexDirection: "column",
    },
  }));

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Spec point</TableCell>
            <TableCell>Date Reviewed</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.content}</TableCell>
              <TableCell>
                {new Date(row.date * 1000).toDateString("en-UK")}
              </TableCell>
              <TableCell>{getStatus(row.date)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Progress;
