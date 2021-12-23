import React from "react";
import "./Training.css";
import training1 from "../../../Images/training1.png";
import training2 from "../../../Images/training2.jpg";

export default function Training() {
  return (
    <div className="container mt-5 mb-5 pt-5 pb-5">
      <h1 style={{ textAlign: "center", fontWeight: "900" }}>
        TRAINING <span style={{ color: "orange" }}>PROGRAMS</span>
      </h1>
      <div className="row mt-5">
        <div className="col-md-6 col-sm-12 training">
          <img src={training1} alt="" width="550" height="400" />
          <div className="bottom-right"> YOGA TRAINING SESISON --></div>
        </div>
        <div className="col-md-6 col-sm-12 training">
          <img src={training2} alt="" width="550" height="400" />
          <div className="bottom-left"> CARDIO TRAINING SESISON --> </div>
        </div>
      </div>
    </div>
  );
}
