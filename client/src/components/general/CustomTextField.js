import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

function CustomTextField(props) {
    
    const theme = createMuiTheme(props.theme);
    
    const useStyles = makeStyles(
        {customTextField: {
            '& .MuiInputBase-input': {
                color: theme.palette.primary.text
            },
            '& label': {
                color: theme.palette.primary.light
            },
            '& label.Mui-focused': {
                color: theme.palette.primary.main,
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: theme.palette.primary.main,
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: theme.palette.primary.light,
                },
                '&:hover fieldset': {
                    borderColor: theme.palette.primary.main,
                },
                '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.main,
                },
            },
        },
    });
    
    const classes = useStyles();

    return(
        <TextField 
        variant="outlined" 
        className={classes.customTextField}
        label={props.label}
        onChange={props.onChange}
        error={props.error}
        onFocus={props.onFocus}>
            Hello there
            </TextField>
        )
        
    }
    
    export default CustomTextField;