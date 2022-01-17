import React from "react";
import "./Payment.css";
import CommonHeader from "../Home/Common/CommonHeader";
import Footer from "../Home/Footer/Footer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KI6z4Jmje3yJQm6lGWP3uty5784lnBSZGklVCxB3lrqS03gsGPfJ8nJ9cOqsHvNbVh3wwCXuSd9m3oEeNYNB41q00dTM6M0mo"
);

function Payment() {
  return (
    <div>
      {/* banner */}

      <div>
        <CommonHeader props={"PAYMENT"} />
      </div>
      {/* progress bar */}
      <div>
        <div className="container mb-5">
          <div className="progress-bar ">
            <div className="">
              <h1 className="circle">1</h1>
              <p>Personal Details</p>
            </div>
            <div className="">
              <h1 className="circle22">2</h1>
              <p>Payment Details</p>
            </div>

            <div className="">
              <h1 className="circle3">3</h1>
              <p>Membership</p>
            </div>
          </div>
          {/* <div className="dot">
            .....................................................................................................................
          </div>
          <div className="dot1">
            ......................................................................................................................
          </div> */}
        </div>
      </div>
      {/* payment gateway */}
      <div className="payment mt-5 p-5">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>

      {/* // footer / */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Payment;
