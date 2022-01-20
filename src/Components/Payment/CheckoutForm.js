import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import card1 from "../../Images/visa.png";
import card2 from "../../Images/mastercard.png";
import card3 from "../../Images/amex.png";

const CheckoutForm = () => {
  const [paymentError, setPaymentError] = useState("");
  const [success, setSetSucces] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

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
      navigate("/CompleteMembership");
    } else {
      setPaymentError(error);
      setSetSucces("");
      console.log(error);
    }
  };
  return (
    <div className="container payment-area">
      <div className="card-part d-flex justify-content-between container">
        <div>
          <input type="radio" required />
          <label htmlFor=""> select card</label>
        </div>
        <div>
          <img src={card1} alt="" width="50" />
          <img src={card2} alt="" width="50" />
          <img src={card3} alt="" width="50" />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Card Number</label>
        <CardNumberElement />
        <label htmlFor="">Expiry Date</label>
        <CardExpiryElement />
        <label htmlFor="">CVC</label>
        <CardCvcElement />
        <button className="btn btn-warning mt-3">Pay</button>
      </form>
      {paymentError && <p style={{ color: "red" }}>{paymentError.message}</p>}
      {success && <p style={{ color: "green" }}>"Your Payment Success!"</p>}
    </div>
  );
};
export default CheckoutForm;
