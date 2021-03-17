import React from 'react';

import StudentBox from '../students/StudentBox'
import LeftDrawer from '../general/LeftDrawer';

function Dashboard(props) {

    return (
        <div className="App">
        <LeftDrawer />
        <div className="mainWrapper">
        <div className="studentBoxWrapper">
        <StudentBox/>
        </div>
        </div>
        </div>
    );
}
    
export default Dashboard;