import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import LeftDrawer from '../general/LeftDrawer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'

const Progress = () => {
    
    const [auth, setAuth] = useState({empty: true});
    const [rows, setRows] = useState([]);

    useEffect(() => {
        getAuth();
        getStudentPoints();
    }, []);
    
    const getAuth = async () => {
        
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        
        const response = await fetch("/accounts/auth?studentid=" + urlParams.get('studentid'), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        
        const data = await response.json();
        setAuth(data);
        
    }
    
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
        console.log(data);

        let dataRows = [];
        for (let point of data) {
            dataRows.push(createData(point.content, point.date, point._id));
        }
        setRows(dataRows);

    }

    /*function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }*/
    
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
    
    if (auth.error != undefined) {
        return (
            <div className="app">
            <Typography variant="h1">You fucking donkey</Typography>
            </div>
            )
        } else {
            
            return (
                
                <div className="App">
                <LeftDrawer />
                <div className="mainWrapper">
                <div className={classes.studentBoxWrapper}>
                <Box className={classes.studentBox}>
                
                <div className={classes.studentNameWrapper}>
                <Typography variant="h1">John Costa</Typography>
                </div>

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
                    
                    </Box>
                    </div>
                    </div>
                    </div>
                    );
                }
                
            }
            
            export default Progress;