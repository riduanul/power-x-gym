import React from "react";
import "./WhyChooseUs.css";
import body from "../../../Images/body.png";
import strength from "../../../Images/strength.png";
import membership from "../../../Images/membership.png";

export default function WhyChooseUs() {
  return (
    <div className="container ">
      <h1 style={{ fontWeight: "800", textAlign: "center" }}>
        {" "}
        <span style={{ color: "orange" }}>WHY</span> CHOOSE US
      </h1>

      <div className="container mt-5  box-prop">
        <div className="box ">
          <img src={body} alt="" />
          <h4 style={{ fontWeight: "800", paddingTop: "50px" }}>
            FREE FITNESS TRAINING
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ab
            voluptate expedita nihil non minus.
          </p>
        </div>
        <div className="box">
          <img src={strength} alt="" />
          <h4 style={{ fontWeight: "800", paddingTop: "40px" }}>
            TONS OF CARDIO & STRENGTH
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ab
            voluptate expedita nihil non minus.
          </p>
        </div>
        <div className="box ">
          <img src={membership} alt="" />
          <h4 style={{ fontWeight: "800", paddingTop: "50px" }}>
            NO COMMITMENT MEMBERSHIP
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ab
            voluptate expedita nihil non minus.
          </p>
        </div>
      </div>
    </div>
  );
}
