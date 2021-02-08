import React from 'react';
import './App.css';

import TextField from '@material-ui/core/TextField';

function Login() {
  return (
    <div className="App">
      <div className="leftNav">

        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />

      </div>
      <div className="mainWrapper"></div>
    </div>
  );
}

export default Login;
