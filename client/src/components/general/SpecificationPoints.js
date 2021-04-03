import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SpecPoint from './SpecPoint';

const SpecificationPoint = (props) => {

    console.log("Rerender");

    const [points, setPoints] = useState([]);
    const [selectedPoints, setSelectedPoints] = useState({points: []});

    useEffect(() => {
        getSpecPoints();
    }, []);

    const getSpecPoints = async () => {

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        
        const response = await fetch("/spec/getspecfromstudentid?studentid=" + urlParams.get('studentid'), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        
        const data = await response.json();
        setPoints(data);
        
    }

    const useStyles = makeStyles(theme => ({
        inputBox: {
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            maxHeight: 600,
            overflowY: "scroll"
        },
        clickedPaper: {
            backgroundColor: "#313131",
            color: '#FFFFFF'
        }
    }));

    const handleClick = (id) => {
        
        let pointsArray = selectedPoints.points;

        const index = pointsArray.indexOf(id);
        if (index == -1) {
            pointsArray.push(id);
        } else {
            pointsArray.splice(index, 1);
        }

        setSelectedPoints({points: pointsArray});

    }

    const classes = useStyles();
    if (points.length == 0 || points.error != undefined) {
        return (
            <Paper elevation={2} className={classes.inputBox}>
            <Typography variant="h1">Specification points</Typography>
            <Typography variant="h4">No specification points found</Typography>
            </Paper>
        );
    } else {
        return (
            <Paper elevation={2} className={classes.inputBox} onClick={props.handleClick(selectedPoints)}>
            <Typography variant="h1">Specification points</Typography>
            <Grid container>
            {points.map(point => (
                    <SpecPoint highlighted={point.highlighted} key={point.contentID} content={point.content} onClick={() => handleClick(point._id)}/>
                ))}
            </Grid>
            </Paper>
        )
    }

}

export default SpecificationPoint;