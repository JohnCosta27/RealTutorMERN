import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

function CustomTextField(props) {
    
    const theme = createMuiTheme(props.theme);
    
    const useStyles = makeStyles(
        {
            customTextField: {
                '& .MuiInputBase-input': {
                    color: theme.palette.p.text
                },
                '& label': {
                    color: theme.palette.p.text
                },
                '& label.Mui-focused': {
                    color: theme.palette.p.text
                },
                '& .MuiInput-underline:after': {
                    color: theme.palette.p.text
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: theme.palette.p.text
                    },
                    '&:hover fieldset': {
                        borderColor: theme.palette.p.text
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: theme.palette.p.text
                    },
                },
            },
            multilineColor:{
                color: theme.palette.p.text
            }
        });
        
        const classes = useStyles();
        
        return(
            <TextField 
            variant="filled" 
            className={classes.customTextField}
            label={props.label}
            onChange={props.onChange}
            error={props.error}
            onFocus={props.onFocus}
            InputProps={{
                className: classes.multilineColor
              }}
            type={props.type}>
            Hello there
            </TextField>
            )
            
        }
        
        export default CustomTextField;