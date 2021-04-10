import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

function CustomTextField(props) {
  const useStyles = makeStyles((theme) => ({
    customTextField: {
      "& .MuiInputBase-input": {
        color: theme.palette.cards,
      },
      "& label": {
        color: theme.palette.cards,
      },
      "& label.Mui-focused": {
        color: theme.palette.cards,
      },
      "& .MuiInput-underline:after": {
        color: theme.palette.cards,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: theme.palette.cards,
        },
        "&:hover fieldset": {
          borderColor: theme.palette.cards,
        },
        "&.Mui-focused fieldset": {
          borderColor: theme.palette.cards,
        },
      },
    },
    multilineColor: {
      color: theme.palette.cards,
    },
  }));

  const classes = useStyles();

  return (
    <TextField
      variant="filled"
      className={classes.customTextField}
      label={props.label}
      onChange={props.onChange}
      error={props.error}
      onFocus={props.onFocus}
      color="secondary"
      InputProps={{
        className: classes.multilineColor,
      }}
      type={props.type}
    >
      Hello there
    </TextField>
  );
}

export default CustomTextField;
