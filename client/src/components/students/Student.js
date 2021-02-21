import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

function Student(props) {
    
    const theme = createMuiTheme(props.theme);
    
    const useStyles = makeStyles(
        {
            studentWrapper: {
                backgroundColor: theme.palette.primary.dark,
                marginBottom: "20px",
                height: 150,
                borderRadius: 10,
                transition: "all 200ms",
                "&:hover": {
                    "box-shadow": "rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em",
                    "transform": "translateY(-3px) scale(1.02)"
                }
            },
            studentName: {
                color: theme.palette.primary.light
            }
        });
        
        const classes = useStyles();
        
        return (
            <div className={classes.studentWrapper} m={props.m}>
            <h1 className={classes.studentName}>{props.firstname} {props.surname}</h1>
            </div>  
            );
        }
        
        export default Student;
        