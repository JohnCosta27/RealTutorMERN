import React, {useState, useEffect} from 'react';
import Student from './Student';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

function StudentBox(props) {

  const [students, setStudents] = useState([]);

  const useStyles = makeStyles(
    {
      studentBox: {
        display: "flex",
        flexDirection: "column",
        width: "75%",
        marginLeft: "12.5%"
      }
    }
  )

  const classes = useStyles();

  useEffect(() => {
      getStudents();
  }, []);

  const getStudents = async () => {
      const response = await fetch('/accounts/readall');
      const data = await response.json();
      console.log(data);
      setStudents(data);
  }

  let key = 0;

  return (
    <div className={classes.studentBox}>
      {students.map(student => (
        <Student 
        firstname={student.firstname} 
        surname={student.surname}
        key={key++} 
      ></Student>
      ))}
    </div>
  );
}

export default StudentBox;
