import React, { useState, useEffect } from 'react';

const StudentList = (props) => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        getTutorStudents();
    }, []);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const getTutorStudents = async () => {

        const response = await fetch("/accounts/gettutorstudents?tutorid=" + urlParams.get('tutorid'), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        
        const data = await response.json();
        console.log(data);

        setStudents(data);

    }

    return (

        <div></div>

    );

}

export default StudentList;