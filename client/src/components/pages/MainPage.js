import React, { useState, useEffect } from "react";

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import FadeIn from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import CookieConsent, { Cookies } from "react-cookie-consent";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";

import ReactPlayer from "react-player";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import transparentLogo from "../../images/TransparentLogo.png";
import DefaultAppBar from "../general/DefaultAppBar";
import Banner from "../StyledComponents/Banner";
import SubjectCard from "../general/SubjectCard";
import LegalInfo from "../StyledComponents/LegalInfo";

import BannerBackground from "../../images/Banner.jpeg";
import Section from "../StyledComponents/Section";
import Logo from "../../images/logo.png";

const MainPage = () => {
  const [enter, setEnter] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const useStyles = makeStyles((theme) => ({
    banner: {
      width: "100%",
      height: 800,
      backgroundImage: `url(${BannerBackground})`,
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      backgroundPositionX: "center",
      [theme.breakpoints.down("sm")]: {
        height: 600,
      },
      [theme.breakpoints.down("xs")]: {
        height: 800,
      },
    },
    centeredWrapper: {
      width: "80%",
      marginLeft: "10%",
      position: "absolute",
      bottom: 150,
    },
    bannerImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    name: {
      width: "80%",
      marginLeft: "10%",
      marginTop: 75,
    },
    bigText: {
      [theme.breakpoints.down("sm")]: {
        fontSize: 50,
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 100,
      },
    },
    sectionWrapper: {
      backgroundColor: "#fafafa",
      width: "100%",
      display: "flex",
      height: "100vh",
      [theme.breakpoints.down("md")]: {
        height: "120vh",
      },
    },
    sectionPaper: {
      width: "80%",
      height: "97.5%",
      marginTop: "1.25%",
      marginBottom: "1.25%",
      marginLeft: "10%",
      marginRight: "10%",
      display: "flex",
      paddingTop: 20,
      paddingLeft: 20,
      paddingBottom: 20,
      paddingRight: 20,
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },
    card: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    subjectCard: {
      [theme.breakpoints.down("xs")]: {
        height: 100,
      },
      height: 250,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      transition: "all 200ms",
      "&:hover": {
        transform: "translateY(-3px) scale(1.1)",
      },
    },
    cardDisplay: {
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },
    smallSection: {
      width: "100%",
      display: "flex",
      height: 600,
      [theme.breakpoints.down("md")]: {
        height: "auto",
      },
    },
    image: {
      width: "40vw",
      [theme.breakpoints.down("md")]: {
        width: "60vw",
      },
      [theme.breakpoints.down("sm")]: {
        width: "80vw",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90vw",
      },
    },
    list: {
      display: "flex",
      float: "right",
    },
    listItem: {
      marginLeft: 10,
      marginRight: 10,
    },
    socialWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    contactWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    icons: {
      fontSize: 75,
      [theme.breakpoints.down("md")]: {
        fontSize: 50,
      },
    },
    wrappingText: {
      maxWidth: 700,
      paddingRight: 100,
      [theme.breakpoints.down("md")]: {
        paddingRight: 0,
      },
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    checkQuery();
    window.addEventListener("resize", updateWidth);
    setTimeout(() => {
      setEnter(true);
    }, 1000);
  }, []);

  const checkQuery = () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("section") == "contact-us") {
      contactUs();
    }
  };

  const contactUs = () => {
    scroller.scrollTo("contactus", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const TheExperiment = () => {
    if (width < 1600) {
      return (
        <FadeIn right>
          <Section background="lightteal" auto={true} centered={true}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ maxWidth: 800 }}>
                <Typography variant="h1" align="right">
                  The Experiment...
                </Typography>
                <br></br>
                <Typography variant="body2">
                  Other tutoring providers select teachers as they're tutors.
                  After extensive research, we found that teachers are too far
                  removed from the exam procedures. This gave us an idea, We
                  took a select few University undergraduates, with top A level
                  grades, and ran some sample tutoring sessions. We found the
                  Tutees to be hugely more engaged and learnt the syllabus
                  noticeably faster. We also noted that when an Undergraduate
                  was studying a related field, the students' learning was
                  optimized.
                </Typography>
                <br></br>
                <Typography variant="h3" align="left">
                  The Conclusion...
                </Typography>
                <br></br>
                <Typography variant="body2">
                  After the research we based our employment process off our
                  findings. Our cherry picked Tutors will help our students
                  achieve the best grade they are possibile of, no matter your
                  current course progression.
                </Typography>
                <br></br>
                <div
                  style={{
                    width: "auto",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    paddingTop: "56.25%",
                  }}
                >
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=-UAWRH0-h8A"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                    width="100%"
                    height="100%"
                    controls={true}
                  />
                </div>
              </div>
            </div>
          </Section>
        </FadeIn>
      );
    } else {
      return (
        <FadeIn>
          <Section background="lightteal" auto={true} centered={true}>
            <div style={{ width: "100%", marginRight: 20 }}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=-UAWRH0-h8A"
                controls={true}
              />
            </div>
            <div style={{ width: "100%" }}>
              <div style={{ maxWidth: 800, float: "right" }}>
                <Typography variant="h1" align="right">
                  The Experiment...
                </Typography>
                <br></br>
                <Typography variant="body2" align="right">
                  Other tutoring providers select teachers as they're tutors.
                  After extensive research, we found that teachers are too far
                  removed from the exam procedures. This gave us an idea, We
                  took a select few University undergraduates, with top A level
                  grades, and ran some sample tutoring sessions. We found the
                  Tutees to be hugely more engaged and learnt the syllabus
                  noticeably faster. We also noted that when an Undergraduate
                  was studying a related field, the students' learning was
                  optimized.
                </Typography>
                <br></br>
                <Typography variant="h3" align="left">
                  The Conclusion...
                </Typography>
                <br></br>
                <Typography variant="body2">
                  After the research we based our employment process off our
                  findings. Our cherry picked Tutors will help our students
                  achieve the best grade they are possibile of, no matter your
                  current course progression.
                </Typography>
                <br></br>
              </div>
            </div>
          </Section>
        </FadeIn>
      );
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <DefaultAppBar contactus={contactUs} />
      <Banner mainpage={true} />
      <FadeIn right>
        <Section
          background="offwhite"
          auto={true}
          centered={true}
          marginBottom={0}
          paddingBottom={0}
        >
          <div style={{ maxWidth: 800 }}>
            <Typography variant="h1" color="secondary">
              Tuition meets the digital age
            </Typography>
            <br></br>
            <Typography variant="body2">
              We have custom built software, to keep track of student progress
              and help lesson planning and reporting.
            </Typography>
            <br></br>
            <Typography variant="body2">State of the art software.</Typography>
            <Typography variant="body2">Flawless tutoring.</Typography>
            <Typography variant="body2">
              The future of education is here.
            </Typography>
            <br></br>
            <br></br>
          </div>
          <div style={{ maxWidth: 800 }}>
            <img src={transparentLogo} className={classes.image} />
            <br></br>
            <br></br>
          </div>
        </Section>
      </FadeIn>
      <FadeIn right>
        <Section
          background="offwhite"
          auto={true}
          centered={true}
          marginTop={0}
          paddingTop={0}
        >
          <div style={{ width: "100%" }}>
            <Typography variant="h1" align="left" color="secondary">
              Powered by software
            </Typography>
            <br></br>
            <Typography variant="body2" align="left">
              So what is this software that we keep talking about? We call it
              Odin. It is a centralised place which keeps track of every lesson,
              every report and every topic the student has practiced. This data
              will help the student and tutor tremendously, as it provides up to
              date information on what the student really needs.
            </Typography>
            <br></br>
            <Typography variant="h3" align="left">
              Plenty of features
            </Typography>
            <br></br>
            <Typography variant="body2">
              Our software is feature rich to help you learn. There are a
              variety of tools which tutors will use to help you, and you will
              be able to view everything, from what happened in a lesson 3
              months ago, or give us feedback on how the lesson went. There
              simply isn’t anything like it.
            </Typography>
            <br></br>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginLeft: 50,
            }}
          >
            <div>
              <div style={{ display: "flex" }}>
                <Typography
                  variant="h4"
                  color="secondary"
                  style={{ marginRight: 10 }}
                >
                  1.
                </Typography>
                <Typography variant="h4" color="primary">
                  Keeps track of all lessons
                </Typography>
              </div>
              <br></br>
              <div style={{ display: "flex" }}>
                <Typography
                  variant="h4"
                  color="secondary"
                  style={{ marginRight: 10 }}
                >
                  2.
                </Typography>
                <Typography variant="h4" color="primary">
                  Easily view your progress
                </Typography>
              </div>
              <br></br>
              <div style={{ display: "flex" }}>
                <Typography
                  variant="h4"
                  color="secondary"
                  style={{ marginRight: 10 }}
                >
                  3.
                </Typography>
                <Typography variant="h4" color="primary">
                  View tutor feedback
                </Typography>
              </div>
            </div>
          </div>
        </Section>
      </FadeIn>
      {TheExperiment()}
      <FadeIn right>
        <Section medium={true} centered={true} narrow={true}>
          <div className={classes.wrappingText}>
            <Typography variant="h1" color="secondary">
              We. Really. Care.
            </Typography>
            <br></br>
            <Typography variant="body2">
              Our 5% charity pleage is simply one example of how much we care
              about the community and the world around us.
            </Typography>
            <br></br>
            <Typography variant="body2">
              You won't just talk to your tutor. You will talk to the CEO, COO
              and other members of staff, about your own progress, and ways we
              could make your life easier. All so you can achieve the best
              grade.
            </Typography>
            <br></br>
            <Typography variant="body2">
              Real Tutor offers you peace of mind. We will never turn away a
              student in need, and we promise to always deliver the best quality
              education. Period.
            </Typography>
            <br></br>
            <br></br>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div>
              <div style={{ display: "flex" }}>
                <Typography
                  variant="h4"
                  color="secondary"
                  style={{ marginRight: 10 }}
                >
                  1.
                </Typography>
                <Typography variant="h4" color="primary">
                  5% charity pledge
                </Typography>
              </div>
              <br></br>
              <div style={{ display: "flex" }}>
                <Typography
                  variant="h4"
                  color="secondary"
                  style={{ marginRight: 10 }}
                >
                  2.
                </Typography>
                <Typography variant="h4" color="primary">
                  Our personal approach
                </Typography>
              </div>
              <br></br>
              <div style={{ display: "flex" }}>
                <Typography
                  variant="h4"
                  color="secondary"
                  style={{ marginRight: 10 }}
                >
                  3.
                </Typography>
                <Typography variant="h4" color="primary">
                  Market leading tutoring
                </Typography>
              </div>
            </div>
          </div>
        </Section>
      </FadeIn>
      <FadeIn left>
        <Section medium={true} column={true} background="lightblue">
          <div>
            <Typography variant="h2">Subjects we offer</Typography>
            <br></br>
            <Grid container spacing={6} justify="center" alignItems="center">
              <SubjectCard
                title="A-level Maths"
                onClick={() => (document.location.href = "/alevelmaths")}
              />
              <SubjectCard
                title="A-level Further Maths"
                onClick={() => (document.location.href = "/alevelfurthermaths")}
              />
              <SubjectCard
                title="A-level Physics"
                onClick={() => (document.location.href = "/alevelphysics")}
              />
              <SubjectCard
                title="A-level Chemistry"
                onClick={() => (document.location.href = "/alevelchemistry")}
              />
              <SubjectCard
                title="A-level Biology"
                onClick={() => (document.location.href = "/alevelbiology")}
              />
              <SubjectCard
                title="GCSE Computer Science"
                onClick={() =>
                  (document.location.href = "/gcsecomputerscience")
                }
              />
              <SubjectCard
                title="A-level Computer Science"
                onClick={() =>
                  (document.location.href = "/alevelcomputerscience")
                }
              />
              <SubjectCard
                title="View all"
                onClick={() => (document.location.href = "/subjects")}
              />
            </Grid>
          </div>
        </Section>
      </FadeIn>
      <FadeIn>
        <Section background="offwhite" auto={true} narrow={true}>
          <div style={{ flex: 1 }} id="contactSection">
            <Typography variant="h1" align="center">
              Contact us
            </Typography>
            <br></br>
            <Typography variant="h2">Emails:</Typography>
            <br></br>
            <div className={classes.contactWrapper}>
              <MailIcon
                color="primary"
                className={classes.icons}
                fontSize="large"
              />
              <Typography variant="h4" align="center">
                john@realtutor.online (CEO)
              </Typography>
            </div>
            <br></br>
            <div className={classes.contactWrapper}>
              <MailIcon color="primary" className={classes.icons} />
              <Typography variant="h4" align="center">
                zach@realtutor.online (COO)
              </Typography>
            </div>
            <br></br>
            <Typography variant="h3">Phone numbers:</Typography>
            <br></br>
            <div className={classes.contactWrapper}>
              <PhoneIcon color="primary" className={classes.icons} />
              <Typography variant="h4" align="center">
                +44 7443 494507 (Zach)
              </Typography>
            </div>
            <br></br>
            <div className={classes.contactWrapper}>
              <PhoneIcon color="primary" className={classes.icons} />
              <Typography variant="h4" align="center">
                +44 7576 870036 (John)
              </Typography>
            </div>
            <br></br>
          </div>
          <div style={{ flex: 1 }}>
            <Typography variant="h1" align="center">
              Socials
            </Typography>
            <div
              className={classes.sectionPaper}
              style={{
                flexDirection: "column",
                height: "80%",
              }}
            >
              <div
                className={classes.socialWrapper}
                onClick={() =>
                  window
                    .open(
                      "https://www.instagram.com/realtutor_online/",
                      "_blank"
                    )
                    .focus()
                }
              >
                <InstagramIcon
                  color="secondary"
                  className={classes.icons}
                ></InstagramIcon>
                <Typography variant="h3">@realtutor_online</Typography>
              </div>
              <br></br>
              <br></br>
              <div
                className={classes.socialWrapper}
                onClick={() =>
                  window
                    .open(
                      "https://www.youtube.com/channel/UCDIjZ-wLxyCc9yB49pK-Pqw",
                      "_blank"
                    )
                    .focus()
                }
              >
                <YouTubeIcon
                  color="secondary"
                  className={classes.icons}
                ></YouTubeIcon>
                <Typography variant="h3">Real Tutor</Typography>
              </div>
              <br></br>
              <br></br>
              <div
                className={classes.socialWrapper}
                className={classes.socialWrapper}
                onClick={() =>
                  window
                    .open("https://www.facebook.com/real.tutor.509/", "_blank")
                    .focus()
                }
              >
                <FacebookIcon
                  color="secondary"
                  className={classes.icons}
                ></FacebookIcon>
                <Typography variant="h3">Real Tutor</Typography>
              </div>
            </div>
          </div>
        </Section>
      </FadeIn>
      <LegalInfo />
    </div>
  );
};

export default MainPage;
