import React from "react";
import "./Services.css";
import progression from "../../../Images/progression1.png";
import workout from "../../../Images/workout1.png";
import nutrition from "../../../Images/nutrition1.png";

export default function Services() {
  return (
    <div className="services mt-5 pt-5 mb-5 pb-5 container">
      <div className="progression">
        ="
        <img src={progression} alt="" className="mt-5" />
        <h1 style={{ fontWeight: "bolder" }}>PROGRESSION</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          beatae aliquam quo quasi voluptatum suscipit porro adipisci
        </p>
      </div>
      <div className="workout">
        <img src={workout} alt="" className="mt-5 mb-2" />
        <h1 style={{ fontWeight: "bolder", color: "orange" }}>WORKOUT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          beatae aliquam quo quasi voluptatum suscipit porro adipisci
        </p>
      </div>

      <div className="nutrition">
        <img src={nutrition} alt="" className="mt-5 mb-2" />
        <h1 style={{ fontWeight: "bolder" }}>NUTRITION</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          beatae aliquam quo quasi voluptatum suscipit porro adipisci
        </p>
      </div>
    </div>
  );
}
