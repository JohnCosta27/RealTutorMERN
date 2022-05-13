import React from "react";

import { makeStyles } from "@material-ui/styles";

import DefaultAppBar from "../general/DefaultAppBar";
import Banner from "../StyledComponents/Banner";
import { Typography } from "@material-ui/core";

import Section from "../StyledComponents/Section";

import John from "../../images/People/john.jpg";
import Zach from "../../images/People/zach.jpg";
import Ronnie from "../../images/People/ronnie.jpg";
import Alex from "../../images/People/alex.jpg";
import Rio from "../../images/People/rio.jpg";

const Team = () => {
  const useStyles = makeStyles((theme) => ({
    tutorPicturesWrapper: {
      width: "100%",
      height: 500,
      display: "flex",
      flexDirection: "row",
      float: "left",
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
      float: "left",
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <DefaultAppBar />
      <Banner
        small={true}
        title="Meet the team"
        subtitle="A small, close team, working to provide the best tutoring"
      />
      <Section medium={true} centered={true} background="offwhite">
        <div style={{ flex: 1, width: "100%" }}>
          <Typography variant="h1">John Costa</Typography>
          <div className={classes.tutorPicturesWrapper}>
            <div
              className={classes.tutorPictures}
              style={{ backgroundImage: `url(${John})` }}
            ></div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <Typography variant="h3">About me</Typography>
          <Typography variant="body2">
            I am taking a Computer Science degree at Royal Holloway, I am also
            the CEO of Real Tutor. Maths has been my favourite subject until I
            met computer science but it still holds a crutial place in my heart.
            I have an A* in A-level Maths, an A in Further Maths and an A in
            Computer Science, as well as years of tutoring experience.
          </Typography>

          <br></br>

          <Typography variant="h3">Roles</Typography>
          <Typography variant="body2">1. CEO of the company</Typography>
          <Typography variant="body2">
            2. Code all of the companies systems
          </Typography>
          <Typography variant="body2">
            3. Teach Maths, Further Maths and Computer Science
          </Typography>
        </div>
      </Section>

      <Section medium={true} centered={true} background="lightteal">
        <div style={{ flex: 1, width: "100%" }}>
          <Typography variant="h1">Zach Seth</Typography>
          <div className={classes.tutorPicturesWrapper}>
            <div
              className={classes.tutorPictures}
              style={{ backgroundImage: `url(${Zach})` }}
            ></div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <Typography variant="h3">About me</Typography>
          <Typography variant="body2">
            I currently work as a Risk Analyst in the financial sector. I am the
            COO of Real tutor, a company I co-founded with John. We noticed a
            gap in the market for high quality tutoring and didn't hesitate to
            take the opportunity. My business mindset came from my love of
            Economics, in which I achieved an A at Farnborough Sixth-form
            college. I enjoyed reading beyond the curriculum and continue to
            read about finance and economics now. I would like to share my
            mindset with students by developing their understanding of the world
            of finance.
          </Typography>

          <br></br>

          <Typography variant="h3">Roles</Typography>
          <Typography variant="body2">1. COO of the company</Typography>
          <Typography variant="body2">
            2. Looks after all company finances
          </Typography>
          <Typography variant="body2">3. Teach A-level Economics</Typography>
        </div>
      </Section>

      <Section medium={true} centered={true} background="offwhite">
        <div style={{ flex: 1, width: "100%" }}>
          <Typography variant="h1">Ronnie Nobbs</Typography>
          <div className={classes.tutorPicturesWrapper}>
            <div
              className={classes.tutorPictures}
              style={{ backgroundImage: `url(${Ronnie})` }}
            ></div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <Typography variant="h3">About me</Typography>
          <Typography variant="body2">
            I am an undergraduate student at Southampton University, a part of
            the Russell Group, and I am working towards a Master’s Degree in
            Physics with Mathematics. I have an A* in Maths, an A in Physics and
            a B in Further Maths, coupled with experience in tutoring Physics
            and Maths. Physics was unlocked as a passion of mine once I started
            my GCSE learning in Year 10. I would research topics far beyond the
            scope of the GCSE course. It lit a fire underneath me, a burning
            passion to grow my knowledge, a conquest in life that will never
            end. Mathematics naturally followed on from my passion in physics,
            for it is the language of the universe.
          </Typography>

          <br></br>

          <Typography variant="h3">Roles</Typography>
          <Typography variant="body2">
            1. Teach A-level and GCSE Physics
          </Typography>
          <Typography variant="body2">
            2. Teach A-level Maths and Further Maths
          </Typography>
        </div>
      </Section>

      <Section medium={true} centered={true} background="lightblue">
        <div style={{ flex: 1, width: "100%" }}>
          <Typography variant="h1">Alex Field</Typography>
          <div className={classes.tutorPicturesWrapper}>
            <div
              className={classes.tutorPictures}
              style={{ backgroundImage: `url(${Alex})` }}
            ></div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <Typography variant="h3">About me</Typography>
          <Typography variant="body2">
            I am an undergraduate studying medical biosciences at Imperial
            College London. I studied Biology, Chemistry and maths at A level
            achieving an A* in Maths and an A grade in biology and chemistry. I
            have always had a strong passion for the biological sciences and
            often researched topics beyond the spectrum of what was necessary
            for the course. I have always had a strong ability in the sciences
            and achieved the top grades at GCSE level and am continuing to show
            great ability after being accepted into Imperial College.
          </Typography>

          <br></br>

          <Typography variant="h3">Roles</Typography>
          <Typography variant="body2">
            1. Teaching A level and GCSE Biology
          </Typography>
          <Typography variant="body2">
            2. Teaching A level and GCSE Chemistry
          </Typography>
        </div>
      </Section>

      <Section medium={true} centered={true} background="offwhite">
        <div style={{ flex: 1, width: "100%" }}>
          <Typography variant="h1">Rio Keefe</Typography>
          <div className={classes.tutorPicturesWrapper}>
            <div
              className={classes.tutorPictures}
              style={{ backgroundImage: `url(${Rio})` }}
            ></div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <Typography variant="h3">About Me</Typography>
          <Typography variant="body2">
            I am a student of Illustration at UCA Farnham. I also studied Art
            and Graphics in school and Sixth Form, achieving an A in Art and
            Design at A-Level and an A* in Graphic Products at GCSE. I used my
            gap year to develop my portfolio and grow my online presence; I
            started my small business on Etsy where I sell illustration prints
            and hand-made stickers. I have always taken art seriously, despite
            its reputation as an ‘easy’ subject, and use it to express myself. I
            strongly believe art cannot be filtered and should fully represent
            you and your vision for it, embrace your individuality in every
            aspect of your life - especially in your artwork.
          </Typography>

          <br></br>

          <Typography variant="h3">Roles</Typography>
          <Typography variant="body2">1. Head of Graphic design</Typography>
          <Typography variant="body2">
            2. Teaching A-Level Art and Design
          </Typography>
          <Typography variant="body2">3. Teaching GCSE Graphics</Typography>
        </div>
      </Section>
    </div>
  );
};

export default Team;
