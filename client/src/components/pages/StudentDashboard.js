import React from 'react';
import '../../App.css';

import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
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
            flex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }
    }));
    
    const classes = useStyles();

    return (
        <div className="App">
        <div className="leftNav" style={{backgroundColor: theme.palette.divBackground}}></div>
        <div className="mainWrapper" style={{backgroundColor: theme.palette.secondary}}>
        <div className={classes.studentBoxWrapper}>
        
        <Box className={classes.studentBox}>

        <div className={classes.studentNameWrapper}>
            <Typography variant="h1">John Costa</Typography>
        </div>
        
        <Grid container>
        <Grid item xs={6}>
        <Card className={classes.paper} style={{backgroundColor: theme.palette.cards}}>
        <Box display="flex" className={classes.cardsWrapper}>
            <Typography variant="h2">Lessons</Typography>
            <Box className={classes.cardContent}>
                <Typography variant="h4" align="center">Test txt, this is a title</Typography>
            </Box>
            <Box className={classes.cardAction}>
                <Button variant="contained" color="primary">View lessons</Button>
            </Box>
        </Box>
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card className={classes.paper} style={{backgroundColor: theme.palette.cards}}>
        <Box display="flex" className={classes.cardsWrapper}>
            <Typography variant="h2">Upcoming</Typography>
            <Box className={classes.cardContent}>
                <Typography variant="h4" align="center">Test txt, this is a title</Typography>
            </Box>
            <Box className={classes.cardAction}>
                <Button variant="contained" color="primary">Schedule</Button>
            </Box>
        </Box>
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card className={classes.paper} style={{backgroundColor: theme.palette.cards}}>
        <Box display="flex" className={classes.cardsWrapper}>
            <Typography variant="h2">Progress</Typography>
            <Box className={classes.cardContent}>
                <Typography variant="h4" align="center">Test txt, this is a title</Typography>
            </Box>
            <Box className={classes.cardAction}>
                <Button variant="contained" color="primary">View lessons</Button>
            </Box>
        </Box>
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card className={classes.paper} style={{backgroundColor: theme.palette.cards}}>
        <Box display="flex" className={classes.cardsWrapper}>
            <Typography variant="h2">Details</Typography>
            <Box className={classes.cardContent}>
                <Typography variant="h4" align="center">Test txt, this is a title</Typography>
            </Box>
            <Box className={classes.cardAction}>
                <Button variant="contained" color="primary">View lessons</Button>
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