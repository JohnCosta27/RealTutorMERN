import React, {useState, useEffect} from 'react';
import './StudentBox.css';
import Student from './Student';

function StudentBox() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
      getStudents();
  }, []);

  const getStudents = async () => {
      const response = await fetch('/students/readall');
      const data = await response.json();
      setStudents(data);
  }

  return (
    <div className="studentList">
      {students.map(student => (
        <Student firstname={student.firstname} surname={student.surname} />
      ))}
    </div>
  );
}

export default StudentBox;
