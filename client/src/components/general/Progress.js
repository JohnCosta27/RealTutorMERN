import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

const Progress = () => {
    
    const [progress, setProgress] = useState({empty: true});
    
    useEffect(() => {
        getProgress();
    }, []);
    
    const getProgress = async () => {
        
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        
        const response = await fetch("/accounts/getstudentprogress?studentid=" + urlParams.get('studentid'), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        
        const data = await response.json();
        setProgress(data);
        
    }

    return (
        <div>
            <Typography variant="h4">{progress.progress}% Course Completion</Typography>
            <LinearProgress variant="determinate" value={progress.progress} />
        </div>
    )

}
            
export default Progress;