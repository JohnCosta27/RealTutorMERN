import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DefaultAppBar from "../general/DefaultAppBar";
import Banner from "../StyledComponents/Banner";
import Section from "../StyledComponents/Section";

import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import FadeIn from "react-reveal/Fade";

const ContactUs = () => {
  const useStyles = makeStyles((theme) => ({
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
    socialWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <DefaultAppBar />
      <Banner small={true} title="Contact Us" />
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
    </div>
  );
};
export default ContactUs;
