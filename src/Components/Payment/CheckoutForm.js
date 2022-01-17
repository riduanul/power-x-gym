import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
  const [paymentError, setPaymentError] = useState("");
  const [success, setSetSucces] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // stripe. js has not loaded yet. make sure to disable
      // form submission until stripe.js has loaded
      return;
    }
    // get a reference to a mounted cardElement. elemnts know how to find your cardElemt becouse ther can only ever be one of each type of element
    const cardElement = elements.getElement(CardNumberElement);

    // use stripe createToken to get a unique token for the card
    const { error, token } = await stripe.createToken(cardElement);

    if (!error) {
      alert("Your payment was successful");
      setSetSucces(token);
      setPaymentError("");
    } else {
      setPaymentError(error);
      setSetSucces("");
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset
          style={{
            border: "2px groove",
            padding: "20px",
            lineHeight: "40px",
          }}
        >
          <legend>Payment Details</legend>
          <label htmlFor="">Card Number</label>
          <CardNumberElement />
          <label htmlFor="">Expiry Date</label>
          <CardExpiryElement />
          <label htmlFor="">CVC</label>
          <CardCvcElement />
          <button className="btn btn-warning mt-3">Pay</button>
        </fieldset>
      </form>
      {paymentError && <p style={{ color: "red" }}>{paymentError.message}</p>}
      {success && <p style={{ color: "green" }}>"Your Payment Success!"</p>}
    </div>
  );
};
export default CheckoutForm;
