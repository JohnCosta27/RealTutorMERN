import React from 'react';
import { Typography } from '@material-ui/core';

import DefaultAppBar from '../general/DefaultAppBar';
import Banner from '../StyledComponents/Banner';
import Section from '../StyledComponents/Section';

const HowItWorks = () => {

	return (
		<div>
			<DefaultAppBar />
			<Banner
				small={true}
				title="How it works"
				subtitle="Find out how we can help you"
			/>
			<Section auto={true} narrow={true} background="offwhite">
				<div>
					<Typography variant="h1">
						What is <i>"Real Tutor"</i>
					</Typography>
					<br></br>
					<Typography variant="body2">
						We are a UK based company who aim to provide the best
						quality online tutoring, at an affordable price. We
						pride ourselves in our use of digital resources and
						taking full advantages of the digital world ever growing
						around us. Whilst most other tutoring providers are
						still stuck in the 20th century, we are innovation, and
						bringing learning into our connected world.
					</Typography>
					<br></br>
					<Typography variant="body2">
						We provide absolute transparicy in every aspect of our
						business, be it the terms of services for new students,
						the resources we use, or even how we hire new tutors.
						You will always have full transparacy from us.
					</Typography>
					<br></br>
					<br></br>
				</div>
			</Section>
			<Section auto={true} narrow={true} background="lightteal" column={true}>
				<Typography variant="h1">How does it all work?</Typography>
				<br></br>

				<div style={{ display: 'flex' }}>
					<Typography variant="h3" color="secondary">
						1.
					</Typography>
					<Typography variant="h3">Contact us</Typography>
				</div>

				<Typography variant="body2">
					This could be through email, phone, social media. Get in
					contact with us and we will match you to one of our tutors.
				</Typography>

				<br></br>

				<div style={{ display: 'flex' }}>
					<Typography variant="h3" color="secondary">
						2.
					</Typography>
					<Typography variant="h3">Schedule and payment</Typography>
				</div>

				<Typography variant="body2">
					After being matched to a tutor, we will arrange a session
					date and time. After this we will ask you for payment, you
					can choose to pay for a single session at a time, but it is
					more convenient to pay for a few sessions ahead of time. All
					payments are done through <i>Stripe</i>, which is a company
					that handles online transactions and are trusted by
					billions.
				</Typography>

				<br></br>

				<div style={{ display: 'flex' }}>
					<Typography variant="h3" color="secondary">
						3.
					</Typography>
					<Typography variant="h3">Repeat</Typography>
				</div>

				<Typography variant="body2">
					After you have finished your sessions, we will again ask for
					payment if you choose to remain with us, this is all that
					needs to be done to enjoy our amazing services.
				</Typography>
			</Section>
		</div>
	);
};
export default HowItWorks;
