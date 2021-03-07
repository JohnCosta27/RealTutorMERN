import React, { useEffect, useState } from 'react';

import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography } from '@material-ui/core';

function StudentDashboard(props) {
    
    const id = "603fedb40a23a3cf13437ccd";
    const [lessons, setLessons] = useState();
    
    useEffect(() => {
        getLessons();
    }, []);
    
    const getLessons = async () => {
        let requestData = {id: id};
        await fetch("/accounts/getstudentlessons", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(requestData)})
        .then(response => response.json()).then((data) => {
            setLessons(data);
            console.log(data);
        });
    }
    
    const useStyles = makeStyles(theme => ({
        
        leftNav: {
            flex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minWidth: 400,
        },
        leftNavPaper: {
            backgroundColor: theme.palette.secondary.main
        },
        studentBox: {
            display: "flex",
            flexDirection: "column"
        },
        studentNameWrapper: {
            flex: 1
        },
        gridWrapper: {
            flex: 5,
            height: "100%"
        },
        studentNameText: {
            textAlign: "center"
        },
        paper: {
            margin: 5,
            textAlign: 'center',
            height: 350,
            borderRadius: 10,
        },
        studentBoxWrapper: {
            width: "100%",
            marginTop: 50,
            marginLeft: 10,
            marginRight: 10
        },
        cardsWrapper: {
            width: "90%",
            marginLeft: "5%",
            height: "100%",
            display: "flex",
            flexDirection: "column"
        },
        cardContent: {
            flex: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        },
        cardAction: {
            width: "50%",
            marginLeft: "25%",
            marginBottom: 10,
            flex: 1,
            display: "flex",
            justifyContent: "center"
        },
        button: {
            marginLeft: 5,
            marginRight: 5
        }
    }));
    
    const classes = useStyles();
    
    return (
        <div className="App">
        <Paper className={classes.leftNavPaper} square>
        <Box className={classes.leftNav}>
        </Box>
        </Paper>
        <div className="mainWrapper">
        <div className={classes.studentBoxWrapper}>
        
        <Box className={classes.studentBox}>
        
        <div className={classes.studentNameWrapper}>
        <Typography variant="h1">John Costa</Typography>
        </div>
        
        <Grid container>
        <Grid item xs={6}>
        <Card className={classes.paper}>
        <Box display="flex" className={classes.cardsWrapper}>
        <Typography variant="h2">Lessons</Typography>
        <Box className={classes.cardContent}>
        <Typography variant="h4" align="center">Test txt, this is a title</Typography>
        </Box>
        <Box className={classes.cardAction}>
        <Button className={classes.button} variant="contained" color="primary">Add report</Button>
        <Button className={classes.button} variant="contained" color="primary">View lessons</Button>
        </Box>
        </Box>
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card className={classes.paper}>
        <Box display="flex" className={classes.cardsWrapper}>
        <Typography variant="h2">Upcoming</Typography>
        <Box className={classes.cardContent}>
        <Typography variant="h4" align="center">Test txt, this is a title</Typography>
        </Box>
        <Box className={classes.cardAction}>
        <Button className={classes.button} variant="contained" color="primary">Schedule</Button>
        <Button className={classes.button} variant="contained" color="primary">Plan lesson</Button>
        </Box>
        </Box>
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card className={classes.paper}>
        <Box display="flex" className={classes.cardsWrapper}>
        <Typography variant="h2">Progress</Typography>
        <Box className={classes.cardContent}>
        <Typography variant="h4">5% Course Completion</Typography>
        <LinearProgress variant="determinate" value={5} />
        </Box>
        <Box className={classes.cardAction}>
        <Button variant="contained" color="primary">View progress</Button>
        </Box>
        </Box>
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card className={classes.paper}>
        <Box display="flex" className={classes.cardsWrapper}>
        <Typography variant="h2">Details</Typography>
        <Box className={classes.cardContent}>
        </Box>
        <Box className={classes.cardAction}>
        <Button variant="contained" color="primary">Edit details</Button>
        </Box>
        </Box>
        </Card>
        </Grid>
        </Grid>
        
        </Box>
        
        </div>
        </div>
        </div>
        );
    }
    
    export default StudentDashboard;