import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import Lesson from '../general/Lessons';
import UpcomingLesson from '../general/UpcomingLesson';
import Progress from '../general/Progress';
import LeftDrawer from '../general/LeftDrawer';

const StudentDashboard = () => {

    const useStyles = makeStyles(theme => ({
        
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
        }
    }));
    
    const classes = useStyles();
    
    return (

        <div className="App">
        <LeftDrawer />
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
        <Lesson />
        </Box>
        <Box className={classes.cardAction}>
        <Button className={classes.button} variant="contained" color="primary">Add report</Button>
        <Button className={classes.button} variant="contained" color="primary"
        onClick={() => {document.location.href = "lessons"}}>View lessons</Button>
        </Box>
        </Box>
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card className={classes.paper}>
        <Box display="flex" className={classes.cardsWrapper}>
        <Typography variant="h2">Upcoming</Typography>
        <Box className={classes.cardContent}>
        <UpcomingLesson />
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
        <Progress />
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