import React, { useState } from 'react';
import '../../App.css';

import Button from '@material-ui/core/Button';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Redirect} from 'react-router-dom';

import CustomTextField from '../general/CustomTextField';

function Login(props) {
    
  const theme = createMuiTheme(props.theme);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submitLogin = async (event) => {
    
    event.preventDefault();
    const JSONdata = {email: email, password: password};
    
    const response = await fetch('http://localhost:3000/accounts/login', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(JSONdata)
  });
  
  const data = await response.json();
  if (data.error != null) {
    setError(true);
    setEmail("");
    setPassword("");
  } else {
    document.cookie = "token=" + data.cookie;
    document.location.href = "studentdashboard";
  }

}

const emailChange = (event) => {
  setEmail(event.target.value);
  setError(false);
}

const passwordChange = (event) => {
  setError(false);
  setPassword(event.target.value);
}

const setErrorFalse = () => setError(false);

return (
  <ThemeProvider theme={theme}>
  <div className="App">
  <div className="leftNav" style={{backgroundColor: theme.palette.p.cards}}>
  
  <form className="loginWrapper">

  <CustomTextField theme={theme} label="Email" onChange={emailChange} error={error} onFocus={setErrorFalse} />
  <CustomTextField theme={theme} label="Password" onChange={passwordChange} error={error} onFocus={setErrorFalse} type="password"/>
  <Button variant="contained" color="primary" type="submit" value="submit" onClick={submitLogin}>Login</Button>

  </form>
  
  </div>
  <div className="mainWrapper"></div>
  </div>
  </ThemeProvider>
  );
}

export default Login;
