import React, { useState } from 'react';

import DefaultAppBar from '../general/DefaultAppBar';
import Banner from '../StyledComponents/Banner';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { loadStripe } from '@stripe/stripe-js';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Section from '../StyledComponents/Section';
import Stripe from '../../images/stripe.png';

const stripePromise = loadStripe(
	'pk_live_51IgsTHJwHQjcU66CgZtNbj7hpXzxLlnlk9V2rqRp1M110TAUe4V4XCmPnpXrhFRCYuySROcq4UU1UXMTSAaeISnq002CgxVgr8'
);

const Payment = () => {
	const [stripeError, setStripeError] = useState();
	const [loading, setLoading] = useState(false);

	const [name, setName] = useState("");
	const [nameError, setNameError] = useState(false);
	const [sessions, setSessions] = useState(0);
	const [selectedLevel, setSelectedLevel] = useState("A-level");

	const handleSession = (event) => {
		setSessions(event.target.value);
	};

	const handleChange = (event) => {
		setSelectedLevel(event.target.value);
	};

	const buttonClick = async () => {

		if (name.length < 3) {
			setNameError(true);
			return;
		}

		if (selectedLevel == "A-level") {
			setLoading(true);
			const stripe = await stripePromise;
			const { error } = await stripe.redirectToCheckout({
				lineItems: [
					{
						price: 'price_1Irrj0JwHQjcU66CGQTbReDq',
						quantity: Number(sessions),
					},
				],
				mode: 'payment',
				cancelUrl: window.location.origin,
				clientReferenceId: name,
				successUrl: `${window.location.origin}/login`,
			});
	
			if (error) {
				setLoading(false);
				setStripeError(error);
			}
		} else if (selectedLevel == "GCSE") {
			setLoading(true);
			const stripe = await stripePromise;
			const { error } = await stripe.redirectToCheckout({
				lineItems: [
					{
						price: 'price_1IrriQJwHQjcU66CDQzLXrbh',
						quantity: Number(sessions),
					},
				],
				mode: 'payment',
				cancelUrl: window.location.origin,
				clientReferenceId: name,
				successUrl: `${window.location.origin}/login`,
			});
	
			if (error) {
				setLoading(false);
				setStripeError(error);
			}
		}
	}

	return (
		<div>
			<DefaultAppBar />
			<Banner
				small={true}
				title="Payment"
				subtitle="The final step, you won't regret it!"
			/>
			<Section auto={true} centered={true} background="offwhite" narrow={true}>
				<div>
					<Typography variant="h1">You are nearly there</Typography>
					<br></br>
					<Typography variant="body2">
						This is the final step in taking your education to the
						next level, after you complete payment, we will arrange
						the sessions, and make sure that you get what you
						deserve!
					</Typography>
					<br></br>
					<Typography variant="body2">
						This goes without saying but do NOT make a payment if
						you have not spoken to us before, we need to make sure
						that we can completely satisfy your request before we
						can take payment.
					</Typography>
				</div>
			</Section>
			<Section auto={true} centered={true} background="lightteal" narrow={true}>
				<div style={{ marginRight: 20 }}>
					<Typography variant="h1" align="center">
						Real Tutor Sessions
					</Typography>
					<br></br>

					<RadioGroup
						aria-label="level"
						name="Students Level"
						value={selectedLevel}
						onChange={handleChange}
					>
						<FormControlLabel
							value="A-level"
							control={<Radio color="primary" />}
							label="A-level"
						/>
						<FormControlLabel
							value="GCSE"
							control={<Radio color="primary" />}
							label="GCSE"
						/>
					</RadioGroup>

					<Typography variant="h3">Students name</Typography>
					<TextField
						variant="outlined"
						style={{ width: '100%' }}
						error={nameError}
						onFocus={() => setNameError(false)}
						onChange={(event) => setName(event.target.value)}
						value={name}
					></TextField>
					<Typography variant="h3">Number of sessions</Typography>
					<TextField
						type="number"
						label="Number"
						variant="outlined"
						style={{ width: '100%' }}
						onChange={handleSession}
					></TextField>
					<br></br>
					<br></br>
					<Button
						variant="contained"
						style={{ width: '100%' }}
						onClick={buttonClick}
					>
						Payment
					</Button>
				</div>
				<img src={Stripe}></img>
			</Section>
		</div>
	);
};

export default Payment;
