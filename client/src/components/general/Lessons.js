import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const Lesson = () => {

    const [lesson, setLesson] = useState({});

    useEffect(() => {
        getLessons();
    }, []);

    const getLessons = async () => {

        const response = await fetch("/accounts/getstudentlatestlesson", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });

        const data = await response.json();
        setLesson(data);

    }

    console.log(lesson);

    if (lesson.error != null) {
        return (<div></div>);
    } else {
        return (
            <div>
                <Typography variant="h4" align="left">Latest lesson:</Typography>
                <Typography variant="body1" align="left">{lesson.plan}</Typography>
            </div>
        );
    }
}

export default Lesson;