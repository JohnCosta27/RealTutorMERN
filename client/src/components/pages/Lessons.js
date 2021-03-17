import React from 'react';
import LeftDrawer from '../general/LeftDrawer';
import { makeStyles } from '@material-ui/core/styles';

import FullLesson from '../general/FullLesson';

const Lessons = () => {

    const useStyles = makeStyles(theme => ({
        lessonsWrapper: {
            width: "90%",
            height: "95%",
            marginTop: "2.5%",
            marginLeft: "5%",
            display: "flex",
            justifyContent: "space-between"
        }
    }));

    const classes = useStyles();

    return (
        <div className="App">
            <LeftDrawer />
            <div className="mainWrapper">
                <div className={classes.lessonsWrapper}>
                    <FullLesson />
                    <FullLesson />
                    <FullLesson />
                </div>
            </div>
        </div>
    )

}

export default Lessons;