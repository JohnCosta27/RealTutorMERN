import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const FullLesson = () => {

    const useStyles = makeStyles(theme => ({

        lessonBox: {
            width: 400
        }

    }));

    const classes = useStyles();

    return (
        <Box className={classes.lessonBox}>
            <Paper elevation="2">
            <Typography variant="h2">Hello World</Typography>
            <Typography variant="body1">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            </Paper>
        </Box>
    )

}

export default FullLesson;