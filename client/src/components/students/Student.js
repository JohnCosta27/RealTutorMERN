import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

function Student(props) {
    
    const theme = createMuiTheme(props.theme);
    
    const useStyles = makeStyles(
        {
            studentWrapper: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: theme.palette.Card,
                marginBottom: "20px",
                height: 150,
                borderRadius: 10,
                transition: "all 200ms",
                "&:hover": {
                    "box-shadow": "rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em",
                    "transform": "translateY(-3px) scale(1.02)"
                }
            },

        });
        
        const classes = useStyles();
        
        return (
            <Card className={classes.studentWrapper}>
                <Typography variant="h1" align="center">{props.firstname} {props.surname}</Typography>
            </Card>  
            );
        }
        
        export default Student;
        