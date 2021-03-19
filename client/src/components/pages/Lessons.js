import React, { useState, useEffect } from 'react';
import LeftDrawer from '../general/LeftDrawer';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import FullLesson from '../general/FullLesson';

const Lessons = () => {

    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        getLessons();
    }, []);

    const getLessons = async () => {

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        const response = await fetch("/accounts/getstudentlessons?studentid=" + urlParams.get('studentid'), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });

        const data = await response.json();
        setLessons(data);

    }

    const useStyles = makeStyles(theme => ({
        lessonsWrapper: {
            width: "90%",
            height: "95%",
            marginTop: "2.5%",
            marginLeft: "5%",
            display: "flex",
            justifyContent: "center"
        }
    }));

    const classes = useStyles();

    return (
        <div className="App">
            <LeftDrawer />
            <div className="mainWrapper">
                <Typography variant="h1">John Costa</Typography>
                <Grid container spacing={3} className={classes.lessonsWrapper}>
                    {lessons.map(lesson => (
                        <div style={{marginLeft: 10, marginRight: 10}}>
                        <Grid item xs>
                            <FullLesson 
                            plan={lesson.plan} 
                            date={lesson.date} 
                            specPoints={lesson.specPoints} 
                            specPointsAchieved={lesson.specPointsAchieved}
                            report={lesson.report} />
                        </Grid>
                        </div>
                    ))}
                </Grid>
            </div>
        </div>
    )

}

export default Lessons;