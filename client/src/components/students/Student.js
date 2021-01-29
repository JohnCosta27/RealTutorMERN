import React from 'react';
import './Student.css';

function Student(props) {

    return (

    <div className="studentCard">
        <h1>{props.firstname} {props.surname}</h1>
    </div>

    );
}

export default Student;
