import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import Lesson from '../general/Lessons';
import Progress from '../general/Progress';
import UpcomingLesson from '../general/UpcomingLesson';

const StudentDashboard = () => {
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const useStyles = makeStyles(theme => ({
        
        paper: {
            margin: 5,
            textAlign: 'center',
            height: 350,
            borderRadius: 10,
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
            flexDirection: "column"
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
        },
    }));

    const classes = useStyles();
    
    return (
    
        <Grid container>
        <Grid item lg={6} md={12}>
        <Card className={classes.paper}>
        <Box display="flex" className={classes.cardsWrapper}>
        <Typography variant="h2">Lessons</Typography>
        <Box className={classes.cardContent}>
        <Lesson />
        </Box>
        <Box className={classes.cardAction}>
        <Button className={classes.button} variant="contained" color="primary"
        onClick={() => {document.location.href = "addreport?studentid=" + urlParams.get("studentid")}}>Add report</Button>
        <Button className={classes.button} variant="contained" color="primary"
        onClick={() => {document.location.href = "lessons?studentid=" + urlParams.get("studentid")}}>View lessons</Button>
        </Box>
        </Box>
        </Card>
        </Grid>
        <Grid item lg={6} md={12}>
        <Card className={classes.paper}>
        <Box display="flex" className={classes.cardsWrapper}>
        <Typography variant="h2">Upcoming</Typography>
        <Box className={classes.cardContent}>
        <UpcomingLesson />
        </Box>
        <Box className={classes.cardAction}>
        <Button className={classes.button} variant="contained" color="primary"
        onClick={() => {document.location.href = "planlesson?studentid=" + urlParams.get("studentid")}}>Plan lesson</Button>
        </Box>
        </Box>
        </Card>
        </Grid>
        <Grid item lg={6} md={12}>
        <Card className={classes.paper}>
        <Box display="flex" className={classes.cardsWrapper}>
        <Typography variant="h2">Progress</Typography>
        <Box className={classes.cardContent}>
        <Progress />
        </Box>
        <Box className={classes.cardAction}>
        <Button variant="contained" color="primary"
        onClick={() => {document.location.href = "progress?studentid=" + urlParams.get("studentid")}}>View progress</Button>
        </Box>
        </Box>
        </Card>
        </Grid>
        <Grid item lg={6} md={12}>
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

        );
    }
    
    export default StudentDashboard;