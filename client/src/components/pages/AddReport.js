import React, { useState, useEffect } from 'react';

import LeftDrawer from '../general/LeftDrawer';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import SpecificationPoints from '../general/SpecificationPoints';

const AddReport = () => {
    
    const [lessons, setLessons] = useState([]);
    const [selectedLesson, setSelectedLesson] = useState({empty: true});

    const [auth, setAuth] = useState({empty: true});
    const [points, setPoints] = useState([]);
    const [pointIDs, setPointIDs] = useState([]);
    const [report, setReport] = useState("");

    useEffect(() => {
        getLessons();
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
        let newData = [];
        for (let lesson of data) {
            if (lesson.report == undefined) {
                newData.push(lesson);
            }
        }

        setLessons(newData);

    }

    const submitLesson = async (event) => {
        
        //StudentID, TutorID, plan, specPoints, date
        
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const studentid = urlParams.get('studentid');

        event.preventDefault();
        
        const body = {lessonID: selectedLesson, report: report, specPointsAchieved: points};
        console.log(body);

        const saveLesson = await fetch("/accounts/addlessonreport", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(body)
        });
        
        const saveLessonResponse = await saveLesson.json();
        
        if (saveLessonResponse.error != undefined) {
            //something?
        } else {
            document.location.href = "studentdashboard?studentid=" + studentid;
        }
        
    }
    
    
    const reportChange = (event) => {
        setReport(event.target.value);
    }
    
    const handleClick = (points) => {
        setPoints(points.points);
    }
    
    const lessonSelect = (event) => {
        setSelectedLesson(event.target.value);
        for (let lesson of lessons) {
            if (lesson._id == event.target.value) {
                let highlightedPoints = [];
                for (let point of lesson.specPoints) highlightedPoints.push(point._id);
                setPointIDs(highlightedPoints);
                break;
            }
        }
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
            marginBottom: 10
        },
        button: {
            width: "50%"
        },
        dropdown: {
            width: "50%"
        }
    }));
    
    const classes = useStyles();
    
    if (auth.error != undefined || lessons.length == 0) {
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
                
                <form onSubmit={submitLesson}>
                <Grid container spacing={3} className={classes.lessonsWrapper}>
                <Grid item lg={8} md={12}>
                <Paper elevation={2} className={classes.inputBox}>
                
                <Typography variant="h1">{auth.name}</Typography>
                
                <Divider className={classes.gridItem} />
                
                <FormControl className={classes.dropdown} variant="outlined">
                <InputLabel id="select-lesson">Select lesson</InputLabel>
                <Select labelId="Select lesson" id="lesson report" labelId="select-lesson" 
                value={selectedLesson.date} label="Select lesson" onChange={lessonSelect}>
    
                {lessons.map(lesson => (
                    <MenuItem value={lesson._id}>{new Date(lesson.date).toDateString()}</MenuItem>
                ))}

                </Select>
                </FormControl>

                <Typography variant="h2">Lesson Report</Typography>
                <TextField label="Add lesson report" placeholder="Add lesson report" multiline 
                rows={3} variant="outlined" className={classes.multiLineInput} onBlur={reportChange} />
                
                <Divider className={classes.gridItem} />
                
                <Button type="submit" variant="contained" color="primary" className={classes.button}>Submit Report</Button>
                
                </Paper>
                </Grid>
                <Grid item lg={4} md={12}>
                
                <SpecificationPoints handleClick={handleClick} highlightedPoints={pointIDs}/> 

                </Grid>
                </Grid>
                </form>
                
                </div>
                </div>
                )
            }
            
        }
        
        export default AddReport;