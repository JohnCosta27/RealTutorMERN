import React from "react";
import { makeStyles } from "@material-ui/styles";

import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

const TitleDescriptionCard = (props) => {
  const useStyles = makeStyles((theme) => ({
    parent: {
      flex: 1,
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 10,
      marginBottom: 10,
    },
    sectionCard: {
      backgroundColor: teal[200],
      height: 400,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      paddingLeft: 10,
      paddingRight: 10,
    },
    image: {
      backgroundImage: `url("https://www.oxygenna.com/wp-content/uploads/2015/11/18.jpg")`,
      width: "100%",
      flex: 1,
    },
    descriptionWrapper: {
      flex: 0.5,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.parent}>
      <Card className={classes.sectionCard}>
        <Typography variant="h3" align="center">
          {props.title}
        </Typography>
        <div className={classes.image}></div>
        <div className={classes.descriptionWrapper}>
          <Typography variant="body2">{props.description}</Typography>
        </div>
      </Card>
    </div>
  );
};

export default TitleDescriptionCard;
