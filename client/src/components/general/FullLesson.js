import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const FullLesson = (props) => {

    const useStyles = makeStyles(theme => ({
        lessonBox: {
            minWidth: 400,
            maxWidth: 600,
            transition: "all .1s ease-in-out",
            '&:hover': {
                transform: "scale(1.1)"
            },
            cursor: "pointer"
        },
        specPoints: {
            alignContent: "left"
        },
        textContent: {
            paddingLeft: 5,
            paddingRight: 5
        }
    }));

    const classes = useStyles();

    return (
        <Box className={classes.lessonBox}>
            <Paper elevation="2">
            <Typography variant="h2">{new Date(props.date * 1000).toLocaleDateString("en-UK")}</Typography>
            <Typography variant="h5" align="left" className={classes.textContent}>Plan</Typography>
            <Typography variant="body1" align="left" className={classes.textContent}>{props.plan}</Typography>
            <Typography variant="h5" align="left" className={classes.textContent}>Planned Points</Typography>
            <List>
            {props.specPoints.map(point => (
                <ListItem>{point.content}</ListItem>
            ))}
            </List>
            <Typography variant="h5" align="left" className={classes.textContent}>Achieved Points</Typography>
            <List>
            {props.specPointsAchieved.map(point => (
                <ListItem>{point.content}</ListItem>
            ))}
            </List>
            <Typography variant="h5" align="left" className={classes.textContent}>Report</Typography>
            <Typography variant="body1" align="left" className={classes.textContent}>{props.report}</Typography>
            </Paper>
        </Box>
    )

}

export default FullLesson;