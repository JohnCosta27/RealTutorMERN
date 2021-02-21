import React from 'react';
import '../../App.css';

import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

function StudentDashboard(props) {
    
    const theme = createMuiTheme(props.theme);
    
    const useStyles = makeStyles((theme) => ({
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
            borderRadius: 10
        },
        studentBoxWrapper: {
            width: "100%",
            marginTop: 50,
            marginLeft: 10,
            marginRight: 10
        },
        cardsWrapper: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column"
        },
        cardContent: {
            flex: 4
        },
        cardAction: {
            flex: 1
        }
    }));
    
    const classes = useStyles();

    return (
        <div className="App">
        <div className="leftNav" style={{backgroundColor: theme.palette.primary.background}}></div>
        <div className="mainWrapper" style={{backgroundColor: theme.palette.primary.main}}>
        <div className={classes.studentBoxWrapper}>
        
        <Box className={classes.studentBox}>

        <div className={classes.studentNameWrapper}>
            <Typography variant="h1">Student name</Typography>
        </div>
        
        <Grid container>
        <Grid item xs={6}>
        <Box className={classes.paper} style={{backgroundColor: theme.palette.primary.cards}}>
        <Box display="flex" className={classes.cardsWrapper}>
            <Typography variant="h2">Lessons</Typography>
            <Box className={classes.cardContent}></Box>
            <Box className={classes.cardAction}></Box>
        </Box>
        </Box>
        </Grid>
        <Grid item xs={6}>
        <Box className={classes.paper} style={{backgroundColor: theme.palette.primary.cards}}>
        <Typography variant="h2">Upcoming</Typography>
        </Box>
        </Grid>
        <Grid item xs={6}>
        <Box className={classes.paper} style={{backgroundColor: theme.palette.primary.cards}}>
        <Typography variant="h2">Progress</Typography>
        </Box>
        </Grid>
        <Grid item xs={6}>
        <Box className={classes.paper} style={{backgroundColor: theme.palette.primary.cards}}>
        <Typography variant="h2">Details</Typography>
        </Box>
        </Grid>
        </Grid>
        
        </Box>
        
        </div>
        </div>
        </div>
        );
    }
    
    export default StudentDashboard;