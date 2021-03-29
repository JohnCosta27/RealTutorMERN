import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const SpecPoint = (props) => {
    
    const [clicked, setClicked] = useState(false);
    
    const useStyles = makeStyles(theme => ({
        clickedPaper: {
            backgroundColor: "#313131",
            color: '#FFFFFF'
        }
    }));
    
    const classes = useStyles();

    return (
        <Paper elevation={1}
        className={(clicked) ? classes.clickedPaper : 0}
        onClick={() => { setClicked(!clicked) }}>
        <Typography variant="body1">{props.content}</Typography>
        </Paper>
    );
        
}
    
export default SpecPoint;