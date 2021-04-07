import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import CustomTextField from '../general/CustomTextField';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  
  const useStyles = makeStyles(theme => ({
    leftNav: {
      flex: 1,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minWidth: 400,
    },
    leftNavPaper: {
      backgroundColor: theme.palette.secondary.main
    }
  }));
  
  const submitLogin = async (event) => {
    
    event.preventDefault();
    const JSONdata = {email: email, password: password};
    
    const response = await fetch('/accounts/login', {
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

    if (data.level == 1) {
      document.location.href = "studentdashboard?studentid=" + data.id;  
    } else if (data.level >= 2) {
      document.location.href = "/"
    }

    //document.location.href = "studentdashboard";
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

const classes = useStyles();

return (
  <div className="App">
  <Paper className={classes.leftNavPaper} square>
  <Box className={classes.leftNav}>

  <form className="loginWrapper">
  
  <CustomTextField label="Email" onChange={emailChange} error={error} onFocus={setErrorFalse} />
  <CustomTextField label="Password" onChange={passwordChange} error={error} onFocus={setErrorFalse} type="password"/>
  <Button variant="contained" color="primary" type="submit" value="submit" onClick={submitLogin}>Login</Button>
  
  </form>

  </Box>
  </Paper>
  
  <div className="mainWrapper"></div>
  </div>
  );
}

export default Login;
