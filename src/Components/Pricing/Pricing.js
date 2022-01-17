import React from "react";
import CommonHeader from "../Home/Common/CommonHeader";
import Footer from "../Home/Footer/Footer";
import "./Pricing.css";
import { NavLink } from "react-router-dom";

export default function Pricing() {
  return (
    <div>
      {/* common header */}
      <div>
        <CommonHeader props={"PRICING PLAN"} />
      </div>
      {/* pricing */}
      <h1
        className="text-center"
        style={{ marginTop: "50px", fontWeight: "800" }}
      >
        CHOOSE THE OFFER{" "}
        <span style={{ color: "orange" }}> THAT SUITS YOU</span>{" "}
      </h1>
      <div className="pricing container">
        <div className="advance">
          {/* <div className="advance-text"> */}
          <h6 style={{ color: "orange" }}>BILLED MOTHLY</h6>
          <h2 style={{ fontWeight: "800" }}>ADVANCE PLAN</h2>
          <h1 style={{ color: "orange", fontWeight: "900" }}>$140</h1>
          <h5>Mobile-Optimized</h5>
          <h5>Best Hosting</h5>
          <h5>Free Custom</h5>
          <h5>Outstanding</h5>
          <h5>Happy Customers</h5>
          <NavLink to="/membership">
            <button className="purchase-btn">PURCHASE</button>
          </NavLink>
        </div>
        <div className="basic">
          <h6 style={{ color: "orange" }}>BILLED MOTHLY</h6>
          <h2 style={{ fontWeight: "800" }}>BASIC PLAN</h2>
          <h1 style={{ color: "orange", fontWeight: "900" }}>$120</h1>
          <h5>Mobile-Optimized</h5>
          <h5>Best Hosting</h5>
          <h5>Free Custom</h5>
          <h5>Outstanding</h5>
          <h5>Happy Customers</h5>
          <NavLink to="/membership">
            <button className="purchase-btn">PURCHASE</button>
          </NavLink>
        </div>
        <div className="beginer">
          <h6 style={{ color: "orange" }}>BILLED MOTHLY</h6>
          <h2 style={{ fontWeight: "800" }}>BEGINER PLAN</h2>
          <h1 style={{ color: "orange", fontWeight: "900" }}>$100</h1>
          <h5>Mobile-Optimized</h5>
          <h5>Best Hosting</h5>
          <h5>Free Custom</h5>
          <h5>Outstanding</h5>
          <h5>Happy Customers</h5>
          <NavLink to="/membership">
            <button className="purchase-btn">PURCHASE</button>
          </NavLink>
        </div>
      </div>
      {/* footer */}

      <Footer />
    </div>
  );
}
