import React from 'react';
import '../../App.css';

import { createMuiTheme } from '@material-ui/core/styles';
import StudentBox from '../students/StudentBox'

function Dashboard(props) {

    const theme = createMuiTheme(props.theme);

    return (
        <div className="App">
        <div className="leftNav" style={{backgroundColor: theme.palette.primary.background}}></div>
        <div className="mainWrapper" style={{backgroundColor: theme.palette.primary.main}}>
        <div className="studentBoxWrapper">
        <StudentBox theme={theme}/>
        </div>
        </div>
        </div>
    );
}
    
export default Dashboard;