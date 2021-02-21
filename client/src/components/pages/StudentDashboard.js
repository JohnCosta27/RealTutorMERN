import React from 'react';
import '../../App.css';

import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function StudentDashboard(props) {
    
    const theme = createMuiTheme(props.theme);
    
    const useStyles = makeStyles((theme) => ({
        studentNameWrapper: {
            flex: 1
        },
        gridWrapper: {
            flex: 5
        },
        studentNameText: {
            textAlign: "center"
        },
        paper: {
            margin: 5,
            textAlign: 'center',
            backgroundColor: theme.palette.primary.background,
            height: 200
        }
    }));
    
    const classes = useStyles();
    
    return (
        <div className="App">
        <div className="leftNav" style={{backgroundColor: theme.palette.primary.background}}></div>
        <div className="mainWrapper" style={{backgroundColor: theme.palette.primary.main}}>
        <div className="studentBoxWrapper">
        
        <div className={classes.studentNameWrapper}>
        <h1 className={classes.studentNameText}>Hello World</h1>
        </div>
        <div className={classes.gridWrapper}>
        
        <Grid container>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
        </Grid>
        
        </div>
        
        </div>
        </div>
        </div>
        );
    }
    
    export default StudentDashboard;