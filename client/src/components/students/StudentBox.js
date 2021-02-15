import React, {useState, useEffect} from 'react';
import Student from './Student';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

function StudentBox(props) {

  const [students, setStudents] = useState([]);
  const theme = createMuiTheme(props.theme);

  const useStyles = makeStyles(
    {
      studentBox: {
        display: "flex",
        flexDirection: "column",
        width: "100%"
      }
    }
  )

  const classes = useStyles();

  useEffect(() => {
      getStudents();
  }, []);

  const getStudents = async () => {
      const response = await fetch('/students/readall');
      const data = await response.json();
      setStudents(data);
  }

  let key = 0;

  return (
    <div className={classes.studentBox}>
      {students.map(student => (
        <Student 
        firstname={student.firstname} 
        surname={student.surname} 
        theme={theme}
        key={key++} 
        m={20}/>
      ))}
    </div>
  );
}

export default StudentBox;
