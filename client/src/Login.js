import React, { useState } from 'react';
import './App.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, orange, grey } from '@material-ui/core/colors';

import CustomTextField from './components/general/CustomTextField';

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

function Login() {
  
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
    console.log(data);
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
  <div className="leftNav" style={{backgroundColor: theme.palette.primary.dark}}>
  
  <form className="loginWrapper" onSubmit={submitLogin}>

  <CustomTextField theme={theme} label="Email" onChange={emailChange} error={error} onFocus={setErrorFalse} />
  <CustomTextField theme={theme} label="Password" onChange={passwordChange} error={error} onFocus={setErrorFalse} />
  <Button variant="contained" color="secondary" type="submit" value="submit">Login</Button>

  </form>
  
  </div>
  <div className="mainWrapper"></div>
  </div>
  </ThemeProvider>
  );
}

export default Login;
