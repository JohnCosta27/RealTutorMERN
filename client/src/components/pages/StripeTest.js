import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(
    'pk_live_51IgsTHJwHQjcU66CgZtNbj7hpXzxLlnlk9V2rqRp1M110TAUe4V4XCmPnpXrhFRCYuySROcq4UU1UXMTSAaeISnq002CgxVgr8'
);

const StripeTest = () => {

    const [stripeError, setStripeError] = useState();
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        const stripe = await stripePromise;
        const {error} = await stripe.redirectToCheckout({
            lineItems: [
                {
                    price: 'price_1Irrj0JwHQjcU66CGQTbReDq',
                    quantity: 1
                }
            ],
            mode: "payment",
            cancelUrl: window.location.origin,
            successUrl: `${window.location.origin}/login`,
        });

        if (error) {
            setLoading(false);
            setStripeError(error);
        }

    }

	return (
		<div>
			<Button onClick={handleClick} disabled={loading}>Press to pay</Button>
		</div>
	);
};

export default StripeTest;
