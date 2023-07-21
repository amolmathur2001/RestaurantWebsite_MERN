import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCart} from "../Components/ContextReducer";
import CheckoutForm from "./CheckoutForm";
import "./Stripe.css";
import NavbarNew from "../Components/NavbarNew";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51NUqQfSGGqzCBSaVtXIob1pW9V8WBWmR6edgd5LimfFKoXrz4T1yp0YVffmWfeR5uwwy4BeLNrgxew1JihG7gkqd00wCVCdH3V"
);

export default function StripeCheckout() {
  let data = useCart();
  //let dispatch = useDispatchCart();
  const [clientSecret, setClientSecret] = useState("");
  let totalMoney = data.reduce((total,curr) => total + curr.price,0);
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:9000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalAmount : totalMoney }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
    <NavbarNew />
    <div className="Stripe m-5" style={{paddingLeft : "340px",color : "white"}}>
      
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
    </div>
  );
}
