import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(
    'pk_test_51IgsTHJwHQjcU66C8y8UboR4W0HtFEJJTQGkCMe58M4fmu5JG4vd768Cfim2QrRPVd17QGJ4J0VrAJKqHsZCGV0e00O6cEg9Mi'
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
                    price: 'price_1IgsjzJwHQjcU66CAqzudVUI',
                    quantity: 100
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
