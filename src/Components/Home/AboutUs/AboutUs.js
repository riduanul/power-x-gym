import React from "react";
import aboutUs from "../../../Images/aboutus.jpg";
export default function AboutUs() {
  return (
    <div
      className="mt-5  pt-5 container d-flex justify-content-center align-items-center"
      id="about"
    >
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img
            src={aboutUs}
            alt=""
            width="500"
            height="500"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 col-sm-12 mt-5 pt-5">
          <h1 className="text-muted">About Us</h1>
          <h1 style={{ color: "orange", fontWeight: "900" }}>
            WE ARE HERE TO DREAM!
          </h1>
          <h2 style={{ fontWeight: "800" }}>OUR TEAM IS HERE SERVE YOU.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            eligendi enim magnam. Nemo, corrupti soluta voluptate nostrum
            adipisci suscipit aperiam, a pariatur aspernatur nesciunt
            praesentium!
          </p>
        </div>
      </div>
    </div>
  );
}
