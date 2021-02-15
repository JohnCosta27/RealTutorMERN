import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

function Student(props) {

    const theme = createMuiTheme(props.theme);
    
    const useStyles = makeStyles(
        {
            mainWrapper: {
                backgroundColor: theme.palette.primary.dark,
                marginBottom: "20px",
                height: 150,
                borderRadius: 10
            },
            studentName: {
                color: theme.palette.primary.light
            }
        }
    )

    const classes = useStyles();

    return (

    <div className={classes.mainWrapper} m={props.m}>
        <h1 className={classes.studentName}>{props.firstname} {props.surname}</h1>
    </div>

    );
}

export default Student;
