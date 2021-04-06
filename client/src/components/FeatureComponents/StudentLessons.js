import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StudentLessons = () => {
    
    const [rows, setRows] = useState([]);

    useEffect(() => {
        getLessons();
    }, []);
    
    const getLessons = async () => {
        
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        
        const response = await fetch("/accounts/getstudentlessons?studentid=" + urlParams.get('studentid'), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        
        const data = await response.json();

        let lessons = [];
        for (let lesson of data) {

            let specPoints = [];
            for (let point of lesson.specPoints) {
                specPoints.push(point.content);
            }

            let specPointsAchieved = [];
            for (let point of lesson.specPointsAchieved) {
                specPointsAchieved.push(point.content);
            }

            lessons.push(createData(lesson._id, lesson.title, lesson.plan, specPoints, lesson.report, specPointsAchieved, lesson.date));

        }
        
        setRows(lessons);

    }
    
    const createData = (_id, title, plan, specPoints, report, specPointsAchieved, date) => {
        return {_id, title, plan, specPoints, report, specPointsAchieved, date};
    }

    const useStyles = makeStyles(theme => ({
        table: {
            minWidth: 650,
        }
    }));
    
    const classes = useStyles();
    
    return (
        
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
        <TableHead>
        <TableRow>
        <TableCell>Title</TableCell>
        <TableCell>Plan</TableCell>
        <TableCell>Specification Points</TableCell>
        <TableCell>Report</TableCell>
        <TableCell>Achieved Specification Points</TableCell>
        <TableCell style={{ width: 150 }}>Date</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
            <TableRow key={row._id}>
            <TableCell component="th" scope="row">{row.title}</TableCell>
            <TableCell>{row.plan}</TableCell>

            <TableCell><ul>{row.specPoints.map((point) => (<li>{point}</li>))}</ul></TableCell>

            <TableCell>{row.report}</TableCell>

            <TableCell><ul>{row.specPointsAchieved.map((point) => (<li>{point}</li>))}</ul></TableCell>

            <TableCell>{new Date(row.date * 1000).toDateString("en-UK")}</TableCell>
            </TableRow>
            ))}
            </TableBody>
            </Table>
            </TableContainer>
            
            );
            
        }
        
        export default StudentLessons;