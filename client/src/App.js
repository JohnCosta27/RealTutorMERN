import React from 'react';
import './App.css';

import StudentBox from './components/students/StudentBox';

function App() {
  return (
    <div className="App">
      <div className="leftNav"></div>
      <div className="mainWrapper">
        <StudentBox />
      </div>
    </div>
  );
}

export default App;
