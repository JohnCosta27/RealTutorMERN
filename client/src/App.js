import React from 'react';
import './App.css';

import { createMuiTheme } from '@material-ui/core/styles';
import { green, orange, grey } from '@material-ui/core/colors';

import StudentBox from './components/students/StudentBox'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
      dark: grey[800],
      darker: grey[900],
      light: grey[100],
    },
    secondary: {
      main: orange[500]
    }
  }
});

function App() {
  return (
    <div className="App">
    <div className="leftNav" style={{backgroundColor: theme.palette.primary.dark}}></div>
    <div className="mainWrapper" style={{backgroundColor: theme.palette.primary.main}}>
    <div className="studentBoxWrapper">
    <StudentBox theme={theme}/>
    </div>
    </div>
    </div>
    );
  }
  
  export default App;
  