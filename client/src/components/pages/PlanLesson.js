import React, { useState, useEffect } from 'react';

import LeftDrawer from '../general/LeftDrawer';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

import SpecificationPoints from '../general/SpecificationPoints';

import DateMomentUtils from '@date-io/date-fns';
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const PlanLesson = () => {
    
    const [auth, setAuth] = useState({empty: true});
    const [selectedDate, handleDateChange] = useState(new Date());

    useEffect(() => {
        getAuth();
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
    
    const useStyles = makeStyles(theme => ({
        lessonsWrapper: {
            width: "90%",
            height: "95%",
            marginTop: "2.5%",
            marginLeft: "5%",
            display: "flex",
            justifyContent: "center"
        },
        multiLineInput: {
            width: "90%",
            leftMargin: "5%",
            marginBottom: 10
        },
        inputBox: {
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10
        },
        gridItem: {
            marginTop: 10,
            marginLeft: 10
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
                
                <Grid container spacing={3} className={classes.lessonsWrapper}>
                <Grid item lg={8} md={12}>
                <Paper elevation={2} className={classes.inputBox}>
                <Typography variant="h1">Lesson Planning</Typography>
                <TextField label="Plan" placeholder="This is plan" multiline rows={3} variant="outlined" className={classes.multiLineInput}/>
                <Divider />
                
                <Typography variant="h1">Date and Time</Typography>
                <MuiPickersUtilsProvider utils={DateMomentUtils}>
                <DateTimePicker onChange={handleDateChange} style={{width: "50%"}} inputVariant="outlined" />
                </ MuiPickersUtilsProvider>

                </Paper>
                </Grid>
                <Grid item lg={4} md={12}>
                <SpecificationPoints />
                </Grid>
                </Grid>
                
                </div>
                </div>
                )
            }
            
        }
        
        export default PlanLesson;