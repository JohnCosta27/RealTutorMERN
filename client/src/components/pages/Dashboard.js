import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import StudentBox from '../students/StudentBox'

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

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
    }
}));

function Dashboard(props) {

    const classes = useStyles(props);

    return (
        <div className="App">
        <Paper className={classes.leftNavPaper} square>
        <Box className={classes.leftNav}>
        </Box>
        </Paper>
        <div className="mainWrapper">
        <div className="studentBoxWrapper">
        <StudentBox/>
        </div>
        </div>
        </div>
    );
}
    
export default Dashboard;