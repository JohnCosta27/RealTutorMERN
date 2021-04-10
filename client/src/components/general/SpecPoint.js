import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const SpecPoint = (props) => {
  const [clicked, setClicked] = useState(false);
  const [highlighted, setHighlighted] = useState();

  useEffect(() => {
    if (props.highlighted) {
      setHighlighted(true);
    }
  }, []);

  const useStyles = makeStyles((theme) => ({
    clickedPaper: {
      backgroundColor: "#313131",
      color: "#FFFFFF",
    },
    gridItem: {
      marginTop: 2,
      marginBottom: 2,
      cursor: "pointer",
    },
    highlighted: {
      backgroundColor: "#009688",
      color: "#FFFFFF",
    },
  }));

  const classes = useStyles();

  if (highlighted) {
    return (
      <Grid item xs={12} className={classes.gridItem} onClick={props.onClick}>
        <Paper
          onClick={() => setClicked(!clicked)}
          elevation={1}
          className={clicked ? classes.clickedPaper : classes.highlighted}
        >
          <Typography variant="body1">{props.content}</Typography>
        </Paper>
      </Grid>
    );
  } else {
    return (
      <Grid item xs={12} className={classes.gridItem} onClick={props.onClick}>
        <Paper
          onClick={() => setClicked(!clicked)}
          elevation={1}
          className={clicked ? classes.clickedPaper : classes.nothing}
        >
          <Typography variant="body1">{props.content}</Typography>
        </Paper>
      </Grid>
    );
  }
};

export default SpecPoint;
