import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";

const Section = (props) => {
  const [height, setHeight] = useState(600);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const updateHeight = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    if (props.small) {
      setHeight(600);
    } else if (props.medium) {
      setHeight(800);
    } else if (props.large) {
      setHeight(1000);
    } else {
      setHeight("100vh");
    }

    window.addEventListener("resize", updateHeight);
  }, []);

  const useStyles = makeStyles((theme) => ({
    sectionPaper: {
      width: props.narrow ? "60%" : "80%",
      height: "97.5%",
      marginTop: "1.25%",
      marginBottom: "1.25%",
      marginLeft: props.narrow ? "20%" : "10%",
      marginRight: props.narrow ? "20%" : "10%",
      display: "flex",
      paddingTop: 20,
      paddingLeft: 20,
      paddingBottom: 20,
      paddingRight: 20,
      justifyContent: "space-between",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        justifyContent: "center",
        width: "90%",
        marginLeft: "5%",
        marginRight: "5%",
      },
    },
    smallSection: {
      width: "100%",
      display: "flex",
      height: props.auto ? "auto" : height,
      backgroundPositionY: props.offsetY,
      backgroundImage: props.backgroundimage,
      [theme.breakpoints.down("sm")]: {
        height: "auto",
      },
    },
    offwhite: {
      backgroundColor: theme.palette.offWhite.main,
    },
    lightteal: {
      backgroundColor: theme.palette.lightTeal.main,
    },
    lightblue: {
      backgroundColor: theme.palette.lightBlue.main,
    },
    grey: {
      backgroundColor: theme.palette.grey.main,
    },
    alignCenter: {
      alignItems: "center",
    },
    column: {
      flexDirection: "column",
    },
  }));

  const classes = useStyles();

  let WrapperList = clsx(classes.smallSection);
  let ChildList = clsx(classes.sectionPaper);

  if (props.background == "offwhite") {
    WrapperList = clsx(classes.smallSection, classes.offwhite);
  } else if (props.background == "lightteal") {
    WrapperList = clsx(classes.smallSection, classes.lightteal);
  } else if (props.background == "lightblue") {
    WrapperList = clsx(classes.smallSection, classes.lightblue);
  } else if (props.background == "grey") {
    WrapperList = clsx(classes.smallSection, classes.grey);
  }

  if (props.centered) {
    ChildList = clsx(classes.sectionPaper, classes.alignCenter);
  }

  if (props.column) {
    ChildList = clsx(ChildList, classes.column);
  }

  return (
    <div className={WrapperList} id={props.id}>
      <div
        className={ChildList}
        style={{
          marginTop: props.marginTop,
          marginBottom: props.marginBottom,
          paddingTop: props.paddingTop,
          paddingBottom: props.paddingBottom,
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Section;
