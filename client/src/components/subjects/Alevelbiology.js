import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AboutTheTutor from "../StyledComponents/AboutTheTutor";
import Section from "../StyledComponents/Section";
import DefaultAppBar from "../general/DefaultAppBar";
import Banner from "../StyledComponents/Banner";
import Alex from "../../images/People/alex.jpg";

const Alevelbiology = () => {
  const useStyles = makeStyles((theme) => ({
    cardDisplay: {
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    tutorPicturesWrapper: {
      width: "100%",
      height: 500,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 100,
      [theme.breakpoints.down("md")]: {
        marginLeft: 0,
      },
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
      },
    },
    tutorPictures: {
      width: "100%",
      height: "100%",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPositionY: "center",
      backgroundPositionX: "center",
      marginRight: 10,
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <DefaultAppBar />
      <Banner
        title="A-level Biology"
        subtitle="An introduction into how life works."
      />
      <Section
        background="offwhite"
        centered={true}
        auto={true}
        narrow={true}
        column={true}
      >
        <div style={{ maxWidth: 800 }}>
          <Typography variant="h1">How we teach it</Typography>
          <br></br>
          <Typography variant="body2">
            A level biology is a content heavy A level that requires a deep
            understanding of a wide range of different topics. We have found
            that focusing solely on individual topics is a difficult and
            intensive way to learn the content. A more applicable and holistic
            way of learning the content is to look at the topics as a whole and
            understand the deeper links between the different areas of study.
            This method of learning allows a student to not only remember the
            content but also grasp a deeper knowledge into how things interact
            throughout the course aiding in their ability to remember the more
            difficult topics.
          </Typography>
          <br></br>
          <Typography variant="body2">
            During sessions we will complete past paper questions in order to
            find areas of weakness within the students' knowledge. This
            information will then be used to personalise a course of study that
            will best benefit the student to achieve the goals they are set out
            to achieve.
          </Typography>
          <br></br>
          <br></br>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <Typography
              variant="h5"
              color="secondary"
              style={{ marginRight: 10 }}
            >
              1.
            </Typography>
            <Typography variant="h5" color="primary">
              Interactive learning
            </Typography>
          </div>
          <br></br>
          <div style={{ display: "flex" }}>
            <Typography
              variant="h5"
              color="secondary"
              style={{ marginRight: 10 }}
            >
              2.
            </Typography>
            <Typography variant="h5" color="primary">
              Exam questions
            </Typography>
          </div>
          <br></br>
          <div style={{ display: "flex" }}>
            <Typography
              variant="h5"
              color="secondary"
              style={{ marginRight: 10 }}
            >
              3.
            </Typography>
            <Typography variant="h5" color="primary">
              Constant revision over trickier concepts
            </Typography>
          </div>
          <br></br>
        </div>
      </Section>

      <Section auto={true} background="lightteal">
        <Typography variant="h1">About the tutors</Typography>
      </Section>

      <AboutTheTutor
        background="lightteal"
        person={Alex}
        name="Alex Field"
        aboutme="I am an undergraduate studying medical biosciences at
				Imperial College London. I studied Biology, Chemistry
				and maths at A level achieving an A* in Maths and an A
				grade in biology and chemistry. I have always had a
				strong passion for the biological sciences and often
				researched topics beyond the spectrum of what was
				necessary for the course. I have always had a strong
				ability in the sciences and achieved the top grades at
				GCSE level and am continuing to show great ability after
				being accepted into Imperial College."
      />
    </div>
  );
};

export default Alevelbiology;
