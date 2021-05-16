import react, { useState } from 'react';

import DefaultAppBar from '../general/DefaultAppBar';
import Banner from '../StyledComponents/Banner';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { loadStripe } from '@stripe/stripe-js';

import Section from '../StyledComponents/Section';

const stripePromise = loadStripe(
	'pk_live_51IgsTHJwHQjcU66CgZtNbj7hpXzxLlnlk9V2rqRp1M110TAUe4V4XCmPnpXrhFRCYuySROcq4UU1UXMTSAaeISnq002CgxVgr8'
);

const Payment = () => {
	const [stripeError, setStripeError] = useState();
	const [loading, setLoading] = useState(false);

	const [alevelNum, setalevelnum] = useState(0);
	const [gcseNum, setgcsenum] = useState(0);

	const alevelClick = async () => {
		setLoading(true);
		const stripe = await stripePromise;
		const { error } = await stripe.redirectToCheckout({
			lineItems: [
				{
					price: 'price_1Irrj0JwHQjcU66CGQTbReDq',
					quantity: alevelNum,
				},
			],
			mode: 'payment',
			cancelUrl: window.location.origin,
			successUrl: `${window.location.origin}/login`,
		});

		if (error) {
			setLoading(false);
			setStripeError(error);
		}
	};

    const gcseClick = async () => {
		setLoading(true);
		const stripe = await stripePromise;
		const { error } = await stripe.redirectToCheckout({
			lineItems: [
				{
					price: 'price_1IrriQJwHQjcU66CDQzLXrbh',
					quantity: gcseNum,
				},
			],
			mode: 'payment',
			cancelUrl: window.location.origin,
			successUrl: `${window.location.origin}/login`,
		});

		if (error) {
			setLoading(false);
			setStripeError(error);
		}
	};

    const alevelchange = (event) => {
        setalevelnum(event.target.value)
    }

    const gcsechange = (event) => {
        setgcsenum(event.target.value)
    }

	return (
		<div>
			<DefaultAppBar />
			<Banner
				small={true}
				title="Payment"
				subtitle="The final step, you won't regret it!"
			/>
			<Section small={true} centered={true} background="offwhite">
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
			<Section small={true} centered={true} background="lightteal">
				<div>
					<Typography variant="h1" align="center">
						A-level Sessions
					</Typography>
					<br></br>
					<Typography variant="h3">Number of sessions</Typography>
					<TextField
						type="number"
						label="Number"
						variant="outlined"
						style={{ width: '100%' }}
						onChange={alevelchange}
					></TextField>
					<br></br>
					<br></br>
					<Button
						variant="contained"
						style={{ width: '100%' }}
						onClick={alevelClick}
					>
						Payment
					</Button>
				</div>
				<br></br>
				<div>
					<Typography variant="h1" align="center">
						GCSE Sessions
					</Typography>
					<br></br>
					<Typography variant="h3">Number of sessions</Typography>
					<TextField
						type="number"
						label="Number"
						variant="outlined"
						style={{ width: '100%' }}
                        onChange={gcsechange}
					></TextField>
					<br></br>
					<br></br>
					<Button variant="contained" style={{ width: '100%' }}>
						Payment
					</Button>
				</div>
			</Section>
		</div>
	);
};

export default Payment;
