import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'

const Progress = () => {
    
    const [rows, setRows] = useState([]);
    
    useEffect(() => {
        getStudentPoints();
    }, []);
    
    
    const getStudentPoints = async () => {
        
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        
        const response = await fetch("/accounts/getstudentpoints?studentid=" + urlParams.get('studentid'), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        
        const data = await response.json();
        
        if (data.error != undefined) {
            //Error handling later? Probably redirect.
        } else {
            let dataRows = [];
            for (let point of data) {
                dataRows.push(createData(point.content, new Date(point.date * 1000).toDateString("en-UK"), point._id));
            }
            setRows(dataRows);
        }
        
    }
    
    const createData = (content, date, status) => {
        return {content, date, status};
    }
    
    const useStyles = makeStyles(theme => ({
        studentBoxWrapper: {
            width: "90%",
            marginTop: 50,
            marginLeft: "5%"
        },
        studentBox: {
            display: "flex",
            flexDirection: "column"
        }
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
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.status}</TableCell>
            </TableRow>
            ))}
            </TableBody>
            </Table>
            </TableContainer>
            );
        }
        
        export default Progress;