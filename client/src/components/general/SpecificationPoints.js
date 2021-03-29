import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SpecPoint from './SpecPoint';

const SpecificationPoint = () => {

    const [points, setPoints] = useState([]);

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
        gridItem: {
            marginTop: 2,
            marginBottom: 2,
            cursor: "pointer",
        },
        clickedPaper: {
            backgroundColor: "#313131",
            color: '#FFFFFF'
        }
    }));

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
            <Paper elevation={2} className={classes.inputBox}>
            <Typography variant="h1">Specification points</Typography>
            <Grid container>
            {points.map(point => (
                    <Grid item xs={12} className={classes.gridItem}>
                    <SpecPoint content={point.content} />
                    </Grid>
                ))}
            </Grid>
            </Paper>
        )
    }

}

export default SpecificationPoint;