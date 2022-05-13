import React from "react";
import { Typography } from "@material-ui/core";

import DefaultAppBar from "../general/DefaultAppBar";
import Banner from "../StyledComponents/Banner";
import Section from "../StyledComponents/Section";

const Manifesto = () => {
  return (
    <div>
      <DefaultAppBar />
      <Banner small={true} title="Our Manifesto" />
      <Section auto={true} narrow={true} background="offwhite" column={true}>
        <Typography variant="h2" align="center">
          Our mission is to help students achieve their potential through
          technology.
        </Typography>
        <Typography variant="body2"></Typography>
      </Section>
    </div>
  );
};
export default Manifesto;
